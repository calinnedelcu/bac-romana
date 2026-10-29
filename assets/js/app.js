/* Nucleul site-ului: rutare pe hash, bara de sus, tab-urile de pe telefon, căutarea, cuprinsul și componentele comune. */
(function () {
  'use strict';

  const S = (window.Site = {});
  S.pages = [];
  S.byId = {};

  /* ---------- stocare locală (opțională) ---------- */
  S.store = {
    get(k, d) { try { const v = localStorage.getItem('bacro:' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem('bacro:' + k, JSON.stringify(v)); } catch (e) { /* ignorat */ } }
  };

  /* ---------- text ---------- */
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  S.esc = esc;
  // *termen* -> evidențiere; „citat” -> stil de citat
  S.fmt = (s) => esc(s)
    .replace(/\*([^*\n]+)\*/g, '<strong>$1</strong>')
    .replace(/„([^”]*)”/g, '<span class="q">„$1”</span>');
  // [ce scrii] -> spațiu de completat (în formule de răspuns)
  S.tpl = (s) => S.fmt(s).replace(/\[([^\]]+)\]/g, '<span class="blank">$1</span>');
  S.words = (t) => (String(t).trim().match(/[\p{L}\p{N}]+(?:[-’'][\p{L}\p{N}]+)*/gu) || []).length;
  const plain = (s) => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  const slug = (s) => plain(s).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 48);

  let uid = 0;
  S.uid = (p) => (p || 'u') + (++uid);

  /* ---------- iconițe ---------- */
  const IC = {
    home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M10 21v-6h4v6"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
    book: '<path d="M2 4h7a3 3 0 0 1 3 3v14a2 2 0 0 0-2-2H2z"/><path d="M22 4h-7a3 3 0 0 0-3 3v14a2 2 0 0 1 2-2h8z"/>',
    pen: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
    timer: '<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2"/><path d="M9 2h6"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
    auto: '<circle cx="12" cy="12" r="9"/><path d="M12 3v18" /><path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    alert: '<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 16v-4M12 8h.01"/>',
    star: '<path d="m12 3 2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.6 6.6 19.5l1.2-6L3.3 9.3l6.1-.7z"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    type: '<path d="M4 7V4h16v3M9 20h6M12 4v16"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r=".8"/>',
    arrow: '<path d="M5 12h14M13 5l7 7-7 7"/>',
    back: '<path d="M19 12H5M11 19l-7-7 7-7"/>',
    copy: '<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/>',
    eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    down: '<path d="m6 9 6 6 6-6"/>',
    quote: '<path d="M3 21c3 0 7-1 7-8V5c0-1.2-.8-2-2-2H4c-1.2 0-2 .8-2 2v6c0 1.2.8 2 2 2h3"/><path d="M14 21c3 0 7-1 7-8V5c0-1.2-.8-2-2-2h-4c-1.2 0-2 .8-2 2v6c0 1.2.8 2 2 2h3"/>'
  };
  S.icon = (n, cls) => `<svg class="ico${cls ? ' ' + cls : ''}" viewBox="0 0 24 24" aria-hidden="true">${IC[n] || ''}</svg>`;
  // cerc trasat de mână (pixul corectorului)
  S.circle = '<svg viewBox="0 0 120 60" preserveAspectRatio="none" aria-hidden="true"><path d="M9 33C5 15 40 4 70 6c31 2 47 14 43 29-4 15-36 22-64 19C25 51 7 43 11 27"/></svg>';

  /* ---------- componente ---------- */

  // Bara de punctaj. items: [{t, p, d, r: true pentru redactare, c: 'var(--c1)'}]
  S.pbar = function (items, opts) {
    opts = opts || {};
    const id = S.uid('pb');
    const total = items.reduce((a, b) => a + b.p, 0);
    const col = (it) => it.c || (it.r ? 'var(--c5)' : 'var(--accent)');
    const segs = items.map((it, i) =>
      `<div class="seg${it.r ? ' r' : ''}" data-i="${i}" style="flex-grow:${it.p};--sc:${col(it)}" title="${esc(it.t)} — ${it.p} p">${it.p}</div>`).join('');
    const leg = items.map((it, i) =>
      `<li data-i="${i}"><i class="sw${it.r ? ' r' : ''}" style="--sc:${col(it)}"></i><span>${S.fmt(it.t)}${it.d ? `<span class="d">${S.fmt(it.d)}</span>` : ''}</span><span class="p">${it.p} p</span></li>`).join('');
    return `<div class="pbar-wrap" id="${id}" data-pbar>
      <div class="pbar" role="img" aria-label="Punctaj: ${total} puncte">${segs}</div>
      ${opts.noLegend ? '' : `<ul class="plegend">${leg}</ul>`}
      ${opts.key === false ? '' : `<div class="pkey"><span><i></i>conținut</span><span><i class="r"></i>redactare / formă</span><span>Total: <b>${total} p</b></span></div>`}
    </div>`;
  };

  S.acc = (title, body, o) => `<details class="acc"${o && o.open ? ' open' : ''}><summary>${title}</summary><div class="acc-body">${body}</div></details>`;

  S.tabs = function (list, o) {
    const id = S.uid('tb');
    const sel = (o && o.sel) || 0;
    return `<div class="tabs" role="tablist" data-tabs="${id}">${list.map((t, i) =>
      `<button role="tab" aria-selected="${i === sel}" data-tab="${i}">${t.label}</button>`).join('')}</div>
      ${list.map((t, i) => `<div class="tabpanel" role="tabpanel" data-panel="${id}:${i}"${i === sel ? '' : ' hidden'}>${t.html}</div>`).join('')}`;
  };

  const CALLOUT_IC = { key: 'star', tip: 'check', trap: 'alert', info: 'info' };
  S.callout = (kind, html, title) => `<div class="callout ${kind}"><span class="ci">${S.icon(CALLOUT_IC[kind] || 'info')}</span><div>${title ? `<h4>${title}</h4>` : ''}${html}</div></div>`;

  S.checklist = function (key, items) {
    const st = S.store.get('chk:' + key, {});
    const n = items.filter((_, i) => st[i]).length;
    return `<div class="chk-prog" data-chkp="${key}"><span><b>${n}</b> / ${items.length} bifate</span><span class="meter"><i style="width:${(n / items.length) * 100}%"></i></span></div>
      <ul class="checklist" data-chk="${key}">${items.map((t, i) =>
      `<li><label><input type="checkbox" data-i="${i}"${st[i] ? ' checked' : ''}><span>${S.fmt(t)}</span></label></li>`).join('')}</ul>`;
  };

  // Răspuns adnotat, scris „pe foaie”: segmente [text, notă, culoare] sau text simplu
  S.ans = function (parts, o) {
    o = o || {};
    const html = parts.map((p) => {
      if (p === '<p>' || p === '</p>') return p;
      if (typeof p === 'string') return S.fmt(p);
      const [txt, tag, col] = p;
      const t = tag ? `<span class="tag">${esc(tag)}</span>` : '';
      if (!txt) return t;
      return `<span class="mk" style="--mc:${col || 'var(--accent)'}">${S.fmt(txt)}</span>${t}`;
    }).join('');
    return `<div class="ans-wrap">${o.head ? `<div class="ans-head">${o.head}</div>` : ''}<div class="ans${o.bad ? ' bad' : ''}">${html}</div>${o.verdict ? `<div class="verdict">${S.fmt(o.verdict)}</div>` : ''}</div>`;
  };

  // Card de cerință: { id, num, title, sub, formulari[], barem[], how[], formula, example, traps[], extra }
  S.req = function (r) {
    const tabs = r.tabs ? r.tabs.slice() : [];
    if (r.how || r.formula) tabs.push({ label: 'Cum scrii', html: `${r.how ? `<ul>${r.how.map((h) => `<li>${S.fmt(h)}</li>`).join('')}</ul>` : ''}${r.formula ? `<div class="lbl-h" style="margin-top:14px">Formula de răspuns</div><div class="tpl">${r.formula.split('\n').map((l) => `<p>${S.tpl(l)}</p>`).join('')}</div>` : ''}` });
    if (r.example) tabs.push({ label: 'Răspuns de punctaj maxim', html: r.example });
    if (r.traps) tabs.push({ label: 'Unde se pierd puncte', html: `<div class="callout trap" style="margin-top:0"><span class="ci">${S.icon('alert')}</span><div><ul style="margin:0">${r.traps.map((t) => `<li>${S.fmt(t)}</li>`).join('')}</ul></div></div>` });
    return `<section class="req" id="${r.id || ''}">
      <div class="req-head"><div class="req-num">${r.num}</div><div><h3>${r.title}</h3>${r.sub ? `<div class="sub">${r.sub}</div>` : ''}</div></div>
      <div class="req-body">
        ${r.formulari ? `<div class="req-sec mt0"><h4>Cum arată cerința</h4><ul class="formulari">${r.formulari.map((f) => `<li>${S.fmt(f)}</li>`).join('')}</ul></div>` : ''}
        ${r.barem ? `<div class="req-sec"><h4>Cum se punctează</h4>${S.pbar(r.barem)}</div>` : ''}
        ${tabs.length ? S.tabs(tabs) : ''}
        ${r.extra || ''}
      </div>
    </section>`;
  };

  // Quiz cu răspuns imediat. qs: [{ stem, frag, opts[], ok, expl }]
  S.quiz = function (qs) {
    return `<div class="quiz" data-n="${qs.length}"><div class="quiz-score"><span>Scor</span><b class="qz-ok">0</b><span class="muted">din ${qs.length}</span><span class="meter" style="flex:1"><i class="qz-m" style="width:0"></i></span></div>
      ${qs.map((q, n) => `<div class="quiz-q" data-ok="${q.ok}">
      <div class="stem"><span class="chip">${n + 1}</span><strong>${S.fmt(q.stem)}</strong></div>
      ${q.frag ? `<div class="frag">${S.fmt(q.frag).replace(/\n/g, '<br>')}</div>` : ''}
      <div class="opts">${q.opts.map((o, i) => `<button data-opt="${i}" data-l="${'ABCD'[i]}">${S.fmt(o)}</button>`).join('')}</div>
      <div class="expl" hidden>${S.fmt(q.expl)}</div>
    </div>`).join('')}</div>`;
  };

  // „Corectează ca evaluatorul”: alegi punctajul, apoi vezi defalcarea din barem.
  S.grader = function (answerHTML, o) {
    const id = S.uid('gr');
    const btns = Array.from({ length: o.max + 1 }, (_, i) => `<button data-g="${i}">${i}</button>`).join('');
    const rows = o.rows.map(([c, got, max, why]) =>
      `<tr><td>${S.fmt(c)}${why ? `<div class="small muted">${S.fmt(why)}</div>` : ''}</td><td class="num"><span class="hand" style="color:var(--red);font-size:1.2rem">${got}</span> / ${max}</td></tr>`).join('');
    return `<div class="grader card" id="${id}" data-correct="${o.correct}">
      <div class="ans-head">${o.title || 'Câte puncte ia răspunsul acesta?'}</div>
      <div class="ans">${answerHTML}</div>
      <div class="btn-row grader-btns"><span class="small muted">Punctajul tău:</span><span class="seg-ctl">${btns}</span></div>
      <div class="grader-res" hidden>
        <p class="grader-msg"></p>
        <div class="tbl-wrap"><table><tr><th>Rând din barem</th><th class="num">Puncte</th></tr>${rows}
          <tr><td><b>Total</b></td><td class="num"><b>${o.correct}</b> / ${o.max}</td></tr></table></div>
        ${o.note ? `<p class="small">${S.fmt(o.note)}</p>` : ''}
      </div>
    </div>`;
  };

  // Antetul paginii. { mark, pts, kicker, title, lead, facts: [[valoare, text]] }
  S.hero = (h) => `<header class="hero">
    <div class="hero-mark">${h.mark}${h.pts ? `<span class="circ">${S.circle}${h.pts}</span>` : ''}</div>
    <div><div class="eyebrow">${h.kicker}</div><h1>${h.title}</h1>${h.lead ? `<p class="lead">${h.lead}</p>` : ''}
    ${h.facts ? `<div class="facts">${h.facts.map((f) => Array.isArray(f) ? `<span class="fact"><b>${f[0]}</b>${f[1]}</span>` : `<span class="fact">${f}</span>`).join('')}</div>` : ''}</div>
  </header>`;

  S.toast = function (msg) {
    let t = document.querySelector('.toast');
    if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); }
    t.textContent = msg; t.classList.add('show');
    clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('show'), 1800);
  };

  S.copy = function (text) {
    const done = () => S.toast('Copiat');
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(done, fallback); else fallback();
    function fallback() {
      const ta = document.createElement('textarea'); ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); done(); } catch (e) { S.toast('Nu s-a putut copia'); }
      ta.remove();
    }
  };

  /* ---------- pagini și navigare ---------- */
  S.page = function (p) { S.pages.push(p); S.byId[p.id] = p; };

  const ORDER = ['acasa', 's1a', 's1b', 's2', 's3', 'opere', 'constructor', 'exersare', 'redactare', 'examen'];
  const SUBJ = ['s1a', 's1b', 's2', 's3'];
  const MAIN = [['opere', 'Fișe', 'book'], ['constructor', 'Eseu', 'pen'], ['exersare', 'Exersează', 'timer']];
  const MORE = [['redactare', 'Redactare și ortografie', 'type'], ['examen', 'Ziua examenului', 'target'], ['acasa', 'Proba pe scurt', 'home']];
  const themeOf = (p) => { const m = /--(c\d)/.exec((p && p.nav && p.nav.color) || ''); return m ? m[1] : 'pen'; };

  function topnav(active) {
    const subj = SUBJ.map((id) => { const p = S.byId[id]; return p ? `<a class="navsubj${active === id ? ' active' : ''}" href="#/${id}">${p.nav.badge} <span class="pt">${p.nav.pts}</span></a>` : ''; }).join('');
    const main = MAIN.map(([id, l, ic]) => `<a class="${active === id ? 'active' : ''}" href="#/${id}">${S.icon(ic)}${l}</a>`).join('');
    const moreActive = MORE.some(([id]) => id === active && id !== 'acasa');
    return `${subj}<span class="sep"></span>${main}
      <span class="more-wrap"><button class="more" data-more aria-expanded="false">${moreActive ? S.byId[active].nav.label : 'Mai mult'} ${S.icon('down')}</button>
      <span class="more-menu" hidden>${MORE.map(([id, l, ic]) => `<a href="#/${id}">${S.icon(ic)}${l}</a>`).join('')}</span></span>`;
  }

  function tabbar(active) {
    const t = (id, l, ic) => `<a href="#/${id}" class="${active === id ? 'active' : ''}">${S.icon(ic)}<span>${l}</span></a>`;
    const subjOn = SUBJ.includes(active) || active === 'redactare' || active === 'examen';
    return t('acasa', 'Start', 'home') + `<button data-sheet class="${subjOn ? 'active' : ''}">${S.icon('grid')}<span>Subiecte</span></button>` +
      t('opere', 'Fișe', 'book') + t('constructor', 'Eseu', 'pen') + t('exersare', 'Exersează', 'timer');
  }

  function openSheet() {
    closeSheet();
    const scrim = document.createElement('div'); scrim.className = 'sheet-scrim'; scrim.dataset.close = '1';
    const sh = document.createElement('div'); sh.className = 'bsheet'; sh.setAttribute('role', 'dialog'); sh.setAttribute('aria-label', 'Subiecte');
    sh.innerHTML = SUBJ.map((id) => { const p = S.byId[id]; return `<a href="#/${id}"><span class="lbl" style="background:${p.nav.color}">${p.nav.badge}</span>${p.nav.label.replace(/^[IV.AB]+ · /, '')}<span class="pt">${p.nav.pts}</span></a>`; }).join('') +
      `<a href="#/redactare"><span class="lbl" style="background:var(--c5)">${S.icon('type')}</span>Redactare și ortografie</a>` +
      `<a href="#/examen"><span class="lbl" style="background:var(--ink-2)">${S.icon('target')}</span>Ziua examenului</a>`;
    document.body.append(scrim, sh);
  }
  function closeSheet() { document.querySelectorAll('.sheet-scrim, .bsheet').forEach((x) => x.remove()); }

  function route() {
    const h = location.hash.replace(/^#\/?/, '');
    const [id, ...rest] = h.split('/');
    let page = S.byId[id];
    let arg = rest.join('/');
    if (!page) { page = S.byId.acasa; arg = ''; }
    return { page, arg: decodeURIComponent(arg || '') };
  }

  let cur = { id: null, hash: null };
  function render(force) {
    const { page, arg } = route();
    const sameAnchorPage = !force && cur.id === page.id && page.anchor;
    cur.hash = location.hash;
    if (sameAnchorPage) {
      const el = arg && document.getElementById(arg);
      if (el) el.scrollIntoView({ behavior: 'smooth' }); else if (!arg) window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const changed = cur.id !== page.id || !force;
    cur.id = page.id;
    const navId = page.navAs || page.id;
    document.body.dataset.c = themeOf(S.byId[navId] || page);
    document.getElementById('mainnav').innerHTML = topnav(navId);
    document.getElementById('tabbar').innerHTML = tabbar(navId);
    closeSheet();

    const main = document.getElementById('page');
    const layout = document.getElementById('layout');
    layout.className = 'layout' + (page.wide ? ' wide' : ' has-rail');
    const i = ORDER.indexOf(navId);
    const prev = i > 0 ? S.byId[ORDER[i - 1]] : null;
    const next = i >= 0 && i < ORDER.length - 1 ? S.byId[ORDER[i + 1]] : null;
    const pn = page.noPager ? '' : `<nav class="page-nav">${prev ? `<a href="#/${prev.id}"><small>← Înapoi</small><b>${prev.title}</b></a>` : '<span></span>'}${next ? `<a class="next" href="#/${next.id}"><small>Mai departe →</small><b>${next.title}</b></a>` : ''}</nav>`;
    main.innerHTML = page.render(arg) + pn;
    document.title = (page.docTitle ? page.docTitle(arg) : page.title) + ' · Bac la română';
    if (changed && !force) { main.classList.remove('enter'); void main.offsetWidth; main.classList.add('enter'); }
    buildToc(page, main);
    if (!force) {
      const anchor = page.anchor && page.anchor(arg);
      const el = anchor && document.getElementById(anchor);
      if (el) el.scrollIntoView(); else window.scrollTo(0, 0);
    }
    if (page.id !== 'acasa') S.store.set('last', { hash: location.hash || '#/' + page.id, title: document.title.replace(' · Bac la română', '') });
    if (page.mount) page.mount(main, arg);
  }
  S.rerender = () => render(true);

  /* ---------- cuprinsul (dreapta pe ecrane mari, cipuri sus pe cele înguste) ---------- */
  let spy = null;
  function buildToc(page, main) {
    const rail = document.getElementById('rail');
    if (spy) { spy.disconnect(); spy = null; }
    rail.innerHTML = '';
    if (page.wide) return;
    const hs = Array.from(main.querySelectorAll('h2'));
    hs.forEach((h) => { if (!h.id) h.id = slug(h.textContent); });
    if (hs.length < 3) { document.getElementById('layout').className = 'layout solo'; return; }
    const link = (h) => `<a href="#/${page.id}/${h.id}" data-to="${h.id}">${esc(h.textContent)}</a>`;
    rail.innerHTML = `<div class="rail-h">Pe pagină</div>${hs.map(link).join('')}`;
    const chips = document.createElement('nav'); chips.className = 'chips-nav'; chips.setAttribute('aria-label', 'Pe pagină');
    chips.innerHTML = hs.map(link).join('');
    const hero = main.querySelector('.hero');
    if (hero) hero.after(chips); else main.prepend(chips);
    if (!page.anchor) { [rail, chips].forEach((box) => box.querySelectorAll('a').forEach((a) => { a.removeAttribute('href'); a.setAttribute('role', 'link'); a.tabIndex = 0; })); }
    const set = (id) => {
      document.querySelectorAll('.rail a, .chips-nav a').forEach((a) => a.classList.toggle('on', a.dataset.to === id));
      const c = chips.querySelector(`[data-to="${id}"]`);
      if (c) chips.scrollTo({ left: c.offsetLeft - 16, behavior: 'smooth' });
    };
    spy = new IntersectionObserver((ents) => {
      const vis = ents.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (vis[0]) set(vis[0].target.id);
    }, { rootMargin: '-120px 0px -62% 0px' });
    hs.forEach((h) => spy.observe(h));
  }

  /* ---------- căutare (⌘K) ---------- */
  let index = null;
  function buildIndex() {
    const out = [];
    const tmp = document.createElement('div');
    ORDER.forEach((id) => {
      const p = S.byId[id]; if (!p) return;
      const n = p.nav || {};
      out.push({ g: 'Pagini', t: n.label || p.title, s: p.title, href: '#/' + id, b: n.badge, c: n.color, k: plain((n.label || '') + ' ' + p.title) });
      try {
        tmp.innerHTML = p.render('');
        tmp.querySelectorAll('h2, .req h3').forEach((h) => {
          const sec = h.closest('.req');
          const hid = h.tagName === 'H2' ? (h.id || slug(h.textContent)) : (sec && sec.id);
          if (!hid) return;
          out.push({ g: 'Secțiuni', t: h.textContent, s: n.label || p.title, href: `#/${id}/${hid}`, b: n.badge, c: n.color, k: plain(h.textContent + ' ' + (n.label || '')) });
        });
      } catch (e) { /* o pagină care nu se poate randa aici e sărită */ }
    });
    (S.opere ? S.opere() : []).forEach((o) => {
      const pers = (o.personaje || []).map((p) => p.nume).join(', ');
      out.push({ g: 'Opere', t: o.titlu, s: `${o.autor} · ${o.specie}${pers ? ' · ' + pers : ''}`, href: '#/opera/' + o.id, b: { epic: 'P', liric: 'L', dramatic: 'T' }[o.gen], c: { epic: 'var(--c4)', liric: 'var(--c2)', dramatic: 'var(--c5)' }[o.gen], k: plain(`${o.titlu} ${o.autor} ${o.specie} ${(o.categorii || []).join(' ')} ${pers}`) });
    });
    return out;
  }

  let pal = null, sel = 0, results = [];
  function openPalette() {
    if (pal) return;
    if (!index) index = buildIndex();
    pal = document.createElement('div'); pal.className = 'palette-scrim'; pal.dataset.close = 'pal';
    pal.innerHTML = `<div class="palette" role="dialog" aria-label="Caută"><label class="palette-in">${S.icon('search')}<input id="pal-q" type="search" placeholder="Caută o operă, un personaj, o cerință…" autocomplete="off"></label>
      <div class="palette-res" id="pal-res"></div><div class="palette-foot"><span>↑↓ alegi</span><span>Enter deschizi</span><span>Esc închizi</span></div></div>`;
    document.body.appendChild(pal);
    const inp = pal.querySelector('#pal-q');
    inp.addEventListener('input', () => { sel = 0; search(inp.value); });
    inp.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown') { sel = Math.min(results.length - 1, sel + 1); paint(); e.preventDefault(); }
      else if (e.key === 'ArrowUp') { sel = Math.max(0, sel - 1); paint(); e.preventDefault(); }
      else if (e.key === 'Enter' && results[sel]) { go(results[sel].href); }
    });
    search(''); inp.focus();
  }
  function closePalette() { if (pal) { pal.remove(); pal = null; } }
  function go(href) { closePalette(); if (location.hash === href) render(true); else location.hash = href; }
  function search(q) {
    const words = plain(q).split(/\s+/).filter(Boolean);
    if (!words.length) results = index.filter((x) => x.g === 'Pagini' || x.g === 'Opere').slice(0, 26);
    else results = index.filter((x) => words.every((w) => x.k.includes(w)))
      .map((x) => ({ x, s: (plain(x.t).startsWith(words[0]) ? 0 : 1) + (x.g === 'Pagini' ? 0 : x.g === 'Opere' ? .2 : .5) }))
      .sort((a, b) => a.s - b.s).map((r) => r.x).slice(0, 30);
    paint();
  }
  function paint() {
    const box = pal.querySelector('#pal-res');
    if (!results.length) { box.innerHTML = '<div class="empty">Nimic găsit. Încearcă numele unei opere, al unui autor sau „barem”.</div>'; return; }
    let g = '';
    box.innerHTML = results.map((r, i) => {
      const head = r.g !== g ? `<div class="grp">${(g = r.g)}</div>` : '';
      return `${head}<a href="${r.href}" data-pi="${i}" class="${i === sel ? 'sel' : ''}"><span class="badge" style="background:${r.c || 'var(--ink-2)'}">${r.b || '•'}</span><span><span class="t">${esc(r.t)}</span><span class="s">${esc(r.s)}</span></span></a>`;
    }).join('');
    const s = box.querySelector('.sel'); if (s) s.scrollIntoView({ block: 'nearest' });
  }

  /* ---------- interacțiuni globale (delegare) ---------- */
  document.addEventListener('click', (e) => {
    const t = e.target;
    const pa = t.closest('.palette-res a');
    if (pa) { e.preventDefault(); go(pa.getAttribute('href')); return; }
    if (t.dataset && t.dataset.close === 'pal') { closePalette(); return; }
    if (t.closest('[data-search]')) { openPalette(); return; }
    if (t.closest('[data-sheet]')) { openSheet(); return; }
    if (t.dataset && t.dataset.close === '1') { closeSheet(); return; }
    const more = t.closest('[data-more]');
    const menu = document.querySelector('.more-menu');
    if (more) { const open = menu.hidden; menu.hidden = !open; more.setAttribute('aria-expanded', open); return; }
    if (menu && !menu.hidden && !t.closest('.more-menu')) menu.hidden = true;
    const toc = t.closest('.rail a, .chips-nav a');
    if (toc) {
      const el = document.getElementById(toc.dataset.to);
      if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth' }); if (toc.getAttribute('href')) history.replaceState(null, '', toc.getAttribute('href')); cur.hash = location.hash; }
      return;
    }
    const tab = t.closest('[data-tab]');
    if (tab) {
      const bar = tab.parentElement; const id = bar.dataset.tabs;
      bar.querySelectorAll('[data-tab]').forEach((b) => b.setAttribute('aria-selected', b === tab));
      document.querySelectorAll(`[data-panel^="${id}:"]`).forEach((p) => { p.hidden = p.dataset.panel !== id + ':' + tab.dataset.tab; });
      return;
    }
    const opt = t.closest('.quiz-q [data-opt]');
    if (opt && !opt.disabled) {
      const q = opt.closest('.quiz-q'); const ok = +q.dataset.ok;
      q.querySelectorAll('[data-opt]').forEach((b) => { b.disabled = true; if (+b.dataset.opt === ok) b.classList.add('right'); });
      if (+opt.dataset.opt !== ok) opt.classList.add('wrong'); else q.dataset.good = '1';
      q.querySelector('.expl').hidden = false;
      const qz = q.closest('.quiz');
      if (qz) {
        const good = qz.querySelectorAll('.quiz-q[data-good]').length;
        qz.querySelector('.qz-ok').textContent = good;
        qz.querySelector('.qz-m').style.width = (good / +qz.dataset.n) * 100 + '%';
      }
      return;
    }
    const g = t.closest('.grader [data-g]');
    if (g) {
      const box = g.closest('.grader'); const ok = +box.dataset.correct; const v = +g.dataset.g;
      box.querySelectorAll('[data-g]').forEach((b) => b.setAttribute('aria-pressed', b === g));
      const res = box.querySelector('.grader-res'); res.hidden = false;
      const d = v - ok;
      res.querySelector('.grader-msg').innerHTML = d === 0
        ? '<span class="chip ok">Exact</span> Ai corectat ca evaluatorul.'
        : `<span class="chip ${Math.abs(d) === 1 ? 'warn' : 'bad'}">${d > 0 ? 'Prea generos' : 'Prea sever'}</span> <span class="hand">Corectorul dă ${ok} p.</span> Uite de ce:`;
      return;
    }
    const rv = t.closest('.recall .rv');
    if (rv && !rv.classList.contains('shown')) { rv.classList.add('shown'); return; }
    if (t.closest('[data-theme-toggle]')) { cycleTheme(); return; }
    const cp = t.closest('[data-copy]');
    if (cp) { const src = document.getElementById(cp.dataset.copy); if (src) S.copy(src.innerText || src.textContent); }
  });

  document.addEventListener('keydown', (e) => {
    const typing = /INPUT|TEXTAREA|SELECT/.test((e.target && e.target.tagName) || '');
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); pal ? closePalette() : openPalette(); return; }
    if (e.key === '/' && !typing && !pal) { e.preventDefault(); openPalette(); return; }
    if (e.key === 'Escape') { closePalette(); closeSheet(); const m = document.querySelector('.more-menu'); if (m) m.hidden = true; }
    if (e.key === 'Enter' && e.target.closest && e.target.closest('.chips-nav a, .rail a')) e.target.click();
  });

  document.addEventListener('change', (e) => {
    const cb = e.target.closest('[data-chk] input');
    if (cb) {
      const box = cb.closest('[data-chk]'); const key = box.dataset.chk;
      const st = S.store.get('chk:' + key, {});
      st[cb.dataset.i] = cb.checked; S.store.set('chk:' + key, st);
      const all = box.querySelectorAll('input'); const n = Array.from(all).filter((x) => x.checked).length;
      const pr = document.querySelector(`[data-chkp="${key}"]`);
      if (pr) { pr.querySelector('b').textContent = n; pr.querySelector('.meter i').style.width = (n / all.length) * 100 + '%'; }
    }
  });

  // Evidențiere segment <-> legendă la barele de punctaj
  function pbHover(e, on) {
    const el = e.target.closest('[data-pbar] [data-i]');
    if (!el) return;
    el.closest('[data-pbar]').querySelectorAll(`[data-i="${el.dataset.i}"]`).forEach((x) => x.classList.toggle('hl', on));
  }
  document.addEventListener('mouseover', (e) => pbHover(e, true));
  document.addEventListener('mouseout', (e) => pbHover(e, false));

  /* ---------- temă ---------- */
  function applyTheme(t) {
    if (t === 'light' || t === 'dark') document.documentElement.setAttribute('data-theme', t);
    else document.documentElement.removeAttribute('data-theme');
    const b = document.querySelector('[data-theme-toggle]');
    if (b) { b.innerHTML = S.icon(t === 'dark' ? 'moon' : t === 'light' ? 'sun' : 'auto'); b.title = t === 'dark' ? 'Temă întunecată' : t === 'light' ? 'Temă luminoasă' : 'Temă automată'; }
  }
  function cycleTheme() {
    const curT = S.store.get('theme', 'auto');
    const nxt = curT === 'auto' ? 'dark' : curT === 'dark' ? 'light' : 'auto';
    S.store.set('theme', nxt); applyTheme(nxt);
    S.toast(nxt === 'dark' ? 'Temă întunecată' : nxt === 'light' ? 'Temă luminoasă' : 'Tema sistemului');
  }

  /* ---------- date ---------- */
  S.EXAM = new Date(2027, 5, 14, 9, 0, 0); // 14 iunie 2027, proba E.a)
  S.SIM = new Date(2027, 2, 22, 9, 0, 0);  // 22 martie 2027, simularea
  S.daysTo = (d) => Math.max(0, Math.ceil((d - new Date()) / 86400000));

  /* ---------- pornire ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    applyTheme(S.store.get('theme', 'auto'));
    const d = S.daysTo(S.EXAM);
    document.getElementById('days').innerHTML = `<b>${d}</b> zile până la proba scrisă`;
    document.querySelector('.searchbtn').insertAdjacentHTML('afterbegin', S.icon('search'));
    render();
  });
  window.addEventListener('hashchange', () => { if (location.hash !== cur.hash) render(); });
})();
