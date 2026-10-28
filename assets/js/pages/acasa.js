/* Pagina de start: structura probei, unde sunt punctele, calculator, calendar. */
(function () {
  const S = window.Site;

  const SUBJ = [
    { id: 's1a', name: 'Subiectul I.A', what: 'Înțelegerea unui text la prima vedere', pts: 30, c: 'var(--c1)',
      p: 'Cinci cerințe scurte despre un text nonliterar (jurnal, scrisoare, memorii, articol). Răspunzi în enunțuri.', meta: ['5 × 6 p', 'la cerința 5: 30–50 de cuvinte'] },
    { id: 's1b', name: 'Subiectul I.B', what: 'Textul argumentativ', pts: 20, c: 'var(--c2)',
      p: 'Îți spui opinia despre o temă pornită din același text și o susții cu două argumente.', meta: ['minimum 150 de cuvinte'] },
    { id: 's2', name: 'Subiectul al II-lea', what: 'Un fragment literar la prima vedere', pts: 10, c: 'var(--c3)',
      p: 'O singură cerință de analiză pe un fragment de proză, poezie sau teatru pe care nu l-ai citit.', meta: ['minimum 50 de cuvinte', '6 p conținut + 4 p redactare'] },
    { id: 's3', name: 'Subiectul al III-lea', what: 'Eseul despre o operă studiată', pts: 30, c: 'var(--c4)',
      p: 'Eseu structurat pe trei repere despre un text studiat la clasă: încadrare, temă, elemente de construcție.', meta: ['minimum 400 de cuvinte', '18 p conținut + 12 p redactare'] }
  ];

  function tiles() {
    return `<div class="tiles">${SUBJ.map((s) => `
      <a class="tile" href="#/${s.id}" style="--tc:${s.c}">
        <div class="t-top"><span class="t-name">${s.name}</span><span class="t-pts">${s.pts}<small> p</small></span></div>
        <div class="small muted" style="font-weight:600;margin-top:2px">${s.what}</div>
        <p>${s.p}</p>
        <div class="t-meta">${s.meta.map((m) => `<span class="chip">${m}</span>`).join('')}</div>
      </a>`).join('')}</div>`;
  }

  function wholeBar() {
    return S.pbar([
      { t: 'I.A — răspunsurile propriu-zise', p: 20, c: 'var(--c1)' },
      { t: 'I.A — enunț, exprimare, număr de cuvinte', p: 10, c: 'var(--c1)', r: true },
      { t: 'I.B — opinie, argumente, valorificarea textului, concluzie', p: 14, c: 'var(--c2)' },
      { t: 'I.B — conectori, limbă, ortografie, așezare, număr de cuvinte', p: 6, c: 'var(--c2)', r: true },
      { t: 'II — conținutul comentariului', p: 6, c: 'var(--c3)' },
      { t: 'II — limbă, logică, ortografie, punctuație', p: 4, c: 'var(--c3)', r: true },
      { t: 'III — cele trei repere ale eseului', p: 18, c: 'var(--c4)' },
      { t: 'III — redactarea eseului', p: 12, c: 'var(--c4)', r: true },
      { t: 'Din oficiu', p: 10, c: 'var(--muted)' }
    ]);
  }

  function calc() {
    const rows = [['I.A', 30, 's1a'], ['I.B', 20, 's1b'], ['II', 10, 's2'], ['III', 30, 's3']];
    const st = S.store.get('calc', { s1a: 24, s1b: 16, s2: 7, s3: 22 });
    return `<div class="card" id="calc">
      ${rows.map(([l, max, k]) => `<div class="calc-row"><label for="r-${k}"><b style="text-align:left">${l}</b> <span class="muted small">max ${max}</span></label>
        <input type="range" id="r-${k}" min="0" max="${max}" value="${Math.min(st[k] || 0, max)}" data-k="${k}"><b id="v-${k}">${st[k] || 0}</b></div>`).join('')}
      <div class="grade"><span class="big" id="g-nota">–</span><span class="muted" id="g-det"></span></div>
    </div>`;
  }

  function timePlan() {
    const parts = [
      ['Citire + I.A', 25, 'var(--c1)'], ['I.B', 30, 'var(--c2)'], ['II', 20, 'var(--c3)'],
      ['III', 85, 'var(--c4)'], ['Recitire', 20, 'var(--muted)']
    ];
    return `<div class="timebar">${parts.map(([n, m, c]) => `<div style="flex:${m};--tc:${c}">${n}<small>${m} min</small></div>`).join('')}</div>`;
  }

  S.page({
    id: 'acasa', title: 'Acasă',
    nav: { label: 'Proba pe scurt', color: 'var(--ink-2)', badge: '★' },
    render() {
      const sim = S.daysTo(S.SIM);
      return `
      <div class="page-head">
        <div class="kicker">Proba E.a) · profil real · 14 iunie 2027</div>
        <h1>Bacul la română, luat pe puncte</h1>
        <p class="lead">Pentru fiecare subiect găsești ce poate cere, cum îl punctează baremul, rând cu rând, și ce scrii ca să iei tot. Fișele de operă și constructorul de eseu îți dau conținutul gata organizat pe repere.</p>
      </div>

      <div class="grid g4" style="margin-top:22px">
        <div class="stat"><b>3 ore</b><span>timp de lucru</span></div>
        <div class="stat"><b>90 + 10</b><span>puncte, 10 din oficiu</span></div>
        <div class="stat"><b>total ÷ 10</b><span>așa se calculează nota</span></div>
        <div class="stat"><b>${sim}</b><span>zile până la simulare (22 martie)</span></div>
      </div>

      <h2 id="subiecte">Cele trei subiecte</h2>
      <p>Toate subiectele sunt obligatorii. Primele două pornesc de la texte pe care le vezi prima dată, al treilea de la o operă studiată.</p>
      ${tiles()}

      <h2 id="puncte">Unde sunt punctele</h2>
      <p>Barele hașurate sunt punctele de formă: enunțuri complete, limbă literară, ortografie, punctuație, conectori, număr minim de cuvinte, așezare în pagină. Pune cursorul pe o bară ca să vezi ce acoperă.</p>
      ${wholeBar()}
      ${S.callout('key', `<p><strong>32 din cele 90 de puncte se dau pe formă</strong>, nu pe ce știi despre text. Le iei cu o lucrare îngrijită, scrisă în enunțuri complete, cu numărul minim de cuvinte respectat și fără greșeli de scriere. Sunt cele mai sigure puncte din examen.</p>`)}

      <h2 id="reguli">Regulile din barem care contează peste tot</h2>
      <ul class="steps">
        <li><strong>Se punctează orice rezolvare corectă.</strong> Exemplele din barem („de exemplu: …”) nu sunt singurele răspunsuri acceptate. Un răspuns diferit, dar corect și justificat, ia punctajul.</li>
        <li><strong>Nu se dau fracțiuni de punct</strong> și nici punctaje intermediare în afara celor scrise în barem. De aceea fiecare rând de barem trebuie bifat clar, nu „cam acoperit”.</li>
        <li><strong>La I.A nu lăsa nimic necompletat.</strong> Punctul pentru enunț și cel pentru corectitudinea exprimării se acordă „chiar dacă răspunsul nu este corect sau complet”, cu condiția să dezvolte subiectul. Un răspuns încercat ia cel puțin 2 puncte din 6; un spațiu gol ia 0.</li>
        <li><strong>Numărul minim de cuvinte este o condiție.</strong> La II, punctele de redactare (4) se dau doar peste 50 de cuvinte; la III, cele 12 puncte de redactare se dau doar peste 400 de cuvinte. Sub prag pierzi tot blocul de redactare.</li>
        <li><strong>Textul trebuie „să dezvolte subiectul propus”.</strong> Un eseu frumos despre altceva decât cere enunțul, sau un text argumentativ care nu răspunde la întrebare, nu ia punctele de redactare.</li>
      </ul>

      <h2 id="calculator">Calculator de notă</h2>
      <p>Pune punctajele de la o lucrare corectată după barem și vezi nota. Valorile se păstrează în browser.</p>
      ${calc()}

      <h2 id="timp">Cum îți împarți cele trei ore</h2>
      <p>O propunere, nu o regulă: cel mai mult timp merge la eseu, unde sunt 30 de puncte și cel mai mult de scris. Ultimele 20 de minute sunt pentru recitire, unde prinzi greșelile de ortografie și punctuație.</p>
      ${timePlan()}
      <p class="small muted">Ordinea în care rezolvi subiectele e la alegerea ta. Mulți încep cu eseul, cât sunt odihniți, și termină cu I.A, care cere mai puțin timp. Important e să nu rămâi fără timp la eseu.</p>

      <h2 id="calendar">Calendarul 2027</h2>
      <div class="tbl-wrap"><table>
        <tr><th>Data</th><th>Ce se întâmplă</th></tr>
        <tr><td>22 martie 2027</td><td>Simularea probei scrise la română</td></tr>
        <tr><td>12–14 aprilie 2027</td><td>Proba A, competențe de comunicare orală în limba română</td></tr>
        <tr><td><strong>14 iunie 2027</strong></td><td><strong>Proba scrisă la limba și literatura română, E.a)</strong></td></tr>
        <tr><td>23 iunie 2027</td><td>Rezultatele inițiale; contestațiile se depun pe 23 (14:00–18:00) și 24–25 iunie</td></tr>
        <tr><td>1 iulie 2027</td><td>Rezultatele finale</td></tr>
        <tr><td>9 august 2027</td><td>Proba scrisă la română în a doua sesiune</td></tr>
      </table></div>
      <p class="small muted">Programa care se aplică în 2027 este cea din anexa 2 la OMEN 4.923/2013, aceeași ca în ultimii ani, deci structura probei de mai sus rămâne valabilă. Lista de conținuturi pentru simulare se stabilește separat și poate fi mai scurtă.</p>
      `;
    },
    mount(root) {
      const upd = () => {
        const v = {}; let sum = 10;
        root.querySelectorAll('#calc input').forEach((i) => { v[i.dataset.k] = +i.value; sum += +i.value; root.querySelector('#v-' + i.dataset.k).textContent = i.value; });
        S.store.set('calc', v);
        const nota = (sum / 10).toFixed(2).replace('.', ',');
        root.querySelector('#g-nota').textContent = nota;
        const lost = 100 - sum;
        root.querySelector('#g-det').textContent = `${sum} de puncte din 100, cu cele 10 din oficiu${lost ? ` · pierdute: ${lost}` : ''}`;
      };
      root.querySelectorAll('#calc input').forEach((i) => i.addEventListener('input', upd));
      upd();
    }
  });
})();
