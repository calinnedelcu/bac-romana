/* Fișele de operă: lista și pagina fiecărei opere. */
(function () {
  const S = window.Site;
  const C = 'var(--c4)';
  const GEN = { epic: 'Proză', liric: 'Poezie', dramatic: 'Teatru' };
  const GENC = { epic: 'var(--c4)', liric: 'var(--c2)', dramatic: 'var(--c5)' };
  const ORDER = ['povestea-lui-harap-alb', 'moara-cu-noroc', 'ion', 'baltagul', 'ultima-noapte', 'enigma-otiliei', 'morometii',
    'o-scrisoare-pierduta', 'iona', 'luceafarul', 'floare-albastra', 'plumb', 'testament', 'eu-nu-strivesc-corola', 'riga-crypto', 'leoaica-tanara-iubirea'];

  S.opere = function () {
    const all = (window.OPERE || []).slice();
    const rank = (o) => { const i = ORDER.findIndex((k) => o.id === k || o.id.startsWith(k + '-')); return i < 0 ? 99 : i; };
    return all.sort((a, b) => rank(a) - rank(b));
  };
  S.opera = (id) => (window.OPERE || []).find((o) => o.id === id);
  S.known = () => S.store.get('known', {});

  const f = S.fmt;
  const rv = (html) => `<div class="rv">${html}</div>`;

  function listPage() {
    const ops = S.opere();
    const known = S.known();
    const filt = S.store.get('opfilt', 'toate');
    const nKnown = ops.filter((o) => known[o.id]).length;
    return `
      ${S.hero({ mark: S.icon('book'), pts: '', kicker: "Pentru eseu · Subiectul al III-lea", title: "Fișe de operă", lead: "Câte o fișă pentru fiecare autor canonic din programă, scrisă direct pe reperele eseului: încadrarea cu trăsături și dovezi, tema cu secvențe comentate, elementele de construcție cu relevanța lor, personajele și citatele." })}
      <div class="filters">
        <span class="seg-ctl" id="op-filt">${['toate', 'epic', 'liric', 'dramatic'].map((g) => `<button data-f="${g}" aria-pressed="${filt === g}">${g === 'toate' ? 'Toate' : GEN[g]}</button>`).join('')}</span>
        <input type="search" id="op-q" placeholder="Caută titlu, autor, personaj…" aria-label="Caută în fișe">
        <span class="progress-line" style="margin-left:auto"><span><b style="color:var(--ink)">${nKnown}</b> / ${ops.length} știute</span><span class="meter" style="width:120px"><i style="width:${ops.length ? (nKnown / ops.length) * 100 : 0}%;background:var(--ok)"></i></span></span>
      </div>
      <div class="op-grid" id="op-grid">
        ${ops.map((o) => `<a class="op-card" href="#/opera/${o.id}" data-gen="${o.gen}" data-k="${S.esc([o.titlu, o.autor, o.specie, ...(o.personaje || []).map((p) => p.nume)].join(' ').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase())}"${filt !== 'toate' && o.gen !== filt ? ' hidden' : ''}>
          ${known[o.id] ? '<span class="done" title="Știu fișa">✓</span>' : ''}
          <span class="g">${GEN[o.gen]}</span>
          <span class="t">${S.esc(o.titlu)}</span>
          <span class="a">${S.esc(o.autor)}${o.an ? ` · ${S.esc(o.an)}` : ''}</span>
          <span class="m"><span class="chip">${S.esc(o.specie.split(/[,(]/)[0].trim())}</span></span>
        </a>`).join('')}
      </div>
      ${ops.length ? '' : S.callout('info', '<p>Fișele se încarcă din fișierele de date. Dacă vezi mesajul acesta, lipsește un fișier din <code>assets/js/data</code>.</p>')}

      <h2>Cum folosești o fișă</h2>
      <ol class="steps">
        <li><strong>Citește-o o dată întreagă</strong>, cu opera în minte. Fiecare câmp e o frază pe care o poți scrie în eseu.</li>
        <li><strong>Activează „Mod repetiție”.</strong> Explicațiile se ascund; încearcă să le spui tu, apoi atinge-le ca să verifici.</li>
        <li><strong>Construiește eseul</strong> din fișă, pentru tipul de cerință pe care vrei să-l exersezi, și scrie-l de mână, cronometrat.</li>
        <li><strong>Bifează „Știu fișa”</strong> când poți reface toate cele trei repere fără să te uiți.</li>
      </ol>
      ${S.callout('info', '<p>Programa cere studierea a cel puțin unui text din opera fiecărui autor canonic. Dacă la clasă ai studiat alt text al aceluiași autor (de exemplu <em>Flori de mucigai</em> în loc de <em>Testament</em>), structura fișei rămâne aceeași: încadrare, temă și secvențe, elemente de construcție. Titu Maiorescu și E. Lovinescu, ceilalți doi autori canonici, sunt critici; ce trebuie să știi despre ei e pe pagina <a href="#/s3/critici">Eseul</a>.</p>', 'Ai făcut alt text la clasă?')}
    `;
  }

  function trasaturi(list) {
    return (list || []).map((t, i) => `<div class="item"><h4><span class="n">${i + 1}.</span> ${f(t.nume)}</h4>${rv(`<span class="lbl">Dovada din text</span><p class="serif">${f(t.dovada)}</p>`)}</div>`).join('');
  }
  function secvente(list) {
    return (list || []).map((s, i) => `<div class="item"><h4><span class="n">${i + 1}.</span> ${f(s.titlu)}</h4>${s.rezumat ? `<p class="small muted">${f(s.rezumat)}</p>` : ''}${rv(`<span class="lbl">Ce comentezi</span><p class="serif">${f(s.comentariu)}</p>`)}</div>`).join('');
  }
  function elemente(list) {
    return (list || []).map((e) => `<div class="item"><h4>${f(e.nume)}</h4>${rv(`<p class="serif">${f(e.analiza)}</p><span class="lbl">De ce e relevant (aici e al treilea punct)</span><p class="serif">${f(e.relevanta)}</p>`)}</div>`).join('');
  }
  function episoade(list) {
    return (list || []).map((e) => `<div class="item"><h4>${f(e.titlu)}</h4>${rv(`<p class="serif">${f(e.comentariu)}</p>`)}</div>`).join('');
  }

  function partTab(o) {
    const poem = o.gen === 'liric';
    const inc = o.incadrare || {};
    return `
      <div class="reper-h" style="margin-top:8px"><h3>Reperul 1 · Încadrarea</h3><span class="hand">6 p</span></div>
      <div class="item" style="background:var(--accent-soft);border-color:transparent"><span class="lbl" style="margin-top:0">Ce precizezi · 2 p</span><p class="serif" style="margin:4px 0 0">${f(inc.eticheta)}</p></div>
      <p class="small muted">Alegi două trăsături: numirea fiecăreia aduce 1 p, dovada din text încă 1 p.</p>
      ${trasaturi(inc.trasaturi)}

      <div class="reper-h"><h3>Reperul 2 · Tema și ${poem ? 'două imagini / idei poetice' : 'două episoade / secvențe'}</h3><span class="hand">6 p</span></div>
      <div class="item" style="background:var(--accent-soft);border-color:transparent"><span class="lbl" style="margin-top:0">Tema · 2 p</span><p class="serif" style="margin:4px 0 0">${f(o.tema)}</p>${o.viziune ? `<span class="lbl">Viziunea</span><p class="serif" style="margin:4px 0 0">${f(o.viziune)}</p>` : ''}</div>
      <p class="small muted">Alegi două. Fiecare aduce 2 p doar dacă e <strong>comentată</strong>; rezumatul sau simpla numire aduc 1 p.</p>
      ${secvente(o.secvente)}

      <div class="reper-h"><h3>Reperul 3 · Două elemente de ${poem ? 'compoziție și limbaj' : 'structură, compoziție sau limbaj'}</h3><span class="hand">6 p</span></div>
      <p class="small muted">Fiecare element: 3 p cu justificarea relevanței, 2 p fără ea, 1 p dacă e schematic.</p>
      ${o.structura ? `<div class="item"><h4>Structura</h4>${rv(`<p class="serif">${f(o.structura)}</p>`)}</div>` : ''}
      ${o.prozodie ? `<div class="item"><h4>Prozodia</h4>${rv(`<p class="serif">${f(o.prozodie)}</p>`)}</div>` : ''}
      ${elemente(o.elemente)}

      <div class="reper-h"><h3>Introducere și încheiere</h3></div>
      ${o.introducere ? `<div class="item"><h4>Introducere</h4>${rv(`<p class="serif">${f(o.introducere)}</p>`)}</div>` : ''}
      ${o.incheiere ? `<div class="item"><h4>Încheiere</h4>${rv(`<p class="serif">${f(o.incheiere)}</p>`)}</div>` : ''}
    `;
  }

  function persTab(o) {
    return (o.personaje || []).map((p) => `
      <h3 style="margin-top:10px">${f(p.nume)}</h3>
      ${p.tip ? `<p class="muted">${f(p.tip)}</p>` : ''}
      <h4 style="margin-top:14px">Reperul 1 · Statutul personajului</h4>
      <dl class="kv">${['social', 'psihologic', 'moral'].filter((k) => p.statut && p.statut[k]).map((k) => `<dt>Statut ${k}</dt><dd>${rv(`<span class="serif">${f(p.statut[k])}</span>`)}</dd>`).join('')}</dl>
      <h4 style="margin-top:14px">Reperul 2 · O trăsătură, prin două episoade</h4>
      ${(p.trasaturi || []).map((t) => `<div class="card tight"><strong>Trăsătura: ${f(t.trasatura)}</strong>${episoade(t.episoade)}</div>`).join('')}
      <h4 style="margin-top:14px">Reperul 3 · Elemente de construcție a personajului</h4>
      ${elemente(p.constructie)}
      ${p.citate && p.citate.length ? `<h4 style="margin-top:14px">Citate despre ${f(p.nume)}</h4><ul class="quote-list">${p.citate.map((c) => `<li><span class="qt">${f(typeof c === 'string' ? c : c.text)}</span>${c.context ? `<span class="cx">${f(c.context)}</span>` : ''}</li>`).join('')}</ul>` : ''}
      <hr>`).join('');
  }

  function relTab(o) {
    return (o.relatii || []).map((r) => `
      <h3 style="margin-top:10px">${f(r.intre.join(' și '))}</h3>
      <h4 style="margin-top:12px">Reperul 1 · Statutul inițial al personajelor și al relației</h4>
      <div class="item">${rv(`<p class="serif">${f(r.statut_initial)}</p>`)}</div>
      <h4 style="margin-top:12px">Reperul 2 · Scene care ilustrează relația</h4>
      ${episoade(r.scene)}
      <h4 style="margin-top:12px">Reperul 3 · Elemente de construcție</h4>
      ${elemente(r.elemente)}
      ${r.evolutie ? `<h4 style="margin-top:12px">Evoluția relației</h4><div class="item">${rv(`<p class="serif">${f(r.evolutie)}</p>`)}</div>` : ''}
      <hr>`).join('');
  }

  function quotesTab(o) {
    return `<ul class="quote-list">${(o.citate || []).map((c) => `<li><span class="qt">${f(c.text || c)}</span>${c.context ? `<span class="cx">${f(c.context)}</span>` : ''}</li>`).join('')}</ul>`;
  }

  function operaPage(id) {
    const o = S.opera(id);
    if (!o) return `<h1>Fișa nu există</h1><p><a href="#/opere">Înapoi la fișe</a></p>`;
    const known = S.known();
    const recall = S.store.get('recall', false);
    const tabs = [{ label: 'Particularități', html: partTab(o) }];
    if (o.personaje && o.personaje.length) tabs.push({ label: 'Personaje', html: persTab(o) });
    if (o.relatii && o.relatii.length) tabs.push({ label: 'Relații', html: relTab(o) });
    if (o.citate && o.citate.length) tabs.push({ label: 'Citate', html: quotesTab(o) });
    if (o.capcane && o.capcane.length) tabs.push({ label: 'Capcane', html: S.callout('trap', `<ul style="margin:0">${o.capcane.map((c) => `<li>${f(c)}</li>`).join('')}</ul>`) });
    return `
      <a class="back" href="#/opere">${S.icon('back')} Toate fișele</a>
      ${S.hero({ mark: `<span style="color:${GENC[o.gen]}">${o.an || '·'}</span>`, pts: '', kicker: `${GEN[o.gen]} · ${S.esc(o.specie)}`, title: S.esc(o.titlu),
        lead: `${S.esc(o.autor)}${o.aparitie ? ` · ${f(o.aparitie)}` : ''}`,
        facts: (o.categorii || []).slice(0, 6) })}
      <div class="btn-row">
        <button class="btn" id="tg-recall" aria-pressed="${recall}">${S.icon('eye')}<span>Mod repetiție</span></button>
        <button class="btn" id="tg-known" aria-pressed="${!!known[o.id]}">${S.icon('check')}<span>${known[o.id] ? 'Știu fișa' : 'Marchează „Știu fișa”'}</span></button>
        <a class="btn primary" href="#/constructor/${o.id}">Construiește eseul ${S.icon('arrow')}</a>
      </div>
      <div id="fisa" class="${recall ? 'recall' : ''}">${S.tabs(tabs)}</div>
    `;
  }

  S.page({
    id: 'opere', title: 'Fișe de operă',
    nav: { label: 'Fișe de operă', color: C, badge: 'F' },
    render: listPage,
    mount(root) {
      const seg = root.querySelector('#op-filt');
      if (!seg) return;
      const q = root.querySelector('#op-q');
      const apply = () => {
        const g = S.store.get('opfilt', 'toate');
        const words = q.value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().split(/\s+/).filter(Boolean);
        root.querySelectorAll('#op-grid .op-card').forEach((c) => { c.hidden = (g !== 'toate' && c.dataset.gen !== g) || !words.every((w) => c.dataset.k.includes(w)); });
      };
      seg.addEventListener('click', (e) => {
        const b = e.target.closest('[data-f]'); if (!b) return;
        S.store.set('opfilt', b.dataset.f);
        seg.querySelectorAll('[data-f]').forEach((x) => x.setAttribute('aria-pressed', x === b));
        apply();
      });
      q.addEventListener('input', apply);
    }
  });

  S.page({
    id: 'opera', title: 'Fișă de operă', navAs: 'opere', noPager: true,
    docTitle: (id) => { const o = S.opera(id); return o ? o.titlu : 'Fișă'; },
    render: operaPage,
    mount(root, id) {
      const b1 = root.querySelector('#tg-recall'), b2 = root.querySelector('#tg-known');
      if (!b1) return;
      b1.addEventListener('click', () => {
        const on = !S.store.get('recall', false); S.store.set('recall', on);
        root.querySelector('#fisa').classList.toggle('recall', on);
        root.querySelectorAll('.rv.shown').forEach((x) => x.classList.remove('shown'));
        b1.setAttribute('aria-pressed', on);
      });
      b2.addEventListener('click', () => {
        const k = S.known(); k[id] = !k[id]; S.store.set('known', k);
        b2.setAttribute('aria-pressed', !!k[id]); b2.querySelector('span').textContent = k[id] ? 'Știu fișa' : 'Marchează „Știu fișa”';
        if (k[id]) S.toast('Bifat');
      });
    }
  });
})();
