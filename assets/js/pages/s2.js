/* Subiectul al II-lea — o cerință de analiză pe un fragment literar la prima vedere. */
(function () {
  const S = window.Site;
  const C = 'var(--c3)';
  const R = 'var(--c5)';

  const red = [
    { t: 'utilizarea limbii literare', p: 1, c: C, r: true },
    { t: 'logica înlănțuirii ideilor', p: 1, c: C, r: true },
    { t: 'ortografia (0–1 greșeli)', p: 1, c: C, r: true },
    { t: 'punctuația (0–1 greșeli)', p: 1, c: C, r: true }
  ];

  const FR = {
    creanga: 'Stau câteodată și-mi aduc aminte ce vremi și ce oameni mai erau în părțile noastre pe când începusem și eu, drăgăliță-Doamne, a mă ridica băiețaș la casa părinților mei, în satul Humulești, din târg drept peste apa Neamțului; sat mare și vesel, împărțit în trei părți, care se țin tot de una: Vatra satului, Delenii și Bejenii. […] Și unde nu s-au adunat o mulțime de băieți și fete la școală, între care eram și eu, un băiat prizărit, rușinos și fricos și de umbra mea.',
    creangaSrc: 'Ion Creangă, Amintiri din copilărie',
    slavici: 'Îi râdea inima când vedea cum cățeii prind și cum scot sânge din urechile grăsunilor […]. Ana nu-i putea suferi pe acești câini și se supăra cu atât mai mult când bătrâna zicea că e bun câinele la casă […]. Așa era; însă Ana simțea că de câtva timp bărbatul ei s-a schimbat și îi părea că, de când are câini, ține mai puțin la nevastă și la copii. Ca om harnic și sârguitor, Ghiță era mereu așezat și pus pe gânduri, dar el se bucura când o vedea pe dânsa veselă: acum el se făcuse mai de tot ursuz, se aprindea pentru orișice lucru de nimic, nu mai zâmbea ca mai nainte, ci râdea cu hohot, încât îți venea să te sperii de el, iar când se mai hârjonea câteodată cu dânsa, își pierdea lesne cumpătul și-i lăsa urme vinete pe brațe.',
    slaviciSrc: 'Ioan Slavici, Moara cu noroc',
    caragiale: '(O anticameră bine mobilată. Ușă în fund cu două ferestre mari de laturi. […])\nTIPĂTESCU, puțin agitat, se plimbă cu „Răcnetul Carpaților” în mână; e în haine de odaie; PRISTANDA în picioare, mai spre ușă, stă rezemat în sabie.\nTIPĂTESCU (terminând de citit o frază din jurnal): „…Rușine pentru orașul nostru să tremure în fața unui om!…” (indignat) Eu vampir, ’ai?… Caraghioz!\nPRISTANDA (asemenea): Curat caraghioz!… Pardon, să iertați, coane Fănică, că întreb: bambir… ce-i aia, bampir?',
    caragialeSrc: 'I. L. Caragiale, O scrisoare pierdută, actul I, scena I',
    lacul: 'Lacul codrilor albastru\nNuferi galbeni îl încarcă;\nTresărind în cercuri albe\nEl cutremură o barcă.\n\nȘi eu trec de-a lung de maluri,\nParc-ascult și parc-aștept\nEa din trestii să răsară\nȘi să-mi cadă lin pe piept;\n\nSă sărim în luntrea mică,\nÎngânați de glas de ape,\nȘi să scap din mână cârma,\nȘi lopețile să-mi scape;\n\nSă plutim cuprinși de farmec\nSub lumina blândei lune —\nVântu-n trestii lin foșnească,\nUndoioasa apă sune!\n\nDar nu vine… Singuratic\nÎn zadar suspin și sufăr\nLângă lacul cel albastru\nÎncărcat cu flori de nufăr.',
    laculSrc: 'Mihai Eminescu, Lacul'
  };
  S.FR = FR;
  const frag = (k) => `<details class="acc"><summary>Fragmentul <span class="chip">${FR[k + 'Src']}</span></summary><div class="acc-body"><div class="serif" style="white-space:pre-line">${S.fmt(FR[k])}</div></div></details>`;

  const pers = S.req({
    id: 'perspectiva', num: 'A', title: 'Perspectiva narativă', sub: 'fragment de proză · „Prezintă, în minimum 50 de cuvinte, perspectiva narativă din fragmentul de mai jos.”',
    barem: [
      { t: 'precizarea tipului de perspectivă narativă', p: 2, c: C, d: 'de tip obiectiv sau de tip subiectiv' },
      { t: 'prezentarea ei (de exemplu: relatare la persoana a III-a, omnisciență)', p: 4, c: C, d: 'adecvată și nuanțată, cu exemple din text: 4 p · ezitantă: 2 p · particularități fără raportare la text: 1 p' },
      ...red
    ],
    how: [
      '*Subiectivă*: relatare la persoana I, narator-personaj (participă sau a participat la întâmplări), viziune limitată la ce știe și simte el, ton confesiv. Mărci: verbe și pronume de persoana I.',
      '*Obiectivă*: relatare la persoana a III-a, narator care nu participă la acțiune, de regulă omniscient (știe tot, inclusiv gândurile personajelor) și omniprezent, detașat, neutru.',
      'Dovedești tipul cu *persoana verbelor* (citezi 1–2 verbe sau pronume) și cu *ce știe naratorul* (gânduri, trecut, mai multe personaje deodată).',
      'Încheie cu *efectul* perspectivei: impresia de autenticitate și confesiune (subiectivă) sau de obiectivitate și distanță (obiectivă).'
    ],
    formula: 'Fragmentul are o perspectivă narativă [obiectivă / subiectivă], deoarece relatarea se face la persoana [a III-a / I], de către un narator [omniscient, care nu participă la acțiune / personaj, implicat în întâmplări].\nAcest lucru reiese din secvența „[citat cu verbe la persoana respectivă]”. [Ce știe naratorul: gândurile personajelor / doar trăirile proprii], ca în „[citat]”.\nAstfel, perspectiva [efectul: obiectivitate, distanță / autenticitate, ton confesiv].',
    example: frag('creanga') + S.ans([
      'Fragmentul are o ', ['perspectivă narativă subiectivă', '+2', C], ', deoarece întâmplările sunt relatate la persoana I de un narator-personaj, care își povestește propria copilărie. ',
      ['Mărcile persoanei I, ca în „Stau câteodată și-mi aduc aminte” sau „între care eram și eu”, arată că naratorul a fost implicat în ceea ce relatează.', 'dovadă', C], ' ',
      ['Totul este filtrat prin amintirea lui: satul apare idealizat, „sat mare și vesel”, iar naratorul se autocaracterizează cu umor, ca „un băiat prizărit, rușinos și fricos și de umbra mea”.', 'dovadă', C], ' ',
      ['Astfel, perspectiva subiectivă dă textului un ton nostalgic și confesiv.', 'efect · +4', C]
    ], { verdict: 'Aproape 90 de cuvinte. Peste minimul de 50, cu două dovezi și efectul.' }) +
      `<h4 style="margin-top:16px">Și pe un fragment cu perspectivă obiectivă</h4>` + frag('slavici') + S.ans([
      'Fragmentul are o ', ['perspectivă narativă obiectivă', '+2', C], '. ',
      ['Naratorul relatează la persoana a III-a și nu participă la întâmplări, ca în secvența „Ana nu-i putea suferi pe acești câini”.', 'dovadă', C], ' ',
      ['El este omniscient, deoarece cunoaște trăirile ambelor personaje: știe că lui Ghiță „îi râdea inima” privind câinii și că Ana „simțea că de câtva timp bărbatul ei s-a schimbat”.', 'dovadă', C], ' ',
      ['Comparația dintre Ghiță cel de altădată și cel „ursuz” de acum evidențiază, din exterior, transformarea lui interioară.', 'efect · +4', C]
    ]),
    traps: [
      'Confuzia frecventă: „obiectiv” nu înseamnă „imparțial ca ton”, ci *poziția naratorului* față de acțiune (în afara ei, la persoana a III-a).',
      'Doar teorie despre perspectivă, fără citate din fragmentul dat: 1 punct din 4.',
      'Persoana I în dialog nu face perspectiva subiectivă. Contează persoana în care *naratorul* relatează.'
    ]
  });

  const notatii = S.req({
    id: 'notatii', num: 'B', title: 'Rolul notațiilor autorului', sub: 'fragment de teatru · „Prezintă, în minimum 50 de cuvinte, rolul notațiilor autorului în fragmentul de mai jos.”',
    barem: [
      { t: 'precizarea rolului notațiilor autorului', p: 2, c: C, d: 'în barem, de exemplu: facilitarea transpunerii scenice / indicarea detaliilor scenografice / caracterizarea personajului' },
      { t: 'prezentarea rolului, raportată la fragment', p: 4, c: C, d: 'adecvată și nuanțată: 4 p · ezitantă: 2 p · încercare de prezentare: 1 p' },
      ...red
    ],
    how: [
      '*Notațiile autorului* (didascaliile, indicațiile scenice) sunt textul din paranteze și indicațiile de la începutul actelor și scenelor. Sunt singurul loc în care autorul vorbește direct într-o piesă.',
      'Spui ce *tipuri* de informații dau: decorul (spațiul), timpul, mișcarea scenică (intrări, ieșiri, gesturi), mimica, tonul replicilor, starea personajelor.',
      'Iei 2–3 notații concrete, le citezi și spui *ce face fiecare* în fragment: ce stare arată, ce trăsătură a personajului dezvăluie (caracterizare indirectă), cum creează comicul sau tensiunea.',
      'Încheie cu rolul general: notațiile ghidează punerea în scenă și completează sensul replicilor.'
    ],
    formula: 'În fragment, notațiile autorului au rolul de a [indica decorul / mișcarea scenică / tonul și starea personajelor], completând replicile.\nIndicația „[citat]” fixează [spațiul / timpul], iar notația „[citat din paranteză]” arată [starea / gestul], ceea ce sugerează [trăsătura personajului].\nAstfel, notațiile contribuie la [caracterizarea indirectă a personajelor / crearea comicului / atmosferă].',
    example: frag('caragiale') + S.ans([
      'În fragment, ', ['notațiile autorului au rolul de a indica decorul, mișcările și starea personajelor, completând replicile.', 'rolul +2', C], ' ',
      ['Didascalia inițială, „O anticameră bine mobilată”, fixează spațiul acțiunii, iar indicația „TIPĂTESCU, puțin agitat, se plimbă” arată neliniștea prefectului, provocată de articolul din ziar.', 'exemplu', C], ' ',
      ['Notația „(indignat)” precizează tonul replicii „Eu vampir, ’ai?… Caraghioz!”, iar faptul că Pristanda răspunde „(asemenea)” sugerează servilismul polițaiului, care imită reacția superiorului.', 'exemplu', C], ' ',
      ['Astfel, notațiile facilitează transpunerea scenică, contribuie la caracterizarea indirectă a personajelor și susțin comicul scenei.', 'concluzie · +4', C]
    ]),
    traps: [
      'Repovestești replicile și uiți de paranteze. Cerința e despre notații, nu despre dialog.',
      'Liste generale („notațiile arată gesturi, mimică, ton…”) fără nicio notație citată din fragment.',
      'Confuzia „narator” la teatru. Într-o piesă nu există narator; vorbești despre *autor* și *notațiile autorului*.'
    ]
  });

  const ideea = S.req({
    id: 'ideea', num: 'C', title: 'Relația dintre ideea poetică și mijloacele artistice', sub: 'poezie · „Comentează, în minimum 50 de cuvinte, textul de mai jos, evidențiind relația dintre ideea poetică și mijloacele artistice.”',
    barem: [
      { t: 'numirea ideii poetice', p: 2, c: C },
      { t: 'comentarea relației dintre idee și mijloacele artistice', p: 4, c: C, d: 'adecvată și nuanțată: 4 p · ezitantă: 2 p · simpla precizare a unor mijloace artistice: 1 p' },
      ...red
    ],
    how: [
      '*Ideea poetică* = ce transmite poezia: sentimentul sau gândul eului liric (iubirea neîmplinită, trecerea timpului, nostalgia, revolta…). O spui într-o frază.',
      'Alegi 2–3 *mijloace artistice* și, la fiecare, spui *cum construiește ideea*: figuri de stil, imagini artistice, mărci ale eului liric, timpuri și moduri verbale, punctuația expresivă, repetiții, structura, prozodia.',
      'Cuvântul de bază e „sugerează”: *epitetul X sugerează…*, *personificarea Y creează impresia…*. Fără această legătură, enumerarea figurilor de stil valorează 1 punct.'
    ],
    formula: 'Ideea poetică a textului este [ce transmite eul liric].\n[Mijlocul artistic 1], „[citat]”, sugerează [ce], ceea ce [cum susține ideea].\n[Mijlocul artistic 2], „[citat]”, evidențiază [ce]. [Mijlocul 3, opțional].\nAstfel, mijloacele artistice construiesc [ideea, reformulată].',
    example: frag('lacul') + S.ans([
      ['Ideea poetică a textului este așteptarea iubitei într-un cadru natural idilic, urmată de tristețea neîmplinirii.', 'ideea +2', C], ' ',
      ['Peisajul este construit prin epitetele cromatice din „Lacul codrilor albastru” și „Nuferi galbeni”, iar personificarea lacului care „cutremură o barcă” sugerează o natură vie, complice iubirii.', 'mijloc + rol', C], ' ',
      ['Visul întâlnirii este exprimat prin verbe la conjunctiv, „Să sărim”, „Să plutim”, care arată că iubirea rămâne doar o proiecție a dorinței.', 'mijloc + rol', C], ' ',
      ['Finalul, marcat de punctele de suspensie din „Dar nu vine…” și de verbele la persoana I „suspin și sufăr”, evidențiază singurătatea eului liric, iar reluarea imaginii lacului albastru încărcat cu nuferi închide simetric poezia.', 'mijloc + rol · +4', C]
    ]),
    traps: [
      'Inventar de figuri de stil („epitet: albastru; personificare: cutremură”) fără nicio legătură cu ideea: 1 punct din 4.',
      'Ideea poetică confundată cu tema scrisă într-un cuvânt („natura”). Spune ce transmite poezia despre temă.',
      'Figuri de stil numite greșit. Dacă nu ești sigur de denumire, descrie procedeul („asocierea dintre… și…”) și insistă pe efect.'
    ]
  });

  const caract = S.req({
    id: 'personaj', num: 'D', title: 'Două modalități de caracterizare a personajului', sub: 'proză sau teatru · „Prezintă, în minimum 50 de cuvinte, două modalități de caracterizare a personajului, identificate în textul de mai jos.”',
    barem: [
      { t: 'precizarea fiecărei modalități (1 + 1 p)', p: 2, c: C, d: 'caracterizare directă, caracterizare indirectă' },
      { t: 'prezentarea fiecărei modalități, cu exemple din text (2 + 2 p)', p: 4, c: C, d: 'adecvată și nuanțată: 2 p fiecare · încercare, simpla indicare a unor trăsături: 1 p fiecare' },
      ...red
    ],
    how: [
      'Cele două modalități sunt *caracterizarea directă* și *caracterizarea indirectă*. Le numești pe amândouă, cu termenii aceștia.',
      '*Directă*: trăsătura e spusă explicit, de narator, de alt personaj sau de personajul însuși (autocaracterizare). Citezi fraza și numești trăsătura.',
      '*Indirectă*: trăsătura reiese din fapte, gesturi, limbaj, atitudine, vestimentație, mediu, nume. Citezi faptul sau gestul și spui ce trăsătură dezvăluie.',
      'La teatru, caracterizarea directă vine din replicile altor personaje sau din autocaracterizare, iar cea indirectă și din notațiile autorului.'
    ],
    formula: 'În fragment, [personajul] este caracterizat atât direct, cât și indirect.\nCaracterizarea directă se realizează prin [narator / alt personaj / autocaracterizare], în secvența „[citat]”, care evidențiază [trăsătura].\nCaracterizarea indirectă reiese din [fapte / gesturi / limbaj]: „[citat]”, ceea ce dezvăluie [trăsătura].',
    example: frag('slavici') + S.ans([
      'În fragment, Ghiță este caracterizat atât ', ['direct', '+1', C], ', cât și ', ['indirect', '+1', C], '. ',
      ['Caracterizarea directă se realizează prin vocea naratorului, care îl prezintă drept un om „harnic și sârguitor”, „mereu așezat și pus pe gânduri”, trăsături ale lui Ghiță cel de la începutul nuvelei.', '+2', C], ' ',
      ['Caracterizarea indirectă reiese din faptele și gesturile lui de acum: „se aprindea pentru orișice lucru de nimic”, „râdea cu hohot”, iar când se juca cu Ana îi lăsa „urme vinete pe brațe”. Aceste gesturi dezvăluie un om tot mai irascibil și mai violent, aflat în plină transformare.', '+2', C]
    ]),
    traps: [
      'Numești trăsături, dar nu și modalitățile („Ghiță e harnic și violent”). Cerința e despre *cum* e caracterizat.',
      'Trăsături care nu reies din fragmentul dat, ci din ce știi despre operă.',
      'Citate fără să spui ce trăsătură dovedesc.'
    ]
  });

  // Alte cerințe posibile, pe conceptele din programă
  const ALTE = [
    ['Semnificația titlului', 'Ce anunță titlul (temă, personaj, simbol, spațiu) și ce sens capătă în fragment.', 'Titlul „[…]” [anunță tema / numește un simbol]. În fragment, el se leagă de „[citat]”, ceea ce sugerează [sens].'],
    ['Rolul incipitului / al finalului', 'Ce fixează începutul (timp, spațiu, personaje, ton) sau cum închide textul (deschis, închis, simetric).', 'Incipitul fixează [timpul, spațiul, personajele], ca în „[citat]”, și anunță [tema / atmosfera].'],
    ['Rolul descrierii', 'Tipul descrierii (portret, peisaj, interior), elementele dominante (culori, sunete, detalii) și ce sugerează: atmosfera, starea unui personaj, statutul lui social.', 'Descrierea [peisajului / portretului] are rolul de a [crea atmosfera / caracteriza indirect personajul]. Detalii precum „[citat]” sugerează [ce].'],
    ['Rolul dialogului', 'Ce face dialogul: dinamizează acțiunea, caracterizează indirect personajele prin limbaj, creează tensiune sau comic, dă impresia de autenticitate.', 'Dialogul are rolul de a [dinamiza acțiunea / caracteriza personajele]. Replica „[citat]” dezvăluie [trăsătura], iar [alt exemplu]…'],
    ['Timpul și spațiul', 'Indicii de timp (anotimp, moment, epocă) și de spațiu (loc real sau imaginar, închis sau deschis) și ce rol au: verosimilitate, atmosferă, simbol.', 'Acțiunea se petrece [când], în [unde], după cum arată „[citat]”. Cadrul [real / simbolic] contribuie la [atmosferă / verosimilitate].'],
    ['Stilul direct / indirect / indirect liber', 'Direct: replica personajului, cu linie de dialog sau ghilimele și verb declarativ. Indirect: narator redă vorbele prin subordonată („zise că…”). Indirect liber: gândurile personajului se topesc în vocea naratorului, fără verb declarativ și fără ghilimele.', 'În fragment apare stilul [direct / indirect liber], ca în „[citat]”. Acesta are rolul de a [reda autentic vorbirea / dezvălui gândurile personajului].'],
    ['Registrele stilistice / limbajul personajelor', 'Ce registru folosește un personaj sau naratorul (popular, regional, arhaic, colocvial, familiar, neologic, standard, argotic) și ce arată despre el (origine, educație, statut, ipocrizie).', 'Limbajul personajului [nume] aparține registrului [popular / colocvial], cu termeni precum „[citat]”, ceea ce îi dezvăluie [originea / lipsa de cultură].'],
    ['Elementele de oralitate', 'Mărci ale vorbirii spontane în narațiune: adresări directe către cititor, interjecții, exclamații și interogații, expresii și proverbe populare, construcții colocviale.', 'Oralitatea stilului reiese din [interjecții / expresii populare], ca „[citat]”, care dau impresia unei povestiri spuse cu glas tare.'],
    ['Relația dintre două personaje', 'Cum se raportează unul la celălalt (afecțiune, conflict, autoritate, rivalitate) și prin ce se vede: replici, gesturi, atitudini.', 'Relația dintre [A] și [B] este una de [tipul relației], după cum arată „[citat]”. [Gestul / replica] „[citat]” evidențiază [ce].'],
    ['Tema și motivele poetice', 'Tema (iubirea, natura, timpul, creația, moartea) și 1–2 motive prin care se realizează (lacul, luna, toamna, plumbul…), cu ce simbolizează fiecare.', 'Tema poeziei este [tema], realizată prin motivul [motiv], „[citat]”, care simbolizează [ce].'],
    ['Mărcile eului liric / instanțele comunicării', 'Verbe și pronume de persoana I (eul liric) și a II-a (adresarea către „tu”), vocative, interogații și exclamații retorice. Spui ce fel de lirism dau: confesiv, de adresare, al măștilor.', 'Eul liric se manifestă direct prin [verbe / pronume de persoana I], ca în „[citat]”, ceea ce dă textului un caracter [confesiv].'],
    ['Elementele de prozodie', 'Măsura (numărul de silabe), rima (împerecheată, încrucișată, îmbrățișată, monorimă), ritmul (trohaic, iambic), strofa (catren, distih, terțină) sau versul liber. Leagă-le de muzicalitate și de stare.', 'Poezia are [strofe / catrene], cu rimă [tipul] și măsură de [n] silabe; muzicalitatea creată astfel [susține starea / ideea].'],
    ['Mijloacele comicului', 'La teatru: comic de situație, de caracter, de limbaj (ticuri, greșeli, repetiții), de nume, de moravuri. Spui tipul și îl dovedești cu o replică.', 'Comicul de [limbaj] reiese din [repetiția / ticul verbal] „[citat]”, care dezvăluie [trăsătura personajului].'],
    ['Trăsăturile unui curent', 'Două trăsături ale curentului (romantism, simbolism, modernism etc.) pe care le poți arăta în fragment, fiecare cu un citat.', 'Fragmentul aparține [curentului], prin [trăsătura 1], vizibilă în „[citat]”, și prin [trăsătura 2], ca în „[citat]”.']
  ];

  const FIG = [
    ['Epitetul', 'determinant expresiv al unui substantiv sau verb', '„Nuferi galbeni”', 'conturează imaginea, adaugă culoare / emoție'],
    ['Comparația', 'asemănare explicită, cu „ca”, „precum”, „cât”', '„plângea ca o mireasă”', 'face concretă o stare, intensifică'],
    ['Metafora', 'înlocuire a unui termen cu altul, pe baza unei asemănări', '„Calul Balan” (scaunul pentru pedeapsă)', 'sugerează, încarcă imaginea cu sensuri'],
    ['Personificarea', 'însușiri omenești date unor lucruri, animale, elemente ale naturii', '„El cutremură o barcă” (lacul)', 'natura pare vie, participă la starea eului liric'],
    ['Enumerația', 'înșiruire de termeni de același fel', '„Vatra satului, Delenii și Bejenii”', 'sugerează abundență, amploare'],
    ['Repetiția', 'reluarea unui cuvânt sau a unei structuri', '„Parc-ascult și parc-aștept”', 'insistă, creează ritm și intensitate'],
    ['Antiteza', 'opoziție între două idei, imagini, personaje', 'Ghiță cel „harnic” / cel „ursuz”', 'pune în evidență un contrast, o schimbare'],
    ['Hiperbola', 'exagerare intenționată', '„de sărea cămașa de pe dânsa”', 'intensifică, poate crea comic'],
    ['Inversiunea', 'schimbarea ordinii firești a cuvintelor', '„Undoioasa apă sune!”', 'scoate în relief un cuvânt'],
    ['Interogația / exclamația retorică', 'întrebare fără răspuns / exclamație expresivă', '„Dar nu vine…”, „Undoioasa apă sune!”', 'exprimă direct emoția eului liric']
  ];

  const QUIZ = [
    { stem: 'Ce tip de perspectivă narativă are fragmentul?', frag: '„Stau câteodată și-mi aduc aminte ce vremi și ce oameni mai erau în părțile noastre pe când începusem și eu […] a mă ridica băiețaș la casa părinților mei” (Ion Creangă)', opts: ['obiectivă, narator omniscient', 'subiectivă, narator-personaj', 'obiectivă, narator-martor'], ok: 1, expl: 'Verbele la persoana I („Stau”, „îmi aduc aminte”, „începusem și eu”) arată un narator care își povestește propria copilărie.' },
    { stem: 'Ce arată, despre narator, secvența de mai jos?', frag: '„Ana simțea că de câtva timp bărbatul ei s-a schimbat și îi părea că, de când are câini, ține mai puțin la nevastă și la copii.” (Ioan Slavici)', opts: ['că naratorul este un personaj', 'că naratorul este omniscient', 'că perspectiva este subiectivă'], ok: 1, expl: 'Naratorul relatează la persoana a III-a și știe ce simte Ana: e omniscient, perspectiva e obiectivă.' },
    { stem: 'Ce figură de stil apare în versurile de mai jos?', frag: '„Tresărind în cercuri albe / El cutremură o barcă.” (Mihai Eminescu, „Lacul”)', opts: ['comparație', 'personificare', 'enumerație'], ok: 1, expl: 'Lacul „tresare” și „cutremură” barca: îi sunt atribuite acțiuni ale unei ființe vii.' },
    { stem: 'Ce indică notația „(indignat)”?', frag: 'TIPĂTESCU: „…Rușine pentru orașul nostru să tremure în fața unui om!…” (indignat) Eu vampir, ’ai?… Caraghioz! (I. L. Caragiale)', opts: ['decorul scenei', 'tonul replicii și starea personajului', 'momentul zilei'], ok: 1, expl: 'Notația arată cum trebuie rostită replica și, indirect, reacția prefectului la articolul din ziar.' },
    { stem: 'Ce tip de comic apare în replicile lui Pristanda?', frag: 'TIPĂTESCU: Mișel! / PRISTANDA: Curat mișel! / TIPĂTESCU: Murdar! / PRISTANDA: Curat murdar!', opts: ['comic de situație', 'comic de limbaj', 'comic de nume'], ok: 1, expl: 'Ticul verbal „curat” (repetat mecanic, chiar în „Curat murdar!”) creează comicul de limbaj și arată servilismul personajului.' },
    { stem: 'Ce modalitate de caracterizare apare aici?', frag: '„…între care eram și eu, un băiat prizărit, rușinos și fricos și de umbra mea.” (Ion Creangă)', opts: ['caracterizare directă, prin autocaracterizare', 'caracterizare indirectă, prin fapte', 'caracterizare directă, de către alt personaj'], ok: 0, expl: 'Naratorul-personaj își numește singur trăsăturile: autocaracterizare, o formă de caracterizare directă.' },
    { stem: 'Ce mărci ale eului liric apar în versurile de mai jos?', frag: '„Dar nu vine… Singuratic / În zadar suspin și sufăr” (Mihai Eminescu, „Lacul”)', opts: ['pronume de persoana a II-a', 'verbe la persoana I', 'vocative'], ok: 1, expl: '„suspin”, „sufăr” sunt verbe la persoana I: eul liric își exprimă direct suferința.' },
    { stem: 'Cum este redat gândul personajului?', frag: '„Ce-i de făcut, măi Nică?” îmi zic eu în mine. (Ion Creangă)', opts: ['stil direct', 'stil indirect', 'stil indirect liber'], ok: 0, expl: 'Gândul e redat exact, între ghilimele, cu verb declarativ („îmi zic”): stil direct, sub forma unui monolog interior.' }
  ];

  S.page({
    id: 's2', title: 'Subiectul al II-lea',
    nav: { label: 'II · Fragmentul literar', color: C, badge: 'II', pts: '10 p' },
    render() {
      return `
      <div class="page-head">
        <div class="kicker">Subiectul al II-lea · <span class="chip c3">10 puncte</span></div>
        <h1>Analiza unui fragment literar pe care nu l-ai citit</h1>
        <p class="lead">Primești un fragment de proză, poezie sau teatru și o singură cerință, de cel puțin 50 de cuvinte. Fragmentul poate fi de la orice autor studiat, așa că pregătirea sigură e cea a conceptelor, nu a textelor.</p>
        <div class="toc"><a href="#/s2/reteta">Rețeta de 6 puncte</a><a href="#/s2/perspectiva">Perspectiva narativă</a><a href="#/s2/notatii">Notațiile autorului</a><a href="#/s2/ideea">Ideea poetică</a><a href="#/s2/personaj">Personajul</a><a href="#/s2/alte">Alte cerințe</a><a href="#/s2/figuri">Figuri de stil</a><a href="#/s2/test">Test rapid</a></div>
      </div>

      <h2>Cum se punctează</h2>
      ${S.pbar([{ t: 'identificarea / numirea a ceea ce cere cerința', p: 2, c: C, d: 'tipul de perspectivă, ideea poetică, trăsăturile' }, { t: 'comentariul nuanțat, cu exemple din fragment', p: 4, c: C, d: 'ezitant: 2 p · doar noțiuni generale: 1 p' }, ...red])}
      <p class="small muted">Așa arată baremul la toate cele patru tipuri de cerință de mai jos. La modalitățile de caracterizare, punctele se împart pe fiecare modalitate (1 + 1 și 2 + 2).</p>
      ${S.callout('key', '<p><strong>Punctele de redactare (4) se dau doar dacă răspunsul are minimum 50 de cuvinte</strong> și dezvoltă cerința. Ortografia și punctuația au câte 1 punct pentru 0–1 greșeli. Țintește 70–120 de cuvinte: destul ca să comentezi, puțin cât să nu greșești.</p>')}

      <h2 id="reteta">Rețeta care merge la orice cerință</h2>
      <ol class="steps">
        <li><strong>Fraza-teză (2 p).</strong> Numești exact ce cere cerința, cu termenul din cerință: <em>„Fragmentul are o perspectivă narativă obiectivă…”</em>, <em>„Ideea poetică este…”</em>.</li>
        <li><strong>Prima dovadă.</strong> Un citat scurt din fragment + ce arată el pentru cerință.</li>
        <li><strong>A doua dovadă.</strong> Alt citat, alt aspect. Două dovezi bine explicate înseamnă „nuanțat”.</li>
        <li><strong>Fraza de efect.</strong> Ce rol are, în ansamblu, elementul cerut: atmosferă, caracterizare, comic, ton confesiv.</li>
      </ol>
      ${S.callout('trap', '<p>Cea mai scumpă greșeală: răspunsul de manual, valabil pentru orice text. Baremul dă 1 punct din 4 pentru noțiuni corecte, dar neraportate la fragment. Fiecare afirmație are nevoie de un citat din textul primit.</p>')}

      <h2 id="cerinte">Cele patru tipuri de cerință</h2>
      <p>În formatul actual (din 2020), cerința de la Subiectul al II-lea a fost de fiecare dată unul dintre aceste patru tipuri, la toate sesiunile, modelele și simulările pentru real. Exemplele sunt scrise pe fragmente reale din autori studiați, la nivel de punctaj maxim.</p>
      ${pers}${notatii}${ideea}${caract}

      <h2 id="alte">Alte concepte din programă</h2>
      <p>Programa mai enumeră concepte din care s-ar putea formula o cerință și pe care, oricum, le folosești în comentariile de mai sus: stilul indirect liber la perspectivă, prozodia și motivele la ideea poetică, limbajul la caracterizare. Dacă apare o formulare nouă, se rezolvă cu aceeași rețetă: numești ce cere (2 p), apoi dovedești cu citate și spui ce rol are (4 p).</p>
      ${ALTE.map(([t, w, f]) => S.acc(t, `<p>${S.fmt(w)}</p><div class="tpl"><p>${S.tpl(f)}</p></div>`)).join('')}

      <h2 id="figuri">Figuri de stil: ce sunt și ce scrii despre ele</h2>
      <p>Numele figurii aduce puțin. Punctele vin din ultima coloană: ce efect are în text.</p>
      <div class="tbl-wrap"><table>
        <tr><th>Figura</th><th>Ce este</th><th>Exemplu</th><th>Ce scrii despre efect</th></tr>
        ${FIG.map(([a, b, c, d]) => `<tr><td><strong>${a}</strong></td><td>${b}</td><td class="serif">${S.fmt(c)}</td><td>${d}</td></tr>`).join('')}
      </table></div>
      <div class="grid g2">
        <div class="card tight"><h4>Imagini artistice</h4><p class="small mt0" style="margin:0">vizuale (culori, forme), auditive (sunete), olfactive, tactile, motorii (mișcare), dinamice / statice. Spui ce simț activează și ce atmosferă creează.</p></div>
        <div class="card tight"><h4>Verbe de comentariu</h4><p class="small" style="margin:0">sugerează, evidențiază, accentuează, conturează, reliefează, ilustrează, exprimă, dezvăluie, amplifică, creează impresia de…</p></div>
      </div>

      <h2 id="test">Test rapid</h2>
      <p>Opt întrebări pe fragmente reale. Răspunsul și explicația apar imediat.</p>
      ${S.quiz(QUIZ)}

      <h2>Înainte să predai</h2>
      ${S.checklist('s2', [
        'Prima frază numește exact ce cere cerința, cu termenul din cerință.',
        'Am cel puțin două citate din fragment, fiecare explicat.',
        'Am o frază despre rolul / efectul de ansamblu.',
        'Am peste 50 de cuvinte (ideal 70–120).',
        'Am recitit ortografia și punctuația: aici se pierde punctul de la a doua greșeală.'
      ])}
      `;
    },
    anchor: (a) => a || null
  });
})();
