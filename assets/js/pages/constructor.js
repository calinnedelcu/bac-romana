/* Constructorul de eseu: tip de cerință + operă -> planul eseului pe repere, din fișă. */
(function () {
  const S = window.Site;
  const C = 'var(--c4)';

  // Cerințele, pe tipuri. Reperele sunt formulate ca în subiectele oficiale.
  const TIPURI = {
    narativ: {
      label: 'Particularitățile unui text narativ', gen: ['epic'],
      cerinta: (o) => `Redactează un eseu de minimum 400 de cuvinte, în care să prezinți particularități ale unui text narativ studiat, aparținând lui ${o ? o.autor : '[autor]'}.`,
      repere: ['evidențierea a două trăsături care fac posibilă încadrarea textului narativ studiat într-o perioadă, într-un curent cultural/literar sau într-o orientare tematică;', 'comentarea a două episoade/secvențe semnificative pentru tema textului narativ studiat;', 'analiza a două elemente de structură, de compoziție și/sau de limbaj, relevante pentru textul narativ studiat (de exemplu: acțiune, conflict, relații temporale și spațiale, incipit, final, tehnici narative, instanțe ale comunicării narative, perspectivă narativă, registre stilistice, limbaj etc.).']
    },
    poetic: {
      label: 'Particularitățile unui text poetic', gen: ['liric'],
      cerinta: (o) => `Redactează un eseu de minimum 400 de cuvinte, în care să prezinți particularități ale unui text poetic studiat, aparținând lui ${o ? o.autor : '[autor]'}.`,
      repere: ['evidențierea a două trăsături care fac posibilă încadrarea textului poetic într-o perioadă, într-un curent cultural/literar sau într-o orientare tematică;', 'comentarea a două imagini/idei poetice semnificative pentru tema textului poetic;', 'analiza a două elemente de compoziție și/sau de limbaj, relevante pentru textul poetic (de exemplu: titlu, incipit, relații de opoziție și de simetrie, motive poetice, figuri semantice, elemente de prozodie etc.).']
    },
    dramatic: {
      label: 'Particularitățile unui text dramatic', gen: ['dramatic'],
      cerinta: (o) => `Redactează un eseu de minimum 400 de cuvinte, în care să prezinți particularități ale unui text dramatic studiat${o ? `, aparținând lui ${o.autor}` : ''}.`,
      repere: ['evidențierea a două trăsături care fac posibilă încadrarea textului dramatic studiat într-o perioadă, într-un curent cultural/literar sau într-o orientare tematică;', 'comentarea a două scene/secvențe semnificative pentru tema textului dramatic studiat;', 'analiza a două componente de structură și/sau de limbaj, relevante pentru textul dramatic studiat (de exemplu: acțiune, personaj, notațiile autorului, conflict dramatic, registre stilistice, limbaj, act, scenă etc.).']
    },
    personaj: {
      label: 'Construcția unui personaj', gen: ['epic', 'dramatic'], need: 'personaje',
      cerinta: (o) => o && o.gen === 'dramatic'
        ? 'Redactează un eseu de minimum 400 de cuvinte, în care să prezinți particularități de construcție a unui personaj dintr-un text dramatic studiat.'
        : `Redactează un eseu de minimum 400 de cuvinte, în care să prezinți particularități de construcție a unui personaj într-un text narativ studiat${o ? `, aparținând lui ${o.autor}` : ''}.`,
      repere: ['prezentarea statutului social, psihologic, moral etc. al personajului ales;', 'evidențierea unei trăsături a personajului ales, prin două episoade/secvențe comentate;', 'analiza a două elemente de structură, de compoziție și/sau de limbaj ale textului narativ studiat, relevante pentru construcția personajului ales (de exemplu: acțiune, conflict, modalități de caracterizare, relații temporale și spațiale, incipit, final, tehnici narative, instanțe ale comunicării narative, registre stilistice, limbaj etc.).']
    },
    relatie: {
      label: 'Relația dintre două personaje', gen: ['epic', 'dramatic'], need: 'relatii',
      cerinta: (o) => `Redactează un eseu de minimum 400 de cuvinte, în care să prezinți relația dintre două personaje dintr-un text ${o && o.gen === 'dramatic' ? 'dramatic' : 'narativ'} studiat${o ? `, aparținând lui ${o.autor}` : ''}.`,
      repere: ['prezentarea statutului social, psihologic, moral etc. al fiecăruia dintre cele două personaje;', 'evidențierea relației dintre cele două personaje, prin două episoade/secvențe comentate;', 'analiza a două elemente de structură, de compoziție și/sau de limbaj ale textului studiat, semnificative pentru relația dintre personaje (de exemplu: acțiune, conflict, modalități de caracterizare, relații temporale și spațiale, incipit, final, tehnici narative, instanțe ale comunicării narative, registre stilistice, limbaj etc.).'],
      note: 'În formatul actual, acest tip de eseu a fost dat la profilul uman. Programa de la real nu îl exclude, iar materialul e aproape același ca la eseul despre personaj.'
    }
  };
  S.TIPURI = TIPURI;

  const st = () => S.store.get('cons', { tip: 'narativ', op: null, pick: {} });
  const save = (s) => S.store.set('cons', s);

  function eligible(tip) {
    const T = TIPURI[tip];
    return S.opere().filter((o) => T.gen.includes(o.gen) && (!T.need || (o[T.need] && o[T.need].length)));
  }

  const pt = (n, r) => `<span class="pt${r ? ' r' : ''}">${n}</span>`;
  const f = S.fmt;

  // butoane de alegere (cel mult `max` selectate)
  function picker(key, items, label, max, s) {
    const sel = s.pick[key] || items.slice(0, max).map((_, i) => i);
    s.pick[key] = sel;
    if (items.length <= max) return '';
    return `<div class="pick" data-key="${key}" data-max="${max}">${items.map((it, i) =>
      `<button data-i="${i}" aria-pressed="${sel.includes(i)}">${S.esc(label(it))}</button>`).join('')}</div>`;
  }
  const chosen = (key, items, s, max) => (s.pick[key] || items.slice(0, max).map((_, i) => i)).filter((i) => i < items.length).map((i) => items[i]);

  function par(title, pts, body, extra) {
    return `<div class="plan-par"><div class="plan-par-h"><b>${title}</b>${pts ? `<span class="chip c4">${pts}</span>` : ''}</div><div class="plan-par-b">${extra || ''}<div class="ptext">${body}</div></div></div>`;
  }

  function planNarPoetDram(o, tip, s) {
    const inc = o.incadrare || {};
    const tr = inc.trasaturi || [];
    const sv = o.secvente || [];
    const el = (o.elemente || []).slice();
    if (o.structura) el.push({ nume: 'Structura', analiza: o.structura, relevanta: '' });
    if (o.prozodie) el.push({ nume: 'Prozodia', analiza: o.prozodie, relevanta: '' });
    const k = o.id + ':' + tip;
    const T = chosen(k + ':tr', tr, s, 2), V = chosen(k + ':sv', sv, s, 2), E = chosen(k + ':el', el, s, 2);
    const poem = o.gen === 'liric';
    return [
      par('Introducere', '', `<p>${f(o.introducere)}</p>`),
      par('Reperul 1 · Încadrarea', '6 p',
        `<p>${f(inc.eticheta && /[.!]$/.test(inc.eticheta.trim()) ? inc.eticheta : `Textul se încadrează în ${inc.eticheta}.`)} ${pt('+2')}</p>` +
        T.map((t) => `<p>${f(t.nume)} ${pt('+1')} ${f(t.dovada)} ${pt('+1')}</p>`).join(''),
        picker(k + ':tr', tr, (t) => t.nume.replace(/\*/g, '').slice(0, 48) + (t.nume.length > 48 ? '…' : ''), 2, s)),
      par(`Reperul 2 · Tema și ${poem ? 'două imagini poetice' : 'două ' + (o.gen === 'dramatic' ? 'scene' : 'episoade')}`, '6 p',
        `<p>${f(o.tema)} ${pt('+2')}</p>` + V.map((v) => `<p>${f(v.comentariu)} ${pt('+2')}</p>`).join(''),
        picker(k + ':sv', sv, (v) => v.titlu.replace(/\*/g, '').slice(0, 44) + (v.titlu.length > 44 ? '…' : ''), 2, s)),
      par('Reperul 3 · Două elemente de construcție', '6 p',
        E.map((e) => `<p>${f(e.analiza)}${e.relevanta ? ' ' + f(e.relevanta) : ''} ${pt(e.relevanta ? '+3' : '+2')}</p>`).join('') +
        (E.some((e) => !e.relevanta) ? `<p class="small muted" style="font-family:var(--font)">Adaugă o frază despre relevanța pentru temă, altfel elementul ia 2 p în loc de 3.</p>` : ''),
        picker(k + ':el', el, (e) => e.nume.replace(/\*/g, ''), 2, s)),
      par('Încheiere', '', `<p>${f(o.incheiere)}</p>`)
    ].join('');
  }

  function planPersonaj(o, s) {
    const P = o.personaje || [];
    const k = o.id + ':personaj';
    const pi = (s.pick[k + ':p'] || [0])[0] || 0;
    const p = P[Math.min(pi, P.length - 1)];
    const pp = P.length > 1 ? `<div class="pick" data-key="${k}:p" data-max="1">${P.map((x, i) => `<button data-i="${i}" aria-pressed="${i === pi}">${S.esc(x.nume)}</button>`).join('')}</div>` : '';
    const trs = p.trasaturi || [];
    const kk = k + ':' + pi;
    const ti = (s.pick[kk + ':t'] || [0])[0] || 0;
    const t = trs[Math.min(ti, trs.length - 1)] || { trasatura: '', episoade: [] };
    const tp = trs.length > 1 ? `<div class="pick" data-key="${kk}:t" data-max="1">${trs.map((x, i) => `<button data-i="${i}" aria-pressed="${i === ti}">${S.esc(x.trasatura)}</button>`).join('')}</div>` : '';
    const cons = p.constructie || [];
    const E = chosen(kk + ':el', cons, s, 2);
    const stt = p.statut || {};
    return [
      par('Introducere', '', `<p>${f(o.introducere)}</p>${p.tip ? `<p>${f(p.nume)} este ${f(p.tip.replace(/^personaj/, 'un personaj'))}.</p>` : ''}`, pp),
      par('Reperul 1 · Statutul personajului', '6 p', ['social', 'psihologic', 'moral'].filter((x) => stt[x]).map((x) => `<p>${f(stt[x])}</p>`).join('') +
        `<p class="small muted" style="font-family:var(--font)">Statutul se punctează global: 6 p dacă e prezentat adecvat și nuanțat, 3 p dacă e ezitant. Atinge toate trei laturile.</p>`),
      par('Reperul 2 · O trăsătură, prin două episoade', '6 p',
        `<p>O trăsătură definitorie a personajului este ${f(t.trasatura)}. ${pt('+2')}</p>` + (t.episoade || []).slice(0, 2).map((e) => `<p>${f(e.comentariu)} ${pt('+2')}</p>`).join(''), tp),
      par('Reperul 3 · Două elemente de construcție a personajului', '6 p',
        E.map((e) => `<p>${f(e.analiza)} ${f(e.relevanta || '')} ${pt(e.relevanta ? '+3' : '+2')}</p>`).join(''),
        picker(kk + ':el', cons, (e) => e.nume.replace(/\*/g, ''), 2, s)),
      par('Încheiere', '', `<p>${f(o.incheiere)}</p>`)
    ].join('');
  }

  function planRelatie(o, s) {
    const RL = o.relatii || [];
    const k = o.id + ':relatie';
    const ri = (s.pick[k + ':r'] || [0])[0] || 0;
    const r = RL[Math.min(ri, RL.length - 1)];
    const rp = RL.length > 1 ? `<div class="pick" data-key="${k}:r" data-max="1">${RL.map((x, i) => `<button data-i="${i}" aria-pressed="${i === ri}">${S.esc(x.intre.join(' și '))}</button>`).join('')}</div>` : '';
    const kk = k + ':' + ri;
    const SC = chosen(kk + ':sc', r.scene || [], s, 2);
    const E = chosen(kk + ':el', r.elemente || [], s, 2);
    const pers = (o.personaje || []).filter((p) => r.intre.some((n) => p.nume.indexOf(n) === 0 || n.indexOf(p.nume) === 0));
    return [
      par('Introducere', '', `<p>${f(o.introducere)}</p>`, rp),
      par('Reperul 1 · Statutul fiecăruia dintre cele două personaje', '2 × 3 p',
        `<p>${f(r.statut_initial)}</p>` +
        pers.filter((p) => p.statut).map((p) => `<p>${f(p.statut.social || '')} ${f(p.statut.psihologic || '')} ${f(p.statut.moral || '')} ${pt('+3')}</p>`).join('') +
        (() => {
          const lipsa = r.intre.filter((n) => !pers.some((p) => p.statut && (p.nume.indexOf(n) === 0 || n.indexOf(p.nume) === 0)));
          return lipsa.length ? `<p class="small muted" style="font-family:var(--font)">Baremul dă câte 3 p pentru statutul fiecărui personaj. Pentru ${lipsa.map(S.esc).join(' și ')}, adaugă cu cuvintele tale o frază despre statutul social, una despre cel psihologic și una despre cel moral; pornește de la paragraful de mai sus și de la scenele din fișă.</p>` : '';
        })()),
      par('Reperul 2 · Relația, prin două episoade', '6 p', `<p>${f(r.statut_initial)} ${pt('+2')}</p>` + SC.map((e) => `<p>${f(e.comentariu)} ${pt('+2')}</p>`).join(''),
        picker(kk + ':sc', r.scene || [], (e) => e.titlu.replace(/\*/g, ''), 2, s)),
      par('Reperul 3 · Două elemente de construcție', '6 p', E.map((e) => `<p>${f(e.analiza)} ${f(e.relevanta || '')} ${pt(e.relevanta ? '+3' : '+2')}</p>`).join(''),
        picker(kk + ':el', r.elemente || [], (e) => e.nume.replace(/\*/g, ''), 2, s)),
      par('Încheiere', '', `${r.evolutie ? `<p>${f(r.evolutie)}</p>` : ''}<p>${f(o.incheiere)}</p>`)
    ].join('');
  }

  function render(arg) {
    const s = st();
    if (arg) { const [id, tip] = arg.split(':'); if (S.opera(id)) { s.op = id; if (tip && TIPURI[tip]) s.tip = tip; } }
    let el = eligible(s.tip);
    if (!el.find((o) => o.id === s.op)) {
      // dacă opera aleasă nu se potrivește tipului, încearcă tipul potrivit operei
      const o = S.opera(s.op);
      if (o && arg) { s.tip = o.gen === 'liric' ? 'poetic' : o.gen === 'dramatic' ? 'dramatic' : 'narativ'; el = eligible(s.tip); }
      if (!el.find((x) => x.id === s.op)) s.op = el[0] ? el[0].id : null;
    }
    save(s);
    const T = TIPURI[s.tip];
    const o = S.opera(s.op);
    let plan = '';
    if (o) plan = s.tip === 'personaj' ? planPersonaj(o, s) : s.tip === 'relatie' ? planRelatie(o, s) : planNarPoetDram(o, s.tip, s);
    save(s);
    return `
      <div class="page-head">
        <div class="kicker">Pentru eseu · <span class="chip c4">Subiectul al III-lea</span></div>
        <h1>Constructorul de eseu</h1>
        <p class="lead">Alege tipul de cerință și opera. Primești eseul așezat pe repere, din fraze din fișă, cu punctele din barem lângă fiecare bucată. Alege ce trăsături, secvențe și elemente folosești.</p>
      </div>
      <div class="card">
        <label class="fld">Tipul de cerință</label>
        <div class="seg-ctl" id="c-tip" style="margin-bottom:14px">${Object.entries(TIPURI).map(([k, t]) => `<button data-tip="${k}" aria-pressed="${k === s.tip}">${t.label}</button>`).join('')}</div>
        <label class="fld" for="c-op">Opera</label>
        <select id="c-op">${el.map((x) => `<option value="${x.id}"${x.id === s.op ? ' selected' : ''}>${S.esc(x.titlu)} — ${S.esc(x.autor)}</option>`).join('')}</select>
      </div>

      <h2 style="margin-top:28px">Cerința</h2>
      <div><div class="card tight serif">${S.esc(T.cerinta(o))}<br><span class="small muted" style="font-family:var(--font)">În elaborarea eseului, vei avea în vedere următoarele repere:</span><ul class="small" style="margin:6px 0 0">${T.repere.map((r) => `<li>${S.esc(r)}</li>`).join('')}</ul></div></div>
      ${T.note ? S.callout('info', `<p>${S.esc(T.note)}</p>`) : ''}

      <h2>Eseul, pe repere</h2>
      ${o ? `<div id="plan">${plan}</div>
      <div class="card tight">
        <div class="wc"><span><b id="c-wc">0</b> cuvinte în plan</span><span id="c-wc-msg"></span><button class="btn sm" data-copy="plan-text">Copiază textul</button></div>
        <div class="meter"><i id="c-meter" style="width:0"></i></div>
        <p class="small muted" style="margin:10px 0 0">Cuvintele din fișă sunt materia primă. Pe foaie, leagă paragrafele cu conectori (<em>în primul rând, de asemenea, un alt element semnificativ, prin urmare</em>) și scrie-le cu cuvintele tale. Ținta: 500–650 de cuvinte.</p>
      </div>
      <div id="plan-text" hidden></div>` : S.callout('info', '<p>Nu există încă o fișă potrivită pentru acest tip de cerință.</p>')}

      <h2>Cum transformi planul în eseu</h2>
      <ol class="steps">
        <li><strong>Introducerea</strong> (50–70 de cuvinte): autorul, opera, anul, specia, curentul și o idee despre temă. Fără citate lungi.</li>
        <li><strong>Câte un paragraf pentru fiecare reper</strong> (120–160 de cuvinte), în ordinea care ți se pare firească. Ordinea reperelor e la alegere.</li>
        <li><strong>Încheierea</strong> (40–60 de cuvinte): reia ideea principală și adaugă o judecată de valoare argumentată.</li>
        <li><strong>Lasă un rând liber</strong> sau un alineat clar între paragrafe. Existența celor trei părți și așezarea în pagină se punctează.</li>
      </ol>
      `;
  }

  S.page({
    id: 'constructor', title: 'Constructorul de eseu',
    nav: { label: 'Constructorul de eseu', color: C, badge: '✎' },
    render,
    mount(root) {
      const s = st();
      const tip = root.querySelector('#c-tip');
      tip && tip.addEventListener('click', (e) => {
        const b = e.target.closest('[data-tip]'); if (!b) return;
        s.tip = b.dataset.tip; save(s); S.rerender();
      });
      const sel = root.querySelector('#c-op');
      sel && sel.addEventListener('change', () => { s.op = sel.value; save(s); location.hash = '#/constructor/' + sel.value + ':' + s.tip; });
      const plan = root.querySelector('#plan');
      if (plan) {
        plan.addEventListener('click', (e) => {
          const b = e.target.closest('.pick [data-i]'); if (!b) return;
          const box = b.closest('.pick'); const key = box.dataset.key; const max = +box.dataset.max; const i = +b.dataset.i;
          const cur = st(); let sel2 = cur.pick[key] || [];
          if (max === 1) sel2 = [i];
          else if (sel2.includes(i)) { if (sel2.length > 1) sel2 = sel2.filter((x) => x !== i); }
          else { sel2 = sel2.concat(i); if (sel2.length > max) sel2.shift(); }
          cur.pick[key] = sel2; save(cur); S.rerender();
        });
        const txt = Array.from(plan.querySelectorAll('.ptext')).map((p) => p.innerText.replace(/\s*\+\d\s*/g, ' ').replace(/[ \t]+/g, ' ').trim()).join('\n\n');
        root.querySelector('#plan-text').innerText = txt;
        const n = S.words(txt);
        root.querySelector('#c-wc').textContent = n;
        root.querySelector('#c-meter').style.width = Math.min(100, n / 6.5) + '%';
        root.querySelector('#c-wc-msg').innerHTML = n < 400 ? `<span class="chip warn">sub 400: dezvoltă cu cuvintele tale</span>` : '<span class="chip ok">peste minimul de 400</span>';
      }
    }
  });
})();
