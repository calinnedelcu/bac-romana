/* Subiectul I.B — textul argumentativ. Structura e cea de la clasă (ipoteză, argumentare, concluzie), pusă lângă barem. */
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

  // Grupate după locul din text, ca în schema de la clasă.
  const conectori = [
    ['Ipoteza · opinia', ['În opinia mea,', 'În viziunea mea,', 'Consider că', 'Sunt de părere că']],
    ['Argumentarea · enunțarea', ['În primul rând,', 'În al doilea rând,', 'Pe de o parte,', 'Pe de altă parte,']],
    ['Argumentarea · motivul', ['deoarece', 'pentru că', 'fiindcă', 'întrucât']],
    ['Argumentarea · dezvoltarea', ['Astfel,', 'Așadar,', 'De asemenea,']],
    ['Argumentarea · exemplul', ['De exemplu,', 'În acest sens,', 'Spre exemplu,']],
    ['Concluzia', ['În concluzie,', 'Conchid că']]
  ];

  const model = S.ans([
    '<p>', ['Fotografia este imaginea unui chip, a unui loc sau a unei clipe, surprinsă de un aparat și păstrată pe hârtie sau pe ecran.', 'captare', C], ' ',
    ['În opinia mea, fotografiile au un rol important în viața unei persoane,', 'opinie +1', C], ' ',
    ['atât prin amintirile pe care le păstrează, cât și prin legăturile pe care le creează între generațiile unei familii.', 'anticiparea argumentelor', C], '</p>',
    '<p>', ['În primul rând,', 'conector', R], ' ', ['fotografiile sunt importante deoarece păstrează vie amintirea celor pe care i-am pierdut.', 'A1 · enunțare +2', C], ' ',
    ['Astfel,', 'conector', R], ' ', ['chiar dacă memoria estompează în timp trăsăturile unui chip, o imagine le fixează și devine un sprijin pentru amintire.', 'dezvoltare +2', C], ' ',
    ['De exemplu,', 'conector', R], ' ', ['în textul extras din volumul „Pământul bătătorit de părintele meu. File de jurnal”, scris de Puia Florica Rebreanu, se evocă întâlnirea cu pictorița Ileana Colonel Antonu, la care vin țărănci care o roagă să le zugrăvească, pornind „dintr-o fotografie aproape ștearsă”, copiii morți mai demult.', 'exemplu din text', C], ' ',
    ['Replica lor, „Aproape că grăiește”, arată că portretul le redă, în parte, prezența copiilor pierduți, deci imaginea ține vie amintirea.', 'valorificare +3', C], ' ',
    ['În al doilea rând,', 'conector', R], ' ', ['fotografiile contează pentru că apropie generațiile unei familii.', 'A2 · enunțare +2', C], ' ',
    ['Așadar,', 'conector', R], ' ', ['privite împreună, pozele devin un prilej de a povesti, iar istoria familiei trece de la bunici la nepoți.', 'dezvoltare +2', C], ' ',
    ['De exemplu,', 'conector', R], ' ', ['de fiecare dată când ne adunăm de Crăciun la bunici, albumul vechi ajunge pe masă, iar pozele pornesc povești despre satul lor. Așa am aflat, la șaisprezece ani, că bunicul meu a fost primul din familie care a terminat liceul.', 'exemplu personal +1', C], '</p>',
    '<p>', ['În concluzie,', 'conector', R], ' ', ['fotografiile rămân esențiale în viața unui om: țin aproape chipurile celor care nu mai sunt și adună familia în jurul poveștilor ei.', 'concluzie +1', C], '</p>'
  ]);

  // Schema de la clasă, paragraf cu paragraf, cu punctele din barem.
  const pt = (s) => `<span class="pt">${s}</span>`;
  const schema = `
    <div class="plan-par">
      <div class="plan-par-h"><b>Paragraful 1 · Ipoteza</b><span class="chip c2">opinia · 1 p</span></div>
      <div class="plan-par-b">
        <p><strong>Fraza de captare.</strong> Definești conceptul-cheie al problematicii: ce este fotografia, prietenia, lectura, tradiția din cerință.</p>
        <p><strong>Opinia + anticiparea argumentelor.</strong> „În opinia mea,” / „În viziunea mea,” / „Consider că” + răspunsul la întrebare + cele două idei pe care le vei argumenta. ${pt('+1')}</p>
        <p><span class="chip bad">fără deoarece, pentru că, fiindcă, întrucât</span></p>
      </div>
    </div>
    <div class="plan-par">
      <div class="plan-par-h"><b>Paragraful 2 · Argumentarea (A1 + A2)</b><span class="chip c2">12 p + conectorii 2 p</span></div>
      <div class="plan-par-b">
        <div class="grid g2">
          <div>
            <p><strong>A1 · enunțarea:</strong> „În primul rând, … deoarece / pentru că …” ${pt('+2')}</p>
            <p><strong>Dezvoltarea:</strong> „Astfel,” / „Așadar,” / „De asemenea,” ${pt('+2')}</p>
            <p><strong>Exemplul din text:</strong> „De exemplu, în textul «…», scris de …, se evocă / se prezintă …” sau „În acest sens, în textul …”. Spune și ce arată citatul. ${pt('+3')}</p>
          </div>
          <div>
            <p><strong>A2 · enunțarea:</strong> „În al doilea rând, … pentru că …” ${pt('+2')}</p>
            <p><strong>Dezvoltarea:</strong> la fel ca la A1. ${pt('+2')}</p>
            <p><strong>Exemplul din viața ta:</strong> o întâmplare concretă, pe care ar putea-o trăi un elev de 16–17 ani, din clasa a XI-a. Poate fi imaginată, dar trebuie să sune adevărat: loc, moment, oameni. ${pt('+1')}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="plan-par">
      <div class="plan-par-h"><b>Paragraful 3 · Concluzia</b><span class="chip c2">1 p</span></div>
      <div class="plan-par-b">
        <p>„În concluzie, …” / „Conchid că …” + reiei A1 și A2, <strong>reformulate</strong>, nu copiate. ${pt('+1')}</p>
        <p><span class="chip bad">fără deoarece, pentru că, fiindcă, întrucât</span></p>
      </div>
    </div>`;

  const variante = `<div class="grid g2">
    <div class="card tight">
      <h4>Două argumente pro <span class="chip ok">varianta sigură</span></h4>
      <p class="small">„În primul rând, …” și „În al doilea rând, …”. Amândouă susțin opinia. E varianta din exemplul de la clasă și cea din textul-model de mai jos.</p>
    </div>
    <div class="card tight">
      <h4>Un avantaj și un dezavantaj <span class="chip warn">atenție</span></h4>
      <p class="small">„Pe de o parte, …” și „Pe de altă parte, …”. Baremul cere argumente „în concordanță cu opinia formulată”, deci dezavantajul nu are voie să contrazică ipoteza. Formulezi opinia de la început cu o condiție, iar dezavantajul arată de ce e nevoie de ea.</p>
    </div>
  </div>
  <div class="grid g2">
    ${S.ans([
      '<p>', ['În opinia mea, fotografiile au un rol important în viața unei persoane, cu condiția să nu ia locul trăirii clipei.', 'opinie cu condiție', C], '</p>',
      '<p>', ['Pe de o parte,', 'conector', R], ' fotografiile sunt prețioase deoarece păstrează amintirea celor dragi. ', ['Pe de altă parte,', 'conector', R], ' pozele făcute fără măsură ne pot face să trăim momentul prin ecran, de aceea rolul lor rămâne unul bun doar când le folosim cu măsură.</p>'
    ], { head: '<span class="chip ok">dezavantajul susține condiția din ipoteză</span>' })}
    ${S.ans(['Pe de altă parte, fotografiile nu sunt importante, pentru că oamenii își amintesc oricum lucrurile esențiale.'], { bad: true, head: '<span class="chip bad">contrazice ipoteza</span>', verdict: 'Argumentul nu mai e în acord cu opinia, deci riști punctele lui.' })}
  </div>`;

  const FIELDS = [
    ['p1', 'Paragraful 1 · Ipoteza', [
      ['cap', 'Fraza de captare (definești conceptul)', 'Fotografia este imaginea unui chip, a unui loc sau a unei clipe, păstrată pe hârtie sau pe ecran.'],
      ['op', 'Opinia + anticiparea argumentelor (după „În opinia mea,”)', 'fotografiile au un rol important în viața unei persoane, atât prin amintirile pe care le păstrează, cât și prin legăturile dintre generații']
    ]],
    ['a1', 'Paragraful 2 · A1, cu exemplul din text', [
      ['a1', 'Enunțarea, cu „deoarece” / „pentru că” (după „În primul rând,”)', 'fotografiile sunt importante deoarece păstrează vie amintirea celor pierduți'],
      ['d1', 'Dezvoltarea (Astfel, … / Așadar, …)', 'Astfel, chiar dacă memoria estompează trăsăturile unui chip, o imagine le fixează.'],
      ['t1', 'Exemplul din textul dat: titlu, autor, citat și ce arată', 'De exemplu, în textul extras din volumul „Pământul bătătorit de părintele meu. File de jurnal”, scris de Puia Florica Rebreanu, se evocă… Replica „Aproape că grăiește” arată că…']
    ]],
    ['a2', 'Paragraful 2 · A2, cu exemplul din viața ta', [
      ['a2', 'Enunțarea (după „În al doilea rând,”)', 'fotografiile contează pentru că apropie generațiile unei familii'],
      ['d2', 'Dezvoltarea', 'Așadar, privite împreună, pozele devin un prilej de a povesti.'],
      ['e2', 'Exemplul din viața ta', 'De exemplu, de fiecare dată când ne adunăm de Crăciun la bunici, albumul vechi ajunge pe masă…']
    ]],
    ['p3', 'Paragraful 3 · Concluzia', [
      ['cc', 'A1 și A2 cu alte cuvinte (după „În concluzie,”)', 'fotografiile rămân esențiale în viața unui om: țin aproape chipurile celor care nu mai sunt și adună familia în jurul poveștilor ei']
    ]]
  ];

  function builder() {
    const fld = ([k, l, ph]) => `<div><label class="fld" for="ab-${k}">${l}</label>
      <textarea id="ab-${k}" data-k="${k}" rows="2" style="min-height:64px" placeholder="${S.esc(ph)}"></textarea></div>`;
    const sec = ([, h, fs]) => `<div class="bld-sec"><h4>${h}</h4><div class="grid">${fs.map(fld).join('')}</div></div>`;
    return `<div class="card" id="arg-builder">
      ${sec(FIELDS[0])}
      <div class="grid g2">${sec(FIELDS[1])}${sec(FIELDS[2])}</div>
      ${sec(FIELDS[3])}
      <h4 style="margin-top:18px">Textul tău, pe structura de la clasă</h4>
      <div class="ans" id="ab-out"></div>
      <div class="wc"><span><b id="ab-wc">0</b> cuvinte</span><span id="ab-wc-msg"></span><button class="btn sm" data-copy="ab-out">Copiază textul</button></div>
      <h4 style="margin-top:16px">Verificări</h4>
      <ul class="checks" id="ab-checks"></ul>
    </div>`;
  }

  S.page({
    id: 's1b', title: 'Subiectul I.B',
    nav: { label: 'I.B · Textul argumentativ', color: C, badge: 'I.B', pts: '20 p' },
    render() {
      return `
      ${S.hero({ mark: 'I.B', pts: '20 p', kicker: "Subiectul I · partea B", title: "Textul argumentativ de 150 de cuvinte", facts: [["14 p", "conținut"], ["6 p", "redactare"], ["150", "de cuvinte, minimum"]], lead: "Pornind de la același text de la I.A, primești o întrebare de tipul „dacă X sau nu”. Răspunzi cu o ipoteză, două argumente și o concluzie, folosind textul dat și un exemplu din experiența ta sau din cultură." })}

      <h2>Cum arată cerința</h2>
      <ul class="formulari"><li>Redactează un text de minimum 150 de cuvinte, în care să argumentezi dacă fotografiile au sau nu un rol important în viața unei persoane, raportându-te atât la informațiile din fragmentul extras din volumul <em>Pământul bătătorit de părintele meu. File de jurnal</em> de Puia Florica Rebreanu, cât și la experiența personală sau culturală.</li></ul>
      <p class="small muted">Formularea din modelul oficial pentru 2025. Tema se schimbă, dar structura cerinței și baremul rămân aceleași.</p>

      <h2 id="barem">Baremul, rând cu rând</h2>
      ${S.pbar(barem)}
      <div class="grid g2">
        ${S.callout('key', '<p><strong>Ortografia și punctuația au un singur punct, pentru 0–1 greșeli în total.</strong> A doua virgulă greșită și punctul s-a dus. Scrie fraze simple și recitește.</p>')}
        ${S.callout('info', '<p><strong>Textul trebuie „să dezvolte subiectul propus”.</strong> Dacă nu răspunzi la întrebarea pusă, nu se acordă punctajul.</p>')}
      </div>

      <h2 id="structura">Structura de la clasă: ipoteză, argumentare, concluzie</h2>
      <p>Schema primită de la profesoara de română, din materialele de la clasă, cu punctele din barem lângă fiecare pas. Are trei paragrafe, fiecare cu alineat. Cele două argumente stau în paragraful din mijloc: A1 se sprijină pe textul dat, iar A2 pe experiența ta, adică exact cele două surse pe care le cere cerința.</p>
      ${schema}
      ${S.callout('key', '<p>Conectorii de cauză („deoarece”, „pentru că”, „fiindcă”, „întrucât”) apar <strong>doar în argumentare</strong>. În ipoteză și în concluzie nu-i folosi. Baremul punctează chiar „utilizarea corectă a conectorilor în argumentare” (2 p).</p>', 'Regula conectorilor')}

      <h3>Formula de completat</h3>
      <div class="tpl">
        <p>${S.tpl('[Fraza de captare: ce înseamnă conceptul din cerință]. În opinia mea, [opinia: răspunsul la întrebare], atât [ideea lui A1], cât și [ideea lui A2].')}</p>
        <p>${S.tpl('În primul rând, [afirmația] deoarece [argumentul 1]. Astfel, [dezvoltarea]. De exemplu, în textul [„titlul”], scris de [autorul], se evocă [ce se întâmplă], iar secvența [„citat scurt”] arată că [ce dovedește]. În al doilea rând, [afirmația] pentru că [argumentul 2]. Așadar, [dezvoltarea]. De exemplu, [o întâmplare concretă din viața ta].')}</p>
        <p>${S.tpl('În concluzie, [opinia, cu alte cuvinte]: [A1 reformulat] și [A2 reformulat].')}</p>
      </div>

      <h3>Două argumente pro sau „pe de o parte, pe de altă parte”</h3>
      ${variante}

      <h2 id="model">Text model, adnotat cu baremul</h2>
      <p>Pe cerința din modelul oficial pentru 2025, scris pe structura de la clasă. Fiecare bucată marcată arată rândul din barem pe care îl bifează.</p>
      ${model}
      <p class="small muted" style="margin-top:8px">Textul are în jur de 250 de cuvinte: destul peste 150 ca să fii în siguranță, fără să consume timpul eseului. Dacă te grăbești, scurtează dezvoltările, nu exemplele.</p>

      <h2 id="text">Textul dat: 3 puncte sau 1 punct</h2>
      <p>Baremul face diferența între <strong>valorificarea textului</strong> (3 p) și <strong>simpla citare a unor secvențe</strong> (1 p). Diferența e o propoziție: cea în care spui ce dovedește citatul pentru argumentul tău. Formula „De exemplu, în textul…, se evocă…” prezintă exemplul; propoziția următoare îl leagă de argument.</p>
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
        <li>Ambele argumente susțin <strong>aceeași opinie</strong>. Și la varianta „pe de o parte, pe de altă parte”, dezavantajul trebuie să sprijine ipoteza, nu s-o contrazică.</li>
        <li>Argumentele trebuie să fie <strong>diferite</strong>, nu aceeași idee spusă de două ori.</li>
        <li>Exemplul personal sau cultural trebuie să fie <strong>concret</strong>: o întâmplare anume, o carte cu titlu, un personaj cu nume. „Mulți oameni consideră că…” nu e un exemplu.</li>
      </ul>

      <h2 id="conectori">Conectori (2 puncte)</h2>
      <p>Grupați după locul în care îi scrii, ca în schema de la clasă. Conectorii de cauză stau doar în argumentare.</p>
      <div class="grid g2">${conectori.map(([g, list]) => `<div class="card tight"><h4>${g}</h4><div style="display:flex;gap:6px;flex-wrap:wrap">${list.map((c) => `<span class="chip c2">${c}</span>`).join('')}</div></div>`).join('')}</div>
      ${S.callout('trap', '<p>Pune virgulă după conectorii de la începutul frazei: <em>În primul rând,</em> <em>Astfel,</em> <em>De exemplu,</em> <em>În concluzie,</em>. Nu pune virgulă înainte de <em>că</em> în <em>Consider că…</em> / <em>Conchid că…</em>.</p>', 'Punctuația în jurul conectorilor')}

      <h2>Unde se pierd puncte</h2>
      ${S.callout('trap', `<ul style="margin:0">
        <li><strong>Opinie ambiguă</strong> („Fotografiile pot avea și nu pot avea un rol…”): nu e o opinie formulată.</li>
        <li><strong>Argumente fără dezvoltare</strong>: o propoziție pentru fiecare, apoi concluzia. Iei 1 p în loc de 2 la fiecare dezvoltare.</li>
        <li><strong>Textul dat lipsește sau e doar citat</strong>: pierzi 2–3 puncte.</li>
        <li><strong>Lipsește exemplul personal sau cultural</strong>: cerința spune „atât… cât și”.</li>
        <li><strong>Al doilea argument contrazice ipoteza</strong> (la „pe de o parte, pe de altă parte”): nu mai e în acord cu opinia.</li>
        <li><strong>Un singur bloc de text</strong>, fără paragrafe: riști punctul pentru așezare în pagină și pe cel pentru conectori.</li>
        <li><strong>Sub 150 de cuvinte</strong>: pierzi punctul. Țintește 180–250.</li>
      </ul>`)}

      <h2 id="construieste">Construiește-ți textul</h2>
      <p>Completează câmpurile cu ideile tale pe o temă de exersare. Site-ul le așază pe structura de la clasă, numără cuvintele și verifică regulile conectorilor. Pentru verificare automată pe un text scris liber, folosește <a href="#/exersare">Exersează cu cronometru</a>.</p>
      ${builder()}

      <h2>Înainte să predai</h2>
      ${S.checklist('s1b', [
        'Ipoteza: fraza de captare, apoi opinia, care răspunde clar la întrebare.',
        'În ipoteză am anunțat cele două argumente, fără „deoarece” sau „pentru că”.',
        'Am două argumente diferite, amândouă în acord cu opinia.',
        'Fiecare argument e enunțat cu „deoarece” / „pentru că”, apoi dezvoltat.',
        'La A1: exemplul din textul dat, cu titlu, autor, un citat scurt și ce arată el.',
        'La A2: un exemplu concret din viața mea sau din cultură.',
        'Concluzia reia A1 și A2 cu alte cuvinte, fără „deoarece” sau „pentru că”.',
        'Am cel puțin 150 de cuvinte, paragrafe cu alineat și am recitit ortografia și virgulele.'
      ])}
      `;
    },
    anchor: (a) => a || null,
    mount(root) {
      const box = root.querySelector('#arg-builder');
      if (!box) return;
      const st = S.store.get('argb2', {});
      const get = (k) => (box.querySelector(`[data-k="${k}"]`).value || '').trim();
      const cap = (s) => s ? s.charAt(0).toUpperCase() + s.slice(1) : s;
      const end = (s) => s && !/[.!?…]$/.test(s) ? s + '.' : s;
      const bare = (s) => s.replace(/[.]$/, '');
      const rx = (w) => new RegExp('(^|[^\\p{L}])' + w + '($|[^\\p{L}])', 'iu');
      const has = (t, list) => list.some((w) => rx(w).test(t));
      const CAUZ = ['deoarece', 'pentru că', 'fiindcă', 'întrucât'];
      const DEZV = ['astfel', 'așadar', 'de asemenea', 'prin urmare', 'în plus', 'mai mult'];
      box.querySelectorAll('[data-k]').forEach((el) => { if (st[el.dataset.k]) el.value = st[el.dataset.k]; });
      const upd = () => {
        const v = {}; box.querySelectorAll('[data-k]').forEach((el) => { v[el.dataset.k] = el.value; });
        S.store.set('argb2', v);
        const f = {}; ['cap', 'op', 'a1', 'd1', 't1', 'a2', 'd2', 'e2', 'cc'].forEach((k) => { f[k] = get(k); });
        const ph = (s) => `<span class="blank">${s}</span>`;
        // fiecare bucată: [text completat sau null, placeholder]
        const part = (val, show, label) => val ? show(val) : ph(label);
        const p1 = [part(f.cap, (x) => S.fmt(end(cap(x))), 'fraza de captare'), part(f.op, (x) => 'În opinia mea, ' + S.fmt(end(x)), 'opinia + anticiparea argumentelor')];
        const p2 = [part(f.a1, (x) => 'În primul rând, ' + S.fmt(end(x)), 'A1 cu „deoarece”'), part(f.d1, (x) => S.fmt(end(cap(x))), 'dezvoltare'), part(f.t1, (x) => S.fmt(end(cap(x))), 'exemplul din text'),
          part(f.a2, (x) => 'În al doilea rând, ' + S.fmt(end(x)), 'A2 cu „pentru că”'), part(f.d2, (x) => S.fmt(end(cap(x))), 'dezvoltare'), part(f.e2, (x) => S.fmt(end(cap(x))), 'exemplul din viața ta')];
        const p3 = [part(f.cc, (x) => 'În concluzie, ' + S.fmt(end(bare(x))), 'concluzia: A1 și A2 reformulate')];
        box.querySelector('#ab-out').innerHTML = [p1, p2, p3].map((p) => `<p>${p.join(' ')}</p>`).join('');
        const plain = [f.cap, f.op && 'În opinia mea, ' + f.op, f.a1 && 'În primul rând, ' + f.a1, f.d1, f.t1, f.a2 && 'În al doilea rând, ' + f.a2, f.d2, f.e2, f.cc && 'În concluzie, ' + f.cc].filter(Boolean).join(' ');
        const n = S.words(plain);
        box.querySelector('#ab-wc').textContent = n;
        box.querySelector('#ab-wc-msg').innerHTML = n === 0 ? '' : n < 150 ? `<span class="chip bad">mai ai ${150 - n} până la 150</span>` : n < 180 ? '<span class="chip warn">peste minim, mai adaugă puțin</span>' : '<span class="chip ok">lungime bună</span>';
        const out = [];
        const add = (s, txt, p, sub) => out.push({ s, txt, p, sub });
        if (f.cap || f.op) add(has(f.cap + ' ' + f.op, CAUZ) ? 'no' : 'ok', 'Ipoteza fără „deoarece” / „pentru că”', '', 'regula de la clasă');
        if (f.a1 || f.a2) { const k = [f.a1, f.a2].filter((x) => has(x, CAUZ)).length; add(k === 2 ? 'ok' : k === 1 ? 'mid' : 'no', 'A1 și A2 enunțate cu „deoarece” / „pentru că”', '2 × 2 p', `${k} din 2`); }
        if (f.d1 || f.d2) { const k = [f.d1, f.d2].filter((x) => has(x, DEZV)).length; add(k === 2 ? 'ok' : k === 1 ? 'mid' : 'no', 'Dezvoltări legate cu „Astfel”, „Așadar”, „De asemenea”', '2 × 2 p', `${k} din 2`); }
        if (f.t1) add(/„[^”]{2,}”/.test(f.t1) ? 'ok' : 'no', 'Exemplul din text are un citat între „ ”', '3 p', 'apoi spune ce arată citatul');
        if (f.a2 || f.d2) add(f.e2 ? 'ok' : 'no', 'A2 are un exemplu din viața ta', '1 p');
        if (f.cc) add(has(f.cc, CAUZ) ? 'no' : 'ok', 'Concluzia fără „deoarece” / „pentru că”', '', 'reiei A1 și A2 cu alte cuvinte');
        if (n) add(n >= 150 ? 'ok' : 'no', 'Minimum 150 de cuvinte', '1 p', `${n} acum`);
        box.querySelector('#ab-checks').innerHTML = out.length ? out.map((c) =>
          `<li class="${c.s}"><span class="ic">${c.s === 'ok' ? '✓' : c.s === 'mid' ? '~' : '✕'}</span><span>${c.txt}${c.sub ? `<small>${c.sub}</small>` : ''}</span><span class="p">${c.p || ''}</span></li>`).join('')
          : '<li><span class="ic"></span><span class="muted">Completează câmpurile și verificările apar aici.</span><span></span></li>';
      };
      box.addEventListener('input', upd); upd();
    }
  });
})();
