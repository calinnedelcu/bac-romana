// Fișe de operă: proză (1) — Povestea lui Harap-Alb, Moara cu noroc, Ion, Baltagul.
// Formatul câmpurilor: tools/SCHEMA-OPERE.md
window.OPERE = window.OPERE || [];

window.OPERE.push(

  // =====================================================================
  // 1. POVESTEA LUI HARAP-ALB — Ion Creangă
  // =====================================================================
  {
    id: 'povestea-lui-harap-alb',
    titlu: 'Povestea lui Harap-Alb',
    autor: 'Ion Creangă',
    an: '1877',
    aparitie: 'revista „Convorbiri literare”, 1 august 1877',
    gen: 'epic',
    specie: 'basm cult',
    categorii: ['basm cult', 'basm', 'text narativ', 'operă epică a perioadei marilor clasici', 'text narativ cu tema inițierii'],

    incadrare: {
      eticheta: 'basm cult, operă a perioadei marilor clasici (epoca junimistă)',
      trasaturi: [
        { nume: 'Prezența formulelor specifice basmului (inițială, mediane și finală), care marchează intrarea în lumea fabuloasă, întrețin atenția cititorului și închid povestea.',
          dovada: 'Formula inițială „Amu cică era odată într-o țară un crai, care avea trei feciori” fixează un timp și un spațiu nedeterminate; formulele mediane, ca „Dumnezeu să ne ție, că cuvântul din poveste, înainte mult mai este”, leagă episoadele, iar formula finală („Iar pe la noi, cine are bani bea și mănâncă, iară cine nu, se uită și rabdă.”) readuce cititorul, ironic, în lumea reală.' },
        { nume: 'Confruntarea dintre bine și rău, încheiată cu victoria binelui, pe tiparul călătoriei cu probe, cu ajutoare și obiecte miraculoase, cifre magice și personaje fabuloase.',
          dovada: 'Fiul craiului trece prin probele impuse de Spân (salățile din Grădina Ursului, pielea cerbului bătută cu pietre scumpe, aducerea fetei împăratului Roș) și prin cele de la curtea împăratului Roș (casa de aramă înfocată, ospățul, alegerea macului de nisip, paza fetei, recunoașterea ei), ajutat de Sfânta Duminică, de calul năzdrăvan, de furnici, de albine și de cei cinci tovarăși; cifra trei revine (trei feciori, trei întâlniri cu Spânul, trei smicele de măr dulce), iar la final Spânul este pedepsit și eroul răsplătit.' },
        { nume: 'Caracterul cult al basmului: umanizarea fantasticului, umorul și oralitatea stilului, care îl deosebesc de basmul popular.',
          dovada: 'Personajele fabuloase se poartă ca niște țărani humuleșteni: Sfânta Duminică fierbe „somnoroasă” cu lapte dulce și miere ca o gospodină, iar Gerilă este portretizat caricatural, cu „niște urechi clăpăuge și niște buzoaie groase și dăbălăzate”; oralitatea se vede în adresările către cititor („Dar ia să nu ne depărtăm cu vorba și să încep a depăna firul poveștii”) și în proverbele introduse prin „vorba ceea”.' }
      ]
    },

    tema: 'Tema basmului este *inițierea* (maturizarea) unui tânăr care, trecând prin încercări, învață să deosebească aparența de esență și devine un împărat înțelept; în plan general, basmul ilustrează *lupta dintre bine și rău* și triumful binelui.',
    viziune: 'Viziunea despre lume este optimistă și moralizatoare: binele învinge, iar suferința îl formează pe erou. Fabulosul este umanizat, astfel încât lumea basmului seamănă cu satul humuleștean, văzut cu umor și cu înțelepciune populară.',

    secvente: [
      { titlu: 'Proba podului și alegerea calului (plecarea de acasă)',
        rezumat: 'Mezinul craiului îi dă un ban de pomană unei bătrâne cerșetoare (Sfânta Duminică), care îl sfătuiește să ceară hainele, armele și calul din tinerețea tatălui; alege calul care vine la tava cu jăratic și trece proba podului, unde craiul, îmbrăcat într-o piele de urs, îi încearcă curajul.',
        comentariu: 'Episodul deschide drumul inițierii: fapta bună este răsplătită, iar calul răpciugos, pe care tânărul îl lovește la început, se dovedește năzdrăvan, ceea ce arată că aparența înșală. Sfatul tatălui („să te ferești de omul roș, iară mai ales de cel spân”) anunță conflictul principal, iar faptul că numai mezinul trece proba arată că maturizarea cere curaj, dar și ascultarea sfaturilor celor înțelepți.' },
      { titlu: 'Întâlnirea cu Spânul și episodul fântânii',
        rezumat: 'Rătăcit în pădurea-labirint, fiul craiului îl tocmește ca slugă pe Spân, întâlnit a treia oară, sub altă înfățișare; acesta îl păcălește să coboare în fântână, îi ia cartea, banii și armele și îl obligă să jure că îi va fi slugă „până când îi muri și iar îi învia”, dându-i numele de Harap-Alb.',
        comentariu: 'Secvența este momentul-cheie al inițierii: eroul, „boboc în felul său la trebi de aieste”, încalcă sfatul tatălui și cade în capcana aparențelor. Coborârea în fântână are valoare simbolică de moarte și renaștere: fiul de crai devine slugă, primește un nume nou, oximoronic, și va învăța din umilință ce înseamnă să fii supus. Jurământul anticipează și finalul, căci eroul va fi eliberat abia după ce va muri și va învia.' },
      { titlu: 'Probele impuse de Spân la curtea lui Verde-împărat',
        rezumat: 'Spânul îl trimite pe Harap-Alb după salățile din Grădina Ursului, apoi după pielea și capul cerbului bătut cu pietre scumpe, iar în cele din urmă după fata împăratului Roș; la primele două probe îl ajută Sfânta Duminică, iar pe drumul spre împăratul Roș ocolește prin apă o nuntă de furnici, face un adăpost pentru albine și își face cinci tovarăși.',
        comentariu: 'Probele arată că inițierea nu se face singur: Harap-Alb reușește datorită bunătății, iar Sfânta Duminică i-o spune direct: „nu eu, ci puterea milosteniei și inima ta cea bună te ajută”. Mila față de cei mici și prietenia cu ființe ciudate pregătesc un viitor împărat drept, iar sfatul ei („vei crede celor asupriți și necăjiți, pentru că știi acum ce e necazul”) explică rostul suferinței.' },
      { titlu: 'Deznodământul: demascarea Spânului, moartea și învierea lui Harap-Alb, nunta',
        rezumat: 'Fata împăratului Roș îl demască pe Spân („Lipsește dinaintea mea, Spânule!”); Spânul îi taie capul lui Harap-Alb, calul îl ridică pe Spân în înaltul cerului și îi dă drumul, iar fata îl învie pe erou cu cele trei smicele de măr dulce, cu apă moartă și cu apă vie; urmează nunta.',
        comentariu: 'Finalul încheie inițierea: prin moarte și înviere jurământul se împlinește, iar Harap-Alb își recapătă identitatea și primește împărăția. Pedepsirea Spânului confirmă legea basmului, în care răul este învins, iar formula finală ironică desparte lumea fericită a poveștii de lumea reală, în care „cine nu, se uită și rabdă”.' }
    ],

    elemente: [
      { nume: 'Titlul',
        analiza: 'Titlul „Povestea lui Harap-Alb” numește specia prin termenul popular „poveste” și pe eroul principal, dar cu numele primit în urma jurământului din fântână. Numele este un oximoron: „harap” înseamnă rob, slugă cu pielea neagră, iar „alb” trimite la originea nobilă a fiului de crai, astfel încât numele sintetizează condiția unui stăpân ajuns slugă.',
        relevanta: 'Titlul este relevant pentru tema inițierii deoarece numele contradictoriu marchează etapa de umilință prin care eroul trebuie să treacă pentru a deveni un împărat înțelept.' },
      { nume: 'Incipitul și finalul (formulele specifice)',
        analiza: 'Incipitul „Amu cică era odată într-o țară un crai, care avea trei feciori” introduce cititorul într-un timp și un spațiu fabuloase, prin adverbul „amu” și prin „cică”, care arată că povestea e preluată din tradiție. Finalul descrie nunta și se încheie cu o formulă ironică despre lumea reală, în care cei fără bani „se uită și rabdă”.',
        relevanta: 'Incipitul și finalul sunt relevante pentru viziunea basmului deoarece încadrează povestea între intrarea în fabulos și revenirea în real, iar nunta finală confirmă triumful binelui.' },
      { nume: 'Conflictul',
        analiza: 'Conflictul exterior, între bine și rău, îl opune pe Harap-Alb Spânului și, apoi, împăratului Roș; Spânul reprezintă răul, viclenia și impostura. Conflictul are și o latură formativă, pe care o formulează calul: „Și unii ca aceștia sunt trebuitori pe lume câteodată, pentru că fac pe oameni să prindă la minte”.',
        relevanta: 'Conflictul este relevant pentru tema inițierii deoarece Spânul, ca *rău necesar*, îl obligă pe erou să treacă probele care îl maturizează.' },
      { nume: 'Perspectiva narativă și naratorul',
        analiza: 'Narațiunea este la persoana a III-a, iar naratorul este omniscient, dar nu neutru: intervine cu comentarii, adresări și glume („Dar ia să nu ne depărtăm cu vorba și să încep a depăna firul poveștii”), ca un povestitor din popor în fața ascultătorilor. Prin aceste intervenții, povestea capătă caracter de spectacol oral.',
        relevanta: 'Perspectiva narativă este relevantă pentru caracterul cult al basmului deoarece prezența unui narator-povestitor implicat transformă tiparul popular într-o operă cu amprentă personală.' },
      { nume: 'Construcția subiectului (momentele subiectului)',
        analiza: 'Expozițiunea prezintă situația inițială: craiul cu trei feciori și Verde-împărat fără urmaș; intriga este scrisoarea prin care Verde-împărat cere un moștenitor, iar desfășurarea acțiunii cuprinde plecarea, jurământul din fântână și probele. Punctul culminant este demascarea Spânului și uciderea lui Harap-Alb, iar deznodământul aduce învierea eroului și nunta.',
        relevanta: 'Construcția subiectului este relevantă pentru temă deoarece succesiunea probelor, de la ușor la greu, urmărește etapele drumului de maturizare al eroului.' },
      { nume: 'Limbajul (oralitatea și umorul)',
        analiza: 'Limbajul este popular și regional („amu”, „aista”, „oleacă”), iar oralitatea se realizează prin interjecții, exclamații, adresări directe și proverbe introduse prin „vorba ceea” („Frica păzește bostănăria”). Umorul vine din portretele caricaturale (Gerilă, Ochilă), din poreclele năstrușnice și din ironie.',
        relevanta: 'Limbajul este relevant pentru caracterul cult al basmului deoarece umorul și oralitatea umanizează fabulosul și dau textului inconfundabila amprentă stilistică a lui Creangă.' }
    ],

    personaje: [
      { nume: 'Harap-Alb',
        tip: 'personaj principal, eponim, rotund: spre deosebire de Făt-Frumos din basmul popular, are slăbiciuni omenești și evoluează pe parcursul inițierii',
        statut: {
          social: 'Este fiul cel mic al craiului și nepotul lui Verde-împărat, chemat să-i fie urmaș la tron; după jurământul din fântână devine sluga Spânului, sub numele de Harap-Alb, iar la final ajunge împărat.',
          psihologic: 'La început este naiv, nesigur și lipsit de experiență, se descurajează ușor și se plânge de soarta lui; prin probe devine răbdător, curajos și capabil să judece oamenii după fapte, nu după înfățișare.',
          moral: 'Este bun, milos și generos (dă un ban cerșetoarei, cruță furnicile, ajută albinele) și își respectă cuvântul dat, chiar și față de Spân; aceste calități îl fac vrednic de împărăție.'
        },
        trasaturi: [
          { trasatura: 'naivitatea (lipsa de experiență) de la începutul drumului',
            episoade: [
              { titlu: 'Alegerea calului',
                comentariu: 'Când răpciuga de cal vine la tava cu jăratic, tânărul o lovește și o numește „ghijoagă urâcioasă”, judecând după înfățișare. Calul se dovedește năzdrăvan, iar episodul arată că eroul încă nu știe să vadă dincolo de aparențe.' },
              { titlu: 'Coborârea în fântână',
                comentariu: 'Deși tatăl l-a sfătuit să se ferească „de cel spân”, fiul craiului îl tocmește pe Spân și se lasă convins să coboare în fântână, „fără să-i trăsnească prin minte ce i se poate întâmpla”. Naivitatea îl costă identitatea, dar îi deschide drumul inițierii.' }
            ] },
          { trasatura: 'bunătatea și respectarea cuvântului dat',
            episoade: [
              { titlu: 'Podul cu nunta de furnici și adăpostul albinelor',
                comentariu: 'Ca să nu calce furnicile, Harap-Alb trece apa înot cu calul, deși riscă să se înece, iar mai departe face albinelor un adăpost. Bunătatea lui este răsplătită: aripile primite îl vor ajuta la probele împăratului Roș.' },
              { titlu: 'Aducerea fetei împăratului Roș la Spân',
                comentariu: 'Deși se îndrăgostește de fată („mai nu-i venea s-o ducă, fiind nebun de dragostea ei”), Harap-Alb nu-și calcă jurământul și o duce stăpânului său. Fidelitatea față de cuvântul dat arată maturitatea morală la care a ajuns.' }
            ] }
        ],
        constructie: [
          { nume: 'Caracterizarea directă',
            analiza: 'Naratorul îl numește „boboc în felul său la trebi de aieste”, subliniind lipsa de experiență, iar Sfânta Duminică îi laudă inima: „puterea milosteniei și inima ta cea bună te ajută”. Spânul, ironic și disprețuitor, îl prezintă la curte ca pe o slugă greu de stăpânit.',
            relevanta: 'Caracterizarea directă este relevantă deoarece fixează cele două coordonate ale personajului: naivitatea inițială și bunătatea care îl va salva.' },
          { nume: 'Caracterizarea indirectă (fapte, limbaj, relații)',
            analiza: 'Faptele (pomana dată cerșetoarei, ajutorul dat furnicilor și albinelor, respectarea jurământului) îi dezvăluie generozitatea și onestitatea, iar limbajul, plin de proverbe și de vaiete („Se vede că m-a născut mama într-un ceas rău”), arată un erou omenesc, vulnerabil.',
            relevanta: 'Caracterizarea indirectă este relevantă deoarece prin ea personajul de basm devine un om viu, cu slăbiciuni, ceea ce ține de caracterul cult al textului.' },
          { nume: 'Numele',
            analiza: 'Numele de Harap-Alb, dat de Spân după jurământ, este un oximoron care reunește condiția de rob („harap”) și originea nobilă („alb”). Până la episodul fântânii, personajul nu are nume propriu, fiind numit „fiul craiului”.',
            relevanta: 'Numele este relevant deoarece marchează etapa de umilință din inițiere: eroul trebuie să fie slugă înainte de a deveni stăpân.' },
          { nume: 'Relația cu personajele ajutătoare',
            analiza: 'Sfânta Duminică, calul năzdrăvan, crăiasa furnicilor, crăiasa albinelor și cei cinci tovarăși (Gerilă, Flămânzilă, Setilă, Ochilă, Păsări-Lăți-Lungilă) îl sprijină pe erou, iar el le acceptă ajutorul fără să-i judece după înfățișare.',
            relevanta: 'Relația cu ajutoarele este relevantă deoarece arată că inițierea înseamnă și capacitatea de a primi sfaturi și de a-i prețui pe ceilalți.' },
          { nume: 'Statutul de erou de basm cult (umanizarea)',
            analiza: 'Spre deosebire de eroul invincibil din basmul popular, Harap-Alb plânge, se teme, se descurajează și reușește mai ales prin ajutorul altora. La final, după înviere, spune firesc „Ei, da’ din greu mai adormisem!”, ca un om obișnuit.',
            relevanta: 'Umanizarea este relevantă deoarece face din Harap-Alb un erou în formare, apropiat de cititor, și ilustrează originalitatea basmului cult.' }
        ],
        citate: [
          '„boboc în felul său la trebi de aieste” (naratorul, despre fiul craiului, în episodul fântânii)',
          '„nu eu, ci puterea milosteniei și inima ta cea bună te ajută” (Sfânta Duminică, despre Harap-Alb)',
          '„Se vede că m-a născut mama într-un ceas rău” (Harap-Alb, deznădăjduit, când trebuie să aducă fata împăratului Roș)',
          '„mai nu-i venea s-o ducă, fiind nebun de dragostea ei” (naratorul, despre Harap-Alb și fata împăratului Roș)',
          '„Ei, da’ din greu mai adormisem!” (Harap-Alb, după ce este înviat)'
        ]
      }
    ],

    relatii: [
      { intre: ['Harap-Alb', 'Spânul'],
        statut_initial: 'Harap-Alb este fiul mezin al craiului, trimis să-i urmeze la tron lui Verde-împărat, iar Spânul este un personaj malefic, viclean, care îi iese de trei ori în cale, sub înfățișări diferite, până când tânărul îl tocmește ca slugă. Relația pornește ca o relație stăpân–slugă, în care fiul craiului este stăpânul.',
        scene: [
          { titlu: 'Episodul fântânii (inversarea rolurilor)',
            comentariu: 'Spânul îl închide pe fiul craiului în fântână, îi ia cartea, banii și armele și îl obligă să jure supunere „până când îi muri și iar îi învia”, apoi îi dă numele de Harap-Alb. Rolurile se inversează: impostorul devine stăpân, iar adevăratul moștenitor devine slugă.' },
          { titlu: 'La curtea lui Verde-împărat (probele)',
            comentariu: 'Spânul îl ține pe Harap-Alb la grajd („Tu să șezi la grajd nedezlipit”) și îl trimite la probe din care speră să nu se mai întoarcă: salățile din Grădina Ursului, pielea cerbului, fata împăratului Roș. Asprimea Spânului îl umilește pe erou, dar îl obligă să se maturizeze.' },
          { titlu: 'Demascarea și pedepsirea Spânului (finalul)',
            comentariu: 'Când fata împăratului Roș dezvăluie adevărul, Spânul îi taie capul lui Harap-Alb, strigând „Na! așa trebuie să pățească cine calcă jurământul!”, dar calul îl ridică în înaltul cerului și îi dă drumul. Prin moartea și învierea eroului, jurământul se împlinește, iar relația se încheie cu pedepsirea răului.' }
        ],
        evolutie: 'Relația evoluează de la încrederea naivă a fiului de crai la supunerea forțată a slugii și, în final, la eliberare. Spânul nu se schimbă, rămânând până la capăt viclean și crud, în timp ce Harap-Alb se maturizează tocmai prin această relație.',
        elemente: [
          { nume: 'Conflictul',
            analiza: 'Conflictul exterior dintre Harap-Alb și Spân este conflictul dintre bine și rău, dar și dintre esență și aparență: Spânul ia locul adevăratului nepot al împăratului. Calul formulează sensul acestui conflict: astfel de oameni „fac pe oameni să prindă la minte”.',
            relevanta: 'Conflictul este relevant pentru relația celor doi deoarece Spânul devine, fără să vrea, un *rău necesar* în inițierea eroului.' },
          { nume: 'Motivul jurământului',
            analiza: 'Jurământul pe paloș, făcut în fântână, leagă cele două personaje: Harap-Alb trebuie să-l slujească pe Spân și să tacă, iar eliberarea vine doar prin moarte și înviere, cum fusese rostit chiar de Spân.',
            relevanta: 'Motivul jurământului este relevant deoarece structurează relația de la început până la deznodământ și pune în lumină onestitatea eroului.' }
        ]
      }
    ],

    introducere: 'Ion Creangă, unul dintre marii clasici ai literaturii române, publică „Povestea lui Harap-Alb” în revista „Convorbiri literare”, la 1 august 1877. Opera este un *basm cult*, în care autorul preia tiparul basmului popular, dar îl transformă prin umanizarea fantasticului, prin umor și prin oralitate, urmărind drumul de maturizare al unui tânăr până la împărăție.',
    incheiere: 'Prin „Povestea lui Harap-Alb”, Ion Creangă transformă un basm cu tipar popular într-o poveste despre maturizare, în care binele învinge, iar suferința îl face pe erou mai înțelept. Valoarea operei vine din îmbinarea fabulosului cu realismul gesturilor și al limbajului, ceea ce face din basmul cult al lui Creangă o capodoperă a prozei românești.',

    citate: [
      { text: '„Amu cică era odată într-o țară un crai, care avea trei feciori.”', context: 'formula inițială; fixează timpul și spațiul fabuloase' },
      { text: '„să te ferești de omul roș, iară mai ales de cel spân”', context: 'sfatul craiului la plecare; anunță conflictul cu Spânul' },
      { text: '„boboc în felul său la trebi de aieste”', context: 'naratorul, despre naivitatea fiului de crai în episodul fântânii' },
      { text: '„atâta vreme să ai a mă sluji, până când îi muri și iar îi învia”', context: 'jurământul impus de Spân; anticipează finalul' },
      { text: '„De-acum înainte să știi că te cheamă Harap-Alb”', context: 'Spânul îi dă eroului noul nume' },
      { text: '„nu eu, ci puterea milosteniei și inima ta cea bună te ajută”', context: 'Sfânta Duminică; bunătatea este răsplătită' },
      { text: '„vei crede celor asupriți și necăjiți, pentru că știi acum ce e necazul”', context: 'Sfânta Duminică; sensul suferinței în inițiere' },
      { text: '„Și unii ca aceștia sunt trebuitori pe lume câteodată, pentru că fac pe oameni să prindă la minte”', context: 'calul, despre Spân (*răul necesar*)' },
      { text: '„Na! așa trebuie să pățească cine calcă jurământul!”', context: 'Spânul, când îi taie capul lui Harap-Alb' },
      { text: '„Iar pe la noi, cine are bani bea și mănâncă, iară cine nu, se uită și rabdă.”', context: 'formula finală; revenirea ironică în lumea reală' }
    ],
    capcane: [
      'Harap-Alb nu se numește așa de la început: până la episodul fântânii este „fiul craiului” (mezinul), iar numele i-l dă Spânul.',
      'Verde-împărat este unchiul eroului (fratele mai mare al craiului) și are numai fete; fata cu care se căsătorește Harap-Alb este fiica împăratului Roș.',
      'Nu confunda trăsăturile basmului popular (autor anonim, circulație orală) cu cele ale basmului cult: textul lui Creangă are autor cunoscut, umanizează fantasticul și are un stil personal, oral și umoristic.',
      'Sfânta Duminică apare întâi ca o bătrână cerșetoare; ea, nu o zână, îl ajută la primele două probe ale Spânului.'
    ]

  },

  // =====================================================================
  // 2. MOARA CU NOROC — Ioan Slavici
  // =====================================================================
  {
    id: 'moara-cu-noroc',
    titlu: 'Moara cu noroc',
    autor: 'Ioan Slavici',
    an: '1881',
    aparitie: 'volumul „Novele din popor” (1881)',
    gen: 'epic',
    specie: 'nuvelă psihologică',
    categorii: ['nuvelă', 'nuvelă realistă', 'nuvelă psihologică', 'text narativ realist', 'operă epică a perioadei marilor clasici'],

    incadrare: {
      eticheta: 'realism (perioada marilor clasici, epoca junimistă)',
      trasaturi: [
        { nume: 'Tema socială a banului, tratată realist: faptele personajelor sunt motivate social (sărăcia, dorința de a urca pe scara socială) și psihologic.',
          dovada: 'Ghiță, cizmar sărac, ia în arendă cârciuma de la Moara cu noroc ca să iasă din sărăcie, iar întâlnirea cu Lică îi trezește patima câștigului: „vedea banii grămadă înaintea sa și i se împăienjeneau parcă ochii”.' },
        { nume: 'Veridicitatea: acțiunea se petrece într-un spațiu și un timp concrete, recognoscibile, iar personajele sunt tipuri sociale.',
          dovada: 'Cârciuma se află pe drumul de la Ineu, în apropierea Fundurenilor, Ghiță merge la Arad să cumpere două pistoale, iar acțiunea durează de la Sfântul Gheorghe până la Paștele din anul următor; personajele reprezintă tipuri: cârciumarul dornic de înavuțire, sămădăul (Lică), jandarmul (Pintea).' },
        { nume: 'Obiectivitatea perspectivei narative, îmbinată cu analiza psihologică.',
          dovada: 'Naratorul omniscient, la persoana a III-a, relatează neutru faptele, dar pătrunde în conștiința lui Ghiță și îi redă frământările prin monolog interior: „Ce să-mi fac dacă e în mine ceva mai tare decât voința mea!?”.' }
      ]
    },

    tema: 'Tema nuvelei este *dezumanizarea* omului stăpânit de patima banului: Ghiță, un om cinstit și harnic, își pierde treptat liniștea, încrederea familiei și umanitatea din dorința de îmbogățire, ajungând complice al unui criminal și, în final, ucigaș.',
    viziune: 'Viziunea este realistă și moralizatoare: omul trebuie să fie mulțumit cu ce are, iar abaterea de la măsură, prin setea de bani, aduce pedeapsa. Finalul tragic confirmă cuvintele bătrânei din incipit, care deschid și închid nuvela.',

    secvente: [
      { titlu: 'Sfatul bătrânei și hotărârea lui Ghiță (incipitul)',
        rezumat: 'Soacra lui Ghiță îi spune că „nu bogăția, ci liniștea colibei tale te face fericit”, dar Ghiță hotărăște să ia în arendă cârciuma de la Moara cu noroc, de la Sfântul Gheorghe, ca să se îmbogățească.',
        comentariu: 'Secvența anunță tema și conflictul: liniștea colibei se opune dorinței de înavuțire. Bătrâna nu hotărăște în locul tinerilor, iar replica ei funcționează ca un avertisment care se va împlini în final, ceea ce dă nuvelei o structură închisă, aproape de cea a unei parabole.' },
      { titlu: 'Venirea lui Lică la Moara cu noroc',
        rezumat: 'Lică Sămădăul îi cere lui Ghiță să-i spună totdeauna cine trece pe drum, iar la a doua vizită îi lasă semnele turmelor și îi ia banii din saltar, „cu împrumut”; Ghiță își cumpără două pistoale, își ia o a doua slugă (pe Marți) și doi câini.',
        comentariu: 'Venirea lui Lică declanșează conflictul și începutul dezumanizării. Ghiță ar putea pleca, dar rămâne, pentru că îl atrage câștigul: „Ghiță întâia oară în viața lui ar fi voit să n-aibă nevastă și copii”. Măsurile de apărare arată că încearcă să-și păstreze independența, dar compromisul cu Lică îl va lega treptat de lumea crimei.' },
      { titlu: 'Jefuirea arendașului, uciderea femeii în negru și judecata',
        rezumat: 'După o noapte petrecută de Lică la cârciumă, arendașul este jefuit, iar o femeie îmbrăcată în negru și copilul ei sunt găsiți uciși; Ghiță este luat la bănuială și lăsat pe chezășie, iar la judecată face o mărturie îndoielnică, după care Lică este achitat.',
        comentariu: 'Episodul marchează căderea morală a lui Ghiță: tăcerea și mărturia ambiguă îl fac complice. Rușinea îl copleșește, iar cuvintele adresate Anei („Iartă-mă cel puțin tu, căci eu n-am să mă iert cât voi trăi”) arată conștiința vinei, dar și neputința de a se rupe de Lică.' },
      { titlu: 'Paștile la Moara cu noroc (finalul tragic)',
        rezumat: 'Ghiță, hotărât să-l dea pe Lică pe mâna lui Pintea, o lasă pe Ana singură cu Lică și pleacă după jandarm; Ana, dezgustată de slăbiciunea soțului, i se dăruiește lui Lică; întors, Ghiță o ucide pe Ana, Răuț îl împușcă pe Ghiță din porunca lui Lică, iar cârciuma este incendiată; urmărit de Pintea, Lică își zdrobește capul de un stejar uscat.',
        comentariu: 'Finalul aduce pedeapsa pentru toți cei care au încălcat măsura: Ghiță recunoaște că și-a aruncat nevasta „ca un ticălos” în brațele lui Lică, din setea de răzbunare. Focul are rol purificator, iar replica bătrânei („Simțeam eu că nu are să iasă bine; dar așa le-a fost dat!...”) închide simetric nuvela și îi confirmă morala.' }
    ],

    elemente: [
      { nume: 'Titlul',
        analiza: 'Titlul este antifrastic: Moara cu noroc nu aduce noroc, ci nenorocire. Moara este părăsită, iar în locul ei funcționează cârciuma, unde se „macină” sufletele oamenilor; „norocul” devine o ispită, adică dorința de câștig rapid.',
        relevanta: 'Titlul este relevant pentru tema dezumanizării deoarece sugerează, ironic, că locul care promite îmbogățirea este locul în care Ghiță își pierde liniștea și viața.' },
      { nume: 'Incipitul și finalul (simetria)',
        analiza: 'Nuvela începe cu vorbele bătrânei („Omul să fie mulțumit cu sărăcia sa”) și se încheie tot cu ea, plângând lângă cele cinci cruci: „Simțeam eu că nu are să iasă bine; dar așa le-a fost dat!...”. Simetria dă textului o structură închisă, circulară.',
        relevanta: 'Incipitul și finalul sunt relevante pentru viziunea moralizatoare deoarece încadrează destinul lui Ghiță între avertisment și confirmarea lui.' },
      { nume: 'Perspectiva narativă',
        analiza: 'Naratorul este omniscient, heterodiegetic și obiectiv, relatând la persoana a III-a fără să judece direct personajele. El pătrunde însă în gândurile lor și le redă prin monolog interior și stil indirect liber, ceea ce dă nuvelei profunzime psihologică.',
        relevanta: 'Perspectiva narativă este relevantă pentru specia nuvelei psihologice deoarece permite urmărirea din interior a transformării lui Ghiță.' },
      { nume: 'Conflictul',
        analiza: 'Conflictul exterior îl opune pe Ghiță lui Lică și, în plan secundar, lui Pintea și Anei. Conflictul principal este însă interior: Ghiță se zbate între dorința de a rămâne om cinstit, alături de familie, și patima banului, care îl leagă de Lică.',
        relevanta: 'Conflictul este relevant pentru tema dezumanizării deoarece lupta interioară, pierdută de Ghiță, explică degradarea lui morală.' },
      { nume: 'Spațiul și timpul',
        analiza: 'Cârciuma se află la o răscruce de drumuri, într-o vale izolată, înconjurată de „locurile rele”, ceea ce o face loc de trecere și de ispită. Acțiunea durează un an, de la Sfântul Gheorghe până la Paști, iar momentele importante sunt legate de sărbători (judecata are loc „vineri după Sfântul Dumitru”, deznodământul, de Paști).',
        relevanta: 'Spațiul și timpul sunt relevante deoarece izolarea locului favorizează stăpânirea lui Lică, iar cadrul sărbătorilor creștine accentuează contrastul dintre rânduiala lumii și păcatul personajelor.' },
      { nume: 'Tehnicile analizei psihologice',
        analiza: 'Slavici folosește monologul interior („Ei! ce să-mi fac!? (...) Așa m-a lăsat Dumnezeu!”), stilul indirect liber, notarea gesturilor și a mimicii, precum și tehnica amânării: Ghiță vrea mereu să-i spună Anei adevărul, dar amână. Schimbarea lui se vede și în comportament: „se făcuse mai de tot ursuz, se aprindea pentru orișice lucru de nimic”.',
        relevanta: 'Tehnicile analizei psihologice sunt relevante deoarece fac vizibil procesul lent al dezumanizării, ceea ce încadrează opera în nuvela psihologică.' }
    ],

    personaje: [
      { nume: 'Ghiță',
        tip: 'personaj principal, rotund, complex, cu evoluție descendentă (dezumanizare); personaj realist construit prin analiză psihologică',
        statut: {
          social: 'Este cizmar sărac, care devine cârciumar prin arendarea cârciumii de la Moara cu noroc; ajunge om înstărit, dar și tovarăș al lui Lică Sămădăul, apoi om bănuit, „lăsat pe chezășie”.',
          psihologic: 'La început este harnic, încrezător și iubitor cu familia; după venirea lui Lică devine ursuz, neliniștit, însingurat și violent, sfâșiat între patima banului și dorința de a rămâne cinstit.',
          moral: 'Pornește ca om cinstit, dar decade treptat: tăinuiește fapte, primește porci și bani furați, face o mărturie îndoielnică la judecată și, în final, o folosește pe Ana ca momeală și o ucide.'
        },
        trasaturi: [
          { trasatura: 'patima banului (lăcomia)',
            episoade: [
              { titlu: 'Hotărârea de a rămâne la Moara cu noroc după prima vizită a lui Lică',
                comentariu: 'Deși înțelege că Lică îi va cere complicitate, Ghiță se gândește la câștigul pe care l-ar face în tovărășie cu el și „vedea banii grămadă înaintea sa”. Pentru prima oară își dorește să nu aibă familie, semn că banul începe să conteze mai mult decât oamenii dragi.' },
              { titlu: 'Pregătirea plecării de Paști',
                comentariu: 'Ghiță își numără banii singur, în odaia de lângă birt, și plănuiește să fugă cu familia, iar apoi să-l și fure pe Lică („Dac-o fac, să o fac barem deplină!”). Planul arată că patima banului îl domină complet, chiar și în momentul în care se teme pentru viața lui.' }
            ] },
          { trasatura: 'slăbiciunea morală (ezitarea, lipsa de fermitate)',
            episoade: [
              { titlu: 'Împăcarea cu propriile păcate',
                comentariu: 'Ghiță se ferește de Pintea, căruia ar trebui să-i spună adevărul, și se justifică prin monolog interior: „Așa m-a lăsat Dumnezeu! Ce să-mi fac dacă e în mine ceva mai tare decât voința mea!?”. El își recunoaște slăbiciunea, dar o pune pe seama firii, renunțând să lupte cu ea.' },
              { titlu: 'Abandonarea Anei în noaptea de Paști',
                comentariu: 'Ca să-l prindă pe Lică, Ghiță o lasă pe Ana singură cu acesta, deși știe ce riscă; Ana îi spusese deja: „Tu ești acela care se pleacă înaintea lui ca o slugă”. După crimă, recunoaște că a aruncat-o „ca un ticălos” în brațele lui Lică, ceea ce arată prăbușirea lui morală.' }
            ] }
        ],
        constructie: [
          { nume: 'Caracterizarea directă',
            analiza: 'Naratorul notează schimbarea lui Ghiță: „se făcuse mai de tot ursuz, se aprindea pentru orișice lucru de nimic”, iar Ana îl caracterizează aspru: „Tu ești acela care se pleacă înaintea lui ca o slugă, iar nu eu, Ghiță!”. Chiar Ghiță se autocaracterizează după judecată: „cerul m-a lovit cu orbie”.',
            relevanta: 'Caracterizarea directă este relevantă deoarece fixează etapele transformării lui Ghiță, văzută din perspective diferite.' },
          { nume: 'Caracterizarea indirectă',
            analiza: 'Faptele (cumpărarea pistoalelor și a câinilor, primirea porcilor nemarcați, mărturia de la judecată, banii însemnați primiți de la Lică) și gesturile (îi scuipă Anei în față, își numără banii singur) dezvăluie un om tot mai stăpânit de patimă și tot mai singur.',
            relevanta: 'Caracterizarea indirectă este relevantă deoarece arată, prin fapte concrete, cum dezumanizarea trece din gând în comportament.' },
          { nume: 'Monologul interior și stilul indirect liber',
            analiza: 'Frământările lui Ghiță sunt redate direct: „Ei! ce să-mi fac!? (...) Așa m-a lăsat Dumnezeu!” sau „Te crezi tu mai rău decât mine!? Să vedem!”. Prin aceste procedee, cititorul urmărește oscilațiile personajului între remușcare și răzbunare.',
            relevanta: 'Monologul interior este relevant pentru construcția unui personaj de nuvelă psihologică, al cărui conflict principal este interior.' },
          { nume: 'Conflictul interior',
            analiza: 'Ghiță vrea să rămână om cinstit și să-și păstreze familia, dar nu se poate rupe de câștigul adus de Lică; între aceste două tendințe, el amână mereu hotărârile, iar amânarea îl duce la catastrofă.',
            relevanta: 'Conflictul interior este relevant deoarece explică logica tragică a destinului lui Ghiță.' },
          { nume: 'Relația cu celelalte personaje',
            analiza: 'Ghiță se definește prin raportarea la trei personaje: Ana (iubirea și familia pe care le pierde), Lică (ispita și puterea, de care devine dependent) și Pintea (legea, căreia îi ascunde adevărul, apoi i se aliază din răzbunare).',
            relevanta: 'Relațiile sunt relevante deoarece fiecare dintre ele marchează o etapă a degradării personajului.' }
        ],
        citate: [
          '„vedea banii grămadă înaintea sa și i se împăienjeneau parcă ochii” (naratorul, despre Ghiță după prima vizită a lui Lică)',
          '„Ce să-mi fac dacă e în mine ceva mai tare decât voința mea!?” (monologul interior al lui Ghiță)',
          '„Iartă-mă cel puțin tu, căci eu n-am să mă iert cât voi trăi” (Ghiță către Ana, după judecată)',
          '„Te duc la spânzurătoare chiar dac-ar trebui să merg și eu de hăț cu tine” (Ghiță, în gând, despre Lică)',
          '„Tu ești acela care se pleacă înaintea lui ca o slugă, iar nu eu, Ghiță!” (Ana către Ghiță)'
        ]
      }
    ],

    relatii: [
      { intre: ['Ghiță', 'Ana'],
        statut_initial: 'Ghiță și Ana sunt tineri căsătoriți, cu doi copii, care trăiesc în armonie; Ghiță este „înalt și spătos”, iar Ana, „prea tânără, prea așezată, oarecum prea blândă la fire”, după cum spune bătrâna. La început, relația este bazată pe iubire și încredere: „privind eu la Ana, Ana la mine, amândoi la copilaș”.',
        scene: [
          { titlu: 'Fericirea de la început',
            comentariu: 'În primele luni de la Moara cu noroc, Ghiță o poartă pe Ana „ca pe o pană subțirică”, iar noaptea se asigură că doarme acoperită. Imaginea arată o căsnicie armonioasă, pe care venirea lui Lică o va distruge.' },
          { titlu: 'Înstrăinarea și tăcerea lui Ghiță',
            comentariu: 'Ana îl întreabă „Ghiță, ce ai tu cu omul ăsta?” și îl avertizează că Lică e „om rău și om primejdios”, dar Ghiță minte și se ferește de ea. După jefuirea arendașului, când Ana îl acuză de complicitate, Ghiță îi scuipă în față, ceea ce marchează ruptura dintre soți.' },
          { titlu: 'Noaptea de Paști (deznodământul)',
            comentariu: 'Ghiță îi spune Anei „Îmi stai în cale” și o lasă singură cu Lică; ea, dezgustată de slăbiciunea lui, îi spune lui Lică: „Tu ești om, Lică, iară Ghiță nu e decât o muiere îmbrăcată în haine bărbătești”. Întors, Ghiță o ucide, iar relația se încheie tragic.' }
        ],
        evolutie: 'Relația evoluează de la iubire și încredere la tăcere, neîncredere și violență. Ghiță se închide în sine din cauza tovărășiei cu Lică, iar Ana, simțindu-se părăsită și disprețuindu-i slăbiciunea, se apropie de Lică, ceea ce duce la crimă.',
        elemente: [
          { nume: 'Conflictul',
            analiza: 'Conflictul dintre soți nu este provocat de lipsa iubirii, ci de intervenția lui Lică și de tăcerea lui Ghiță, care nu-i spune Anei adevărul la timp. În final, Ghiță recunoaște: „Pentru că Dumnezeu nu mi-a dat gândul bun la vreme potrivită”.',
            relevanta: 'Conflictul este relevant pentru relația celor doi deoarece arată cum patima banului distruge, indirect, familia.' },
          { nume: 'Tehnicile analizei psihologice',
            analiza: 'Naratorul urmărește gesturile, tăcerile și replicile scurte ale soților (Ana: „Tu nu mă omori, Ghiță; mă seci de viață”), iar gândurile lui Ghiță sunt redate prin monolog interior.',
            relevanta: 'Analiza psihologică este relevantă deoarece face vizibilă degradarea treptată a căsniciei, de la armonie la crimă.' }
        ]
      },
      { intre: ['Ghiță', 'Lică'],
        statut_initial: 'Ghiță este un cârciumar harnic, dornic de câștig, iar Lică Sămădăul este stăpânul neoficial al locului, un sămădău, adică, după cuvintele naratorului, „om aspru și neîndurat”, care cere să știe tot ce se petrece pe drum. Raportul dintre ei este inegal de la început: Lică impune, Ghiță cedează.',
        scene: [
          { titlu: 'Prima întâlnire',
            comentariu: 'Lică i se prezintă („Eu sunt Lică, sămădăul...”) și îi cere: „Eu voiesc să știu totdeauna cine umblă pe drum, cine trece pe aici”. Ghiță rămâne „răcit în tot trupul”, semn că înțelege că nu va mai fi stăpân pe sine.' },
          { titlu: 'Scena cheilor și a banilor',
            comentariu: 'Lică îi cere cheile și îi ia banii din saltar, „cu împrumut”; Ghiță îl înfruntă („Mi-ai luat liniștea sufletului și mi-ai stricat viața”) și îl amenință că îl poate duce la spânzurătoare. Înfruntarea arată că Ghiță e la fel de puternic, dar nu are libertate, pentru că se teme pentru familie și îl atrage câștigul.' },
          { titlu: 'Răzbunarea și finalul',
            comentariu: 'După judecată, Ghiță se aliază cu Pintea și jură în gând: „Te duc la spânzurătoare chiar dac-ar trebui să merg și eu de hăț cu tine”. Planul său duce la moartea tuturor: Lică poruncește uciderea lui Ghiță, apoi se sinucide ca să nu fie prins.' }
        ],
        evolutie: 'Relația evoluează de la teamă și rezistență la complicitate și apoi la ură și dorință de răzbunare. Lică rămâne consecvent, rece și calculat, în timp ce Ghiță oscilează mereu, iar cei doi se distrug reciproc.',
        elemente: [
          { nume: 'Conflictul',
            analiza: 'Conflictul exterior dintre Ghiță și Lică este un conflict de putere și de interese: Lică vrea un complice supus, Ghiță vrea câștigul fără să-și piardă independența. Conflictul exterior îl adâncește pe cel interior al lui Ghiță.',
            relevanta: 'Conflictul este relevant deoarece relația cu Lică este motorul dezumanizării lui Ghiță.' },
          { nume: 'Caracterizarea prin contrast',
            analiza: 'Lică este portretizat ca un om hotărât, fără ezitări („un om de treizeci și șase de ani, înalt, uscățiv și supt la față”, cu ochii „mici și verzi”), în timp ce Ghiță este un om al îndoielii și al amânării.',
            relevanta: 'Contrastul este relevant deoarece explică de ce Lică îl domină pe Ghiță: hotărârea învinge ezitarea.' }
        ]
      }
    ],

    introducere: 'Ioan Slavici, unul dintre marii clasici ai literaturii române, publică nuvela „Moara cu noroc” în volumul „Novele din popor” (1881). Opera este o *nuvelă psihologică* de factură realistă, care urmărește dezumanizarea unui om cinstit, cârciumarul Ghiță, aflat sub stăpânirea patimii banului.',
    incheiere: 'Prin destinul lui Ghiță, „Moara cu noroc” demonstrează că setea de înavuțire distruge echilibrul sufletesc și familia, confirmând cuvintele bătrânei din incipit. Nuvela rămâne valoroasă prin analiza psihologică atentă, prin care Slavici deschide drumul prozei psihologice românești.',

    citate: [
      { text: '„nu bogăția, ci liniștea colibei tale te face fericit”', context: 'cuvintele bătrânei din incipit; anunță tema' },
      { text: '„Eu voiesc să știu totdeauna cine umblă pe drum, cine trece pe aici”', context: 'Lică, la prima întâlnire cu Ghiță' },
      { text: '„Mi-ai luat liniștea sufletului și mi-ai stricat viața”', context: 'Ghiță către Lică, în scena banilor din saltar' },
      { text: '„vedea banii grămadă înaintea sa și i se împăienjeneau parcă ochii”', context: 'naratorul; patima banului se trezește în Ghiță' },
      { text: '„se făcuse mai de tot ursuz, se aprindea pentru orișice lucru de nimic”', context: 'naratorul; schimbarea lui Ghiță văzută de Ana' },
      { text: '„Așa m-a lăsat Dumnezeu! Ce să-mi fac dacă e în mine ceva mai tare decât voința mea!?”', context: 'monologul interior al lui Ghiță' },
      { text: '„Tu ești acela care se pleacă înaintea lui ca o slugă, iar nu eu, Ghiță!”', context: 'Ana către Ghiță, înainte de Paști' },
      { text: '„Tu ești om, Lică, iară Ghiță nu e decât o muiere îmbrăcată în haine bărbătești”', context: 'Ana către Lică, în noaptea de Paști' },
      { text: '„Simțeam eu că nu are să iasă bine; dar așa le-a fost dat!...”', context: 'bătrâna, în finalul nuvelei; simetria cu incipitul' }
    ],
    capcane: [
      'Bătrâna din incipit și din final este soacra lui Ghiță (mama Anei), nu mama lui.',
      'Ana nu este ucisă de Lică: Ghiță o înjunghie, iar Lică îi poruncește lui Răuț să-l împuște pe Ghiță; Lică se sinucide, izbindu-se cu capul de un stejar, ca să nu fie prins de Pintea.',
      'Nuvela nu este narată la persoana I: naratorul este omniscient și obiectiv, iar caracterul psihologic vine din tehnicile de analiză (monolog interior, stil indirect liber), nu dintr-o perspectivă subiectivă.',
      'Pintea nu este un jandarm oarecare: fusese odinioară tovarăș al lui Lică și îi cunoaște „toate potecile și toate apucăturile”.'
    ]

  },

  // =====================================================================
  // 3. ION — Liviu Rebreanu
  // =====================================================================
  {
    id: 'ion',
    titlu: 'Ion',
    autor: 'Liviu Rebreanu',
    an: '1920',
    aparitie: 'roman în două volume, „Glasul pământului” și „Glasul iubirii” (1920)',
    gen: 'epic',
    specie: 'roman',
    categorii: ['roman', 'roman interbelic', 'roman realist', 'roman obiectiv', 'roman social', 'roman al satului / al pământului', 'text narativ realist'],

    incadrare: {
      eticheta: 'realism (roman realist-obiectiv), perioada interbelică',
      trasaturi: [
        { nume: 'Tema socială, tratată obiectiv: problema pământului în satul ardelean, unde averea hotărăște locul omului în comunitate.',
          dovada: 'Ion, fiul Glanetașului, are doar „trei petice de pământ”, iar Vasile Baciu îl jignește la horă, numindu-l „sărăntoc”; ierarhia satului se vede chiar în descrierea horei, unde bogătașii stau separat, iar Glanetașu trage cu urechea „ca un câine la ușa bucătăriei”.' },
        { nume: 'Perspectiva narativă obiectivă: narator omniscient, omniprezent și neimplicat, care relatează la persoana a III-a.',
          dovada: 'Naratorul descrie drumul spre Pripas, casele și oamenii cu precizie, ca o cameră care se deplasează („Drumul trece peste Părâul Doamnei, lăsând în stânga casa lui Alexandru Pop Glanetașu”), și redă faptele, inclusiv pe cele crude, fără să le comenteze.' },
        { nume: 'Caracterul monografic și veridicitatea: romanul înfățișează viața satului prin obiceiurile lui (hora, nunta, botezul, înmormântarea, sfințirea bisericii), într-un spațiu real, recognoscibil.',
          dovada: 'Acțiunea se petrece în satul Pripas, lângă Armadia, Jidovița și Bistrița, pe valea Someșului; romanul se deschide cu hora („Duminică. Satul e la horă.”) și se încheie cu sfințirea bisericii celei noi, la care participă tot satul.' }
      ]
    },

    tema: 'Tema romanului este *problematica pământului* în satul ardelean de la începutul secolului al XX-lea: setea de pământ a țăranului sărac Ion, care, ca să-l obțină, sacrifică iubirea și distruge viața Anei, iar în final plătește cu propria viață. Romanul urmărește conflictul dintre *glasul pământului* și *glasul iubirii*.',
    viziune: 'Viziunea este realistă și obiectivă, cu accente naturaliste: omul este dominat de instincte și de condiția socială, iar destinul individual se pierde în curgerea indiferentă a vieții colective: „Satul a rămas înapoi același, parcă nimic nu s-ar fi schimbat.”',

    secvente: [
      { titlu: 'Hora din Pripas (incipitul)',
        rezumat: 'Duminică, satul este la horă, la Todosia, văduva lui Maxim Oprea; Ion o joacă pe Ana, fata bogată a lui Vasile Baciu, deși o iubește pe Florica, iar Vasile îl numește „sărăntoc”; seara, la cârciuma lui Avrum, Ion se bate cu George Bulbuc.',
        comentariu: 'Hora este un tablou monografic al satului și al ierarhiei lui: fruntașii, săracii și intelectualii își au fiecare locul. Tot aici se declanșează conflictul: Ion alege fata bogată, iar replica lui („Ce-s eu, sluga dumitale, să-mi poruncești?”) arată orgoliul rănit al țăranului sărac, hotărât să aibă pământ cu orice preț.' },
      { titlu: 'Ion la coasă: „Cât pământ, Doamne!”',
        rezumat: 'Ion urcă la fânețe și privește hotarul satului „ca o slugă credincioasă pe un stăpân falnic și neîndurător”; în fața întinderii pământului se simte mic și suspină: „Cât pământ, Doamne!...”.',
        comentariu: 'Secvența explică motivația personajului: „Iubirea pământului l-a stăpânit de mic copil”, iar pământul îi era „mai drag ca o mamă”. Imaginea pământului personificat, care îl domină pe om, anunță că patima pentru pământ va deveni forța care îl conduce.' },
      { titlu: 'Seducerea Anei și nunta',
        rezumat: 'Ion o lasă însărcinată pe Ana ca să-l oblige pe Vasile Baciu să i-o dea de nevastă împreună cu pământurile, iar Vasile acceptă căsătoria; la nuntă, Ion stă lângă Ana, dar se gândește la Florica.',
        comentariu: 'Episodul arată calculul rece al lui Ion, pentru care Ana este doar un mijloc: „Dragostea nu ajunge în viață... Dragostea e numai adaosul. Altceva trebuie să fie temelia.” Nunta, în loc să fie un moment de împlinire, marchează începutul dramei Anei.' },
      { titlu: 'Sărutarea pământului',
        rezumat: 'După ce Vasile Baciu îi trece toate pământurile, Ion iese primăvara la câmp, în straie de sărbătoare, ia în mâini un bulgăre de lut și, în genunchi, sărută pământul.',
        comentariu: 'Scena este punctul culminant al „glasului pământului”: Ion își lipește buzele „cu voluptate de pământul ud”, iar pământul este descris ca o iubită. Ion se simte „mare și puternic ca un uriaș din basme”, dar triumful este urmat de prăbușire: imediat după aceea Ana se sinucide, iar el se va întoarce la Florica, unde își găsește moartea.' }
    ],

    elemente: [
      { nume: 'Titlul',
        analiza: 'Titlul este numele protagonistului, un nume foarte răspândit, ceea ce îl face reprezentativ pentru țăranul român sărac. Cele două volume au titluri simbolice, „Glasul pământului” și „Glasul iubirii”, care numesc cele două patimi ale personajului.',
        relevanta: 'Titlul este relevant pentru temă deoarece concentrează în destinul unui singur om drama colectivă a țăranului legat de pământ.' },
      { nume: 'Incipitul și finalul (simetria, structura circulară)',
        analiza: 'Romanul începe cu descrierea drumului care intră în Pripas, pe lângă o cruce cu un Hristos de tinichea, și se încheie cu același drum, care iese din sat: „Drumul trece prin Jidovița, pe podul de lemn, acoperit, de peste Someș, și pe urmă se pierde în șoseaua cea mare și fără început...”. Drumul are rol de cadru, iar capitolele extreme se numesc „Începutul” și „Sfârșitul”.',
        relevanta: 'Simetria incipit–final este relevantă pentru viziunea realistă deoarece sugerează că viața satului continuă neschimbată, indiferentă la destinul individual.' },
      { nume: 'Perspectiva narativă',
        analiza: 'Naratorul este omniscient, omniprezent și obiectiv, relatând la persoana a III-a, cu focalizare zero. El știe tot despre personaje, le redă gândurile prin stil indirect liber, dar nu le judecă, lăsând faptele să vorbească.',
        relevanta: 'Perspectiva narativă este relevantă deoarece obiectivitatea ei este trăsătura definitorie a romanului realist-obiectiv.' },
      { nume: 'Conflictele',
        analiza: 'Conflictul exterior principal îl opune pe Ion lui Vasile Baciu, pentru pământ, iar pe Ion lui George Bulbuc, pentru Ana și apoi pentru Florica; în planul intelectualilor apar conflictul dintre învățătorul Herdelea și preotul Belciug și conflictul național cu autoritățile. Conflictul interior este cel dintre „glasul pământului” și „glasul iubirii”.',
        relevanta: 'Conflictele sunt relevante deoarece pun în mișcare acțiunea și dezvăluie dimensiunea socială și psihologică a temei.' },
      { nume: 'Construcția subiectului (tehnica planurilor paralele)',
        analiza: 'Romanul urmărește două planuri: planul țăranilor (Ion, Ana, Vasile Baciu, Glanetașu, George, Florica) și planul intelectualilor (familia învățătorului Zaharia Herdelea, preotul Belciug). Planurile se intersectează: Titu Herdelea îi sugerează, fără să vrea, lui Ion soluția („Poți să-l silești?”), iar Belciug obține, la final, pământurile lui Ion pentru biserică.',
        relevanta: 'Tehnica planurilor paralele este relevantă deoarece oferă o imagine completă, monografică, a lumii satului.' },
      { nume: 'Structura (compoziția)',
        analiza: 'Romanul are două volume, „Glasul pământului” (capitolele I–VI) și „Glasul iubirii” (capitolele VII–XIII), cu titluri de capitole care rezumă esențialul („Începutul”, „Nunta”, „Sărutarea”, „Ștreangul”, „Sfârșitul”). Construcția este riguroasă, cu fapte motivate și înlănțuite cauzal.',
        relevanta: 'Structura este relevantă deoarece împărțirea în cele două „glasuri” urmărește exact evoluția patimilor lui Ion.' }
    ],

    personaje: [
      { nume: 'Ion',
        tip: 'personaj principal, eponim, rotund și complex; tipul țăranului sărac însetat de pământ, construit realist, cu accente naturaliste',
        statut: {
          social: 'Este fiul lui Alexandru Pop Glanetașu și al Zenobiei, țăran sărac din Pripas, cu puțin pământ; prin căsătoria cu Ana, fiica bogatului Vasile Baciu, devine unul dintre cei mai înstăriți oameni din sat, dar moare fără urmași, iar pământurile ajung la biserică.',
          psihologic: 'Este iute, mândru, harnic și isteț („Era iute și harnic, ca mă-sa”), dar dominat de două patimi, pământul și iubirea; oscilează între ele și devine calculat, viclean și brutal.',
          moral: 'Pentru a obține pământul, o folosește pe Ana ca mijloc, o batjocorește și o bate și rămâne indiferent la moartea ei și a copilului; dezumanizarea sa este pedepsită prin moarte violentă.'
        },
        trasaturi: [
          { trasatura: 'patima pentru pământ',
            episoade: [
              { titlu: 'Brazdele luate din pământul lui Simion Lungu',
                comentariu: 'Arând o porumbiște vecină cu cea a lui Simion Lungu, Ion își zice: „Măcar o brazdă să-mi iau înapoi din pământul meu!” și mută hotarul cu câteva brazde. Fapta mărunță arată că pentru pământ e gata să încalce legea și să intre în conflict cu satul.' },
              { titlu: 'Sărutarea pământului',
                comentariu: 'După ce obține pământurile lui Vasile Baciu, Ion îngenunchează și își lipește buzele „cu voluptate de pământul ud”, ca de o ibovnică. Gestul ritualic arată că pământul a devenit pentru el o iubire, singura care îl împlinește cu adevărat.' }
            ] },
          { trasatura: 'calculul rece și cruzimea (dezumanizarea)',
            episoade: [
              { titlu: 'Seducerea Anei',
                comentariu: 'După ce Titu îl întreabă dacă îl poate sili pe Vasile Baciu, Ion răspunde „Pot, domnișorule!” și o seduce pe Ana ca s-o lase însărcinată. Iubirea Anei devine pentru el o armă în tocmeala pentru pământ.' },
              { titlu: 'Purtarea față de Ana după nuntă',
                comentariu: 'Când Vasile refuză să-i dea pământurile, Ion o bate pe Ana, bănuind că s-a înțeles cu tatăl ei să-l înșele, iar după sinuciderea ei rămâne indiferent: pentru moartea Anei și a copilului are doar un rece „Așa a vrut Dumnezeu...”.' }
            ] }
        ],
        constructie: [
          { nume: 'Caracterizarea directă',
            analiza: 'Naratorul îl prezintă ca harnic și legat de pământ („Iar pământul îi era drag ca ochii din cap”), Titu Herdelea este înfiorat de patima lui, iar Vasile Baciu îl numește „Hoț ai fost, hoț ai rămas.”. Preotul Belciug îl dă în biserică drept „pildă de învrăjbire”.',
            relevanta: 'Caracterizarea directă este relevantă deoarece imaginea lui Ion se construiește din perspective diferite, de la admirație pentru hărnicie la condamnare.' },
          { nume: 'Caracterizarea indirectă',
            analiza: 'Faptele (bătaia cu George, mutarea hotarului, seducerea Anei, bătaia aplicată soției), gesturile (sărutarea pământului) și limbajul (replicile scurte, mândre, ca „Ce-s eu, sluga dumitale, să-mi poruncești?”) îl caracterizează mai convingător decât orice comentariu.',
            relevanta: 'Caracterizarea indirectă este relevantă pentru romanul obiectiv, în care personajul se dezvăluie prin ceea ce face.' },
          { nume: 'Conflictul interior',
            analiza: 'Ion este sfâșiat între Florica, pe care o iubește, și Ana, care are pământ: „Dar Florica era mai săracă decât dânsul, iar Ana avea locuri și case și vite multe...”. După ce obține pământul, „glasul iubirii” îl împinge înapoi spre Florica.',
            relevanta: 'Conflictul interior este relevant deoarece explică structura romanului și destinul tragic al personajului.' },
          { nume: 'Stilul indirect liber',
            analiza: 'Gândurile lui Ion sunt redate prin stil indirect liber, fără ca naratorul să-și piardă obiectivitatea: „Dragostea nu ajunge în viață... Dragostea e numai adaosul. Altceva trebuie să fie temelia.”',
            relevanta: 'Stilul indirect liber este relevant deoarece permite pătrunderea în mentalitatea personajului, pentru care pământul este valoarea supremă.' },
          { nume: 'Relațiile cu celelalte personaje',
            analiza: 'Ion se definește prin raportarea la Ana (mijlocul de a obține pământul), la Florica (iubirea), la Vasile Baciu (adversarul în lupta pentru pământ) și la George (rivalul, care îl ucide).',
            relevanta: 'Relațiile sunt relevante deoarece fiecare dintre ele ilustrează una dintre cele două patimi ale personajului.' }
        ],
        citate: [
          '„Iubirea pământului l-a stăpânit de mic copil.” (naratorul, despre Ion)',
          '„Cât pământ, Doamne!...” (Ion, privind hotarul satului)',
          '„Dragostea nu ajunge în viață... Dragostea e numai adaosul. Altceva trebuie să fie temelia.” (gândurile lui Ion, în stil indirect liber)',
          '„Tot pământul e al meu, domnișorule!” (Ion către Titu Herdelea)',
          '„Hoț ai fost, hoț ai rămas.” (Vasile Baciu despre Ion)'
        ]
      },
      { nume: 'Ana',
        tip: 'personaj secundar, tragic; victimă a lumii în care pământul contează mai mult decât omul',
        statut: {
          social: 'Este fiica lui Vasile Baciu, unul dintre bogătașii satului, rămasă fără mamă; devine soția lui Ion și mama lui Petrișor.',
          psihologic: 'Este timidă, sensibilă și melancolică, a crescut „lipsită de o dragoste părintească mângâietoare” și îl iubește sincer pe Ion; umilințele o aduc la disperare și la gândul morții.',
          moral: 'Este supusă, răbdătoare și credincioasă, dar nu are puterea de a se apăra; în lumea patriarhală a satului, ea devine doar o „zestre” disputată între tată și soț.'
        },
        trasaturi: [
          { trasatura: 'resemnarea (condiția de victimă)',
            episoade: [
              { titlu: 'Ana între tată și iubit („Rușinea”)',
                comentariu: 'Bătută de tatăl ei, Ana este trimisă la Ion, care o respinge până când Vasile acceptă să dea pământurile; ea merge „ca un câine izgonit” de la o casă la alta. Episodul arată că nimeni nu ține cont de suferința ei, ci doar de avere.' },
              { titlu: 'Sinuciderea Anei',
                comentariu: 'Umilită de bărbat și simțind că „e de prisos în lume”, Ana se spânzură în grajd, cu ștreangul cu care se lega vițelul. Moartea ei este consecința directă a patimii lui Ion pentru pământ.' }
            ] }
        ],
        constructie: [
          { nume: 'Caracterizarea directă',
            analiza: 'Naratorul o prezintă ca pe o ființă „oropsită, menită parcă să cunoască numai suferința în viață”, iar după nuntă „Ana era umilită și tăcută ca un câine.”.',
            relevanta: 'Caracterizarea directă este relevantă deoarece fixează statutul de victimă al personajului.' },
          { nume: 'Caracterizarea indirectă',
            analiza: 'Faptele și gesturile ei (iubirea necondiționată pentru Ion, răbdarea, privirea rugătoare, nașterea copilului pe câmp, sub un măr pădureț) arată o femeie fără apărare.',
            relevanta: 'Caracterizarea indirectă este relevantă deoarece Ana se definește mai ales prin ceea ce suportă.' },
          { nume: 'Motivul morții (procedee naturaliste)',
            analiza: 'Înainte de sinucidere, Ana se gândește obsesiv la Avrum, cârciumarul spânzurat, și la bătrânul Dumitru Moarcăș, mort cu briciul în mână; detaliile crude arată influența naturalismului.',
            relevanta: 'Motivul morții este relevant deoarece pregătește psihologic gestul final al personajului.' },
          { nume: 'Relația cu Ion',
            analiza: 'Ana îl iubește pe Ion, în timp ce el o folosește pentru pământ; contrastul dintre iubirea ei și calculul lui o transformă în victimă.',
            relevanta: 'Relația este relevantă deoarece destinul Anei ilustrează costul uman al patimii lui Ion.' }
        ],
        citate: [
          '„menită parcă să cunoască numai suferința în viață” (naratorul, despre Ana)',
          '„Ana era umilită și tăcută ca un câine.” (naratorul, după nuntă)',
          '„ca un câine izgonit” (naratorul, despre Ana trimisă de tatăl ei la Ion)',
          '„Simțământul că ea e de prisos în lume începea s-o urmărească pretutindeni.” (naratorul, înaintea sinuciderii)'
        ]
      }
    ],

    relatii: [
      { intre: ['Ion', 'Ana'],
        statut_initial: 'Ion este un flăcău sărac, harnic și mândru, iar Ana este fata bogată a lui Vasile Baciu, îndrăgostită sincer de el. Relația este inegală de la început: Ana îl iubește, iar Ion o vrea pentru zestre, deși „Nu-i fusese dragă Ana și nici acum nu-și dădea seama bine dacă i-e dragă”.',
        scene: [
          { titlu: 'Hora',
            comentariu: 'Ion o joacă pe Ana și o duce sub nuc, în grădină, dar se gândește la Florica și la faptul că Ana „avea locuri și case și vite multe”. Scena arată că relația pornește dintr-un calcul.' },
          { titlu: 'Seducerea și „rușinea” Anei',
            comentariu: 'Ion o lasă însărcinată ca să-l oblige pe Vasile Baciu să-i dea pământurile, apoi o respinge până la încheierea tocmelii. Ana devine obiectul unei negocieri între tată și viitorul soț.' },
          { titlu: 'După nuntă: bătaia și sinuciderea Anei',
            comentariu: 'Când Vasile refuză să-i dea pământurile, Ion o lovește pe Ana; după ce obține pământul, o ignoră complet. Ana se spânzură, iar Ion, cioplind, spune doar că „Mi se pare c-am văzut-o intrând în grajd”, semn al indiferenței totale.' }
        ],
        evolutie: 'Relația evoluează de la iubirea sinceră a Anei și interesul lui Ion la dispreț, violență și moarte. După sinuciderea Anei și moartea copilului, Ion se întoarce la Florica, iar această alegere îi aduce moartea.',
        elemente: [
          { nume: 'Conflictul',
            analiza: 'Relația este marcată de conflictul interior al lui Ion, între „glasul pământului” (Ana) și „glasul iubirii” (Florica), și de conflictul exterior dintre Ion și Vasile Baciu, în care Ana devine moneda de schimb.',
            relevanta: 'Conflictul este relevant deoarece explică de ce relația celor doi nu are temei afectiv și sfârșește tragic.' },
          { nume: 'Perspectiva narativă',
            analiza: 'Naratorul obiectiv redă fără comentarii scenele de violență și de umilință, dar intră în gândurile Anei prin stil indirect liber, ceea ce face ca drama ei să fie văzută din interior.',
            relevanta: 'Perspectiva narativă este relevantă deoarece obiectivitatea relatării face ca cruzimea relației să fie și mai puternică.' }
        ]
      }
    ],

    introducere: 'Liviu Rebreanu publică în 1920 romanul „Ion”, unul dintre primele romane realist-obiective moderne ale literaturii române. Opera, apărută la începutul perioadei interbelice, înfățișează satul ardelean de la începutul secolului al XX-lea și drama țăranului care sacrifică totul pentru pământ.',
    incheiere: 'Prin destinul lui Ion, Rebreanu construiește o adevărată monografie a satului ardelean și drama unui om stăpânit de patimi. Valoarea romanului stă în obiectivitatea viziunii, în construcția riguroasă, circulară, și în forța personajului, devenit simbol al legăturii țăranului român cu pământul.',

    citate: [
      { text: '„Duminică. Satul e la horă.”', context: 'începutul scenei horei; tabloul monografic al satului' },
      { text: '„Ce-s eu, sluga dumitale, să-mi poruncești?”', context: 'Ion către Vasile Baciu, la horă; orgoliul țăranului sărac' },
      { text: '„Cât pământ, Doamne!...”', context: 'Ion, privind hotarul satului' },
      { text: '„Iubirea pământului l-a stăpânit de mic copil.”', context: 'naratorul; motivația personajului' },
      { text: '„Măcar o brazdă să-mi iau înapoi din pământul meu!”', context: 'Ion, când mută hotarul lui Simion Lungu' },
      { text: '„Dragostea nu ajunge în viață... Dragostea e numai adaosul. Altceva trebuie să fie temelia.”', context: 'gândurile lui Ion despre Florica și Ana' },
      { text: '„și-și lipi buzele cu voluptate de pământul ud”', context: 'scena sărutării pământului' },
      { text: '„Tot pământul e al meu, domnișorule!”', context: 'Ion către Titu, după ce obține pământurile' },
      { text: '„Satul a rămas înapoi același, parcă nimic nu s-ar fi schimbat.”', context: 'finalul; indiferența vieții colective față de destinul individual' }
    ],
    capcane: [
      'Nu le confunda pe Ana și Florica: Ana este fiica bogatului Vasile Baciu și soția lui Ion; Florica este fiica săracă a văduvei lui Maxim Oprea și devine soția lui George Bulbuc.',
      'Ion nu este ucis de Vasile Baciu, ci de George Bulbuc, cu sapa, noaptea, în curtea Floricăi; George se predă și este arestat.',
      'Pământurile nu se întorc la Vasile Baciu: prin declarația semnată de Ion la stăruința preotului Belciug, ele ajung la biserică.',
      'Volumul I se numește „Glasul pământului”, iar volumul al II-lea „Glasul iubirii”; romanul este obiectiv, cu narator omniscient, nu subiectiv, la persoana I.'
    ]

  },

  // =====================================================================
  // 4. BALTAGUL — Mihail Sadoveanu
  // =====================================================================
  {
    id: 'baltagul',
    titlu: 'Baltagul',
    autor: 'Mihail Sadoveanu',
    an: '1930',
    aparitie: 'roman apărut în 1930',
    gen: 'epic',
    specie: 'roman',
    categorii: ['roman', 'roman interbelic', 'roman tradiționalist', 'roman realist', 'roman mitic', 'roman de inițiere', 'roman polițist (justițiar)', 'roman monografic'],

    incadrare: {
      eticheta: 'perioada interbelică; roman realist de orientare tradiționalistă, cu dimensiune mitică (roman polivalent)',
      trasaturi: [
        { nume: 'Orientarea tradiționalistă și caracterul monografic: romanul înfățișează lumea arhaică a păstorilor din munții Moldovei, cu credințele, obiceiurile și „rânduiala” ei.',
          dovada: 'Incipitul reia o legendă spusă de Nechifor Lipan („Domnul Dumnezeu, după ce a alcătuit lumea, a pus rânduială și semn fiecărui neam.”), care definește locul muntenilor în lume; pe drum, Vitoria întâlnește un botez și o nuntă (la Cruci), iar la final împlinește toate rânduielile înmormântării; nuntașii de la Cruci declară chiar că țin „cu călindarul cel vechi”, refuzând noutățile venite de la stăpânire.' },
        { nume: 'Structura de roman polițist (justițiar): dispariția unui om, ancheta, reconstituirea crimei și demascarea vinovaților.',
          dovada: 'Refăcând drumul lui Nechifor din han în han, Vitoria ajunge la concluzia decisivă: „La Sabasa fuseseră trei. Dincoace, peste muntele Stânișoara, la Suha, Nechifor Lipan nu mai era.”; la praznic reconstituie crima, iar Calistrat Bogza mărturisește: „Am făcut fapta asta ca să-i luăm oile.”' },
        { nume: 'Dimensiunea mitică: romanul reia, în spirit realist, motivele baladei „Miorița”.',
          dovada: 'Motto-ul este preluat din „Miorița” („Stăpâne, stăpâne”), iar, ca în baladă, doi oieri (Calistrat Bogza și Ilie Cuțui) îl ucid pe al treilea ca să-i ia oile, câinele credincios rămâne lângă stăpân, iar femeia pornește în căutarea lui; spre deosebire de măicuța bătrână din baladă, Vitoria nu se resemnează, ci face dreptate.' }
      ]
    },

    tema: 'Tema romanului este *căutarea adevărului și refacerea rânduielii* tulburate de o crimă: Vitoria Lipan pornește în căutarea soțului dispărut, îi găsește osemintele, îi demască pe ucigași și împlinește ritualurile de înmormântare. În plan secundar, romanul urmărește *inițierea* fiului ei, Gheorghiță.',
    viziune: 'Viziunea este tradiționalistă: lumea muntenilor trăiește după „rânduială” și „semne”, iar ordinea tulburată de crimă este refăcută prin voința unei femei care știe să citească semnele lumii. Sadoveanu îmbină realismul observației cu sugestia mitică a „Mioriței”.',

    secvente: [
      { titlu: 'Incipitul: legenda muntenilor și așteptarea Vitoriei',
        rezumat: 'Vitoria, singură pe prispă, torcând, își amintește povestea pe care o spunea Nechifor Lipan la nunți și cumetrii; soțul ei plecase la Dorna după oi, iar Sfântu-Andrei se apropia și el încă nu se întorsese.',
        comentariu: 'Legenda despre „rânduială și semn” definește lumea arhaică a muntenilor, iar absența lui Nechifor arată că această rânduială a fost tulburată. Portretul Vitoriei („Acei ochi aprigi și încă tineri căutau zări necunoscute”) anticipează căutarea care va urma.' },
      { titlu: 'Semnele și pregătirea drumului',
        rezumat: 'Vitoria îl visează pe Nechifor „trecând călare o apă neagră”, cere sfat părintelui Daniil Milieș și babei Maranda, ține post negru douăsprezece vineri, se roagă la mănăstirea Bistrița, la icoana Sfintei Ana, merge la prefectul din Piatra și comandă un baltag pe care preotul îl blagoslovește; pleacă împreună cu Gheorghiță „vineri în 10 martie”.',
        comentariu: 'Episodul arată îmbinarea dintre credința în semne și spiritul practic al Vitoriei: ea citește visul ca pe un mesaj, dar își vinde produsele, face jalbă la autorități și își pregătește drumul cu rânduială. Hotărârea ei („N-am să mai am hodină cum n-are pârăul Tarcăului, pân’ ce l-oi găsi pe Nechifor Lipan”) deschide călătoria-anchetă.' },
      { titlu: 'Găsirea osemintelor lui Nechifor în râpă',
        rezumat: 'Vitoria îl recunoaște pe Lupu, câinele lui Nechifor, la un gospodar din Sabasa; câinele îi conduce într-o râpă de sub un pod, pe drumul de munte dinspre Sabasa, unde Gheorghiță coboară primul și găsește rămășițele tatălui său; Vitoria constată că „Căpățâna era spartă de baltag” și îl lasă pe Gheorghiță să privegheze mortul până se întoarce cu oameni din sat.',
        comentariu: 'Scena este punctul culminant al căutării: adevărul bănuit de Vitoria se confirmă, iar femeia face „cea dintâi rânduială”, „cu grabă, dar fără lacrimi”. Pentru Gheorghiță, coborârea în râpă și veghea singur lângă oasele tatălui, în noapte, sunt o probă de inițiere, o confruntare cu moartea și cu frica.' },
      { titlu: 'Praznicul de la Sabasa: demascarea ucigașilor',
        rezumat: 'La praznicul de după înmormântare, Vitoria povestește crima „punct cu punct”, cere să vadă baltagul lui Calistrat Bogza și spune că „pe baltag e scris sânge”; Bogza se năpustește asupra lui Gheorghiță, care îl lovește cu muchea baltagului, iar Lupu îl apucă de beregată; rănit, Bogza mărturisește, iar Ilie Cuțui este arestat.',
        comentariu: 'Secvența împlinește dreptatea: crima este dezvăluită prin inteligența Vitoriei, iar pedeapsa vine prin mâna fiului și prin câinele credincios. Gheorghiță își încheie inițierea, simțind în el „o putere mai mare și mai dreaptă decât a ucigașului”, iar Vitoria, în finalul romanului, își face planuri de întoarcere la viața obișnuită, semn că rânduiala a fost refăcută.' }
    ],

    elemente: [
      { nume: 'Titlul',
        analiza: 'Baltagul este unealta și arma ciobanului de la munte, dar în roman are dublă semnificație: este arma crimei (Calistrat Bogza îl ucide pe Nechifor cu o lovitură de baltag) și instrumentul dreptății (Gheorghiță îl lovește pe Bogza chiar cu baltagul acestuia). Baltagul blagoslovit de preot, pe care Vitoria i-l dă fiului, sugerează că dreptatea are o sancțiune divină.',
        relevanta: 'Titlul este relevant pentru temă deoarece obiectul care tulbură rânduiala devine și cel care o reface.' },
      { nume: 'Incipitul și finalul',
        analiza: 'Incipitul este legenda despre „rânduială și semn”, iar finalul cuprinde planurile Vitoriei: parastasul, întoarcerea oilor și reluarea vieții: „Ș-apoi după aceea ne-om întoarce iar la Măgura, ca să luăm de coadă toate câte-am lăsat.”. Romanul se deschide cu ordinea arhaică și se închide cu restabilirea ei.',
        relevanta: 'Incipitul și finalul sunt relevante pentru viziunea tradiționalistă deoarece arată că viața muntenilor revine la rânduiala ei după ce dreptatea a fost făcută.' },
      { nume: 'Perspectiva narativă',
        analiza: 'Naratorul este omniscient și heterodiegetic, relatând la persoana a III-a, dar multe întâmplări sunt văzute prin ochii Vitoriei, ale cărei gânduri sunt redate prin stil indirect liber („Vitoria îl judeca pe Lipan. Avea ea să-i spuie multe”). Crima nu este narată direct, ci reconstituită de Vitoria la praznic.',
        relevanta: 'Perspectiva narativă este relevantă pentru structura de roman polițist deoarece cititorul descoperă adevărul odată cu Vitoria, ca într-o anchetă.' },
      { nume: 'Construcția subiectului (momentele subiectului)',
        analiza: 'Expozițiunea prezintă așteptarea Vitoriei, iar intriga este absența prelungită a lui Nechifor, întărită de semne; desfășurarea acțiunii cuprinde pregătirile și drumul pe urmele lui Nechifor, încheiat cu găsirea osemintelor; punctul culminant este praznicul, iar deznodământul aduce mărturisirea lui Bogza și planurile de întoarcere ale Vitoriei. Romanul are șaisprezece capitole: primele cuprind așteptarea și pregătirile, cele din mijloc călătoria-anchetă, iar ultimele trei înmormântarea și pedepsirea vinovaților.',
        relevanta: 'Construcția subiectului este relevantă deoarece înlănțuirea logică a etapelor susține atât tema căutării adevărului, cât și structura polițistă.' },
      { nume: 'Spațiul și timpul',
        analiza: 'Spațiul este real și recognoscibil: Măgura Tarcăului, Piatra, Bicaz, Cruci, Borca, Vatra Dornei, Sabasa, Suha, valea Bistriței; călătoria pe urmele lui Nechifor transformă harta Moldovei de munte într-un drum inițiatic. Timpul curge de la toamnă, când Nechifor nu se întoarce, la primăvară, când adevărul iese la iveală, odată cu topirea zăpezii.',
        relevanta: 'Spațiul și timpul sunt relevante deoarece dau veridicitate romanului și leagă refacerea rânduielii de ciclul firesc al naturii.' },
      { nume: 'Motto-ul și intertextul mioritic',
        analiza: 'Motto-ul preluat din „Miorița” trimite la tiparul baladei: uciderea ciobanului de către doi tovarăși, câinele credincios, căutarea celui dispărut. Sadoveanu modifică însă sensul: în locul resemnării, femeia caută adevărul și obține pedepsirea ucigașilor.',
        relevanta: 'Motto-ul este relevant pentru dimensiunea mitică a romanului deoarece așază întâmplarea concretă într-un tipar arhetipal al spiritualității românești.' }
    ],

    personaje: [
      { nume: 'Vitoria Lipan',
        tip: 'personaj principal, rotund, complex; tipul femeii munteance, puternice și păstrătoare a tradiției, care devine un adevărat „detectiv”',
        statut: {
          social: 'Este soția oierului Nechifor Lipan, gospodină înstărită din Măgura Tarcăului și mama lui Gheorghiță și a Minodorei; după dispariția soțului devine capul familiei și conduce singură gospodăria și afacerile cu oile.',
          psihologic: 'Este inteligentă, lucidă și intuitivă, își stăpânește durerea și știe să-și ascundă gândurile; tenace și hotărâtă, are și o iubire profundă pentru soț: „am trăit pe lumea asta numai pentru omul acela al meu”.',
          moral: 'Este credincioasă și respectă cu strictețe datinile (postul, rugăciunile, rânduielile înmormântării), are un puternic simț al datoriei și al dreptății, dar nu se răzbună cu mâna ei: îl lasă pe vinovat în seama autorităților („Stăpânirea facă ce știe cu el”) și îi spune „Dumnezeu să te ierte”.'
        },
        trasaturi: [
          { trasatura: 'tenacitatea (hotărârea de a afla adevărul)',
            episoade: [
              { titlu: 'Hotărârea de a porni în căutarea lui Nechifor',
                comentariu: 'După semne, rugăciuni și jalbe, Vitoria îi declară preotului: „N-am să mai am hodină cum n-are pârăul Tarcăului, pân’ ce l-oi găsi pe Nechifor Lipan”. Ea își vinde produsele, ține post negru douăsprezece vineri și pleacă iarna la drum, arătând o voință neclintită.' },
              { titlu: 'Drumul pe urmele lui Nechifor',
                comentariu: 'Vitoria merge din han în han, întreabă, cercetează condicile de la Vatra Dornei și reface traseul soțului până la Suha, fără să se lase descurajată de greutăți sau de oamenii nepăsători. Perseverența ei transformă călătoria într-o anchetă metodică.' }
            ] },
          { trasatura: 'inteligența și luciditatea (spiritul justițiar)',
            episoade: [
              { titlu: 'Deducția de la Suha',
                comentariu: 'Aflând că la Sabasa fuseseră văzuți trei oameni, iar la Suha doar doi, Vitoria înțelege că între cele două sate s-a petrecut crima: „În întuneric, începea să i se facă lumină.”. Raționamentul ei restrânge căutarea și o duce la ucigași.' },
              { titlu: 'Reconstituirea crimei la praznic',
                comentariu: 'Vitoria povestește crima ca și cum ar fi văzut-o și îl provoacă pe Bogza cu întrebări despre baltag, până când acesta se trădează. Scena arată o femeie care știe să folosească disimularea și psihologia oamenilor pentru a face dreptate.' }
            ] }
        ],
        constructie: [
          { nume: 'Caracterizarea directă',
            analiza: 'Naratorul îi face portretul: „Ochii ei căprii, în care parcă se răsfrângea lumina castanie a părului, erau duși departe”, iar la prefect notează: „Nu mai era tânără, dar avea o frumuseță neobișnuită în privire.”. Gheorghiță observă schimbarea mamei: „i-au crescut țepi de aricioaică”.',
            relevanta: 'Caracterizarea directă este relevantă deoarece portretul fizic, centrat pe privire, sugerează forța interioară și capacitatea Vitoriei de a „citi” lumea.' },
          { nume: 'Caracterizarea indirectă',
            analiza: 'Faptele (postul, drumul iarna, ancheta, reconstituirea crimei), limbajul ei tăios, plin de aluzii, și gesturile stăpânite (la găsirea osemintelor face rânduiala „fără lacrimi”) o arată ca pe o femeie puternică, lucidă și credincioasă.',
            relevanta: 'Caracterizarea indirectă este relevantă deoarece personajul se definește mai ales prin acțiune.' },
          { nume: 'Monologul interior și stilul indirect liber',
            analiza: 'Gândurile Vitoriei sunt redate prin stil indirect liber; ea poartă un dialog imaginar cu soțul dispărut: „Vitoria îl judeca pe Lipan. Avea ea să-i spuie multe; și i le spunea, fără să miște buzele și limba.”',
            relevanta: 'Monologul interior este relevant deoarece dezvăluie iubirea, gelozia și suferința pe care personajul le ascunde în fața celorlalți.' },
          { nume: 'Relația cu Gheorghiță',
            analiza: 'Vitoria este mentorul fiului ei: îl obligă să se maturizeze („Înțelege că jucăriile au stat. De-acu trebuie să te arăți bărbat.”), îl ironizează când e nehotărât și îi lasă, la final, fapta dreaptă.',
            relevanta: 'Relația este relevantă deoarece arată autoritatea Vitoriei și rolul ei de păstrătoare a rânduielii familiei.' },
          { nume: 'Statutul de „detectiv” (construcția prin anchetă)',
            analiza: 'Vitoria interpretează semne, adună informații, face deducții și organizează demascarea vinovatului, asemenea unui anchetator dintr-un roman polițist.',
            relevanta: 'Acest element este relevant deoarece leagă construcția personajului de structura polițistă a romanului.' }
        ],
        citate: [
          '„Acei ochi aprigi și încă tineri căutau zări necunoscute.” (naratorul, despre Vitoria, în incipit)',
          '„N-am să mai am hodină cum n-are pârăul Tarcăului, pân’ ce l-oi găsi pe Nechifor Lipan.” (Vitoria către preot)',
          '„Eu te cetesc pe tine, măcar că nu știu carte” (Vitoria către Gheorghiță)',
          '„Nu mai era tânără, dar avea o frumuseță neobișnuită în privire.” (naratorul, la vizita Vitoriei la prefect)',
          '„am trăit pe lumea asta numai pentru omul acela al meu” (Vitoria, despre Nechifor)'
        ]
      }
    ],

    relatii: [
      { intre: ['Vitoria Lipan', 'Gheorghiță'],
        statut_initial: 'Vitoria este o mamă autoritară și aprigă, care conduce gospodăria, iar Gheorghiță este un flăcău încă neinițiat, visător și ascultător, pe care mama îl vede ca pe un copil. După dispariția lui Nechifor, Vitoria îi cere să-i fie sprijin: „Eu n-am alt sprijin și am nevoie de brațul tău.”',
        scene: [
          { titlu: 'Chemarea la maturitate',
            comentariu: 'Înainte de plecare, Vitoria îi spune: „Eu te cetesc pe tine, măcar că nu știu carte” și „De-acu trebuie să te arăți bărbat.”. Scena marchează începutul inițierii: fiul este scos din copilărie și pus în slujba datoriei față de tatăl dispărut.' },
          { titlu: 'Coborârea în râpă și veghea',
            comentariu: 'Vitoria îl trimite pe Gheorghiță să coboare în râpă după câine, iar el găsește primul osemintele tatălui; mama îl lasă apoi singur să privegheze mortul. Frica nopții și confruntarea cu moartea sunt proba esențială a inițierii lui.' },
          { titlu: 'Praznicul de la Sabasa',
            comentariu: 'Vitoria îi dă lui Gheorghiță baltagul lui Bogza și conduce scena demascării, iar fiul, simțind în el „o putere mai mare și mai dreaptă decât a ucigașului”, îl lovește pe Bogza. După aceea, mama îi dă porunci de gospodar și îi împărtășește planurile, tratându-l ca pe un bărbat.' }
        ],
        evolutie: 'Relația evoluează de la autoritatea unei mame față de un copil la încrederea față de un bărbat matur. Vitoria este îndrumătorul inițierii, iar Gheorghiță trece de la ascultarea pasivă la fapta proprie, devenind urmașul tatălui său.',
        elemente: [
          { nume: 'Tema inițierii și motivul drumului',
            analiza: 'Călătoria pe urmele lui Nechifor este, pentru Gheorghiță, un drum inițiatic, cu probe (frigul, drumul greu, râpa, noaptea lângă mort, lupta cu ucigașul), iar Vitoria este cea care îl conduce.',
            relevanta: 'Motivul drumului este relevant deoarece transformarea fiului se produce pe parcursul călătoriei conduse de mamă.' },
          { nume: 'Caracterizarea prin contrast',
            analiza: 'Vitoria este hotărâtă, lucidă și aspră, iar Gheorghiță, la început, este nesigur, iar ea îi reproșează că „mintea ta e-n cărți și-n slove”; diferența dintre ei se micșorează pe măsură ce fiul se maturizează.',
            relevanta: 'Contrastul este relevant deoarece pune în lumină evoluția lui Gheorghiță și rolul formator al Vitoriei.' }
        ]
      }
    ],

    introducere: 'Mihail Sadoveanu publică în 1930 romanul „Baltagul”, una dintre cele mai cunoscute opere ale prozei interbelice. Romanul, de orientare tradiționalistă, înfățișează lumea arhaică a păstorilor din munții Moldovei și drumul unei femei, Vitoria Lipan, care pornește în căutarea soțului ucis și restabilește rânduiala tulburată de crimă.',
    incheiere: 'Prin povestea Vitoriei Lipan, „Baltagul” îmbină realismul, structura polițistă și sugestia mitică a „Mioriței”, oferind imaginea unei lumi care trăiește după rânduieli străvechi. Valoarea romanului stă în această polivalență și în forța personajului feminin, care transformă resemnarea baladei în căutarea activă a dreptății.',

    citate: [
      { text: '„Domnul Dumnezeu, după ce a alcătuit lumea, a pus rânduială și semn fiecărui neam.”', context: 'incipitul; legenda spusă de Nechifor Lipan' },
      { text: '„Acei ochi aprigi și încă tineri căutau zări necunoscute.”', context: 'portretul Vitoriei, în așteptarea soțului' },
      { text: '„L-am visat rău, trecând călare o apă neagră.”', context: 'Vitoria, despre visul care îi arată moartea lui Nechifor' },
      { text: '„N-am să mai am hodină cum n-are pârăul Tarcăului, pân’ ce l-oi găsi pe Nechifor Lipan.”', context: 'hotărârea Vitoriei de a porni la drum' },
      { text: '„De-acu trebuie să te arăți bărbat.”', context: 'Vitoria către Gheorghiță; începutul inițierii' },
      { text: '„La Sabasa fuseseră trei. Dincoace, peste muntele Stânișoara, la Suha, Nechifor Lipan nu mai era.”', context: 'deducția decisivă a Vitoriei' },
      { text: '„Căpățâna era spartă de baltag.”', context: 'găsirea osemintelor lui Nechifor în râpă' },
      { text: '„mi se pare că pe baltag e scris sânge și acesta-i omul care a lovit pe tatu-tău”', context: 'Vitoria, la praznic, demascându-l pe Bogza' },
      { text: '„Am făcut fapta asta ca să-i luăm oile.”', context: 'mărturisirea lui Calistrat Bogza' },
      { text: '„Ș-apoi după aceea ne-om întoarce iar la Măgura, ca să luăm de coadă toate câte-am lăsat.”', context: 'finalul; reluarea vieții după refacerea rânduielii' }
    ],
    capcane: [
      'Soțul Vitoriei se numește Nechifor Lipan (nu „Nichifor”), iar fiica ei, Minodora, rămâne la mănăstirea Văratec pe durata călătoriei.',
      'Ucigașii sunt Calistrat Bogza, care lovește cu baltagul, și Ilie Cuțui, nu ciobanii lui Nechifor; Vitoria nu-l ucide pe Bogza: Gheorghiță îl lovește, iar câinele Lupu îl apucă de beregată.',
      '„Baltagul” nu este o rescriere în versuri a „Mioriței”, ci un roman realist care preia tiparul baladei; spre deosebire de baladă, finalul aduce pedepsirea ucigașilor, nu resemnarea.',
      'Crima nu este povestită de narator în momentul în care se petrece: cititorul o află abia la final, din reconstituirea făcută de Vitoria și din mărturisirea lui Bogza.'
    ]

  }

);
