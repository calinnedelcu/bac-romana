/* Subiectul I.B — textul argumentativ. */
(function () {
  const S = window.Site;
  const C = 'var(--c2)';
  const R = 'var(--c5)';

  const barem = [
    { t: 'formularea unei opinii', p: 1, c: C, d: 'Un răspuns clar la întrebare: da sau nu.' },
    { t: 'enunțarea a două argumente (2 × 2 p)', p: 4, c: C, d: 'Clare și în acord cu opinia. Încercare de enunțare: 1 p.' },
    { t: 'dezvoltarea argumentelor (2 × 2 p)', p: 4, c: C, d: 'Clară, nuanțată. Schematism: 1 p.' },
    { t: 'valorificarea textului în dezvoltarea unui argument', p: 3, c: C, d: 'Simpla citare a unor secvențe: doar 1 p.' },
    { t: 'raportarea la experiența personală sau culturală', p: 1, c: C },
    { t: 'concluzie pertinentă', p: 1, c: C },
    { t: 'conectorii argumentării (parțial adecvați: 1 p)', p: 2, c: C, r: true },
    { t: 'limba literară: 0–1 greșeli lexicale sau gramaticale', p: 1, c: C, r: true },
    { t: 'ortografie și punctuație: 0–1 greșeli în total', p: 1, c: C, r: true },
    { t: 'așezarea în pagină, lizibilitatea', p: 1, c: C, r: true },
    { t: 'minimum 150 de cuvinte', p: 1, c: C, r: true }
  ];

  const conectori = [
    ['Opinia', ['Consider că', 'Sunt de părere că', 'În opinia mea,', 'Cred că']],
    ['Primul argument', ['În primul rând,', 'Un prim argument este că', 'Mai întâi,']],
    ['Al doilea argument', ['În al doilea rând,', 'Un alt argument îl constituie', 'Pe de altă parte,', 'De asemenea,']],
    ['Cauză / explicație', ['deoarece', 'întrucât', 'pentru că', 'dat fiind că']],
    ['Exemplu', ['De exemplu,', 'Spre exemplu,', 'Un exemplu în acest sens este', 'Această idee este ilustrată de']],
    ['Consecință', ['astfel', 'de aceea', 'prin urmare', 'ceea ce arată că']],
    ['Concluzia', ['În concluzie,', 'Așadar,', 'Prin urmare,', 'În consecință,']]
  ];

  const model = S.ans([
    '<p>', ['Consider că fotografiile au un rol important în viața unei persoane', 'opinie +1', C], ', ', ['deoarece', 'conector', R], ' păstrează vii amintirile și legăturile cu cei dragi.</p>',
    '<p>', ['În primul rând,', 'conector', R], ' ', ['fotografiile ne ajută să păstrăm amintirea oamenilor pe care i-am pierdut.', 'argument 1 +2', C], ' ',
    ['Memoria reține mai ales impresii, pe când o imagine fixează trăsăturile unui chip, așa că ea devine un sprijin pentru amintire.', 'dezvoltare +2', C], ' ',
    ['Fragmentul din jurnalul Puiei Florica Rebreanu ilustrează această idee prin țărăncile care o roagă pe pictoriță să le zugrăvească, „dintr-o fotografie aproape ștearsă”, copiii morți demult. Replica lor, „Aproape că grăiește”, arată că imaginea le redă, în parte, prezența celor dispăruți.', 'valorificarea textului +3', C], '</p>',
    '<p>', ['În al doilea rând,', 'conector', R], ' ', ['fotografiile întăresc legăturile dintre membrii unei familii.', 'argument 2 +2', C], ' ',
    ['Privite împreună, ele devin un prilej de a povesti și de a transmite celor tineri istoria familiei, astfel încât amintirile unei generații nu se pierd.', 'dezvoltare +2', C], ' ',
    [ 'De exemplu, în familia mea, albumul bunicilor este scos la fiecare sărbătoare, iar pozele vechi pornesc discuții în care aflu cum arăta satul lor și ce au trăit ei la vârsta mea.', 'experiență personală +1', C], '</p>',
    '<p>', ['În concluzie,', 'conector', R], ' ', ['fotografiile au un rol important în viața unei persoane, pentru că păstrează amintirea celor dragi și apropie generațiile unei familii.', 'concluzie +1', C], '</p>'
  ]);

  function builder() {
    const f = [
      ['op', 'Opinia ta (răspunsul la întrebare)', 'fotografiile au un rol important în viața unei persoane'],
      ['a1', 'Argumentul 1 (o propoziție)', 'fotografiile ne ajută să păstrăm amintirea celor pierduți'],
      ['d1', 'Dezvoltarea argumentului 1 + textul dat (citat și ce arată)', 'Fragmentul ilustrează această idee prin țărăncile care cer portrete pornind „dintr-o fotografie aproape ștearsă”. Replica „Aproape că grăiește” arată că imaginea le redă prezența copiilor.'],
      ['a2', 'Argumentul 2', 'fotografiile întăresc legăturile dintre membrii unei familii'],
      ['d2', 'Dezvoltarea argumentului 2 + exemplul personal sau cultural', 'De exemplu, în familia mea, albumul bunicilor pornește la fiecare sărbătoare discuții despre trecutul lor.']
    ];
    return `<div class="card" id="arg-builder">
      <div class="grid g2">${f.map(([k, l, ph]) => `<div style="${k.startsWith('d') ? 'grid-column:1/-1' : ''}"><label class="fld" for="ab-${k}">${l}</label>
        ${k.startsWith('d') ? `<textarea id="ab-${k}" data-k="${k}" style="min-height:84px" placeholder="${S.esc(ph)}"></textarea>` : `<input type="text" id="ab-${k}" data-k="${k}" placeholder="${S.esc(ph)}">`}</div>`).join('')}</div>
      <h4 style="margin-top:16px">Textul tău, așezat pe structura din barem</h4>
      <div class="ans" id="ab-out"></div>
      <div class="wc"><span><b id="ab-wc">0</b> cuvinte</span><span id="ab-wc-msg"></span><button class="btn sm" data-copy="ab-out">Copiază textul</button></div>
    </div>`;
  }

  S.page({
    id: 's1b', title: 'Subiectul I.B',
    nav: { label: 'I.B · Textul argumentativ', color: C, badge: 'I.B', pts: '20 p' },
    render() {
      return `
      <div class="page-head">
        <div class="kicker">Subiectul I · partea B · <span class="chip c2">20 de puncte</span></div>
        <h1>Textul argumentativ de 150 de cuvinte</h1>
        <p class="lead">Pornind de la același text de la I.A, primești o întrebare de tipul „dacă X sau nu”. Răspunzi cu o opinie, două argumente și o concluzie, folosind textul dat și un exemplu din experiența ta sau din cultură.</p>
        <div class="toc"><a href="#/s1b/barem">Baremul</a><a href="#/s1b/structura">Structura</a><a href="#/s1b/model">Text model</a><a href="#/s1b/text">Textul dat: 3 p sau 1 p</a><a href="#/s1b/conectori">Conectori</a><a href="#/s1b/construieste">Construiește-ți textul</a></div>
      </div>

      <h2>Cum arată cerința</h2>
      <ul class="formulari"><li>Redactează un text de minimum 150 de cuvinte, în care să argumentezi dacă fotografiile au sau nu un rol important în viața unei persoane, raportându-te atât la informațiile din fragmentul extras din volumul <em>Pământul bătătorit de părintele meu. File de jurnal</em> de Puia Florica Rebreanu, cât și la experiența personală sau culturală.</li></ul>
      <p class="small muted">Formularea din modelul oficial pentru 2025. Tema se schimbă, dar structura cerinței și baremul rămân aceleași.</p>

      <h2 id="barem">Baremul, rând cu rând</h2>
      ${S.pbar(barem)}
      <div class="grid g2">
        ${S.callout('key', '<p><strong>Ortografia și punctuația au un singur punct, pentru 0–1 greșeli în total.</strong> A doua virgulă greșită și punctul s-a dus. Scrie fraze simple și recitește.</p>')}
        ${S.callout('info', '<p><strong>Textul trebuie „să dezvolte subiectul propus”.</strong> Dacă nu răspunzi la întrebarea pusă, nu se acordă punctajul.</p>')}
      </div>

      <h2 id="structura">Structura care bifează tot baremul</h2>
      <p>Patru paragrafe, fiecare cu alineat. Așezarea în pagină se punctează, iar paragrafele îi arată evaluatorului unde e fiecare rând din barem.</p>
      <ol class="steps">
        <li><strong>Opinia (1 p).</strong> Răspunzi direct la întrebare, într-o frază. Alegi o parte: „au” sau „nu au”. Poți adăuga pe scurt de ce.</li>
        <li><strong>Argumentul 1 (2 p + 2 p) cu textul dat (3 p).</strong> Enunți argumentul într-o propoziție, îl explici, apoi arăți cum îl susține fragmentul: un citat scurt <em>și</em> ce dovedește el.</li>
        <li><strong>Argumentul 2 (2 p + 2 p) cu un exemplu personal sau cultural (1 p).</strong> Alt motiv, care susține aceeași opinie, explicat și ilustrat cu o întâmplare trăită, o carte, un film, un fapt istoric.</li>
        <li><strong>Concluzia (1 p).</strong> Reiei opinia cu alte cuvinte, eventual cu cele două argumente într-o frază.</li>
      </ol>
      <div class="tpl">
        <p>[Consider că / Sunt de părere că] [opinia: răspunsul la întrebare], deoarece [ideea generală].</p>
        <p>În primul rând, [argumentul 1]. [Explicația: de ce e adevărat]. Fragmentul dat ilustrează această idee prin [ce se întâmplă în text], iar secvența „[citat scurt]” arată că [ce dovedește citatul].</p>
        <p>În al doilea rând, [argumentul 2]. [Explicația]. De exemplu, [experiența ta sau un exemplu cultural concret], ceea ce arată că [legătura cu argumentul].</p>
        <p>În concluzie, [opinia reformulată], pentru că [argumentul 1 pe scurt] și [argumentul 2 pe scurt].</p>
      </div>

      <h2 id="model">Text model, adnotat cu baremul</h2>
      <p>Pe cerința din modelul oficial pentru 2025. Fiecare bucată marcată arată rândul din barem pe care îl bifează.</p>
      ${model}
      <p class="small muted" style="margin-top:8px">Textul are aproape 190 de cuvinte: destul peste 150 ca să fii în siguranță, fără să consume timpul eseului.</p>

      <h2 id="text">Textul dat: 3 puncte sau 1 punct</h2>
      <p>Baremul face diferența între <strong>valorificarea textului</strong> (3 p) și <strong>simpla citare a unor secvențe</strong> (1 p). Diferența e o propoziție: cea în care spui ce dovedește citatul pentru argumentul tău.</p>
      <div class="grid g2">
        ${S.ans(['În text se spune: „Aproape că grăiește”.'], { bad: true, head: '<span class="chip bad">1 p · simplă citare</span>', verdict: 'Citatul stă singur. Nu e legat de niciun argument.' })}
        ${S.ans(['Replica țărăncilor, „Aproape că grăiește”, ', ['arată că portretul le redă, în parte, prezența copiilor pierduți, deci imaginea păstrează vie amintirea.', '', C]], { head: '<span class="chip ok">3 p · valorificare</span>', verdict: 'Citatul e interpretat și pus în slujba argumentului.' })}
      </div>

      <h2>Cum găsești două argumente în două minute</h2>
      <p>Întreabă-te ce înseamnă tema pentru <strong>individ</strong> și ce înseamnă pentru <strong>ceilalți</strong>. Sau: ce efect are <strong>acum</strong> și ce efect are <strong>în timp</strong>. Din fiecare pereche iese câte un argument diferit, care susține aceeași opinie.</p>
      <div class="tbl-wrap"><table>
        <tr><th>Unghiul</th><th>Întrebarea pe care ți-o pui</th><th>Pe tema fotografiilor</th></tr>
        <tr><td>Psihologic, emoțional</td><td>Ce simte omul? Ce îl ajută să înțeleagă despre sine?</td><td>păstrează amintirea celor pierduți</td></tr>
        <tr><td>Social, familial</td><td>Ce schimbă în relația cu ceilalți?</td><td>apropie generațiile unei familii</td></tr>
        <tr><td>Cultural, istoric</td><td>Ce păstrează sau ce transmite mai departe?</td><td>documentează epoci și locuri care s-au schimbat</td></tr>
        <tr><td>Moral, practic</td><td>Ce e bine sau util? Ce costă?</td><td>(pentru „nu”) pozele în exces ne fac să trăim momentul prin ecran</td></tr>
      </table></div>
      <ul>
        <li>Ambele argumente susțin <strong>aceeași opinie</strong>. Un argument „pro” și unul „contra” nu formează un text argumentativ.</li>
        <li>Argumentele trebuie să fie <strong>diferite</strong>, nu aceeași idee spusă de două ori.</li>
        <li>Exemplul personal sau cultural trebuie să fie <strong>concret</strong>: o întâmplare anume, o carte cu titlu, un personaj cu nume. „Mulți oameni consideră că…” nu e un exemplu.</li>
      </ul>

      <h2 id="conectori">Conectori (2 puncte)</h2>
      <p>Folosește conectori la fiecare trecere: de la opinie la argument, de la argument la exemplu, la concluzie. Cei de mai jos sunt siguri și ușor de pus corect.</p>
      <div class="grid g2">${conectori.map(([g, list]) => `<div class="card tight"><h4>${g}</h4><div style="display:flex;gap:6px;flex-wrap:wrap">${list.map((c) => `<span class="chip c2">${c}</span>`).join('')}</div></div>`).join('')}</div>
      ${S.callout('trap', '<p>Pune virgulă după conectorii de la începutul frazei: <em>În primul rând,</em> <em>De exemplu,</em> <em>În concluzie,</em>. Nu pune virgulă înainte de <em>că</em> în <em>Consider că…</em> / <em>Cred că…</em>.</p>', 'Punctuația în jurul conectorilor')}

      <h2>Unde se pierd puncte</h2>
      <div class="callout trap"><ul style="margin:0">
        <li><strong>Opinie ambiguă</strong> („Fotografiile pot avea și nu pot avea un rol…”): nu e o opinie formulată.</li>
        <li><strong>Argumente fără dezvoltare</strong>: o propoziție pentru fiecare, apoi concluzia. Iei 1 p în loc de 2 la fiecare dezvoltare.</li>
        <li><strong>Textul dat lipsește sau e doar citat</strong>: pierzi 2–3 puncte.</li>
        <li><strong>Lipsește exemplul personal sau cultural</strong>: cerința spune „atât… cât și”.</li>
        <li><strong>Un singur bloc de text</strong>, fără paragrafe: riști punctul pentru așezare în pagină și pe cel pentru conectori.</li>
        <li><strong>Sub 150 de cuvinte</strong>: pierzi punctul. Țintește 180–230.</li>
      </ul></div>

      <h2 id="construieste">Construiește-ți textul</h2>
      <p>Completează câmpurile cu ideile tale pe o temă de exersare. Site-ul le așază pe structura din barem și numără cuvintele. Pentru verificare automată pe un text scris liber, folosește <a href="#/exersare">Exersează cu cronometru</a>.</p>
      ${builder()}

      <h2>Înainte să predai</h2>
      ${S.checklist('s1b', [
        'Opinia răspunde direct la întrebare și apare din prima frază.',
        'Am două argumente diferite, amândouă pentru aceeași opinie.',
        'Fiecare argument e explicat, nu doar enunțat.',
        'Am folosit textul dat: citat scurt + ce dovedește el.',
        'Am un exemplu personal sau cultural concret.',
        'Am concluzie care reia opinia.',
        'Am conectori la fiecare trecere și paragrafe cu alineat.',
        'Am cel puțin 150 de cuvinte și am recitit ortografia și virgulele.'
      ])}
      `;
    },
    anchor: (a) => a || null,
    mount(root) {
      const box = root.querySelector('#arg-builder');
      if (!box) return;
      const st = S.store.get('argb', {});
      const get = (k) => (box.querySelector(`[data-k="${k}"]`).value || '').trim();
      const cap = (s) => s ? s.charAt(0).toUpperCase() + s.slice(1) : s;
      const end = (s) => s && !/[.!?…]$/.test(s) ? s + '.' : s;
      box.querySelectorAll('[data-k]').forEach((el) => { if (st[el.dataset.k]) el.value = st[el.dataset.k]; });
      const upd = () => {
        const v = {}; box.querySelectorAll('[data-k]').forEach((el) => { v[el.dataset.k] = el.value; });
        S.store.set('argb', v);
        const op = get('op'), a1 = get('a1'), d1 = get('d1'), a2 = get('a2'), d2 = get('d2');
        const ph = (s) => `<span class="blank">${s}</span>`;
        const html = [
          `<p>Consider că ${op ? S.esc(op.replace(/[.]$/, '')) : ph('opinia ta')}.</p>`,
          `<p>În primul rând, ${a1 ? S.esc(end(a1)) : ph('argumentul 1')} ${d1 ? S.fmt(end(cap(d1))) : ph('dezvoltare + textul dat')}</p>`,
          `<p>În al doilea rând, ${a2 ? S.esc(end(a2)) : ph('argumentul 2')} ${d2 ? S.fmt(end(cap(d2))) : ph('dezvoltare + exemplu personal sau cultural')}</p>`,
          `<p>În concluzie, ${op ? S.esc(op.replace(/[.]$/, '')) : ph('opinia reformulată')}${a1 && a2 ? `, pentru că ${S.esc(a1.replace(/[.]$/, ''))} și ${S.esc(a2.replace(/[.]$/, ''))}` : ''}.</p>`
        ].join('');
        const out = box.querySelector('#ab-out'); out.innerHTML = html;
        const n = (op || a1 || d1 || a2 || d2) ? S.words(out.innerText) : 0;
        box.querySelector('#ab-wc').textContent = n;
        box.querySelector('#ab-wc-msg').innerHTML = n === 0 ? '' : n < 150 ? `<span class="chip bad">mai ai ${150 - n} până la 150</span>` : n < 180 ? '<span class="chip warn">peste minim, mai adaugă puțin</span>' : '<span class="chip ok">lungime bună</span>';
      };
      box.addEventListener('input', upd); upd();
    }
  });
})();
