/* Subiectul al III-lea — eseul: tipurile de cerință, baremul pe repere, structura. */
(function () {
  const S = window.Site;
  const C = 'var(--c4)';

  const RED = [
    { t: 'introducere, cuprins, încheiere', p: 1, c: C, r: true },
    { t: 'logica înlănțuirii ideilor', p: 1, c: C, r: true },
    { t: 'analiză și argumentare (parțial: 2 p · schematism: 1 p)', p: 3, c: C, r: true, d: 'Legătura dintre idei și argumente, judecăți de valoare relevante.' },
    { t: 'limba literară (vocabular restrâns, monoton: 1 p)', p: 2, c: C, r: true },
    { t: 'ortografia (0–1 greșeli: 2 p · 2: 1 p · 3+: 0 p)', p: 2, c: C, r: true },
    { t: 'punctuația (0–1 greșeli: 2 p · 2: 1 p · 3+: 0 p)', p: 2, c: C, r: true },
    { t: 'așezarea în pagină, lizibilitatea', p: 1, c: C, r: true }
  ];

  const PART = (what, sec, el) => [
    { t: `Reper 1 · precizarea perioadei / curentului / orientării tematice`, p: 2, c: C },
    { t: 'Reper 1 · numirea a două trăsături (2 × 1 p)', p: 2, c: C },
    { t: `Reper 1 · evidențierea lor prin valorificarea ${what} (2 × 1 p)`, p: 2, c: C },
    { t: 'Reper 2 · precizarea temei', p: 2, c: C },
    { t: `Reper 2 · comentarea a două ${sec} (2 × 2 p)`, p: 4, c: C, d: 'Simpla numire sau tendința de rezumare: 1 p fiecare.' },
    { t: `Reper 3 · analiza a două ${el} (2 × 3 p)`, p: 6, c: C, d: 'Cu justificarea relevanței: 3 p · fără justificare: 2 p · schematic: 1 p.' }
  ];

  const TYPES = [
    {
      id: 'narativ', title: 'Particularități ale unui text narativ', sub: 'basm cult, nuvelă, roman',
      cerinte: [
        'Redactează un eseu de minimum 400 de cuvinte, în care să prezinți particularități ale unui text narativ studiat, aparținând lui Mihail Sadoveanu.',
        'Redactează un eseu de minimum 400 de cuvinte, în care să prezinți particularități ale unei nuvele studiate.',
        'Redactează un eseu de minimum 400 de cuvinte, în care să prezinți particularități ale unui roman psihologic sau al experienței studiat.'
      ],
      repere: ['evidențierea a două trăsături care fac posibilă încadrarea textului narativ studiat într-o perioadă, într-un curent cultural/literar sau într-o orientare tematică;', 'comentarea a două episoade/secvențe semnificative pentru tema textului narativ studiat;', 'analiza a două elemente de structură, de compoziție și/sau de limbaj, relevante pentru textul narativ studiat (de exemplu: acțiune, conflict, relații temporale și spațiale, incipit, final, tehnici narative, instanțe ale comunicării narative, perspectivă narativă, registre stilistice, limbaj etc.).'],
      barem: PART('textului', 'episoade / secvențe', 'elemente de structură, compoziție sau limbaj'),
      opere: 'Harap-Alb, Moara cu noroc, Ion, Baltagul, Ultima noapte…, Enigma Otiliei, Moromeții'
    },
    {
      id: 'poetic', title: 'Particularități ale unui text poetic', sub: 'poezie romantică, simbolistă, modernistă, postbelică',
      cerinte: ['Redactează un eseu de minimum 400 de cuvinte, în care să prezinți particularități ale unui text poetic studiat, aparținând lui George Bacovia.'],
      repere: ['evidențierea a două trăsături care fac posibilă încadrarea textului poetic într-o perioadă, într-un curent cultural/literar sau într-o orientare tematică;', 'comentarea a două imagini/idei poetice semnificative pentru tema textului poetic;', 'analiza a două elemente de compoziție și/sau de limbaj, relevante pentru textul poetic (de exemplu: titlu, incipit, relații de opoziție și de simetrie, motive poetice, figuri semantice, elemente de prozodie etc.).'],
      barem: PART('textului', 'imagini / idei poetice', 'elemente de compoziție sau limbaj').map((x) => x.d && /Simpla/.test(x.d) ? Object.assign({}, x, { d: 'Încercare de comentare: 1 p fiecare.' }) : x),
      opere: 'Luceafărul, Floare albastră, Plumb, Testament, Eu nu strivesc corola de minuni a lumii, Riga Crypto și lapona Enigel, Leoaică tânără, iubirea'
    },
    {
      id: 'dramatic', title: 'Particularități ale unui text dramatic', sub: 'comedie sau text dramatic postbelic',
      cerinte: [
        'Redactează un eseu de minimum 400 de cuvinte, în care să prezinți particularități ale unei comedii studiate.',
        'Redactează un eseu de minimum 400 de cuvinte, în care să prezinți particularități ale unui text dramatic studiat.',
        'Redactează un eseu de minimum 400 de cuvinte, în care să prezinți particularități ale unui text dramatic postbelic studiat.'
      ],
      repere: ['evidențierea a două trăsături care fac posibilă încadrarea textului dramatic studiat într-o perioadă, într-un curent cultural/literar sau într-o orientare tematică;', 'comentarea a două scene/secvențe semnificative pentru tema textului dramatic studiat;', 'analiza a două componente de structură și/sau de limbaj, relevante pentru textul dramatic studiat (de exemplu: acțiune, personaj, notațiile autorului, conflict dramatic, registre stilistice, limbaj, act, scenă etc.).'],
      barem: PART('textului dramatic', 'scene / secvențe', 'componente de structură sau limbaj'),
      note: 'La „text dramatic postbelic” lipsește perioada din primul reper (e deja dată în cerință): precizezi curentul sau orientarea tematică (2 p), apoi cele două trăsături.',
      opere: 'O scrisoare pierdută (comedie), Iona (text dramatic postbelic)'
    },
    {
      id: 'personaj', title: 'Particularități de construcție a unui personaj', sub: 'dintr-un basm cult, o nuvelă, un roman sau un text dramatic',
      cerinte: [
        'Redactează un eseu de minimum 400 de cuvinte, în care să prezinți particularități de construcție a unui personaj într-un text narativ studiat, aparținând lui Ion Creangă sau lui Ioan Slavici.',
        'Redactează un eseu de minimum 400 de cuvinte, în care să prezinți particularități de construcție a unui personaj dintr-un basm cult studiat.',
        'Redactează un eseu de minimum 400 de cuvinte, în care să prezinți particularități de construcție a unui personaj într-un roman interbelic studiat.'
      ],
      repere: ['prezentarea statutului social, psihologic, moral etc. al personajului ales;', 'evidențierea unei trăsături a personajului ales, prin două episoade/secvențe comentate;', 'analiza a două elemente de structură, de compoziție și/sau de limbaj ale textului narativ studiat, relevante pentru construcția personajului ales (de exemplu: acțiune, conflict, modalități de caracterizare, relații temporale și spațiale, incipit, final, tehnici narative, instanțe ale comunicării narative, registre stilistice, limbaj etc.).'],
      barem: [
        { t: 'Reper 1 · statutul social, psihologic, moral (punctat global)', p: 6, c: C, d: 'adecvat și nuanțat: 6 p · ezitant: 3 p · încercare / schematic: 1 p. Nu există puncte separate pe fiecare statut.' },
        { t: 'Reper 2 · menționarea trăsăturii', p: 2, c: C },
        { t: 'Reper 2 · ilustrarea ei prin două episoade comentate (2 × 2 p)', p: 4, c: C, d: 'Simpla numire sau rezumare: 1 p fiecare.' },
        { t: 'Reper 3 · analiza a două elemente, relevante pentru construcția personajului (2 × 3 p)', p: 6, c: C, d: 'Cu justificarea relevanței pentru personaj: 3 p · fără: 2 p · schematic: 1 p.' }
      ],
      opere: 'Harap-Alb, Ghiță, Ion, Vitoria Lipan, Ștefan Gheorghidiu, Otilia / Felix, Ilie Moromete; la teatru: Cațavencu, Trahanache, Iona'
    },
    {
      id: 'relatie', title: 'Relația dintre două personaje', sub: 'același tip de material ca eseul despre personaj',
      cerinte: ['Redactează un eseu de minimum 400 de cuvinte, în care să prezinți relația dintre două personaje dintr-un basm cult studiat.'],
      repere: ['prezentarea statutului social, psihologic, moral etc. al fiecăruia dintre cele două personaje;', 'evidențierea relației dintre cele două personaje, prin două episoade/secvențe comentate;', 'analiza a două elemente de structură, de compoziție și/sau de limbaj ale basmului cult studiat, semnificative pentru relația dintre personaje (de exemplu: acțiune, conflict, modalități de caracterizare, relații temporale și spațiale, incipit, final, tehnici narative, instanțe ale comunicării narative, registre stilistice, limbaj etc.).'],
      barem: [
        { t: 'Reper 1 · statutul fiecăruia dintre cele două personaje (2 × 3 p)', p: 6, c: C, d: 'adecvat și nuanțat: 3 p · ezitant: 2 p · schematic: 1 p, pentru fiecare personaj' },
        { t: 'Reper 2 · prezentarea relației', p: 2, c: C },
        { t: 'Reper 2 · ilustrarea ei prin două episoade comentate (2 × 2 p)', p: 4, c: C },
        { t: 'Reper 3 · analiza a două elemente, relevante pentru relație (2 × 3 p)', p: 6, c: C }
      ],
      note: 'În formatul actual, acest tip de eseu a fost dat la profilul uman; programa de la real nu îl exclude, pentru că se sprijină pe aceleași concepte (construcția personajelor, modalități de caracterizare). Dacă știi eseul despre personaj, ai aproape tot materialul.',
      opere: 'Harap-Alb și Spânul, Ghiță și Ana / Lică, Ion și Ana, Vitoria și Gheorghiță, Ștefan și Ela, Felix și Otilia, Ilie Moromete și fiii'
    }
  ];

  function typeCard(t, i) {
    return `<section class="req" id="${t.id}">
      <div class="req-head"><div class="req-num">${String.fromCharCode(65 + i)}</div><div><h3>${t.title}</h3><div class="sub">${t.sub}</div></div></div>
      <div class="req-body">
        <div class="req-sec mt0"><h4>Cum arată cerința</h4><ul class="formulari">${t.cerinte.map((c) => `<li>${S.esc(c)}</li>`).join('')}</ul>
        <p class="small muted" style="margin:8px 0 4px">În elaborarea eseului, vei avea în vedere următoarele repere:</p>
        <ul class="small">${t.repere.map((r) => `<li>${S.esc(r)}</li>`).join('')}</ul></div>
        <div class="req-sec"><h4>Baremul pentru conținut (18 p)</h4>${S.pbar(t.barem)}</div>
        ${t.note ? S.callout('info', `<p>${S.fmt(t.note)}</p>`) : ''}
        <div class="req-sec"><h4>Din fișe</h4><p class="small" style="margin:0">${S.esc(t.opere)}. <a href="#/constructor">Construiește planul →</a></p></div>
      </div>
    </section>`;
  }

  const CURENTE = [
    ['Romantismul', 'Eminescu', ['cultivarea sentimentului, a imaginației și a visului', 'antiteza (ideal / real, geniu / om comun, trecut / prezent)', 'natura ca spațiu ocrotitor, în rezonanță cu trăirile eului liric', 'motive: luna, lacul, codrul, visul, îngerul / demonul, geniul', 'condiția omului superior, singur într-o lume care nu-l înțelege']],
    ['Realismul', 'Slavici, Rebreanu, Călinescu, Preda', ['reflectarea veridică a realității sociale („oglinda” vieții)', 'narator omniscient, perspectivă obiectivă, relatare la persoana a III-a', 'personaje tipice în împrejurări tipice, determinate social', 'tema banului, a pământului, a ascensiunii sociale, a familiei', 'construcție riguroasă, adesea circulară (incipit simetric cu finalul)']],
    ['Simbolismul', 'Bacovia', ['sugestia în locul exprimării directe', 'simbolul (plumbul, ploaia, culorile) ca purtător de stări', 'corespondențe între culori, sunete, stări sufletești (sinestezia)', 'muzicalitatea: repetiții, refren, laitmotiv', 'teme: singurătatea, nevroza, moartea, orașul provincial']],
    ['Modernismul', 'Arghezi, Blaga, Barbu, Camil Petrescu', ['în poezie: limbaj nou, metafora surprinzătoare, ambiguitatea, intelectualizarea emoției', 'în poezie: versul liber sau prozodie inovatoare', 'în proză (modernismul lovinescian): romanul psihologic, al experienței', 'narator-personaj, perspectivă subiectivă, relatare la persoana I', 'analiza stărilor de conștiință, timp subiectiv, memorie involuntară']],
    ['Tradiționalismul', 'Sadoveanu (Baltagul, discutat și ca tradiționalist), Ion Pillat', ['satul și lumea arhaică ca spațiu al valorilor', 'credința, ritualul, legătura omului cu natura și cu ciclurile ei', 'mitul (Miorița în Baltagul)', 'nostalgia unui timp patriarhal']],
    ['Literatura postbelică', 'Preda, Nichita Stănescu, Sorescu', ['în proză: realism cu analiză a individului în istorie, satul în destrămare', 'neomodernismul (eticheta folosită pentru Nichita Stănescu și Sorescu): revenirea la lirismul modernist după realismul socialist, metafora inedită, joc al limbajului', 'în teatru: parabola, absurdul, condiția umană, monologul']]
  ];

  const AUTORI = ['Mihai Eminescu', 'Ion Creangă', 'I. L. Caragiale', 'Titu Maiorescu', 'Ioan Slavici', 'G. Bacovia', 'Lucian Blaga', 'Tudor Arghezi', 'Ion Barbu', 'Mihail Sadoveanu', 'Liviu Rebreanu', 'Camil Petrescu', 'G. Călinescu', 'E. Lovinescu', 'Marin Preda', 'Nichita Stănescu', 'Marin Sorescu'];

  S.page({
    id: 's3', title: 'Subiectul al III-lea',
    nav: { label: 'III · Eseul', color: C, badge: 'III', pts: '30 p' },
    render() {
      return `
      ${S.hero({ mark: 'III', pts: '30 p', kicker: "Subiectul al III-lea", title: "Eseul de 400 de cuvinte despre o operă studiată", facts: [["3 × 6 p", "pe repere"], ["12 p", "redactare"], ["400", "de cuvinte, minimum"], ["17", "autori canonici"]], lead: "Cerința numește un autor (uneori doi, la alegere) sau o specie și îți dă trei repere. Fiecare reper valorează 6 puncte, iar redactarea încă 12. Eseul se învață pe structură: aceleași trei repere, cu materialul din fișa operei." })}

      <h2 id="barem">Cum se punctează</h2>
      <div class="grid g2">
        <div class="card tight"><h4>Conținut: 18 p</h4><p class="small" style="margin:0">Câte 6 puncte pe fiecare reper. Ordinea în care le tratezi e la alegere. Baremul detaliat e la fiecare tip de cerință, mai jos.</p></div>
        <div class="card tight"><h4>Redactare: 12 p</h4><p class="small" style="margin:0">Doar dacă eseul are <strong>minimum 400 de cuvinte</strong> și dezvoltă subiectul propus.</p></div>
      </div>
      ${S.pbar(RED)}
      ${S.callout('key', '<p><strong>Abilitățile de analiză și argumentare (3 p)</strong> sunt partea de redactare care ține de conținut: fiecare afirmație să fie susținută de un exemplu din text, iar eseul să conțină judecăți de valoare („astfel, romanul depășește…”, „prin aceasta, opera devine…”). Un eseu care doar înșiră informații ia 1 punct aici.</p>')}

      <h2 id="structura">Structura care merge la orice cerință</h2>
      <div class="tbl-wrap"><table>
        <tr><th>Paragraful</th><th>Ce scrii</th><th class="num">Cuvinte</th></tr>
        <tr><td><b>Introducere</b></td><td>autorul, opera, anul, specia, perioada sau curentul; o frază care anunță tema sau ideea centrală</td><td class="num">50–70</td></tr>
        <tr><td><b>Reperul 1</b></td><td>precizarea curentului / perioadei + trăsătura 1 cu dovadă + trăsătura 2 cu dovadă</td><td class="num">110–150</td></tr>
        <tr><td><b>Reperul 2</b></td><td>tema, într-o frază clară + două secvențe <em>comentate</em> (ce arată pentru temă), nu povestite</td><td class="num">130–170</td></tr>
        <tr><td><b>Reperul 3</b></td><td>două elemente: ce sunt în operă + de ce sunt relevante pentru temă / viziune / personaj</td><td class="num">120–160</td></tr>
        <tr><td><b>Încheiere</b></td><td>sinteza + o judecată de valoare argumentată</td><td class="num">40–60</td></tr>
        <tr><td colspan="2"><b>Total</b></td><td class="num"><b>≈ 500–600</b></td></tr>
      </table></div>
      <div class="tpl">
        <p><b>Introducere.</b> [Opera], [specia], publicată în [anul], aparține [perioadei / curentului] și [ideea despre temă].</p>
        <p><b>Reper 1.</b> [Opera] se încadrează în [curent / perioadă] prin mai multe trăsături. O primă trăsătură este [trăsătura 1], vizibilă în [exemplu din text]. O altă trăsătură este [trăsătura 2], ilustrată de [exemplu].</p>
        <p><b>Reper 2.</b> Tema [operei] este [tema]. Un episod semnificativ este [episodul 1], în care [ce se întâmplă, pe scurt], ceea ce arată că [legătura cu tema]. Tema este ilustrată și de [episodul 2], care [comentariul].</p>
        <p><b>Reper 3.</b> Un element de structură relevant este [elementul 1]: [ce este în operă]. Acesta este semnificativ deoarece [relevanța]. Un alt element este [elementul 2], care [analiză + relevanță].</p>
        <p><b>Încheiere.</b> Prin [ce ai arătat], [opera] [judecata de valoare].</p>
      </div>

      <h2 id="tipuri">Tipurile de cerință</h2>
      <p>În formatul actual (din 2020), cerințele de la Subiectul al III-lea pentru real s-au încadrat în primele patru tipuri de mai jos; al cincilea, relația dintre două personaje, a fost dat la uman. Formulările și baremele sunt cele din documentele oficiale.</p>
      ${TYPES.map(typeCard).join('')}

      <h2 id="reper2">Reperul 2: comentezi, nu povestești</h2>
      <p>Baremul dă 2 puncte pe episod doar pentru comentariu; „simpla numire a unor episoade sau tendința de rezumare” ia 1 punct. Regula practică: o frază despre ce se întâmplă, două despre ce înseamnă.</p>
      <div class="grid g2">
        ${S.ans(['După prima vizită a lui Lică, Ghiță merge la Arad, cumpără două pistoale, își ia o a doua slugă, pe Marți, și aduce de la Fundureni doi căței, pe care îi ține în lanț.'], { bad: true, head: '<span class="chip bad">1 p · rezumat</span>' })}
        ${S.ans(['Episodul în care Ghiță cumpără pistoale și își dresează câinii ', ['arată că, după prima întâlnire cu Lică, cârciumarul începe să trăiască în teamă și neîncredere', '', C], '. ', ['Schimbarea lui, simțită de Ana, care crede că el „ține mai puțin la nevastă și la copii”, ilustrează tema nuvelei: dorința de câștig și frica îl înstrăinează treptat de familie.', '', C]], { head: '<span class="chip ok">2 p · comentariu</span>' })}
      </div>

      <h2 id="reper3">Reperul 3: 3 puncte sau 2 puncte</h2>
      <p>Elementul analizat fără să spui de ce contează primește 2 puncte. Al treilea punct vine dintr-o singură frază: <strong>relevanța</strong>, adică legătura elementului cu tema, viziunea sau personajul.</p>
      <div class="grid g2">
        ${S.ans(['Incipitul nuvelei este reprezentat de vorbele soacrei: „Omul să fie mulțumit cu sărăcia sa…”.'], { bad: true, head: '<span class="chip warn">2 p · fără relevanță</span>' })}
        ${S.ans(['Incipitul nuvelei este reprezentat de vorbele soacrei: „Omul să fie mulțumit cu sărăcia sa…”. ', ['Replica are rol de avertisment și anunță tema: dorința de îmbogățire va distruge liniștea familiei, iar finalul tragic confirmă această prevestire.', 'relevanța +1', C]], { head: '<span class="chip ok">3 p · cu relevanță</span>' })}
      </div>
      <div class="tbl-wrap"><table>
        <tr><th>Elementul</th><th>Ce analizezi</th><th>Fraza de relevanță începe cu…</th></tr>
        <tr><td>Titlul</td><td>ce anunță: un personaj, un simbol, un spațiu, o temă</td><td>„Titlul sintetizează tema / devine simbolul…”</td></tr>
        <tr><td>Incipitul și finalul</td><td>timp, spațiu, personaje; simetria lor</td><td>„Simetria incipit–final sugerează că…”</td></tr>
        <tr><td>Conflictul</td><td>exterior (între personaje, social) și interior (în conștiința personajului)</td><td>„Conflictul susține tema, pentru că…”</td></tr>
        <tr><td>Perspectiva narativă</td><td>narator omniscient / narator-personaj; persoana relatării</td><td>„Perspectiva [obiectivă] permite…”</td></tr>
        <tr><td>Timpul și spațiul</td><td>cronologic / subiectiv; real / simbolic</td><td>„Spațiul devine simbolic, pentru că…”</td></tr>
        <tr><td>Motivele poetice, figurile, prozodia</td><td>motivul central, metafora-cheie, ritmul și rima</td><td>„Motivul [X] concentrează tema…”</td></tr>
        <tr><td>Notațiile autorului, structura pe acte</td><td>didascalii, scene, comicul</td><td>„Notațiile completează caracterizarea…”</td></tr>
      </table></div>

      <h2 id="curente">Trăsăturile curentelor, pe scurt</h2>
      <p>La Reperul 1 numești două trăsături (câte 1 p) și le dovedești în text (câte 1 p). Fișele au deja trăsăturile alese pentru fiecare operă; aici le ai pe curente.</p>
      ${CURENTE.map(([n, a, list]) => S.acc(`${n} <span class="chip c4">${a}</span>`, `<ul style="margin:0">${list.map((x) => `<li>${x}</li>`).join('')}</ul>`)).join('')}

      <h2 id="autori">Autorii canonici din programa pentru real</h2>
      <p>Programa în vigoare (anexa 2 la OMEN 4.923/2013) cere studierea a cel puțin unui text din opera fiecăruia, nu studiul monografic al autorilor.</p>
      <div style="display:flex;gap:6px;flex-wrap:wrap">${AUTORI.map((a) => `<span class="chip c4">${a}</span>`).join('')}</div>
      <p class="small muted" style="margin-top:10px">La teatru, programa de la real numește comedia și „un text dramatic postbelic”. Drama ca specie apare doar în programa de la uman.</p>

      <h2 id="critici">Maiorescu și Lovinescu</h2>
      <p>Sunt autori canonici, dar critici: nu scrii eseu despre o operă a lor ca despre un roman sau o poezie. Ideile lor te ajută la încadrare și pot apărea ca text la Subiectul I.</p>
      <div class="grid g2">
        <div class="card tight"><h4>Titu Maiorescu (1840–1917)</h4><ul class="small" style="margin:0">
          <li>Conducătorul societății <b>Junimea</b> (Iași, 1863) și al revistei <em>Convorbiri literare</em>; fundamentul <b>criticismului junimist</b>.</li>
          <li><em>În contra direcției de astăzi în cultura română</em> (1868): teoria <b>formelor fără fond</b>, instituții și forme culturale preluate din Occident, fără baza care să le susțină.</li>
          <li><em>Direcția nouă în poezia și proza română</em> (1872): semnalează scriitorii noi, printre care tânărul Eminescu. Ca mentor al Junimii, i-a susținut și pe Creangă, Caragiale și Slavici.</li>
          <li>La eseu: „epoca marilor clasici” / „perioada junimistă” e o încadrare corectă pentru Eminescu, Creangă, Caragiale, Slavici.</li>
        </ul></div>
        <div class="card tight"><h4>E. Lovinescu (1881–1943)</h4><ul class="small" style="margin:0">
          <li>Conducătorul cenaclului și al revistei <b>Sburătorul</b> (1919); teoreticianul <b>modernismului</b> românesc interbelic.</li>
          <li>Teoria <b>sincronismului</b>: literatura română trebuie să se alinieze spiritului timpului european; <em>Istoria civilizației române moderne</em>.</li>
          <li>Pentru proză cerea trecerea de la lumea rurală la cea urbană, de la lirism la epic, de la roman subiectiv la roman obiectiv, și <b>intelectualizarea</b> prozei și poeziei.</li>
          <li>La eseu: „modernism (în sens lovinescian)” e o încadrare corectă pentru romanul lui Camil Petrescu și pentru poezia interbelică modernistă.</li>
        </ul></div>
      </div>

      <h2>Înainte să predai</h2>
      ${S.checklist('s3', [
        'Eseul răspunde exact la cerință: opera e a autorului cerut / din specia cerută.',
        'Fiecare reper are paragraful lui.',
        'Am numit explicit curentul / perioada și două trăsături, fiecare cu dovadă.',
        'Am scris „Tema … este …” într-o frază clară.',
        'Episoadele sunt comentate, nu povestite.',
        'La fiecare element de la reperul 3 am o frază de relevanță.',
        'Am introducere și încheiere, cu o judecată de valoare.',
        'Am peste 400 de cuvinte (ideal 500–600).'
      ])}
      `;
    },
    anchor: (a) => a || null
  });
})();
