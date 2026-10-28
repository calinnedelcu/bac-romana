/* Subiectul I.A — cinci cerințe de înțelegere a textului. */
(function () {
  const S = window.Site;
  const C = 'var(--c1)';
  const R = 'var(--c5)';
  const form = [
    { t: 'formularea răspunsului în enunț', p: 1, c: C, r: true, d: 'Propoziție completă, cu subiect și predicat, care reia cerința.' },
    { t: 'corectitudinea exprimării, ortografie și punctuație', p: 1, c: C, r: true, d: 'Se acordă chiar dacă răspunsul nu e corect, dacă dezvoltă cerința.' }
  ];

  const verbs = [
    ['Indică / Menționează / Notează', 'Doar informația cerută, exact cum reiese din text. Fără comentarii.', 'o propoziție'],
    ['Precizează', 'Numești clar elementul cerut (o caracteristică, o atitudine, o stare).', 'o propoziție'],
    ['…justificându-ți răspunsul cu o secvență', 'Un citat scurt din text, între ghilimele, care dovedește exact ce ai spus.', '+ un citat'],
    ['Explică', 'Numești motivul / rolul și spui *de ce*: legătura cu textul, într-o a doua propoziție.', '2 propoziții'],
    ['Prezintă, în 30–50 de cuvinte', 'Numești ce se cere și dezvolți nuanțat, cu un detaliu din text, în limita de cuvinte.', '30–50 de cuvinte'],
    ['…utilizând informațiile din textul dat', 'Răspunsul vine din text, nu din ce știi tu despre subiect.', '']
  ];

  const r1 = S.req({
    id: 'c1', num: 1, title: 'Sensul din text al unui cuvânt și al unei secvențe',
    formulari: ['Indică sensul din text al cuvântului *depășit* și al secvenței *pe larg*.', 'Indică sensul din text al secvenței *pe neașteptate* și al cuvântului *împrejurare*.', 'Indică sensul din text al secvenței *în toată vremea*. (doar o secvență: valorează singură 4 p)'],
    barem: [
      { t: 'sensul cuvântului', p: 2, c: C, d: 'În modelul oficial: *învechit*.' },
      { t: 'sensul secvenței', p: 2, c: C, d: 'În modelul oficial: *detaliat*.' },
      ...form
    ],
    how: [
      'Caută cuvântul în text și citește toată propoziția. Se cere sensul *din context*, nu primul sens din dicționar.',
      'Dă un sinonim de aceeași parte de vorbire și în aceeași formă: la un adjectiv, un adjectiv (*depășit → învechit*); la un verb la perfect compus, tot un verb la perfect compus.',
      'Verifică prin înlocuire: pune sinonimul în propoziția din text. Dacă fraza își păstrează sensul, e corect.',
      'La secvență (o expresie, o locuțiune) poți da un sinonim sau o scurtă explicație (*pe larg → detaliat, în amănunt*).',
      'Ghilimelele la sensul dat sunt bune, dar nu obligatorii: baremul precizează că scrierea fără ghilimele a cuvântului care indică sensul nu se consideră greșeală.'
    ],
    formula: 'În textul dat, cuvântul „[cuvântul]” are sensul de „[sinonim]”, iar secvența „[secvența]” înseamnă „[sinonim / explicație scurtă]”.',
    example: S.ans([
      'În textul dat, cuvântul „depășit” are sensul de ', ['„învechit”', '+2', C],
      ', iar secvența „pe larg” înseamnă ', ['„detaliat, în amănunt”', '+2', C], '.',
      ['', 'enunț +1', R], ['', 'exprimare +1', R]
    ]),
    traps: [
      'Sinonim din altă parte de vorbire (*depășit → învechire*): sensul e corect ca idee, dar nu se potrivește în text.',
      'Sensul de bază în loc de cel din context (*depășit → întrecut*, ca într-o cursă).',
      'Răspuns telegrafic, fără enunț: „depășit = învechit”. Pierzi punctul pentru enunț.'
    ]
  });

  const r2 = S.req({
    id: 'c2', num: 2, title: 'Informații din text',
    formulari: ['Menționează două domenii artistice în care se manifestă talentul Ileanei Colonel Antonu, utilizând informațiile din textul dat.', 'Menționează domeniul în care se încadrează studiul la care lucrează Dinu Pillat, utilizând informațiile din textul dat.'],
    barem: [
      { t: 'informațiile cerute (aici: cele două domenii)', p: 4, c: C, d: 'În modelul oficial: *pictura și muzica*. Când se cer două elemente, baremul dă fie 2 + 2 p, fie 4 p pe amândouă.' },
      ...form
    ],
    how: [
      'Subliniază în text locurile unde apare informația. Uneori e spusă direct, alteori trebuie dedusă dintr-o acțiune (pictorița *a cântat și a fluierat doine* → muzica).',
      'Dă exact numărul de elemente cerut și formulează-le cu cuvintele tale, scurt.',
      'Reia cerința în propoziție, ca să fie clar despre ce vorbești.'
    ],
    formula: '[Elementele cerute, cu subiectul din cerință] sunt [informația 1] și [informația 2].',
    example: S.ans([
      'Cele două domenii artistice în care se manifestă talentul Ileanei Colonel Antonu sunt ', ['pictura și muzica', '+4', C], '.',
      ['', 'enunț +1', R], ['', 'exprimare +1', R]
    ]),
    traps: [
      'Copiezi fraza întreagă din text în loc să numești informația.',
      'Adaugi lucruri care nu sunt în text („și dansul, probabil”). Cerința spune *utilizând informațiile din textul dat*.'
    ]
  });

  const r3 = S.req({
    id: 'c3', num: 3, title: 'O caracteristică / atitudine, justificată cu o secvență din text',
    formulari: ['Precizează o caracteristică a scrisorii trimise de Radu soției sale, justificându-ți răspunsul cu o secvență semnificativă din textul dat.', 'Precizează o reacție a familiei la primirea pachetului trimis de Pia, justificându-ți răspunsul cu o secvență semnificativă din textul dat.', 'Precizează [o atitudine / o stare / o trăsătură / locul / momentul zilei / profesia…], justificându-ți răspunsul cu o secvență din text.'],
    barem: [
      { t: 'precizarea caracteristicii', p: 2, c: C, d: 'În modelul oficial: *dimensiunea amplă*.' },
      { t: 'justificarea cu o secvență din text', p: 2, c: C, d: 'În modelul oficial: *„Scrisoarea lui Radu, pe optsprezece pagini”*.' },
      ...form
    ],
    how: [
      'Numește caracteristica printr-un substantiv sau un adjectiv clar (*amploarea, umorul, sinceritatea*).',
      'Copiază din text o secvență scurtă (câteva cuvinte, cel mult o propoziție), între ghilimele „…”, care dovedește *exact* caracteristica numită.',
      'Leagă cele două: *după cum reiese din secvența…*, *fapt dovedit de…*.'
    ],
    formula: 'O caracteristică a [ce se cere] este [caracteristica], după cum reiese din secvența „[citat scurt din text]”.',
    example: S.ans([
      'O caracteristică a scrisorii trimise de Radu soției sale este ', ['dimensiunea amplă', '+2', C],
      ', după cum reiese din secvența ', ['„Scrisoarea lui Radu, pe optsprezece pagini”', '+2', C], '.',
      ['', 'enunț +1', R], ['', 'exprimare +1', R]
    ]) + `<p class="small muted" style="margin-top:8px">Merge și „umorul”, justificat cu „ne-a delectat prin umorul ei dens”. Se punctează orice răspuns corect și justificat.</p>`,
    traps: [
      'Citat care nu dovedește caracteristica aleasă (alegi „umorul”, dar citezi „pe optsprezece pagini”). Pierzi cele 2 puncte de justificare.',
      'Citat fără ghilimele sau parafrazat. Cerința spune *secvență din text*: copiezi exact.',
      'Citat lung, de trei rânduri: nu mai e clar ce dovedește.'
    ]
  });

  const r4 = S.req({
    id: 'c4', num: 4, title: 'Explicarea unui motiv, a unui rol, a unei atitudini',
    formulari: ['Explică un motiv pentru care Liviu Rebreanu scria scrisori imediat după câte un eveniment.', 'Explică un motiv pentru care Dinu Pillat și familia sa preferă să părăsească duminica Bucureștiul.', 'Explică motivul dezamăgirii sergentului, valorificând ultimul paragraf din textul dat.'],
    barem: [
      { t: 'precizarea motivului', p: 2, c: C, d: 'În modelul oficial: *împărtășirea detaliată a experienței*.' },
      { t: 'explicare nuanțată (încercare de explicare: 1 p)', p: 2, c: C, d: 'Aici se pierd cele mai multe puncte: nu ajunge să numești motivul.' },
      ...form
    ],
    how: [
      'Prima propoziție: *motivul*, numit clar.',
      'A doua propoziție: *de ce*. Arată legătura cu textul (ce detaliu din text îl susține) și ce consecință are. Asta e explicarea nuanțată.',
      'Folosește conectori de cauză și consecință: *deoarece, întrucât, astfel, de aceea, ceea ce arată că*.'
    ],
    formula: 'Un motiv pentru care [reiei cerința] este [motivul].\n[Explicația: legătura cu un detaliu din text], ceea ce arată că [consecința / ce dezvăluie despre persoană].',
    example: S.ans([
      'Un motiv pentru care Liviu Rebreanu scria scrisori imediat după un eveniment este ', ['dorința de a-și împărtăși detaliat experiența celor dragi', '+2', C], '. ',
      ['Scriind „în ceasurile imediat următoare”, când amintirile erau încă proaspete, el putea reda toate amănuntele întâmplărilor, iar scrisul devenea pentru el un mod de relaxare după o zi încărcată.', '+2', C],
      ['', 'enunț +1', R], ['', 'exprimare +1', R]
    ]),
    traps: [
      'Numești motivul și te oprești: iei 2 + 1 + 1 = 4 din 6.',
      'Repeți motivul cu alte cuvinte în loc să-l explici („scria imediat pentru că voia să scrie imediat”).',
      'Începi cu „Deoarece…” fără propoziție principală: enunțul e incomplet.'
    ]
  });

  const r5 = S.req({
    id: 'c5', num: 5, title: 'Prezentare în 30–50 de cuvinte',
    sub: 'O reacție, o atitudine, o trăsătură, o relație, un sentiment',
    formulari: ['Prezintă, în 30–50 de cuvinte, reacția femeilor la vederea portretelor realizate pornind de la fotografii în care apar copiii lor, așa cum reiese din textul dat.', 'Prezintă, în 30–50 de cuvinte, o trăsătură morală a lui Dinu, desprinsă din al treilea paragraf al textului.', 'Prezintă, în 30–50 de cuvinte, [atitudinea lui X față de Y / relația dintre X și Y / o stare / un efect / opinia lui X despre… / modul în care… / atmosfera…], așa cum reiese din textul dat.'],
    barem: [
      { t: 'precizarea (aici: reacția)', p: 2, c: C, d: 'În modelul oficial: *uimire*.' },
      { t: 'prezentare adecvată și nuanțată (încercare: 1 p)', p: 2, c: C, d: 'Cum se manifestă, cu un detaliu din text.' },
      { t: 'respectarea numărului de cuvinte', p: 1, c: C, r: true, d: 'Între 30 și 50. Și sub, și peste se depunctează.' },
      { t: 'corectitudinea exprimării, ortografie și punctuație', p: 1, c: C, r: true }
    ],
    how: [
      'Atenție: aici *nu* există punct separat pentru enunț, ci unul pentru *numărul de cuvinte*. 30–50 înseamnă și minim, și maxim.',
      'Prima propoziție: numești clar ce se cere (reacția, trăsătura).',
      'Apoi o propoziție sau două care arată cum se vede în text: un gest, o replică, un citat scurt. Asta face prezentarea „nuanțată”.',
      'Numără cuvintele pe ciornă. Țintește 38–45, ca să ai marjă în ambele direcții.'
    ],
    formula: '[Cine] [reacționează / se dovedește] cu [reacția / trăsătura], [cum se manifestă în text].\n[Un detaliu sau un citat scurt din text], ceea ce arată [ce dezvăluie].',
    example: S.ans([
      'Femeile reacționează cu ', ['uimire și cu o mulțumire deplină', '+2', C], ' atunci când văd portretele copiilor lor morți. ',
      ['Recunoscându-i în tablourile pictoriței, ele simt că micuții au revenit parcă la viață, lucru exprimat prin replica „Aproape că grăiește”.', '+2', C],
      ['', '36 de cuvinte +1', R], ['', 'exprimare +1', R]
    ]),
    traps: [
      'Peste 50 de cuvinte: pierzi punctul, oricât de bun ar fi conținutul.',
      'Doar numești reacția („Femeile sunt uimite.”): sub 30 de cuvinte și fără prezentare.',
      'Povestești textul în loc să prezinți reacția.'
    ]
  });

  const grade1 = S.grader(S.fmt('„Depășit” înseamnă „învechit”, iar „pe larg” înseamnă „în detaliu”.'), {
    title: 'Corectează ca evaluatorul — cerința 1', max: 6, correct: 6,
    rows: [['sensul cuvântului', 2, 2, '*învechit* e chiar exemplul din barem.'], ['sensul secvenței', 2, 2, '*în detaliu* = detaliat.'], ['enunț', 1, 1, 'E o frază completă, cu predicat.'], ['exprimare, ortografie, punctuație', 1, 1]],
    note: 'Formula nu trebuie să fie lungă. Contează să fie o propoziție, nu o listă cu semne de egal.'
  });
  const grade2 = S.grader(S.fmt('Scrisoarea era lungă.'), {
    title: 'Corectează ca evaluatorul — cerința 3', max: 6, correct: 4,
    rows: [['precizarea caracteristicii', 2, 2, '*lungă* = dimensiunea amplă.'], ['justificarea cu o secvență din text', 0, 2, 'Lipsește citatul. Cerința spunea „justificându-ți răspunsul”.'], ['enunț', 1, 1], ['exprimare', 1, 1]],
    note: 'Puncte pierdute doar pentru că lipsesc câteva cuvinte copiate din text: „pe optsprezece pagini”.'
  });
  const grade3 = S.grader(S.fmt('Pentru că voia să le povestească tot.'), {
    title: 'Corectează ca evaluatorul — cerința 4', max: 6, correct: 3,
    rows: [['precizarea motivului', 2, 2, 'Ideea e corectă: împărtășirea detaliată.'], ['explicare nuanțată', 0, 2, 'Nicio explicație, nicio legătură cu textul.'], ['enunț', 0, 1, 'Începe cu „Pentru că”: e o subordonată fără propoziția principală, deci nu e un enunț complet care să răspundă cerinței.'], ['exprimare', 1, 1]],
    note: 'Cu aceeași idee, formula „Un motiv pentru care… este… + de ce” aducea 6 puncte.'
  });

  S.page({
    id: 's1a', title: 'Subiectul I.A',
    nav: { label: 'I.A · Înțelegerea textului', color: C, badge: 'I.A', pts: '30 p' },
    render() {
      return `
      <div class="page-head">
        <div class="kicker">Subiectul I · partea A · <span class="chip c1">30 de puncte</span></div>
        <h1>Cinci întrebări despre un text pe care nu l-ai mai văzut</h1>
        <p class="lead">Primești un text nonliterar: un fragment de jurnal, memorii, o scrisoare, un interviu sau un articol. Urmează cinci cerințe, fiecare de 6 puncte, la care răspunzi în enunțuri.</p>
        <div class="toc">${['c1', 'c2', 'c3', 'c4', 'c5'].map((c, i) => `<a href="#/s1a/${c}">Cerința ${i + 1}</a>`).join('')}<a href="#/s1a/corectare">Corectează tu</a></div>
      </div>

      <h2>Regula de aur: fiecare răspuns e un enunț</h2>
      <p>Cerința spune explicit: <span class="q">„Scrie pe foaia de examen, în enunțuri, răspunsul la fiecare dintre următoarele cerințe.”</span> La cerințele 1–4, 2 din cele 6 puncte sunt pentru formă: unul pentru enunț și unul pentru exprimare, ortografie și punctuație.</p>
      <div class="grid g2">
        ${S.ans(['Pictura și muzica.'], { bad: true, head: '<span class="chip bad">fără enunț</span>', verdict: 'Fără predicat. Pierzi punctul pentru enunț.' })}
        ${S.ans([['Cele două domenii', '', C], ' în care se manifestă talentul pictoriței ', ['sunt', '', C], ' pictura și muzica.'], { head: '<span class="chip ok">enunț complet</span>', verdict: 'Subiect și predicat, reia cerința. Punctul e sigur.' })}
      </div>
      ${S.callout('key', '<p><strong>Nu lăsa nicio cerință goală.</strong> Baremul spune că punctele de enunț și de exprimare se dau „chiar dacă acesta nu este corect sau complet”, dacă răspunsul dezvoltă cerința. O încercare pe subiect valorează cel puțin 2 puncte.</p>')}

      <h2>Ce înseamnă fiecare verb din cerință</h2>
      <div class="tbl-wrap"><table>
        <tr><th>Verbul</th><th>Ce scrii</th><th>Cât</th></tr>
        ${verbs.map(([v, w, l]) => `<tr><td><strong>${v}</strong></td><td>${S.fmt(w)}</td><td class="small muted">${l}</td></tr>`).join('')}
      </table></div>

      <h2>Cum lucrezi textul</h2>
      <ol class="steps">
        <li><strong>Citește întâi cerințele</strong>, apoi textul. Așa știi ce cauți și subliniezi din prima lectură.</li>
        <li><strong>Notează pe ciornă tipul textului</strong> (jurnal, scrisoare, memorii, interviu) și cine vorbește. Ajută la cerințele despre atitudini și reacții.</li>
        <li><strong>Pentru fiecare cerință, găsește locul din text</strong> și marchează secvența pe care o vei cita.</li>
        <li><strong>Scrie răspunsul cu formula</strong> de mai jos, apoi verifică: are predicat? reia cerința? are citatul între ghilimele?</li>
      </ol>

      <h2 id="cerinte">Cele cinci cerințe, pe rând</h2>
      <p>Exemplele folosesc modelul oficial de subiect pentru 2025 (un fragment din jurnalul Puiei Florica Rebreanu despre tatăl ei, Liviu Rebreanu), ca să vezi răspunsuri raportate la baremul real. Formularea cerințelor poate varia de la an la an, dar tipurile rămân aceleași.</p>
      ${r1}${r2}${r3}${r4}${r5}

      <h2 id="corectare">Corectează tu</h2>
      <p>Citește răspunsul, alege câte puncte i-ai da după barem, apoi vezi cum ar puncta evaluatorul.</p>
      ${grade1}${grade2}${grade3}

      <h2>Înainte să treci mai departe</h2>
      ${S.checklist('s1a', [
        'Fiecare răspuns are subiect și predicat și reia cerința.',
        'La cerințele cu „justifică”, am pus un citat exact, între ghilimele „…”.',
        'La „explică” am scris motivul *și* de ce, legat de text.',
        'La cerința 5 am numărat cuvintele: sunt între 30 și 50.',
        'N-am lăsat nimic necompletat.'
      ])}
      `;
    },
    anchor: (a) => a || null
  });
})();
