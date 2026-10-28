/* Exersează cu cronometru: foaie de scris cu numărare de cuvinte și verificări orientative. */
(function () {
  const S = window.Site;
  const C = 'var(--c5)';

  const MODES = {
    ib: { label: 'I.B · Text argumentativ', min: 150, target: [180, 250], minutes: 30, color: 'var(--c2)',
      prompt: 'Redactează un text de minimum 150 de cuvinte, în care să argumentezi dacă tehnologia apropie sau nu oamenii, raportându-te la experiența personală sau culturală.',
      note: 'Aici nu ai text-suport. La examen, cerința îți cere să te raportezi și la fragmentul de la Subiectul I.' },
    ii: { label: 'II · Comentariu de fragment', min: 50, target: [80, 130], minutes: 20, color: 'var(--c3)',
      prompt: 'Prezintă, în minimum 50 de cuvinte, două modalități de caracterizare a personajului, identificate în textul de mai jos.',
      text: () => S.FR && `${S.FR.slavici}\n\n(${S.FR.slaviciSrc})` },
    iii: { label: 'III · Eseu', min: 400, target: [500, 650], minutes: 80, color: 'var(--c4)',
      prompt: 'Redactează un eseu de minimum 400 de cuvinte, în care să prezinți particularități ale unui text narativ studiat, aparținând lui Liviu Rebreanu.' }
  };

  const rx = (s) => new RegExp(s, 'iu');
  const has = (t, list) => list.some((w) => rx('(^|[^\\p{L}])' + w + '($|[^\\p{L}])').test(t));
  const count = (t, list) => list.reduce((a, w) => a + ((t.match(new RegExp('(^|[^\\p{L}])' + w + '(?=$|[^\\p{L}])', 'giu')) || []).length), 0);
  const CONN = ['în primul rând', 'în al doilea rând', 'în al treilea rând', 'de asemenea', 'pe de altă parte', 'pe de o parte', 'deoarece', 'întrucât', 'pentru că', 'fiindcă', 'de exemplu', 'spre exemplu', 'astfel', 'de aceea', 'prin urmare', 'așadar', 'în concluzie', 'în consecință', 'însă', 'totuși', 'cu toate acestea', 'mai mult', 'în plus', 'ceea ce arată', 'de fapt'];

  function checks(mode, t) {
    const n = S.words(t);
    const paras = t.split(/\n\s*\n|\n(?=\s{2,}|\t)/).map((p) => p.trim()).filter(Boolean);
    const lines = t.split(/\n/).map((p) => p.trim()).filter(Boolean);
    const np = Math.max(paras.length, lines.length);
    const quotes = (t.match(/[„"“«][^„"“”«»]{2,}[”"»]/g) || []).length;
    const last = (lines[lines.length - 1] || '').toLowerCase();
    const M = MODES[mode];
    const out = [];
    const add = (ok, txt, p, sub) => out.push({ s: ok === true ? 'ok' : ok === 'mid' ? 'mid' : 'no', txt, p, sub });
    add(n >= M.min ? true : false, `Minimum ${M.min} de cuvinte`, mode === 'iii' ? 'condiție pt. 12 p' : mode === 'ii' ? 'condiție pt. 4 p' : '1 p', `${n} acum`);
    if (mode === 'ib') {
      add(has(t, ['consider că', 'cred că', 'sunt de părere că', 'în opinia mea', 'părerea mea', 'consider', 'susțin că']) ? true : false, 'Opinia e formulată explicit', '1 p', '„Consider că…”, „Sunt de părere că…”');
      const a = count(t, ['în primul rând', 'în al doilea rând', 'un prim argument', 'un alt argument', 'al doilea argument', 'pe de altă parte', 'de asemenea', 'mai întâi', 'apoi']);
      add(a >= 2 ? true : a === 1 ? 'mid' : false, 'Două argumente marcate', '2 × 4 p', `${a} mărci de argument găsite`);
      add(quotes >= 1 ? true : false, 'Citat din textul dat (la examen)', '3 p', 'un citat între ghilimele, apoi ce dovedește');
      add(has(t, ['de exemplu', 'spre exemplu', 'un exemplu', 'experiența mea', 'personal', 'am observat', 'romanul', 'filmul', 'cartea', 'opera', 'mi s-a întâmplat', 'în familia mea']) ? true : false, 'Exemplu personal sau cultural', '1 p');
      add(/^(în concluzie|așadar|prin urmare|în consecință|în final)/i.test(last) || has(last, ['în concluzie', 'așadar', 'prin urmare']) ? true : false, 'Concluzie în ultimul paragraf', '1 p', '„În concluzie, …”');
      const c = count(t, CONN);
      add(c >= 4 ? true : c >= 2 ? 'mid' : false, 'Conectori', '2 p', `${c} găsiți`);
      add(np >= 4 ? true : np >= 3 ? 'mid' : false, 'Paragrafe (ideal 4)', '1 p', `${np} acum · lasă un rând liber între ele`);
    }
    if (mode === 'ii') {
      const d = has(t, ['directă', 'direct', 'directe']), ind = has(t, ['indirectă', 'indirect', 'indirecte']);
      add(d && ind ? true : d || ind ? 'mid' : false, 'Numești ambele modalități: directă și indirectă', '2 p');
      add(quotes >= 2 ? true : quotes === 1 ? 'mid' : false, 'Cel puțin două citate din fragment', '4 p', `${quotes} găsite`);
      add(has(t, ['sugerează', 'evidențiază', 'arată', 'accentuează', 'conturează', 'reliefează', 'creează', 'exprimă', 'ilustrează']) ? true : false, 'Comentezi efectul, nu doar numești', '', '„sugerează”, „evidențiază”, „creează impresia”');
    }
    if (mode === 'iii') {
      add(np >= 5 ? true : np >= 3 ? 'mid' : false, 'Introducere, 3 paragrafe de cuprins, încheiere', '1 p', `${np} paragrafe acum`);
      add(has(t, ['curent', 'curentul', 'perioada', 'interbelic', 'realism', 'romantism', 'simbolism', 'modernism', 'tradiționalism', 'postbelic', 'orientare']) ? true : false, 'Reperul 1: curent / perioadă', '6 p');
      add(has(t, ['tema', 'temă']) ? true : false, 'Reperul 2: tema numită explicit', '2 p', '„Tema … este …”');
      add(has(t, ['episod', 'episodul', 'secvența', 'secvență', 'scena', 'imaginea', 'imagine']) ? true : false, 'Reperul 2: episoade / secvențe / imagini', '4 p');
      add(has(t, ['titlu', 'titlul', 'incipit', 'incipitul', 'final', 'finalul', 'conflict', 'conflictul', 'perspectiva', 'perspectivă', 'timpul', 'spațiul', 'motiv', 'motivul', 'prozodie', 'prozodia', 'compoziția', 'compoziție', 'structura', 'structură', 'naratorul', 'narator', 'notațiile', 'limbajul', 'limbaj']) ? true : false, 'Reperul 3: elemente de construcție', '6 p');
      add(has(t, ['relevant', 'semnificativ', 'contribuie', 'rolul', 'are rolul', 'deoarece', 'astfel']) ? true : false, 'Justifici relevanța elementelor', '+1 p / element');
      add(quotes >= 4 ? true : quotes >= 2 ? 'mid' : false, 'Citate (4–6 scurte)', '', `${quotes} găsite`);
    }
    return out;
  }

  function hints(t) {
    const H = [];
    if (/\bdeasemenea\b/i.test(t)) H.push('„deasemenea” se scrie <b>de asemenea</b>.');
    if (/\bnici (o|un)\b/i.test(t)) H.push('„nici o / nici un”: ca adjectiv negativ se scrie legat, <b>nicio / niciun</b> (nicio idee, niciun om).');
    if (/\b(intr|dintr|printr)[ -]?(o|un|una)\b/i.test(t) || /\b(într|dintr|printr) (o|un|una)\b/i.test(t)) H.push('<b>într-o, dintr-un, printr-o</b>: cu „î” și cu cratimă.');
    if (/\b[Ss]a\b/.test(t)) H.push('Ai scris „sa”. Verifică: <b>s-a</b> (verb: s-a întâmplat), <b>sa</b> (posesiv: casa sa) sau <b>să</b>.');
    if (/\b(sau)\s+(dus|întâmplat|născut|petrecut|schimbat|văzut|format)\b/i.test(t)) H.push('Probabil <b>s-au</b> (verb), nu „sau” (conjuncție): „s-au întâmplat”.');
    if (/\bia\s+(spus|dat|zis|cerut|arătat|plăcut)\b/i.test(t)) H.push('Probabil <b>i-a</b> (i-a spus), nu „ia”.');
    if (/\bodată\s+(cu|ce)?\s*(două|trei)/i.test(t)) H.push('„o dată” (numeral: o dată, de două ori) vs. „odată” (cândva, deodată).');
    if (/\s,/.test(t)) H.push('Ai un spațiu înainte de virgulă.');
    if (/[^\s„(]„/.test(t)) H.push('Pune un spațiu înainte de ghilimelele de deschidere.');
    const plain = (t.match(/\b(si|sa|ca|tara|cand|fata|inca|insa|catre|isi)\b/g) || []).length;
    if (plain >= 3) H.push('Par să lipsească diacriticele (ș, ț, ă, â, î). Pe foaie le scrii, iar lipsa lor e greșeală de ortografie.');
    return H;
  }

  function render() {
    const mode = S.store.get('ex:mode', 'ib');
    const M = MODES[mode];
    const draft = S.store.get('ex:txt:' + mode, '');
    return `
      <div class="page-head">
        <div class="kicker">Antrenament</div>
        <h1>Exersează cu cronometru</h1>
        <p class="lead">Scrie răspunsul ca la examen. Site-ul numără cuvintele, cronometrează și caută pe text mărcile pe care le punctează baremul. Textul rămâne salvat în browser.</p>
      </div>
      <div class="seg-ctl" id="ex-mode">${Object.entries(MODES).map(([k, m]) => `<button data-m="${k}" aria-pressed="${k === mode}">${m.label}</button>`).join('')}</div>
      <div class="card tight" style="margin-top:14px"><div class="small muted" style="font-weight:600">Cerință de exersare</div><div class="serif">${S.esc(M.prompt)}</div>
        ${M.text && M.text() ? `<div class="serif small" style="white-space:pre-line;margin-top:10px;padding:10px 12px;border-radius:9px;background:var(--surface-2);border:1px solid var(--line)">${S.fmt(M.text())}</div>` : ''}
        ${M.note ? `<p class="small muted" style="margin:8px 0 0">${S.esc(M.note)}</p>` : ''}</div>
      <div class="editor-grid">
        <div>
          <textarea id="ex-txt" placeholder="Scrie aici. Lasă un rând liber între paragrafe." spellcheck="true" lang="ro">${S.esc(draft)}</textarea>
          <div class="wc"><span><b id="ex-wc">0</b> cuvinte</span><span>ținta: ${M.target[0]}–${M.target[1]}</span></div>
          <div class="meter"><i id="ex-meter" style="background:${M.color}"></i></div>
          <div class="btn-row"><button class="btn sm" id="ex-clear">Golește</button><button class="btn sm" data-copy="ex-txt-copy">Copiază</button></div>
          <div id="ex-txt-copy" hidden></div>
        </div>
        <div class="editor-side">
          <div class="card tight">
            <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
              <span class="timer" id="ex-time">${String(M.minutes).padStart(2, '0')}:00</span>
              <span class="btn-row" style="margin:0"><button class="btn sm primary" id="ex-start">Pornește</button><button class="btn sm" id="ex-reset">↺</button></span>
            </div>
            <p class="small muted" style="margin:6px 0 0">${M.minutes} de minute, cât ai propus pe pagina de start.</p>
          </div>
          <div class="card tight">
            <h4>Verificare automată</h4>
            <ul class="checks" id="ex-checks"></ul>
            <p class="small muted" style="margin:10px 0 0">Orientativă: caută cuvinte și mărci, nu înțelege textul. Conținutul îl judeci cu baremul.</p>
          </div>
          <div class="card tight" id="ex-hints-box"><h4>Atenție la scriere</h4><ul class="small" id="ex-hints" style="margin:0"></ul></div>
        </div>
      </div>
    `;
  }

  let timer = null, left = 0, running = false;

  S.page({
    id: 'exersare', title: 'Exersează cu cronometru',
    nav: { label: 'Exersează cu cronometru', color: C, badge: '⏱' },
    render,
    mount(root) {
      const mode = S.store.get('ex:mode', 'ib');
      const M = MODES[mode];
      const ta = root.querySelector('#ex-txt');
      const upd = () => {
        const t = ta.value;
        S.store.set('ex:txt:' + mode, t);
        root.querySelector('#ex-txt-copy').textContent = t;
        const n = S.words(t);
        root.querySelector('#ex-wc').textContent = n;
        root.querySelector('#ex-meter').style.width = Math.min(100, (n / M.target[1]) * 100) + '%';
        root.querySelector('#ex-checks').innerHTML = checks(mode, t).map((c) =>
          `<li class="${c.s}"><span class="ic">${c.s === 'ok' ? '✓' : c.s === 'mid' ? '~' : '✕'}</span><span>${c.txt}${c.sub ? `<small>${c.sub}</small>` : ''}</span><span class="p">${c.p || ''}</span></li>`).join('');
        const h = hints(t);
        root.querySelector('#ex-hints').innerHTML = h.length ? h.map((x) => `<li>${x}</li>`).join('') : '<li class="muted">Nimic de semnalat deocamdată.</li>';
      };
      ta.addEventListener('input', upd); upd();
      root.querySelector('#ex-mode').addEventListener('click', (e) => {
        const b = e.target.closest('[data-m]'); if (!b) return;
        S.store.set('ex:mode', b.dataset.m); clearInterval(timer); running = false; S.rerender();
      });
      root.querySelector('#ex-clear').addEventListener('click', () => { if (!ta.value || confirm('Ștergi textul?')) { ta.value = ''; upd(); } });
      const tEl = root.querySelector('#ex-time'), bStart = root.querySelector('#ex-start');
      left = M.minutes * 60; running = false; clearInterval(timer);
      const show = () => { const m = Math.floor(Math.abs(left) / 60), s = Math.abs(left) % 60; tEl.textContent = (left < 0 ? '−' : '') + String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0'); tEl.style.color = left < 0 ? 'var(--bad)' : left < 300 ? 'var(--warn)' : ''; };
      bStart.addEventListener('click', () => {
        running = !running; bStart.textContent = running ? 'Pauză' : 'Pornește';
        clearInterval(timer);
        if (running) timer = setInterval(() => { if (!document.body.contains(tEl)) { clearInterval(timer); return; } left--; show(); }, 1000);
      });
      root.querySelector('#ex-reset').addEventListener('click', () => { clearInterval(timer); running = false; bStart.textContent = 'Pornește'; left = M.minutes * 60; show(); });
    }
  });
})();
