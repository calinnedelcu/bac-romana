/* Pagina de start: foaia de examen, harta celor 100 de puncte, subiectele, calculatorul, calendarul. */
(function () {
  const S = window.Site;

  const SUBJ = [
    { id: 's1a', lab: 'I.A', pts: 30, c: 'var(--c1)', what: 'Înțelegerea textului', p: 'Cinci cerințe scurte despre un text nonliterar. Răspunzi în enunțuri complete.', chk: 5 },
    { id: 's1b', lab: 'I.B', pts: 20, c: 'var(--c2)', what: 'Textul argumentativ', p: 'O opinie, două argumente, textul dat și un exemplu. Minimum 150 de cuvinte.', chk: 8 },
    { id: 's2', lab: 'II', pts: 10, c: 'var(--c3)', what: 'Fragmentul literar', p: 'O cerință de analiză pe un fragment pe care nu l-ai citit. Minimum 50 de cuvinte.', chk: 5 },
    { id: 's3', lab: 'III', pts: 30, c: 'var(--c4)', what: 'Eseul', p: 'Trei repere despre o operă studiată: încadrare, temă, construcție. Minimum 400 de cuvinte.', chk: 8 }
  ];

  // harta punctelor: fiecare pătrățel e un punct
  const MAP = [
    { k: 'a', t: 'I.A · răspunsurile', p: 20, c: 'var(--c1)' },
    { k: 'b', t: 'I.A · enunț, exprimare, număr de cuvinte', p: 10, c: 'var(--c1)', r: 1 },
    { k: 'c', t: 'I.B · opinie, argumente, textul dat, concluzie', p: 14, c: 'var(--c2)' },
    { k: 'd', t: 'I.B · conectori, limbă, ortografie, așezare, cuvinte', p: 6, c: 'var(--c2)', r: 1 },
    { k: 'e', t: 'II · comentariul', p: 6, c: 'var(--c3)' },
    { k: 'f', t: 'II · limbă, logică, ortografie, punctuație', p: 4, c: 'var(--c3)', r: 1 },
    { k: 'g', t: 'III · cele trei repere', p: 18, c: 'var(--c4)' },
    { k: 'h', t: 'III · redactarea eseului', p: 12, c: 'var(--c4)', r: 1 },
    { k: 'i', t: 'Din oficiu', p: 10, c: 'var(--muted)' }
  ];

  const RULES = [
    ['✓ corect = puncte', 'Orice rezolvare corectă se punctează', 'Exemplele din barem nu sunt singurele răspunsuri acceptate.'],
    ['1 p sau 0 p', 'Fără fracțiuni de punct', 'Fiecare rând din barem trebuie bifat clar, nu „cam acoperit”.'],
    ['gol = 0 p', 'Nu lăsa nimic necompletat la I.A', 'Enunțul și exprimarea se punctează chiar dacă răspunsul nu e corect.'],
    ['< 400 → −12 p', 'Minimul de cuvinte e condiție', 'Sub 50 (II) sau 400 (III) pierzi tot punctajul de redactare.'],
    ['alături = 0 p', 'Textul trebuie să dezvolte subiectul', 'Un eseu bun despre altceva decât cere enunțul nu ia redactarea.']
  ];

  const progress = (key, n) => { const st = S.store.get('chk:' + key, {}); return Object.values(st).filter(Boolean).length / n; };

  function hero() {
    const d = S.daysTo(S.EXAM);
    const last = S.store.get('last', null);
    return `<section class="home-hero">
      <div>
        <div class="eyebrow">Proba E.a) · profil real · 14 iunie 2027</div>
        <h1>Bacul la română, luat <span class="circled">pe puncte<svg viewBox="0 0 300 110" preserveAspectRatio="none" aria-hidden="true"><path d="M18 62C12 26 92 8 160 9c72 1 128 20 124 52-4 30-78 44-150 41C64 99 10 86 20 50"/></svg></span>.</h1>
        <p class="lead">Ce cere fiecare subiect, cum îl punctează baremul rând cu rând și ce scrii ca să iei tot. Fișele de operă și constructorul de eseu îți dau conținutul gata așezat pe repere.</p>
        <div class="hero-cta">
          <a class="btn primary" href="#/s1a">Începe cu Subiectul I ${S.icon('arrow')}</a>
          <button class="btn" data-search>${S.icon('search')} Caută o operă sau o cerință</button>
        </div>
        ${last ? `<a class="continue" href="${S.esc(last.hash)}" style="margin-top:18px">${S.icon('book')}<span><small>Continuă de unde ai rămas</small><b>${S.esc(last.title)}</b></span>${S.icon('arrow')}</a>` : ''}
      </div>
      <div class="exam-sheet" aria-label="Structura probei">
        <div class="sh-head">Examenul național de bacalaureat 2027<b>Proba E.a) · Limba și literatura română</b>Filiera teoretică, profilul real · 3 ore</div>
        <a class="row" href="#/s1a"><span>Subiectul I · A</span><span class="dots"></span><span class="v">30</span></a>
        <a class="row" href="#/s1b"><span>Subiectul I · B</span><span class="dots"></span><span class="v">20</span></a>
        <a class="row" href="#/s2"><span>Subiectul al II-lea</span><span class="dots"></span><span class="v">10</span></a>
        <a class="row" href="#/s3"><span>Subiectul al III-lea</span><span class="dots"></span><span class="v">30</span></a>
        <div class="row"><span>Din oficiu</span><span class="dots"></span><span class="v">10</span></div>
        <div class="row total"><span>Total</span><span class="dots"></span><span class="v">100</span></div>
        <div class="note">nota = total : 10</div>
        <div class="stamp" title="Zile până la proba scrisă"><div><span>mai sunt</span><b>${d}</b><span>zile până la<br>14 iunie</span></div></div>
      </div>
    </section>`;
  }

  function pointsMap() {
    let cells = '';
    MAP.forEach((m) => { for (let i = 0; i < m.p; i++) cells += `<i class="${m.r ? 'r' : ''}" data-k="${m.k}" style="--sc:${m.c}"></i>`; });
    return `<div class="pmap">
      <div><div class="cells" id="cells" role="img" aria-label="100 de puncte, împărțite pe subiecte">${cells}</div>
        <p class="small muted" style="margin:12px 0 0">Fiecare pătrățel e un punct. Cele hașurate se dau pe formă.</p></div>
      <div class="pmap-legend" id="pmap-legend">${MAP.map((m) => `<button data-k="${m.k}"><i class="sw${m.r ? ' r' : ''}" style="--sc:${m.c}"></i><span>${m.t}</span><b>${m.p}</b></button>`).join('')}</div>
    </div>`;
  }

  function subjects() {
    return `<div class="subjects">${SUBJ.map((s) => {
      const pr = progress(s.id, s.chk);
      return `<a class="subj" href="#/${s.id}" style="--sc:${s.c}">
        <span class="lab">${s.lab}</span><span class="pts">${s.pts} p</span>
        <h3>${s.what}</h3><p>${s.p}</p>
        <span class="foot"><span>${pr ? `lista bifată ${Math.round(pr * 100)}%` : 'neînceput'}</span><span class="meter"><i style="width:${pr * 100}%"></i></span></span>
      </a>`;
    }).join('')}</div>`;
  }

  function features() {
    const n = (window.OPERE || []).length;
    const k = Object.values(S.store.get('known', {})).filter(Boolean).length;
    const f = (href, ic, c, b, s) => `<a class="feat" href="${href}" style="--fc:var(--${c});--fc-soft:var(--${c}-soft)"><span class="fi">${S.icon(ic)}</span><span><b>${b}</b><span>${s}</span></span></a>`;
    return `<div class="feature">
      ${f('#/opere', 'book', 'c4', 'Fișe de operă', `${n} opere scrise pe repere · ${k} știute`)}
      ${f('#/constructor', 'pen', 'c2', 'Constructorul de eseu', 'Alegi opera și cerința, primești eseul pe repere, cu punctele')}
      ${f('#/exersare', 'timer', 'c3', 'Exersează cu cronometru', 'Scrii ca la examen; site-ul numără cuvintele și verifică baremul')}
    </div>`;
  }

  function calc() {
    const rows = [['I.A', 30, 's1a', 'var(--c1)'], ['I.B', 20, 's1b', 'var(--c2)'], ['II', 10, 's2', 'var(--c3)'], ['III', 30, 's3', 'var(--c4)']];
    const st = S.store.get('calc', { s1a: 24, s1b: 16, s2: 7, s3: 22 });
    return `<div class="card" id="calc">
      ${rows.map(([l, max, k, c]) => `<div class="calc-row" style="--accent:${c}"><label for="r-${k}">${l}<span>din ${max}</span></label>
        <input type="range" id="r-${k}" min="0" max="${max}" value="${Math.min(st[k] || 0, max)}" data-k="${k}"><b id="v-${k}">${st[k] || 0}</b></div>`).join('')}
      <div class="grade"><span class="big" id="g-nota">–</span><span class="muted" id="g-det"></span></div>
    </div>`;
  }

  function timePlan() {
    const parts = [['Citire + I.A', 25, 'var(--c1)'], ['I.B', 30, 'var(--c2)'], ['II', 20, 'var(--c3)'], ['III', 85, 'var(--c4)'], ['Recitire', 20, 'var(--ink-2)']];
    return `<div class="timebar">${parts.map(([n, m, c]) => `<div style="flex:${m};--tc:${c}">${n}<small>${m} min</small></div>`).join('')}</div>`;
  }

  S.page({
    id: 'acasa', title: 'Proba pe scurt', wide: true,
    nav: { label: 'Proba pe scurt', color: 'var(--pen)', badge: 'Ro' },
    render() {
      const sim = S.daysTo(S.SIM);
      return `
      ${hero()}

      <h2 id="puncte">Unde sunt cele 100 de puncte</h2>
      <p class="lead" style="margin-top:0">32 din cele 90 de puncte se dau pe formă: enunțuri complete, limbă literară, ortografie, punctuație, conectori, număr minim de cuvinte, așezare în pagină. Sunt cele mai sigure puncte din examen.</p>
      ${pointsMap()}

      <h2 id="subiecte">Subiectele</h2>
      ${subjects()}

      <h2 id="unelte">Pentru eseu și antrenament</h2>
      ${features()}

      <h2 id="reguli">Regulile din barem care contează peste tot</h2>
      <div class="rules">${RULES.map(([h, b, p]) => `<div class="rule"><span class="hand">${h}</span><b>${b}</b><p>${p}</p></div>`).join('')}</div>

      <div class="grid g2" style="margin-top:3rem;gap:28px;align-items:start">
        <div>
          <h2 id="calculator" style="margin-top:0">Calculator de notă</h2>
          <p class="muted">Pune punctajele de la o lucrare corectată după barem.</p>
          ${calc()}
        </div>
        <div>
          <h2 id="calendar" style="margin-top:0">Calendarul 2027</h2>
          <div class="cal">
            <div><b>22 martie</b><span>Simularea probei scrise la română · mai sunt ${sim} zile</span></div>
            <div><b>12–14 aprilie</b><span>Proba A, comunicare orală în limba română</span></div>
            <div class="main"><b>14 iunie</b><span>Proba scrisă la limba și literatura română, E.a)</span></div>
            <div><b>23 iunie</b><span>Rezultatele inițiale; contestații pe 23 (14:00–18:00) și 24–25 iunie</span></div>
            <div><b>1 iulie</b><span>Rezultatele finale</span></div>
            <div><b>9 august</b><span>Proba scrisă la română, a doua sesiune</span></div>
          </div>
        </div>
      </div>

      <h2 id="timp">Cum îți împarți cele trei ore</h2>
      <p class="muted" style="max-width:66ch">O propunere: cel mai mult timp merge la eseu, unde sunt 30 de puncte și cel mai mult de scris. Ultimele 20 de minute sunt pentru recitire, unde prinzi greșelile de ortografie și punctuație.</p>
      ${timePlan()}
      <p class="small muted">Programa care se aplică în 2027 este anexa 2 la OMEN 4.923/2013, aceeași ca în ultimii ani, deci structura de mai sus rămâne valabilă. Lista de conținuturi pentru simulare se stabilește separat și poate fi mai scurtă.</p>
      `;
    },
    mount(root) {
      const upd = () => {
        const v = {}; let sum = 10;
        root.querySelectorAll('#calc input').forEach((i) => { v[i.dataset.k] = +i.value; sum += +i.value; root.querySelector('#v-' + i.dataset.k).textContent = i.value; });
        S.store.set('calc', v);
        root.querySelector('#g-nota').textContent = (sum / 10).toFixed(2).replace('.', ',');
        const lost = 100 - sum;
        root.querySelector('#g-det').textContent = `${sum} de puncte din 100, cu cele 10 din oficiu${lost ? ` · pierdute: ${lost}` : ''}`;
      };
      root.querySelectorAll('#calc input').forEach((i) => i.addEventListener('input', upd));
      upd();
      const cells = root.querySelector('#cells'), leg = root.querySelector('#pmap-legend');
      const hl = (k) => {
        cells.classList.toggle('dim', !!k);
        cells.querySelectorAll('i').forEach((c) => c.classList.toggle('on', c.dataset.k === k));
        leg.querySelectorAll('button').forEach((b) => b.classList.toggle('on', b.dataset.k === k));
      };
      leg.addEventListener('mouseover', (e) => { const b = e.target.closest('[data-k]'); if (b) hl(b.dataset.k); });
      leg.addEventListener('focusin', (e) => { const b = e.target.closest('[data-k]'); if (b) hl(b.dataset.k); });
      leg.addEventListener('mouseleave', () => hl(null));
      cells.addEventListener('mouseover', (e) => { const c = e.target.closest('[data-k]'); if (c) hl(c.dataset.k); });
      cells.addEventListener('mouseleave', () => hl(null));
      leg.addEventListener('click', (e) => { const b = e.target.closest('[data-k]'); if (b) hl(b.classList.contains('on') && cells.classList.contains('dim') ? b.dataset.k : b.dataset.k); });
    }
  });
})();
