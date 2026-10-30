/* „Învață textul”: eseul de la clasă, învățat pe paragrafe.
   Metoda: întâi scheletul (ordinea paragrafelor și ce bifează fiecare), apoi fiecare paragraf în trepte:
   îl citești, dispar tot mai multe cuvinte, rămâne doar prima literă, apoi îl spui sau îl scrii din memorie.
   Un paragraf știut revine la repetat după 1, 2, 4, 7 și 14 zile (cutiile 1–5). */
(function () {
  const S = window.Site;
  const DAYS = [0, 1, 2, 4, 7, 14];
  const MODES = [['skel', 'Scheletul'], ['read', 'Citește'], ['hide1', 'Ascunde ⅓'], ['hide2', 'Ascunde ⅔'], ['first', 'Prima literă'], ['recall', 'Din memorie']];
  const LEVEL = { hide1: 0.34, hide2: 0.67, first: 1 };

  const day0 = () => { const d = new Date(); d.setHours(0, 0, 0, 0); return d; };
  const iso = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  const inDays = (n) => { const d = day0(); d.setDate(d.getDate() + n); return iso(d); };
  const plain = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  const WORD = /([\p{L}\p{N}]+(?:[-’'][\p{L}\p{N}]+)*)/u;
  const words = (s) => s.split(WORD).filter((_, j) => j % 2 === 1);
  // Același cuvânt e ascuns mereu la aceeași treaptă, iar treapta următoare ascunde tot ce ascundea cea dinainte.
  const rnd = (s) => { let h = 2166136261; for (const c of s) { h ^= c.codePointAt(0); h = Math.imul(h, 16777619); } return ((h >>> 0) % 1000) / 1000; };

  // Paragrafele de învățat; la varianta de examen, fără cele sărite.
  function parts(e) {
    const ex = e.examen, out = [];
    e.repere.forEach((r) => r.p.forEach((p, i) => {
      const k = `${r.r}.${i + 1}`;
      if (ex && ex.skip[k]) return;
      out.push({ k, r: r.r, n: i + 1, txt: p.replace(/\{\{|\}\}/g, ''), note: (ex && ex.par[k]) || (e.note && e.note[k]) || null });
    }));
    return out;
  }
  const lbl = (p) => `${p.r} · ${p.n}`;

  // Bucăți de text: cuvinte (de ascuns) și restul (spații, punctuație), cu îngroșările de pe foaie.
  function tokens(txt) {
    const out = []; let bold = false;
    txt.split(/(\*)/).forEach((seg) => {
      if (seg === '*') { bold = !bold; return; }
      seg.split(WORD).forEach((t, j) => { if (t) out.push({ t, w: j % 2 === 1, b: bold }); });
    });
    return out;
  }

  function masked(p, mode) {
    const lvl = LEVEL[mode];
    let wi = 0;
    return tokens(p.txt).map((x) => {
      if (!x.w) return S.esc(x.t);
      const i = wi++;
      const shown = x.b ? `<strong>${S.esc(x.t)}</strong>` : S.esc(x.t);
      if (rnd(`${p.k}:${i}`) >= lvl) return shown;
      const n = Math.min(12, [...x.t].length);
      return `<button class="lw${mode === 'first' ? ' fl' : ''}" data-w="${S.esc(x.t)}" style="--n:${n}" aria-label="Arată cuvântul">${mode === 'first' ? S.esc([...x.t][0]) : ''}</button>`;
    }).join('');
  }

  // Comparația cuvânt cu cuvânt (cea mai lungă subsecvență comună), fără să țină cont de punctuație.
  function diff(orig, typed) {
    const a = words(orig), b = words(typed);
    const A = a.map(plain), B = b.map(plain);
    const n = A.length, m = B.length;
    const L = Array.from({ length: n + 1 }, () => new Uint16Array(m + 1));
    for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--) L[i][j] = A[i] === B[j] ? L[i + 1][j + 1] + 1 : Math.max(L[i + 1][j], L[i][j + 1]);
    const st = new Array(n).fill('miss');
    let i = 0, j = 0;
    while (i < n && j < m) {
      if (A[i] === B[j]) { st[i] = a[i] === b[j] ? 'ok' : 'near'; i++; j++; } else if (L[i + 1][j] >= L[i][j + 1]) i++; else j++;
    }
    const good = st.filter((s) => s !== 'miss').length;
    let wi = 0;
    const html = tokens(orig).map((x) => x.w ? `<span class="${st[wi++]}">${S.esc(x.t)}</span>` : S.esc(x.t)).join('');
    return { score: n ? Math.round((good / n) * 100) : 0, near: st.filter((s) => s === 'near').length, extra: m - L[0][0], html };
  }

  S.learn = {
    html: (id) => `<div class="learn" data-learn="${id}"></div>`,
    mount(box, e) {
      const id = box.dataset.learn;
      const P = parts(e);
      const KEY = 'learn:' + id, UI = 'learn-ui:' + id;
      const ui = Object.assign({ k: P[0].k, mode: 'skel' }, S.store.get(UI, {}));
      if (!P.some((p) => p.k === ui.k)) ui.k = P[0].k;
      let hints = 0, shownSkel = {};

      const prog = () => S.store.get(KEY, {});
      // new = neînceput, due = de repetat azi, learn = în lucru (cutiile 1–2), ok = știut (cutia 3+)
      const status = (k) => { const s = prog()[k]; if (!s) return 'new'; return s.due <= iso(day0()) ? 'due' : s.box >= 3 ? 'ok' : 'learn'; };
      const grade = (k, g) => {
        const all = prog(); const s = all[k] || { box: 0 };
        s.box = g === 'stiu' ? Math.min(5, s.box + 1) : g === 'aproape' ? Math.max(1, s.box) : 1;
        s.due = inDays(g === 'stiu' ? DAYS[s.box] : g === 'aproape' ? 1 : 0);
        all[k] = s; S.store.set(KEY, all);
        return s;
      };
      const when = (s) => { const d = Math.round((new Date(s.due) - new Date(iso(day0()))) / 86400000); return d <= 0 ? 'azi, încă o dată' : d === 1 ? 'mâine' : `peste ${d} zile`; };

      function next() {
        const due = P.find((p) => status(p.k) === 'due');
        return due || P.find((p) => status(p.k) === 'new') || null;
      }

      function top() {
        const st = P.map((p) => status(p.k));
        const n = (x) => st.filter((s) => s === x).length;
        const nx = next();
        return `<div class="learn-top">
          <span><b>${n('ok')}</b> / ${P.length} paragrafe știute</span>
          <span><b>${n('learn')}</b> în lucru</span>
          <span><b>${n('due')}</b> de repetat azi</span>
          <span><b>${n('new')}</b> neîncepute</span>
          ${nx ? `<button class="btn sm" data-next="${nx.k}">Următorul: ${lbl(nx)} ${S.icon('arrow')}</button>` : '<span class="chip ok">ai repetat tot ce era de azi</span>'}
        </div>`;
      }

      function picker() {
        let html = '<div class="lpars" role="group" aria-label="Paragraful">';
        let lastR = '';
        P.forEach((p) => {
          if (p.r !== lastR) { html += `<span class="lr">${p.r}</span>`; lastR = p.r; }
          const s = prog()[p.k];
          html += `<button data-k="${p.k}" class="${status(p.k)}" aria-pressed="${p.k === ui.k}" title="${s ? `cutia ${s.box}` : 'neînceput'}">${p.n}</button>`;
        });
        return html + '</div>';
      }

      function skeleton() {
        let lastR = '';
        return `<p class="small muted" style="margin-top:0">Întâi ordinea: pentru fiecare paragraf vezi ce bifează în barem și încerci să-ți amintești cu ce cuvinte începe. Apasă pe linie ca să verifici.</p>
          <ol class="lskel">${P.map((p) => {
            // primele șase cuvinte, cu punctuația lor
            let nw = 0, open = '';
            for (const x of tokens(p.txt)) { if (x.w && ++nw > 6) { open = open.trimEnd() + '…'; break; } open += x.t; }
            const head = p.r !== lastR ? `<span class="lr">${p.r === 'R1' ? 'Reperul 1' : p.r === 'R2' ? 'Reperul 2' : 'Reperul 3'}</span>` : '';
            lastR = p.r;
            return `<li>${head}<button class="lsk${shownSkel[p.k] ? ' on' : ''}" data-sk="${p.k}"><span class="lid">${lbl(p)}</span><span class="lnote">${p.note ? S.esc(p.note[0]) : '…'}</span><span class="lop">${shownSkel[p.k] ? S.esc(open) : 'Cu ce începe?'}</span></button></li>`;
          }).join('')}</ol>`;
      }

      function card() {
        const p = P.find((x) => x.k === ui.k);
        const head = `<div class="lhead"><b>${lbl(p)}</b>${p.note ? `<span class="lnote">${p.note[1] ? `<span class="pt">${p.note[1]}</span> ` : ''}${S.esc(p.note[0])}</span>` : ''}<span class="muted small">${words(p.txt).length} de cuvinte</span></div>`;
        if (ui.mode === 'recall') {
          return `${head}<textarea class="paper-ta lta" id="l-ta" spellcheck="false" lang="ro" placeholder="Scrie paragraful din memorie. Sau spune-l cu voce tare și apasă „Am spus-o”."></textarea>
            <div class="lgrade"><button class="btn primary" data-check>Verifică ce am scris</button><button class="btn" data-said>Am spus-o cu voce tare</button></div>
            <div id="l-res"></div>`;
        }
        const body = ui.mode === 'read' ? S.fmt(p.txt) : masked(p, ui.mode);
        const tip = ui.mode === 'read' ? 'Citește-l o dată cu voce tare, atent la citate.'
          : ui.mode === 'first' ? 'Fiecare cuvânt a rămas doar cu prima literă. Spune paragraful întreg; apasă pe o literă dacă te blochezi.'
          : 'Spune paragraful cu voce tare, cu tot cu cuvintele ascunse. Apasă pe un spațiu gol doar dacă te blochezi.';
        return `${head}<p class="small muted" style="margin:0 0 8px">${tip}${ui.mode !== 'read' ? ` <span id="l-hints">${hints ? `Ai cerut ${hints} cuvinte.` : ''}</span>` : ''}</p>
          <div class="essay lcard"><p>${body}</p></div>
          ${ui.mode !== 'read' ? `<div class="lgrade"><span class="small muted">Cum a mers?</span>${gradeBtns()}</div><div id="l-res"></div>` : ''}`;
      }
      const gradeBtns = () => `<button class="btn sm" data-g="nu">Nu încă</button><button class="btn sm" data-g="aproape">Aproape</button><button class="btn sm primary" data-g="stiu">Știu</button>`;

      function draw() {
        S.store.set(UI, { k: ui.k, mode: ui.mode });
        box.innerHTML = `${top()}
          <div class="pick lmodes" role="group" aria-label="Treapta">${MODES.map(([m, l], i) => `<button data-mode="${m}" aria-pressed="${ui.mode === m}">${i ? i + '. ' : ''}${l}</button>`).join('')}</div>
          ${ui.mode === 'skel' ? skeleton() : picker() + card()}`;
      }

      function result(s, extra) {
        const r = box.querySelector('#l-res');
        r.innerHTML = `${extra || ''}<p class="small"><span class="chip ${s.box >= 3 ? 'ok' : s.box === 1 ? 'bad' : 'warn'}">cutia ${s.box}</span> Îl repeți ${when(s)}.</p>`;
        const nx = next();
        if (nx && nx.k !== ui.k) r.insertAdjacentHTML('beforeend', `<button class="btn sm" data-next="${nx.k}">Treci la ${lbl(nx)} ${S.icon('arrow')}</button>`);
        box.querySelector('.learn-top').outerHTML = top();
        box.querySelectorAll('.lpars [data-k]').forEach((b) => { b.className = status(b.dataset.k); });
      }

      box.addEventListener('click', (ev) => {
        const t = ev.target;
        const m = t.closest('[data-mode]');
        if (m) { ui.mode = m.dataset.mode; hints = 0; draw(); return; }
        const k = t.closest('[data-k]');
        if (k) { ui.k = k.dataset.k; hints = 0; if (ui.mode === 'skel') ui.mode = 'read'; draw(); return; }
        const nx = t.closest('[data-next]');
        if (nx) { ui.k = nx.dataset.next; hints = 0; if (ui.mode === 'skel') ui.mode = 'read'; draw(); box.scrollIntoView({ block: 'start' }); return; }
        const sk = t.closest('[data-sk]');
        if (sk) { shownSkel[sk.dataset.sk] = !shownSkel[sk.dataset.sk]; draw(); return; }
        const w = t.closest('.lw');
        if (w) { const sp = document.createElement('span'); sp.className = 'lw-r'; sp.textContent = w.dataset.w; w.replaceWith(sp); hints++; const h = box.querySelector('#l-hints'); if (h) h.textContent = `Ai cerut ${hints} ${hints === 1 ? 'cuvânt' : 'cuvinte'}.`; return; }
        const g = t.closest('[data-g]');
        if (g) { result(grade(ui.k, g.dataset.g)); return; }
        const p = P.find((x) => x.k === ui.k);
        if (t.closest('[data-check]')) {
          const ta = box.querySelector('#l-ta');
          if (!ta.value.trim()) { box.querySelector('#l-res').innerHTML = '<p class="small" style="color:var(--red)">Scrie întâi paragraful, sau apasă „Am spus-o cu voce tare”.</p>'; return; }
          const d = diff(p.txt.replace(/\*/g, ''), ta.value);
          const g2 = d.score >= 90 ? 'stiu' : d.score >= 60 ? 'aproape' : 'nu';
          const s = grade(ui.k, g2);
          result(s, `<p><strong>${d.score}%</strong> din cuvinte. ${g2 === 'stiu' ? 'Îl știi.' : g2 === 'aproape' ? 'Aproape.' : 'Încă nu.'}${d.near ? ` ${d.near} ${d.near === 1 ? 'cuvânt are' : 'cuvinte au'} diacriticele greșite.` : ''}${d.extra > 0 ? ` Ai scris ${d.extra} ${d.extra === 1 ? 'cuvânt' : 'cuvinte'} în plus.` : ''}</p>
            <div class="essay ldiff"><p>${d.html}</p></div><p class="small muted">Verde ai scris corect, galben ai scris fără diacritice corecte, roșu lipsește.</p>`);
          return;
        }
        if (t.closest('[data-said]')) {
          box.querySelector('#l-res').innerHTML = `<div class="essay"><p>${S.fmt(p.txt)}</p></div><div class="lgrade"><span class="small muted">Compară cu ce ai spus:</span>${gradeBtns()}</div>`;
        }
      });
      draw();
    }
  };
})();
