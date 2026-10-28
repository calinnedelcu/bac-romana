/* Nucleul site-ului: rutare pe hash, navigare, componente comune. */
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

  /* ---------- componente ---------- */
  let uid = 0;
  S.uid = (p) => (p || 'u') + (++uid);

  // Bara de punctaj. items: [{t, p, d, r: true pentru redactare, c: 'var(--c1)'}]
  S.pbar = function (items, opts) {
    opts = opts || {};
    const id = S.uid('pb');
    const total = items.reduce((a, b) => a + b.p, 0);
    const segs = items.map((it, i) =>
      `<div class="seg${it.r ? ' r' : ''}" data-i="${i}" style="flex:${it.p};--sc:${it.c || (it.r ? 'var(--c5)' : 'var(--accent)')}" title="${esc(it.t)} — ${it.p} p"><span>${it.p}</span></div>`).join('');
    const leg = items.map((it, i) =>
      `<li data-i="${i}"><i class="sw${it.r ? ' r' : ''}" style="--sc:${it.c || (it.r ? 'var(--c5)' : 'var(--accent)')}"></i><span>${S.fmt(it.t)}${it.d ? `<span class="d">${S.fmt(it.d)}</span>` : ''}</span><span class="p">${it.p} p</span></li>`).join('');
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

  S.callout = (kind, html, title) => `<div class="callout ${kind}">${title ? `<h4>${title}</h4>` : ''}${html}</div>`;

  S.checklist = function (key, items) {
    const st = S.store.get('chk:' + key, {});
    return `<ul class="checklist" data-chk="${key}">${items.map((t, i) =>
      `<li><label><input type="checkbox" data-i="${i}"${st[i] ? ' checked' : ''}><span>${S.fmt(t)}</span></label></li>`).join('')}</ul>`;
  };

  // Răspuns adnotat: segmente [text, eticheta, culoare] sau text simplu
  S.ans = function (parts, o) {
    o = o || {};
    const html = parts.map((p) => {
      if (p === '<p>' || p === '</p>') return p;
      if (typeof p === 'string') return S.fmt(p);
      const [txt, tag, col] = p;
      if (!txt) return `<span class="tag" style="--mc:${col || 'var(--accent)'}">${esc(tag)}</span>`;
      return `<span class="mk" style="--mc:${col || 'var(--accent)'}">${S.fmt(txt)}</span>${tag ? `<span class="tag" style="--mc:${col || 'var(--accent)'}">${esc(tag)}</span>` : ''}`;
    }).join('');
    return `${o.head ? `<div class="ans-head">${o.head}</div>` : ''}<div class="ans${o.bad ? ' bad' : ''}">${html}</div>${o.verdict ? `<div class="verdict">${S.fmt(o.verdict)}</div>` : ''}`;
  };

  // Card de cerință: { id, num, title, sub, formulari[], barem[] (pbar), formula, how[], example (HTML), traps[], extra (HTML) }
  S.req = function (r) {
    return `<section class="req" id="${r.id || ''}">
      <div class="req-head"><div class="req-num">${r.num}</div><div><h3>${r.title}</h3>${r.sub ? `<div class="sub">${r.sub}</div>` : ''}</div></div>
      <div class="req-body">
        ${r.formulari ? `<div class="req-sec mt0"><h4>Cum arată cerința</h4><ul class="formulari">${r.formulari.map((f) => `<li>${S.fmt(f)}</li>`).join('')}</ul></div>` : ''}
        ${r.barem ? `<div class="req-sec"><h4>Cum se punctează</h4>${S.pbar(r.barem)}</div>` : ''}
        ${r.how ? `<div class="req-sec"><h4>Ce faci</h4><ul>${r.how.map((h) => `<li>${S.fmt(h)}</li>`).join('')}</ul></div>` : ''}
        ${r.formula ? `<div class="req-sec"><h4>Formula de răspuns</h4><div class="tpl">${r.formula.split('\n').map((l) => `<p>${S.tpl(l)}</p>`).join('')}</div></div>` : ''}
        ${r.example ? `<div class="req-sec"><h4>Exemplu de punctaj maxim</h4>${r.example}</div>` : ''}
        ${r.traps ? `<div class="req-sec"><h4>Unde se pierd puncte</h4><div class="callout trap"><ul class="mt0" style="margin:0">${r.traps.map((t) => `<li>${S.fmt(t)}</li>`).join('')}</ul></div></div>` : ''}
        ${r.extra || ''}
      </div>
    </section>`;
  };

  // Quiz cu răspuns imediat. qs: [{ stem, frag, opts[], ok, expl }]
  S.quiz = function (qs) {
    return qs.map((q, n) => `<div class="quiz-q" data-ok="${q.ok}">
      <div class="stem"><span class="chip">${n + 1} / ${qs.length}</span> <strong>${S.fmt(q.stem)}</strong></div>
      ${q.frag ? `<div class="frag">${S.fmt(q.frag).replace(/\n/g, '<br>')}</div>` : ''}
      <div class="opts">${q.opts.map((o, i) => `<button data-opt="${i}">${S.fmt(o)}</button>`).join('')}</div>
      <div class="expl" hidden>${S.fmt(q.expl)}</div>
    </div>`).join('');
  };

  // „Corectează ca evaluatorul”: alegi punctajul, apoi vezi defalcarea din barem.
  // o: { max, correct, rows: [[criteriu, puncte primite, puncte maxime, comentariu]], note }
  S.grader = function (answerHTML, o) {
    const id = S.uid('gr');
    const btns = Array.from({ length: o.max + 1 }, (_, i) => `<button data-g="${i}">${i}</button>`).join('');
    const rows = o.rows.map(([c, got, max, why]) =>
      `<tr><td>${S.fmt(c)}${why ? `<div class="small muted">${S.fmt(why)}</div>` : ''}</td><td class="num"><b>${got}</b> / ${max}</td></tr>`).join('');
    return `<div class="grader card tight" id="${id}" data-correct="${o.correct}">
      <div class="ans-head">${o.title || 'Câte puncte ia răspunsul acesta?'}</div>
      <div class="ans">${answerHTML}</div>
      <div class="btn-row grader-btns" style="align-items:center"><span class="small muted">Punctajul tău:</span><span class="seg-ctl">${btns}</span></div>
      <div class="grader-res" hidden>
        <p class="grader-msg"></p>
        <div class="tbl-wrap"><table><tr><th>Rând din barem</th><th class="num">Puncte</th></tr>${rows}
          <tr><td><b>Total</b></td><td class="num"><b>${o.correct}</b> / ${o.max}</td></tr></table></div>
        ${o.note ? `<p class="small">${S.fmt(o.note)}</p>` : ''}
      </div>
    </div>`;
  };

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

  /* ---------- pagini ---------- */
  S.page = function (p) { S.pages.push(p); S.byId[p.id] = p; };

  const NAV = [
    { label: 'Start', ids: ['acasa'] },
    { label: 'Subiectele', ids: ['s1a', 's1b', 's2', 's3'] },
    { label: 'Pentru eseu', ids: ['opere', 'constructor'] },
    { label: 'Antrenament', ids: ['exersare', 'redactare', 'examen'] }
  ];
  const ORDER = NAV.flatMap((g) => g.ids);

  function navHTML(active) {
    return NAV.map((g) => `<div class="nav-group"><div class="nav-label">${g.label}</div>${g.ids.map((id) => {
      const p = S.byId[id]; if (!p) return '';
      const n = p.nav || {};
      return `<a href="#/${id}" class="${active === id ? 'active' : ''}"><span class="dot" style="background:${n.color || 'var(--muted)'}">${n.badge || ''}</span><span>${n.label || p.title}</span>${n.pts ? `<span class="pts">${n.pts}</span>` : ''}</a>`;
    }).join('')}</div>`).join('');
  }

  function route() {
    const h = location.hash.replace(/^#\/?/, '');
    const [id, ...rest] = h.split('/');
    let page = S.byId[id];
    let arg = rest.join('/');
    if (!page) { page = S.byId.acasa; arg = ''; }
    return { page, arg: decodeURIComponent(arg || '') };
  }

  let current = null;
  function render() {
    const { page, arg } = route();
    const main = document.getElementById('page');
    const navId = page.navAs || page.id;
    document.getElementById('nav').innerHTML = navHTML(navId);
    const color = (page.nav && page.nav.color) || (S.byId[navId] && S.byId[navId].nav && S.byId[navId].nav.color) || 'var(--c1)';
    const soft = color.replace(/\)$/, '-soft)');
    document.documentElement.style.setProperty('--accent', color);
    document.documentElement.style.setProperty('--accent-soft', soft);

    const html = page.render(arg);
    const i = ORDER.indexOf(navId);
    const prev = i > 0 ? S.byId[ORDER[i - 1]] : null;
    const next = i >= 0 && i < ORDER.length - 1 ? S.byId[ORDER[i + 1]] : null;
    const pn = page.noPager ? '' : `<nav class="page-nav">${prev ? `<a href="#/${prev.id}"><small>← Înapoi</small><b>${prev.title}</b></a>` : '<span></span>'}${next ? `<a class="next" href="#/${next.id}"><small>Mai departe →</small><b>${next.title}</b></a>` : ''}</nav>`;
    main.innerHTML = html + pn;
    document.title = (page.docTitle ? page.docTitle(arg) : page.title) + ' · Bac Română, real';
    if (current !== location.hash) {
      const anchor = page.anchor && page.anchor(arg);
      if (anchor) { const el = document.getElementById(anchor); if (el) el.scrollIntoView(); } else window.scrollTo(0, 0);
    }
    current = location.hash;
    document.body.classList.remove('nav-open');
    if (page.mount) page.mount(main, arg);
  }
  S.rerender = render;

  /* ---------- interacțiuni globale (delegare) ---------- */
  document.addEventListener('click', (e) => {
    const t = e.target;
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
      if (+opt.dataset.opt !== ok) opt.classList.add('wrong');
      q.querySelector('.expl').hidden = false;
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
        : `<span class="chip ${Math.abs(d) === 1 ? 'warn' : 'bad'}">${d > 0 ? 'Prea generos' : 'Prea sever'}</span> Evaluatorul dă <b>${ok}</b> puncte. Uite de ce:`;
      return;
    }
    const rv = t.closest('.recall .rv');
    if (rv && !rv.classList.contains('shown')) { rv.classList.add('shown'); return; }
    if (t.closest('[data-menu]')) { document.body.classList.toggle('nav-open'); return; }
    if (t.closest('.scrim')) { document.body.classList.remove('nav-open'); return; }
    if (t.closest('[data-theme-toggle]')) { cycleTheme(); return; }
    const cp = t.closest('[data-copy]');
    if (cp) { const src = document.getElementById(cp.dataset.copy); if (src) S.copy(src.innerText); }
  });

  document.addEventListener('change', (e) => {
    const cb = e.target.closest('[data-chk] input');
    if (cb) {
      const key = cb.closest('[data-chk]').dataset.chk;
      const st = S.store.get('chk:' + key, {});
      st[cb.dataset.i] = cb.checked; S.store.set('chk:' + key, st);
    }
  });

  // Evidențiere segment <-> legendă la barele de punctaj
  function pbHover(e, on) {
    const el = e.target.closest('[data-pbar] [data-i]');
    if (!el) return;
    const wrap = el.closest('[data-pbar]');
    wrap.querySelectorAll(`[data-i="${el.dataset.i}"]`).forEach((x) => x.classList.toggle('hl', on));
  }
  document.addEventListener('mouseover', (e) => pbHover(e, true));
  document.addEventListener('mouseout', (e) => pbHover(e, false));

  /* ---------- temă ---------- */
  function applyTheme(t) {
    if (t === 'light' || t === 'dark') document.documentElement.setAttribute('data-theme', t);
    else document.documentElement.removeAttribute('data-theme');
    const lbl = document.getElementById('theme-label');
    if (lbl) lbl.textContent = t === 'light' ? 'Temă: luminoasă' : t === 'dark' ? 'Temă: întunecată' : 'Temă: automată';
  }
  function cycleTheme() {
    const cur = S.store.get('theme', 'auto');
    const nxt = cur === 'auto' ? 'dark' : cur === 'dark' ? 'light' : 'auto';
    S.store.set('theme', nxt); applyTheme(nxt);
  }

  /* ---------- numărătoare inversă ---------- */
  S.EXAM = new Date(2027, 5, 14, 9, 0, 0); // 14 iunie 2027, proba E.a)
  S.SIM = new Date(2027, 2, 22, 9, 0, 0);  // 22 martie 2027, simularea
  S.daysTo = (d) => Math.max(0, Math.ceil((d - new Date()) / 86400000));
  function countdown() {
    const el = document.getElementById('countdown');
    if (!el) return;
    const d = S.daysTo(S.EXAM);
    el.innerHTML = `<b>${d}</b><span>${d === 1 ? 'zi' : 'de zile'} până la proba scrisă<br>luni, 14 iunie 2027</span>`;
  }

  /* ---------- pornire ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    applyTheme(S.store.get('theme', 'auto'));
    countdown();
    render();
  });
  window.addEventListener('hashchange', render);
})();
