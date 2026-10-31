/* Audio pentru eseurile de la clasă: câte un fișier pe paragraf (assets/audio/<eseu>/<R1-1>.mp3, vocea Piper „Mihai”).
   Un singur player pentru tot site-ul: asculți un paragraf sau tot textul, la viteza aleasă.
   Paragraful care se aude e marcat în pagină (data-ak="<eseu>|<R1.1>"). */
(function () {
  const S = window.Site;
  const A = new Audio();
  A.preload = 'none';
  const RATES = [0.8, 1, 1.2, 1.4];
  let q = null; // { id, qid, keys, i, title }
  let gap = 0;

  const has = (id, k) => !!(window.AUDIO && window.AUDIO[id] && window.AUDIO[id][k]);
  const dur = (id, keys) => keys.reduce((s, k) => s + ((window.AUDIO[id] || {})[k] || 0), 0);
  const src = (id, k) => `assets/audio/${id}/${k.replace('.', '-')}.mp3`;
  const mmss = (s) => `${Math.floor(s / 60)}:${String(Math.round(s % 60)).padStart(2, '0')}`;
  const lbl = (k) => k.replace('.', ' · ');
  const rate = () => S.store.get('audio:rate', 1);
  const playing = () => !!q && !A.paused;

  function load() {
    const k = q.keys[q.i];
    A.src = src(q.id, k);
    A.defaultPlaybackRate = A.playbackRate = rate();
    A.play().catch(() => {});
    if ('mediaSession' in navigator) {
      const o = S.opera && S.opera(q.id);
      navigator.mediaSession.metadata = new MediaMetadata({ title: `${o ? o.titlu : q.id} · ${lbl(k)}`, artist: 'Bac la română', album: q.title });
    }
    sync();
  }
  function start(id, keys, i, qid, title) {
    clearTimeout(gap);
    q = { id, keys, i: i || 0, qid, title };
    load();
  }
  function stop() { clearTimeout(gap); A.pause(); q = null; sync(); }
  function step(d) { if (!q) return; const n = q.i + d; if (n < 0 || n >= q.keys.length) return; clearTimeout(gap); q.i = n; load(); }

  A.addEventListener('ended', () => {
    if (q && q.i < q.keys.length - 1) { q.i++; sync(); gap = setTimeout(load, 450); } else { q = null; sync(); }
  });
  A.addEventListener('play', sync);
  A.addEventListener('pause', sync);
  A.addEventListener('timeupdate', () => {
    if (!q) return;
    const p = A.duration ? (A.currentTime / A.duration) * 100 : 0;
    document.querySelectorAll(`.abar[data-qid="${q.qid}"] .ab-prog i`).forEach((x) => { x.style.width = p + '%'; });
  });
  if ('mediaSession' in navigator) {
    navigator.mediaSession.setActionHandler('play', () => A.play());
    navigator.mediaSession.setActionHandler('pause', () => A.pause());
    navigator.mediaSession.setActionHandler('previoustrack', () => step(-1));
    navigator.mediaSession.setActionHandler('nexttrack', () => step(1));
  }

  // Starea vizibilă: paragraful marcat, butoanele de paragraf, barele „Ascultă tot”.
  function sync() {
    const curK = q && `${q.id}|${q.keys[q.i]}`;
    document.querySelectorAll('[data-ak]').forEach((el) => el.classList.toggle('playing', el.dataset.ak === curK));
    document.querySelectorAll('[data-play]').forEach((b) => {
      const on = b.dataset.play === curK && playing();
      b.classList.toggle('on', b.dataset.play === curK);
      b.innerHTML = S.icon(on ? 'pause' : 'play', 'fill');
      b.setAttribute('aria-label', on ? 'Pauză' : 'Ascultă paragraful');
    });
    document.querySelectorAll('.abar').forEach((bar) => {
      const mine = q && q.qid === bar.dataset.qid;
      bar.classList.toggle('on', !!mine);
      bar.querySelector('[data-ab="play"]').innerHTML = S.icon(mine && playing() ? 'pause' : 'play', 'fill');
      const keys = bar.dataset.keys.split(',');
      bar.querySelector('.ab-now').textContent = mine ? `Paragraful ${lbl(q.keys[q.i])} · ${q.i + 1} din ${q.keys.length}` : `${keys.length} paragrafe · ${mmss(dur(bar.dataset.id, keys) / rate())}`;
      if (!mine) bar.querySelector('.ab-prog i').style.width = '0';
      bar.querySelectorAll('[data-rate]').forEach((r) => r.setAttribute('aria-pressed', +r.dataset.rate === rate()));
    });
  }

  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-play]');
    if (b) {
      e.preventDefault();
      const [id, k] = b.dataset.play.split('|');
      if (q && `${q.id}|${q.keys[q.i]}` === b.dataset.play) { A.paused ? A.play() : A.pause(); return; }
      start(id, [k], 0, `one:${id}|${k}`, 'Paragraf');
      return;
    }
    const bar = e.target.closest('.abar');
    if (!bar) return;
    const act = e.target.closest('[data-ab]');
    const r = e.target.closest('[data-rate]');
    if (r) { S.store.set('audio:rate', +r.dataset.rate); A.defaultPlaybackRate = A.playbackRate = +r.dataset.rate; sync(); return; }
    if (!act) return;
    const mine = q && q.qid === bar.dataset.qid;
    if (act.dataset.ab === 'play') {
      if (mine) { A.paused ? A.play() : A.pause(); } else start(bar.dataset.id, bar.dataset.keys.split(','), 0, bar.dataset.qid, bar.dataset.title);
    } else if (mine && act.dataset.ab === 'prev') step(-1);
    else if (mine && act.dataset.ab === 'next') step(1);
    else if (act.dataset.ab === 'stop') stop();
  });
  // Altă pagină: oprește, ca să nu rămână un sunet fără butoane.
  window.addEventListener('hashchange', () => { if (q) stop(); });

  S.audio = {
    has,
    btn: (id, k) => has(id, k) ? `<button class="pa" data-play="${id}|${k}" aria-label="Ascultă paragraful">${S.icon('play', 'fill')}</button>` : '',
    // Bara „Ascultă tot” pentru o listă de paragrafe (varianta de examen sau eseul complet).
    bar(id, keys, scope, title) {
      keys = keys.filter((k) => has(id, k));
      if (!keys.length) return '';
      return `<div class="abar" data-id="${id}" data-qid="${id}:${scope}" data-keys="${keys.join(',')}" data-title="${S.esc(title)}">
        <button class="ab-main" data-ab="play" aria-label="Ascultă tot">${S.icon('play', 'fill')}</button>
        <div class="ab-info"><b>${S.esc(title)}</b><span class="ab-now"></span><span class="ab-prog"><i></i></span></div>
        <span class="ab-ctl"><button data-ab="prev" aria-label="Paragraful anterior">${S.icon('prev', 'fill')}</button><button data-ab="next" aria-label="Paragraful următor">${S.icon('next', 'fill')}</button></span>
        <span class="ab-rate" role="group" aria-label="Viteza">${RATES.map((v) => `<button data-rate="${v}">${String(v).replace('.', ',')}×</button>`).join('')}</span>
      </div>`;
    },
    sync
  };
})();
