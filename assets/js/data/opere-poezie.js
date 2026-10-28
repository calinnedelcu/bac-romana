// Fișe de operă: poezie (gen liric). Formatul este descris în tools/SCHEMA-OPERE.md.
window.OPERE = window.OPERE || [];
window.OPERE.push(

  // =====================================================================
  // 1. LUCEAFĂRUL — Mihai Eminescu
  // =====================================================================
  {
    id: 'luceafarul',
    titlu: 'Luceafărul',
    autor: 'Mihai Eminescu',
    an: '1883',
    aparitie: 'almanahul Societății Academice Social-Literare „România Jună” din Viena (aprilie 1883), apoi revista „Convorbiri literare” (1883)',
    gen: 'liric',
    specie: 'poem romantic alegoric, de factură filozofică',
    categorii: ['poem romantic', 'text poetic romantic', 'poezie eminesciană', 'text poetic din perioada marilor clasici', 'poem filozofic', 'poezie de dragoste'],

    incadrare: {
      eticheta: 'romantism (perioada marilor clasici, epoca junimistă)',
      trasaturi: [
        { nume: '*Antiteza*, procedeu romantic fundamental: geniul se opune omului comun, iar lumea cosmică, eternă, se opune lumii terestre, trecătoare.',
          dovada: 'Opoziția este formulată chiar de fata de împărat, care îl respinge pe Luceafăr cu cuvintele „Căci eu sunt vie, tu ești mort”, și reluată în final de Hyperion, care se desparte de „cercul vostru strâmt” al oamenilor, rămânând „Nemuritor și rece”.' },
        { nume: '*Amestecul genurilor literare*: poemul are un fir narativ (epic), numeroase dialoguri (dramatic) și o profundă încărcătură de sentiment și meditație (liric).',
          dovada: 'Povestea fetei de împărat este narată ca într-un basm, dar se desfășoară prin dialoguri, ca acela dintre fată și Luceafăr („Dar cum ai vrea să mă cobor? / Au nu-nțelegi tu oare”), iar monologul final al lui Hyperion are caracter de meditație lirică.' },
        { nume: '*Inspirația din folclor și din mit*, împreună cu deschiderea spre cosmic: poemul pornește de la un basm popular și îl transformă într-o alegorie cu imagini ale genezei.',
          dovada: 'Incipitul preia formula basmului, „A fost odată ca-n povești, / A fost ca niciodată”, iar zborul lui Hyperion spre Demiurg reface imaginea începutului lumii: „Vedea, ca-n ziua cea de-ntâi, / Cum izvorau lumine”.' }
      ]
    },

    tema: 'Tema poemului este *condiția omului de geniu* într-o lume incapabilă să-l înțeleagă și să-l facă fericit, ilustrată alegoric prin povestea iubirii imposibile dintre Luceafăr (Hyperion), ființă nemuritoare, și o fată de împărat, ființă muritoare.',
    viziune: 'Viziunea romantică se construiește pe antiteza dintre geniu și omul comun: geniul aspiră la absolut, este capabil de sacrificiu, dar rămâne singur, în timp ce omul comun își găsește împlinirea în lumea limitată pe care Hyperion o numește „cercul vostru strâmt”. Eminescu însuși nota, într-un manuscris, sensul alegoric al poemului: geniul „n-are moarte, dar n-are nici noroc”.',

    secvente: [
      { titlu: 'Invocația fetei: „Cobori în jos, luceafăr blând, / Alunecând pe-o rază” (tabloul I)',
        rezumat: 'Fata de împărat, îndrăgostită de astrul pe care îl privește în fiecare seară, îl cheamă în vis să coboare în lumea ei, iar Luceafărul se întrupează de două ori.',
        comentariu: 'Invocația arată că fata aspiră spre absolut, dar îl dorește pe Luceafăr coborât la măsura lumii ei: „Pătrunde-n casă și în gând / Și viața-mi luminează!”. Cele două întrupări, întâi ca fiu al cerului și al mării, apoi ca fiu al soarelui și al nopții, dovedesc că geniul este dispus la sacrificiu din iubire, însă fata îl respinge pentru că îl simte „Străin la vorbă și la port”, ceea ce ilustrează distanța de netrecut dintre cele două lumi.' },
      { titlu: 'Idila dintre Cătălin și Cătălina (tabloul al II-lea)',
        rezumat: 'Pajul Cătălin o cucerește pe fata de împărat, numită acum Cătălina, oferindu-se să o învețe „din bob în bob amorul”.',
        comentariu: 'Tabloul terestru prezintă iubirea posibilă dintre doi oameni de aceeași condiție, construită prin gesturi concrete și simetrice, în antiteză cu iubirea absolută pe care o oferea Luceafărul. Prin alegerea lui Cătălin („Te-ai potrivi cu mine...”), poemul arată că omul comun caută o fericire pe măsura sa, iar dorul de absolut devine doar un vis la care se renunță („Vei pierde dorul de părinți / Și visul de luceferi”).' },
      { titlu: 'Dialogul cu Demiurgul: „Căci toți se nasc spre a muri / Și mor spre a se naște” (tabloul al III-lea)',
        rezumat: 'Hyperion zboară prin univers până la Demiurg și îi cere să-l dezlege de nemurire în schimbul unei singure ore de iubire, dar Demiurgul refuză.',
        comentariu: 'Secvența cosmică exprimă cel mai clar tema: Demiurgul îi arată lui Hyperion că oamenii sunt supuși ciclului naștere–moarte și norocului schimbător, pe când el aparține eternității („Noi nu avem nici timp, nici loc, / Și nu cunoaștem moarte”). Refuzul îl obligă pe geniu să-și asume singurătatea, iar îndemnul „Și vezi ce te așteaptă” pregătește revelația din final.' },
      { titlu: 'Finalul: „Ce-ți pasă ție, chip de lut, / Dac-oi fi eu sau altul?” (tabloul al IV-lea)',
        rezumat: 'Întors pe cer, Hyperion îi vede pe Cătălin și pe Cătălina îmbrățișați sub tei și nu mai răspunde chemării fetei.',
        comentariu: 'Invocația fetei este reluată cu modificări semnificative („Pătrunde-n codru și în gând, / Norocu-mi luminează!”), ceea ce arată că ea nu mai cere iubire, ci doar noroc. Răspunsul lui Hyperion, care o numește „chip de lut”, exprimă detașarea geniului și acceptarea propriei condiții: el se retrage în lumea sa, „Nemuritor și rece”, singur, dar superior lumii trecătoare.' }
    ],

    elemente: [
      { nume: 'Titlul',
        analiza: 'Titlul numește astrul care apare seara și dimineața pe cer, Luceafărul, devenit în poem *simbolul geniului*. Personajul are mai multe nume, potrivite ipostazelor sale: pentru fată este „luceafăr blând”, iar în dialogul cu Demiurgul este numit Hyperion, nume al unui titan din mitologia greacă, care sugerează originea lui cosmică.',
        relevanta: 'Titlul este relevant pentru tema poemului deoarece astrul inaccesibil, care luminează lumea fără a putea coborî în ea, devine imaginea geniului singur și nemuritor.' },
      { nume: 'Relațiile de opoziție (antiteza)',
        analiza: 'Poemul este construit pe antiteze multiple: cer – pământ, nemurire – moarte, absolut – relativ, geniu – om comun. Ele se văd în contrastul dintre Hyperion și Cătălin, dar și în replicile personajelor, de la „Căci eu sunt vie, tu ești mort” până la cuvintele Demiurgului despre nemuritori: „Noi nu avem nici timp, nici loc”.',
        relevanta: 'Antiteza este relevantă pentru viziunea romantică deoarece pune în lumină incompatibilitatea dintre geniu și lumea comună, adică sensul alegoric al întregului poem.' },
      { nume: 'Simetria compozițională (structura în patru tablouri)',
        analiza: 'Tablourile I și IV îmbină planul cosmic și planul terestru, tabloul al II-lea este terestru (idila dintre Cătălin și Cătălina), iar tabloul al III-lea este cosmic (zborul lui Hyperion și dialogul cu Demiurgul). Simetria este întărită de invocația fetei, rostită de trei ori și modificată în final.',
        relevanta: 'Simetria compozițională este relevantă pentru temă deoarece alternanța planurilor arată că lumea geniului și lumea omului comun se ating doar prin vis și chemare, fără să se poată uni.' },
      { nume: 'Incipitul',
        analiza: 'Incipitul, „A fost odată ca-n povești, / A fost ca niciodată”, preia formula inițială a basmului și plasează povestea într-un timp mitic, nedeterminat. Fata este prezentată prin unicitatea ei, cu ajutorul comparației „Cum e Fecioara între sfinți / Și luna între stele”.',
        relevanta: 'Incipitul este relevant deoarece cadrul de basm transformă povestea de iubire într-o alegorie cu valoare generală, iar unicitatea fetei explică de ce tocmai ea îl atrage pe Luceafăr.' },
      { nume: 'Figurile semantice (epitetul, comparația, oximoronul)',
        analiza: 'Cele două întrupări ale Luceafărului sunt construite prin figuri semantice: prima are aspect angelic, dar este „Un mort frumos cu ochii vii” (oximoron), a doua are aspect demonic, cu ochi care „Lucesc adânc himeric”. Fata însăși le numește prin comparații paralele: „Un înger se arată”, apoi „Un demon se arată”.',
        relevanta: 'Figurile de stil sunt relevante pentru temă deoarece arată că geniul, oricum s-ar întrupa, rămâne pentru omul comun o ființă străină, de neînțeles.' },
      { nume: 'Elementele de prozodie',
        analiza: 'Poemul are 98 de catrene, cu versuri de 7–8 silabe, ritm iambic și rimă încrucișată. Versurile impare au rimă masculină, iar cele pare rimă feminină („povești” – „împărătești”, „niciodată” – „fată”).',
        relevanta: 'Prozodia este relevantă deoarece forma clasică, echilibrată, a catrenului și ritmul iambic dau gravitate și muzicalitate unei meditații despre condiția geniului, construite pe un subiect de inspirație folclorică.' }
    ],

    structura: 'Poemul are 98 de catrene, grupate în patru tablouri. Tabloul I (strofele 1–43) prezintă povestea de iubire dintre fata de împărat și Luceafăr, în plan cosmic și terestru; tabloul al II-lea (strofele 44–64) prezintă idila dintre Cătălin și Cătălina, în plan terestru; tabloul al III-lea (strofele 65–85) cuprinde zborul lui Hyperion și dialogul cu Demiurgul, în plan cosmic. Tabloul al IV-lea (strofele 86–98) reunește cele două planuri: idila de sub tei și retragerea definitivă a lui Hyperion.',
    prozodie: 'Poemul este alcătuit din 98 de catrene cu versuri de 7–8 silabe și ritm iambic. Rima este încrucișată, iar versurile impare, cu rimă masculină, alternează cu versurile pare, cu rimă feminină („povești” – „împărătești”, „niciodată” – „fată”).',

    introducere: 'Poemul „Luceafărul” de Mihai Eminescu a apărut în 1883, în almanahul Societății „România Jună” din Viena, și este considerat capodopera liricii eminesciene. Aparținând romantismului, poemul pornește de la un basm popular, „Fata în grădina de aur”, publicat de călătorul german Richard Kunisch, și îl transformă într-o alegorie despre condiția geniului.',
    incheiere: '„Luceafărul” este o sinteză a creației eminesciene, în care se întâlnesc temele majore ale poetului: iubirea, cunoașterea, natura, cosmogonia și condiția geniului. Valoarea poemului constă în felul în care transformă o poveste populară într-o meditație universală despre singurătatea omului superior, într-o formă de o perfecțiune clasică.',

    citate: [
      { text: '„A fost odată ca-n povești, / A fost ca niciodată”', context: 'incipitul; formula de basm plasează povestea într-un timp mitic' },
      { text: '„Cum e Fecioara între sfinți / Și luna între stele”', context: 'portretul fetei de împărat; comparația îi subliniază unicitatea' },
      { text: '„Cobori în jos, luceafăr blând, / Alunecând pe-o rază”', context: 'invocația fetei, rostită de trei ori în poem' },
      { text: '„Un mort frumos cu ochii vii”', context: 'portretul primei întrupări; oximoron care sugerează natura nemuritoare a Luceafărului' },
      { text: '„Căci eu sunt vie, tu ești mort, / Și ochiul tău mă-ngheață”', context: 'fata îl respinge pe Luceafăr; antiteza dintre cele două lumi' },
      { text: '„Tu-mi ceri chiar nemurirea mea / În schimb pe-o sărutare”', context: 'Luceafărul acceptă sacrificiul suprem din iubire' },
      { text: '„Și pentru toate dă-mi în schimb / O oră de iubire...”', context: 'cererea lui Hyperion către Demiurg' },
      { text: '„Căci toți se nasc spre a muri / Și mor spre a se naște”', context: 'Demiurgul despre condiția trecătoare a oamenilor' },
      { text: '„Ce-ți pasă ție, chip de lut, / Dac-oi fi eu sau altul?”', context: 'finalul; Hyperion se detașează de lumea omului comun' },
      { text: '„Ci eu în lumea mea mă simt / Nemuritor și rece”', context: 'ultimele versuri; geniul își asumă singurătatea' }
    ],
    capcane: [
      'Fata de împărat nu este numită Cătălina de la început: numele apare abia în tabloul al II-lea, ca pereche a lui Cătălin.',
      'Hyperion nu devine muritor: Demiurgul refuză să-l dezlege de nemurire, iar în final el rămâne „Nemuritor și rece”.',
      'Poemul nu are patru strofe, ci patru tablouri (părți), alcătuite din 98 de catrene.',
      'Tema nu se reduce la iubire: povestea iubirii imposibile este mijlocul prin care se ilustrează alegoric condiția geniului, iar în eseu cele două aspecte trebuie legate.'
    ]

  },

  // =====================================================================
  // 2. FLOARE ALBASTRĂ — Mihai Eminescu
  // =====================================================================
  {
    id: 'floare-albastra',
    titlu: 'Floare albastră',
    autor: 'Mihai Eminescu',
    an: '1873',
    aparitie: 'revista „Convorbiri literare” (1 aprilie 1873)',
    gen: 'liric',
    specie: 'poezie de dragoste (idilă cu final elegiac)',
    categorii: ['poezie romantică', 'text poetic romantic', 'poezie de dragoste', 'poezie eminesciană', 'text poetic din perioada marilor clasici'],

    incadrare: {
      eticheta: 'romantism (perioada marilor clasici, epoca junimistă)',
      trasaturi: [
        { nume: '*Antiteza* dintre două lumi: lumea abstractă a cunoașterii, spre care aspiră bărbatul, și lumea concretă a iubirii și a naturii, spre care îl cheamă iubita.',
          dovada: 'Iubita îi reproșează bărbatului că s-a pierdut în gândire („Iar te-ai cufundat în stele / Și în nori și-n ceruri nalte?”) și îi propune în schimb o lume apropiată, pământească: „Hai în codrul cu verdeață”.' },
        { nume: '*Natura ocrotitoare*, cadru romantic al iubirii, construit din motivele codrului, izvorului și lunii.',
          dovada: 'Iubita imaginează un decor în care natura pare însuflețită, „Und-izvoare plâng în vale”, iar idila se încheie în lumina lunii: „Când prin crengi s-a fi ivit / Luna-n noaptea cea de vară”.' },
        { nume: '*Simbolul romantic al florii albastre* (preluat din romantismul german, de la Novalis) și melancolia provocată de pierderea idealului.',
          dovada: 'Iubita este identificată cu floarea albastră („E albastra-mi, dulce floare!”), iar finalul transformă pierderea ei într-o tristețe generală: „Floare-albastră! floare-albastră!... / Totuși este trist în lume!”.' }
      ]
    },

    tema: 'Tema poeziei este *iubirea*, văzută ca posibilitate de fericire pierdută din cauza incompatibilității dintre omul de geniu, absorbit de cunoaștere, și femeia care îl cheamă spre viața simplă, trăită în mijlocul naturii.',
    viziune: 'Viziunea este romantică: fericirea pare la îndemână în iubirea trăită în natură, dar eul liric o ratează pentru că rămâne legat de aspirația spre absolut. Finalul elegiac transformă povestea într-o meditație asupra pierderii, care anticipează antiteza dintre Hyperion și fata de împărat din „Luceafărul”.',

    secvente: [
      { titlu: 'Reproșul iubitei: „Iar te-ai cufundat în stele / Și în nori și-n ceruri nalte?” (strofele I–III)',
        rezumat: 'Iubita îi reproșează bărbatului că s-a retras în lumea abstractă a gândirii și îl îndeamnă să nu caute fericirea departe.',
        comentariu: 'Spațiile evocate, „câmpiile Asire”, „întunecata mare” și „Piramidele-nvechite”, sugerează cunoașterea universală, istoria și eternitatea, adică lumea geniului. Îndemnul „Nu căta în depărtare / Fericirea ta, iubite” opune acestui orizont rece fericirea simplă a iubirii, ceea ce introduce antiteza pe care se construiește tema.' },
      { titlu: 'Reacția eului liric: „Ah! ea spuse adevărul; / Eu am râs, n-am zis nimica.” (strofa a IV-a)',
        rezumat: 'Bărbatul recunoaște că iubita are dreptate, dar răspunde doar printr-un râs, fără să spună nimic.',
        comentariu: 'Strofa este singura intervenție a eului liric în desfășurarea întâlnirii și anticipează deznodământul: el recunoaște adevărul spuselor ei, dar râsul și tăcerea sugerează detașarea, chiar ironia omului de geniu, care nu se poate dărui întru totul. Diminutivul „mititica” exprimă duioșia, dar și distanța față de iubita naivă.' },
      { titlu: 'Chemarea în natură și idila: „Hai în codrul cu verdeață, / Und-izvoare plâng în vale” (strofele V–XII)',
        rezumat: 'Iubita își imaginează o plimbare în codru, cu povești, jocuri și săruturi, urmată de întoarcerea spre sat în lumina lunii.',
        comentariu: 'Natura personificată și ocrotitoare devine cadrul iubirii împlinite, iar gesturile concrete („Mi-oi desface de-aur părul, / Să-ți astup cu dânsul gura”) compun imaginea unei fericiri terestre, jucăușe și senzuale. Tonul familiar al iubitei, cu expresii populare precum „Ș-apoi cine treabă are!”, arată că ea aparține lumii simple, în care iubirea este suficientă pentru fericire.' },
      { titlu: 'Despărțirea și finalul elegiac: „Totuși este trist în lume!” (strofele XIII–XIV)',
        rezumat: 'Iubita dispare după un ultim sărut, eul liric rămâne singur, iar în ultima strofă constată că iubirea a murit.',
        comentariu: 'Comparația „Ca un stâlp eu stam în lună!” sugerează încremenirea și neputința bărbatului rămas singur. Ultima strofă, despărțită de restul poeziei printr-un rând de puncte, mută povestea în trecut („Ș-a murit iubirea noastră”), iar repetiția „Floare-albastră! floare-albastră!...” și versul final transformă pierderea iubirii într-o tristețe cu valoare existențială.' }
    ],

    elemente: [
      { nume: 'Titlul',
        analiza: 'Titlul numește simbolul central al poeziei, floarea albastră, preluat din romantismul german, unde semnifică idealul și aspirația spre infinit. La Eminescu, floarea albastră este iubita („albastra-mi, dulce floare”), dar și fericirea ideală, de neatins: substantivul „floare” sugerează fragilitatea și efemeritatea, iar culoarea albastră trimite la infinit.',
        relevanta: 'Titlul este relevant pentru tema iubirii deoarece concentrează, într-un singur simbol, idealul de fericire și pierderea lui: floarea albastră este iubita, dar și visul care se destramă.' },
      { nume: 'Relația de opoziție',
        analiza: '*Antiteza* structurează poezia: lumea bărbatului (stelele, cerurile, istoria, cunoașterea) se opune lumii femeii (codrul, satul, iubirea concretă). Opoziția apare și în limbaj: discursul iubitei este familiar, cu diminutive și expresii populare, pe când vorbele eului liric sunt puține și grave.',
        relevanta: 'Relația de opoziție este relevantă pentru temă deoarece explică de ce iubirea eșuează: cele două lumi nu se pot uni, iar această incompatibilitate anticipează antiteza din „Luceafărul”.' },
      { nume: 'Instanțele comunicării (dialogul celor două voci)',
        analiza: 'Poezia este construită ca un dialog: monologul iubitei, marcat prin linie de dialog și ghilimele, ocupă strofele I–III și V–XII, iar eul liric intervine în strofa a IV-a și în ultimele două strofe. Lirismul subiectiv al eului liric se îmbină astfel cu lirismul rolurilor, prin vocea iubitei.',
        relevanta: 'Alternanța vocilor este relevantă pentru temă deoarece pune față în față două concepții despre fericire, iar faptul că iubita vorbește mult, iar el aproape deloc, sugerează distanța sufletească dintre ei.' },
      { nume: 'Motivele poetice',
        analiza: 'Codrul, izvoarele, balta senină, trestia și luna sunt motive romantice care compun un spațiu protector, propice iubirii. Luna luminează drumul îndrăgostiților spre sat („Luna-n noaptea cea de vară”), iar după despărțire eul liric rămâne singur „în lună”.',
        relevanta: 'Motivele naturii sunt relevante deoarece natura devine complice iubirii, iar singurătatea finală sub lună marchează trecerea de la idilă la elegie.' },
      { nume: 'Figurile semantice',
        analiza: 'Comparațiile și epitetele dau expresivitate imaginilor iubirii: săruturile sunt „Dulci ca florile ascunse”, iar iubita, încălzită de soare, va fi „roșie ca mărul”. Personificarea „Und-izvoare plâng în vale” însuflețește natura, iar comparația „Ca un stâlp eu stam în lună!” redă încremenirea eului liric după despărțire.',
        relevanta: 'Figurile de stil sunt relevante pentru temă deoarece transmit, prin imagini concrete și senzoriale, fericirea promisă de iubire, care face cu atât mai dureroasă pierderea ei.' },
      { nume: 'Elementele de prozodie',
        analiza: 'Poezia are 14 catrene (ultimul fiind despărțit de celelalte printr-un rând de puncte), cu versuri de 7–8 silabe, ritm trohaic și rimă îmbrățișată („stele” – „mele”, „nalte” – „încalte”).',
        relevanta: 'Prozodia este relevantă deoarece ritmul trohaic și versul scurt, apropiate de poezia populară, dau idilei o muzicalitate jucăușă, care contrastează cu tristețea finalului.' }
    ],

    structura: 'Poezia are 14 catrene, organizate în patru secvențe: monologul iubitei care îi reproșează bărbatului retragerea în lumea gândirii (strofele I–III), reflecția eului liric (strofa a IV-a), chemarea iubitei în natură și idila imaginată (strofele V–XII), apoi despărțirea și meditația elegiacă finală (strofele XIII–XIV). Monologul iubitei este încadrat de intervențiile eului liric, ceea ce dă textului caracter de dialog.',
    prozodie: 'Poezia are 14 catrene cu versuri de 7–8 silabe și ritm trohaic, apropiat de cel al poeziei populare. Rima este îmbrățișată (de exemplu „stele” – „mele”, „nalte” – „încalte” în prima strofă).',

    introducere: 'Poezia „Floare albastră” de Mihai Eminescu a apărut în 1873, în revista „Convorbiri literare”, și este una dintre primele mari creații ale poetului. Aparținând romantismului, textul tratează tema iubirii ca șansă de fericire ratată, prin antiteza dintre lumea abstractă a cunoașterii și lumea simplă a naturii.',
    incheiere: '„Floare albastră” îmbină idila jucăușă cu meditația elegiacă, arătând că fericirea pierdută lasă în urmă o tristețe de nevindecat. Valoarea poeziei constă în simbolul florii albastre și în anticiparea, încă din tinerețea poetului, a marii antiteze dintre geniu și omul comun, dezvoltată mai târziu în „Luceafărul”.',

    citate: [
      { text: '„Iar te-ai cufundat în stele / Și în nori și-n ceruri nalte?”', context: 'incipitul; reproșul iubitei, lumea abstractă a gândirii' },
      { text: '„Nu căta în depărtare / Fericirea ta, iubite”', context: 'îndemnul iubitei de a căuta fericirea aproape' },
      { text: '„Ah! ea spuse adevărul; / Eu am râs, n-am zis nimica.”', context: 'reacția eului liric; recunoaștere, dar și detașare' },
      { text: '„Hai în codrul cu verdeață, / Und-izvoare plâng în vale”', context: 'chemarea iubitei în natură; începutul idilei' },
      { text: '„Mi-oi desface de-aur părul, / Să-ți astup cu dânsul gura”', context: 'jocul iubirii, imagine senzuală' },
      { text: '„Dulci ca florile ascunse”', context: 'comparație care descrie săruturile' },
      { text: '„Ca un stâlp eu stam în lună!”', context: 'singurătatea eului liric după despărțire' },
      { text: '„Ce frumoasă, ce nebună / E albastra-mi, dulce floare!”', context: 'iubita identificată cu floarea albastră' },
      { text: '„Floare-albastră! floare-albastră!... / Totuși este trist în lume!”', context: 'finalul elegiac' }
    ],
    capcane: [
      'Primele trei strofe nu aparțin eului liric, ci iubitei: ea este cea care îi reproșează bărbatului că s-a „cufundat în stele”.',
      'Floarea albastră nu este o floare reală din decor, ci un simbol: iubita și, totodată, idealul de fericire, de neatins.',
      'Iubirea nu se împlinește: idila din strofele V–XII este doar imaginată de iubită, iar finalul este elegiac („Ș-a murit iubirea noastră”).'
    ]

  },

  // =====================================================================
  // 3. PLUMB — George Bacovia
  // =====================================================================
  {
    id: 'plumb',
    titlu: 'Plumb',
    autor: 'George Bacovia',
    an: '1916',
    aparitie: 'volumul „Plumb” (1916), pe care îl deschide',
    gen: 'liric',
    specie: 'poezie lirică simbolistă',
    categorii: ['poezie simbolistă', 'text poetic simbolist', 'text poetic de la începutul secolului al XX-lea'],

    incadrare: {
      eticheta: 'simbolism (începutul secolului al XX-lea)',
      trasaturi: [
        { nume: 'Folosirea *simbolului* ca mijloc de sugerare a stărilor sufletești: plumbul, metal greu și cenușiu, sugerează apăsarea, moartea și imposibilitatea evadării.',
          dovada: 'Cuvântul „plumb” apare de șase ori în cele opt versuri și cuprinde întregul univers al poeziei, de la obiectele funerare („Dormeau adânc sicriele de plumb”) până la sentimentul iubirii („Dormea întors amorul meu de plumb”).' },
        { nume: '*Muzicalitatea*, obținută prin repetiții, rimă și sonorități care sugerează starea de nevroză.',
          dovada: 'Cuvântul „plumb” se află în rimă în primul și în ultimul vers al fiecărei strofe, iar verbul onomatopeic din versul „Și scârțâiau coroanele de plumb” introduce un sunet strident, care amplifică senzația de angoasă.' },
        { nume: '*Corespondențele* dintre starea sufletească și lumea exterioară, realizate prin senzații diferite: vizuale, auditive, tactile.',
          dovada: 'Senzația vizuală a cenușiului plumbului se asociază cu cea auditivă a vântului și a coroanelor care scârțâie și cu cea tactilă a frigului („Stam singur lângă mort... și era frig...”), toate exprimând aceeași stare de pustiire interioară.' }
      ]
    },

    tema: 'Tema poeziei este *condiția poetului* într-o lume închisă și apăsătoare, dominată de moarte, în care eul liric trăiește singurătatea, angoasa și imposibilitatea evadării, iar iubirea însăși este moartă.',
    viziune: 'Viziunea este simbolistă și tragică: lumea apare ca un cavou sufocant, iar eul liric, prizonier al acestui spațiu, nu găsește salvare nici în iubire, nici în înălțarea spirituală. Totul, de la lucruri la sentimente, este cuprins de plumb, simbolul greutății și al morții sufletești.',

    secvente: [
      { titlu: 'Strofa I: „Dormeau adânc sicriele de plumb” — spațiul exterior, cavoul',
        rezumat: 'Eul liric se află singur într-un cavou, înconjurat de sicrie, flori și coroane de plumb, în timp ce bate vântul.',
        comentariu: 'Cavoul devine simbol al lumii exterioare, transformate într-un spațiu închis, al morții. Elementele funerare („funerar vestmânt”, „coroanele de plumb”) sunt artificiale și lipsite de viață, iar versul „Stam singur în cavou... și era vânt...” sugerează izolarea poetului într-o lume ostilă, fără nicio cale de ieșire.' },
      { titlu: 'Strofa a II-a: „Dormea întors amorul meu de plumb” — spațiul interior, moartea iubirii',
        rezumat: 'Eul liric descoperă că propria iubire este moartă, „de plumb”, și încearcă zadarnic să o readucă la viață strigând-o.',
        comentariu: 'Dacă prima strofă prezintă realitatea exterioară, a doua coboară în interiorul ființei: iubirea, sentimentul care ar fi putut salva, este și ea un trup fără viață, „întors”, adică fără posibilitate de comunicare. Strigătul („și-am început să-l strig”) este singurul gest de revoltă al eului liric, dar rămâne fără răspuns, ceea ce accentuează tragismul condiției sale.' },
      { titlu: 'Finalul: „Și-i atârnau aripile de plumb” — zborul imposibil',
        rezumat: 'Ultimul vers prezintă aripile amorului, grele de plumb, atârnând inerte.',
        comentariu: 'Aripile, simbol al zborului și al înălțării spirituale, sunt aici de plumb, ceea ce sugerează o cădere, un zbor în jos, imposibilitatea oricărei evadări. Imaginea încheie poezia cu ideea că nici iubirea, nici idealul nu mai pot salva eul liric din universul apăsător al morții.' }
    ],

    elemente: [
      { nume: 'Titlul',
        analiza: 'Titlul este simbolul central al poeziei: plumbul, metal greu, de culoare cenușie, maleabil și toxic, sugerează apăsarea, monotonia, închiderea și moartea. Cuvântul-titlu este reluat de șase ori în text și organizează întregul univers poetic.',
        relevanta: 'Titlul este relevant pentru tema poeziei deoarece plumbul definește atât lumea exterioară (sicriele, florile, coroanele), cât și lumea interioară a eului liric (amorul, aripile), arătând că pentru poet nu există salvare.' },
      { nume: 'Relațiile de simetrie și de opoziție',
        analiza: 'Cele două catrene sunt construite simetric: fiecare începe cu verbul „a dormi” la imperfect („Dormeau”, „Dormea”), conține un vers despre singurătatea eului („Stam singur în cavou”, „Stam singur lângă mort”) și se încheie cu o imagine a plumbului. Prima strofă prezintă planul exterior (cavoul), iar a doua planul interior (iubirea moartă).',
        relevanta: 'Simetria este relevantă pentru temă deoarece arată că lumea exterioară și cea interioară sunt la fel de moarte, iar eul liric nu poate scăpa din acest univers închis.' },
      { nume: 'Câmpul semantic al morții și motivele poetice',
        analiza: 'Poezia este dominată de termeni din câmpul semantic al morții: „sicriele”, „funerar vestmânt”, „cavou”, „coroanele”, „mort”. Alături de ei, motivele vântului și frigului dau singurătății o dimensiune cosmică.',
        relevanta: 'Câmpul semantic al morții este relevant deoarece transformă întreaga lume într-un spațiu funerar și susține viziunea tragică asupra existenței.' },
      { nume: 'Timpurile verbale',
        analiza: 'Verbele sunt la imperfect („Dormeau”, „Stam”, „scârțâiau”, „atârnau”), timp al unei acțiuni trecute care se prelungește fără un sfârșit precizat, ceea ce sugerează o stare permanentă. Singurul verb la perfect compus, „am început”, urmat de conjunctivul „să-l strig”, marchează unicul gest al eului liric.',
        relevanta: 'Folosirea imperfectului este relevantă pentru temă deoarece transformă moartea și singurătatea într-o stare continuă, din care nu există ieșire, iar unicul verb la perfect compus subliniază zădărnicia revoltei.' },
      { nume: 'Figurile semantice',
        analiza: 'Epitetul „de plumb”, asociat unor termeni care sugerează în mod obișnuit viața, frumusețea sau înălțarea (flori, amor, aripi), creează imagini paradoxale. Epitetul „întors” al amorului sugerează moartea și ruptura comunicării, iar metafora „Dormeau adânc sicriele” transformă moartea într-un somn greu, fără trezire.',
        relevanta: 'Figurile semantice sunt relevante deoarece transferă greutatea plumbului asupra tuturor lucrurilor și sentimentelor, arătând că totul este cuprins de moarte.' },
      { nume: 'Elementele de prozodie',
        analiza: 'Poezia are două catrene cu versuri de zece silabe, ritm iambic și rimă îmbrățișată. Cuvântul „plumb” ocupă poziția de rimă în primul și ultimul vers al fiecărei strofe, iar versurile din interior rimează în perechi („vestmânt” – „vânt”, „strig” – „frig”).',
        relevanta: 'Prozodia este relevantă deoarece repetarea obsesivă a cuvântului „plumb” în aceleași poziții creează o muzicalitate monotonă și apăsătoare, care sugerează închiderea fără ieșire a universului poetic.' }
    ],

    structura: 'Poezia este alcătuită din două catrene construite simetric. Prima strofă prezintă planul exterior, al realității obiective (cavoul, sicriele, coroanele), iar a doua planul interior, al realității subiective (amorul mort). Ambele strofe se încheie cu imagini ale plumbului, ceea ce arată că cele două planuri sunt la fel de lipsite de viață.',
    prozodie: 'Poezia are două catrene cu versuri de zece silabe, ritm iambic și rimă îmbrățișată (abba). Cuvântul „plumb” este în rimă în primul și în ultimul vers al fiecărei strofe, iar versurile din interior rimează în perechi („vestmânt” – „vânt”, „strig” – „frig”).',

    introducere: 'Poezia „Plumb” de George Bacovia deschide volumul cu același titlu, apărut în 1916, și este considerată emblematică pentru simbolismul românesc. Prin simbolul central al plumbului, textul exprimă condiția tragică a poetului, prizonier într-o lume sufocantă, dominată de moarte.',
    incheiere: 'În doar opt versuri, „Plumb” construiește un univers poetic complet, în care exteriorul și interiorul sunt la fel de lipsite de viață. Valoarea poeziei constă în forța sugestivă a simbolului și în muzicalitatea apăsătoare prin care Bacovia depășește simbolismul decorativ și anunță sensibilitatea modernă.',

    citate: [
      { text: '„Dormeau adânc sicriele de plumb”', context: 'incipitul; spațiul funerar, închis' },
      { text: '„Și flori de plumb și funerar vestmânt”', context: 'câmpul semantic al morții; natura artificială, moartă' },
      { text: '„Stam singur în cavou... și era vânt...”', context: 'singurătatea eului liric în spațiul exterior' },
      { text: '„Și scârțâiau coroanele de plumb”', context: 'senzație auditivă stridentă; muzicalitate simbolistă' },
      { text: '„Dormea întors amorul meu de plumb”', context: 'începutul strofei a II-a; moartea iubirii' },
      { text: '„și-am început să-l strig”', context: 'singurul gest de revoltă al eului liric' },
      { text: '„Stam singur lângă mort... și era frig...”', context: 'singurătatea în spațiul interior; senzație tactilă' },
      { text: '„Și-i atârnau aripile de plumb”', context: 'finalul; zborul imposibil, căderea' }
    ],
    capcane: [
      'Poezia are două strofe și opt versuri; cuvântul „plumb” apare de șase ori, nu în fiecare vers.',
      '„Amorul” din strofa a II-a nu este o persoană iubită aflată în cavou, ci sentimentul iubirii, personificat (cu aripi, ca zeul Amor) și „mort”.',
      'Verbele sunt la imperfect (nu la perfect simplu), cu excepția lui „am început” (perfect compus).',
      'Bacovia este încadrat în simbolism; tema morții nu face din poezie un text romantic.'
    ]

  },

  // =====================================================================
  // 4. TESTAMENT — Tudor Arghezi
  // =====================================================================
  {
    id: 'testament',
    titlu: 'Testament',
    autor: 'Tudor Arghezi',
    an: '1927',
    aparitie: 'volumul „Cuvinte potrivite” (1927), pe care îl deschide',
    gen: 'liric',
    specie: 'artă poetică',
    categorii: ['artă poetică', 'artă poetică modernistă', 'text poetic modernist', 'poezie interbelică'],

    incadrare: {
      eticheta: 'modernism (perioada interbelică)',
      trasaturi: [
        { nume: '*Estetica urâtului*: aspectele respingătoare ale realității devin materie a poeziei și sunt transformate în frumos artistic.',
          dovada: 'Poetul declară că a transfigurat elementele degradante ale existenței: „Din bube, mucegaiuri și noroi / Iscat-am frumuseți și prețuri noi”.' },
        { nume: '*Lărgirea sferei limbajului poetic*: poezia transformă graiul simplu în artă și îmbină termeni din registre foarte diferite.',
          dovada: 'Poetul afirmă că a pornit de la limba aspră a strămoșilor țărani: „Din graiul lor cu-ndemnuri pentru vite / Eu am ivit cuvinte potrivite”; în text, arhaisme precum „hrisovul” și „slova” stau alături de cuvinte nepoetice, ca „bube” și „noroi”.' },
        { nume: '*Concepția despre poezie ca meșteșug*: creația este rezultatul unirii dintre inspirație și munca asupra cuvântului.',
          dovada: 'Metafora „Slova de foc și slova făurită” desemnează inspirația, harul („slova de foc”), și meșteșugul artistic („slova făurită”), care se unesc în carte: „Împărechiate-n carte se mărită”.' }
      ]
    },

    tema: 'Tema poeziei este *creația poetică*, concepută ca moștenire spirituală lăsată urmașilor și ca rezultat al transformării suferinței, muncii și graiului strămoșilor în artă.',
    viziune: 'Poezia este o artă poetică modernă, în care poetul se definește ca un meșteșugar al cuvântului, care preia graiul, durerea și revolta înaintașilor și le transfigurează în frumusețe. Opera devine astfel un document al istoriei colective și o treaptă pentru generațiile viitoare.',

    secvente: [
      { titlu: 'Cartea ca moștenire: „Nu-ți voi lăsa drept bunuri, după moarte, / Decât un nume adunat pe-o carte” (strofa I)',
        rezumat: 'Eul liric, în ipostaza de tată, îi lasă fiului său spiritual nu bunuri materiale, ci o carte.',
        comentariu: 'Cartea devine moștenirea spirituală, singurul bun care rezistă morții, iar metafora „Cartea mea-i, fiule, o treaptă” sugerează continuitatea dintre generații: opera poetului este un punct de sprijin de la care urmașii pot urca mai departe. Relația tată – fiu transformă poezia într-un legământ cultural între trecut și viitor.' },
      { titlu: 'Transformarea muncii în creație: „Sapa-n condei și brazda-n călimară” (strofa a III-a)',
        rezumat: 'Poetul arată că truda strămoșilor a făcut posibilă trecerea de la munca pământului la munca scrisului.',
        comentariu: 'Metaforele paralele „sapa” – „condei” și „brazda” – „călimară” sugerează că poezia continuă munca strămoșilor, dar pe un plan spiritual. Poetul preia graiul și suferința lor și le schimbă natura, așa cum arată versul „Veninul strâns l-am preschimbat în miere”, ceea ce ilustrează rolul de transfigurare al artei.' },
      { titlu: 'Estetica urâtului: „Din bube, mucegaiuri și noroi / Iscat-am frumuseți și prețuri noi” (strofa a IV-a)',
        rezumat: 'Poetul declară că a creat frumusețe din cele mai respingătoare aspecte ale realității.',
        comentariu: 'Imaginea exprimă principiul esteticii urâtului, cu rădăcini în poezia lui Baudelaire: urâtul capătă valoare estetică atunci când este transfigurat artistic. Enumerația „bube, mucegaiuri și noroi” adună semne ale degradării, iar verbul „iscat-am” sugerează un act de creație asemănător celui divin, prin care materia brută devine artă.' },
      { titlu: 'Inspirația și meșteșugul: „Slova de foc și slova făurită” (strofa a V-a)',
        rezumat: 'În ultima strofă, poetul definește poezia ca unire a inspirației cu munca artistică și arată că opera păstrează revolta strămoșilor.',
        comentariu: '„Slova de foc” sugerează inspirația, harul, iar „slova făurită” trimite la meșteșug, la efortul de a găsi cuvântul potrivit; unirea lor în carte arată că poezia adevărată le cere pe amândouă. Antiteza „Robul a scris-o, Domnul o citește” subliniază că opera păstrează, ascunsă în adâncul ei, mânia celor umiliți.' }
    ],

    elemente: [
      { nume: 'Titlul',
        analiza: 'Titlul are un sens denotativ, juridic (actul prin care cineva își lasă bunurile urmașilor), și unul conotativ: moștenirea lăsată de poet este una spirituală, cartea. Totodată, titlul trimite la cele două părți ale Bibliei, Vechiul și Noul Testament, sugerând caracterul sacru al cărții, care devine „hrisovul” unui neam.',
        relevanta: 'Titlul este relevant pentru tema creației deoarece transformă opera literară în bunul cel mai de preț, transmis de la o generație la alta.' },
      { nume: 'Incipitul',
        analiza: 'Incipitul, „Nu-ți voi lăsa drept bunuri, după moarte, / Decât un nume adunat pe-o carte”, are forma unei declarații testamentare, adresate unui fiu spiritual. Negația și adverbul restrictiv „decât” arată că singura avere a poetului este opera sa.',
        relevanta: 'Incipitul este relevant pentru tema poeziei deoarece fixează de la început ideea centrală: cartea este moștenirea, iar numele poetului supraviețuiește prin ea.' },
      { nume: 'Instanțele comunicării',
        analiza: 'Poezia este un monolog adresat: eul liric se manifestă prin pronume și verbe la persoana I („Eu am ivit cuvinte potrivite”), iar destinatarul este „fiul”, adică cititorul, urmașul spiritual. Alternanța pronumelor (eu, tu, noi, voi) leagă cele trei generații: strămoșii, poetul și urmașii.',
        relevanta: 'Instanțele comunicării sunt relevante deoarece arată că poezia este un act de transmitere a moștenirii, iar poetul este veriga dintre trecutul strămoșilor și viitorul cititorilor.' },
      { nume: 'Metaforele cărții',
        analiza: 'Cartea este redefinită prin metafore succesive: „treaptă”, „hrisovul vostru cel dintâi”, „Dumnezeu de piatră”. Fiecare adaugă un sens: urcarea spirituală, documentul istoric al neamului, sacralitatea.',
        relevanta: 'Metaforele sunt relevante pentru tema creației deoarece arată valorile multiple ale operei: moștenire, document al suferinței colective și obiect sacru.' },
      { nume: 'Relațiile de opoziție',
        analiza: 'Poezia este construită pe antiteze: urât – frumos („Veninul strâns l-am preschimbat în miere”), muncă fizică – muncă spirituală („Sapa-n condei și brazda-n călimară”), rob – stăpân („Robul a scris-o, Domnul o citește”), inspirație – meșteșug.',
        relevanta: 'Antitezele sunt relevante pentru tema creației deoarece arată că arta se naște din transformarea contrariilor: din suferință rezultă frumusețe, din umilință, demnitate.' },
      { nume: 'Limbajul și elementele de prozodie',
        analiza: 'Limbajul îmbină arhaisme („hrisovul”, „slova”), termeni religioși și cuvinte nepoetice („bube”, „mucegaiuri”, „noroi”). Poezia are cinci strofe inegale, cu măsură variabilă și ritm variabil, rimă predominant împerecheată („moarte” – „carte”) și numeroase ingambamente.',
        relevanta: 'Limbajul și prozodia sunt relevante pentru o artă poetică modernă deoarece ilustrează chiar principiul enunțat: orice cuvânt poate deveni poezie, iar forma este lucrată liber, fără tipare rigide.' }
    ],

    structura: 'Poezia are cinci strofe inegale, care pot fi grupate în trei secvențe. În prima (strofele I–II), cartea este prezentată ca moștenire spirituală, „treaptă” și „hrisov” pentru urmași; în a doua (strofele III–IV), poetul arată cum a transformat graiul și suferința strămoșilor în poezie, inclusiv prin estetica urâtului. În a treia (strofa a V-a), creația este definită ca unire între inspirație și meșteșug, iar cartea păstrează revolta înaintașilor.',
    prozodie: 'Poezia are cinci strofe inegale ca număr de versuri, cu măsură variabilă (în general 9–11 silabe) și ritm variabil. Rima este predominant împerecheată („moarte” – „carte”, „vite” – „potrivite”), iar ingambamentul leagă frazele de la un vers la altul, dând discursului o curgere liberă, modernă.',

    introducere: 'Poezia „Testament” de Tudor Arghezi deschide volumul „Cuvinte potrivite”, apărut în 1927, și are rolul unei arte poetice, în care autorul își expune concepția despre poezie. Aparținând modernismului interbelic, textul prezintă creația ca pe o moștenire spirituală, născută din transformarea suferinței și a graiului strămoșilor în frumusețe.',
    incheiere: '„Testament” este una dintre cele mai importante arte poetice din literatura română, în care Arghezi definește poezia ca rezultat al unirii dintre har și muncă. Valoarea textului constă în îndrăzneala cu care introduce urâtul în sfera esteticului și în forța metaforelor prin care cartea devine legătura dintre generații.',

    citate: [
      { text: '„Nu-ți voi lăsa drept bunuri, după moarte, / Decât un nume adunat pe-o carte”', context: 'incipitul; cartea ca moștenire spirituală' },
      { text: '„Cartea mea-i, fiule, o treaptă”', context: 'metafora cărții ca treaptă pentru urmași' },
      { text: '„Ea e hrisovul vostru cel dintâi”', context: 'cartea ca document fundamental al neamului' },
      { text: '„Sapa-n condei și brazda-n călimară”', context: 'trecerea de la munca fizică la creația spirituală' },
      { text: '„Eu am ivit cuvinte potrivite”', context: 'poezia ca meșteșug; formula dă titlul volumului' },
      { text: '„Veninul strâns l-am preschimbat în miere”', context: 'transfigurarea suferinței în artă' },
      { text: '„Făcui din zdrențe muguri și coroane”', context: 'transformarea materiei umile în frumusețe' },
      { text: '„Din bube, mucegaiuri și noroi / Iscat-am frumuseți și prețuri noi”', context: 'estetica urâtului' },
      { text: '„Slova de foc și slova făurită”', context: 'inspirația și meșteșugul, unite în creație' },
      { text: '„Robul a scris-o, Domnul o citește”', context: 'antiteza rob – stăpân în finalul poeziei' }
    ],
    capcane: [
      '„Fiul” căruia i se adresează poetul nu este un fiu biologic, ci urmașul spiritual: cititorul, generațiile viitoare.',
      'Estetica urâtului nu înseamnă că poezia este urâtă: urâtul este *transfigurat* în frumos artistic.',
      '„Slova de foc” este inspirația, iar „slova făurită” este meșteșugul; nu le inversa.',
      'Tema strămoșilor nu face din poezie un text tradiționalist: „Testament” este o artă poetică modernistă.'
    ]

  },

  // =====================================================================
  // 5. EU NU STRIVESC COROLA DE MINUNI A LUMII — Lucian Blaga
  // =====================================================================
  {
    id: 'eu-nu-strivesc-corola-de-minuni-a-lumii',
    titlu: 'Eu nu strivesc corola de minuni a lumii',
    autor: 'Lucian Blaga',
    an: '1919',
    aparitie: 'volumul de debut „Poemele luminii” (1919), pe care îl deschide',
    gen: 'liric',
    specie: 'artă poetică',
    categorii: ['artă poetică', 'artă poetică modernistă', 'text poetic modernist', 'poezie expresionistă', 'poezie interbelică'],

    incadrare: {
      eticheta: 'modernism (perioada interbelică), cu accente expresioniste',
      trasaturi: [
        { nume: '*Viziunea filozofică asupra cunoașterii*: poezia devine un mod de a cunoaște lumea și exprimă o atitudine față de misterele ei.',
          dovada: 'Eul liric opune două tipuri de cunoaștere: „Lumina altora / sugrumă vraja nepătrunsului ascuns”, în timp ce el afirmă: „eu cu lumina mea sporesc a lumii taină”.' },
        { nume: '*Versul liber și ingambamentul*: renunțarea la prozodia clasică, astfel încât ritmul să urmeze fluxul ideilor.',
          dovada: 'Poezia are 20 de versuri libere, de lungimi foarte diferite, de la versul scurt „dar eu,” la versuri ample, iar frazele trec de la un vers la altul prin ingambament: „și nu ucid / cu mintea tainele”.' },
        { nume: '*Expresionismul*: afirmarea puternică a eului și tensiunea dintre eu și lume, raportate la absolut și la misterul cosmic.',
          dovada: 'Pronumele „eu” este așezat chiar la începutul titlului și reluat insistent, iar lumea este văzută ca o totalitate a misterelor, o „corolă de minuni”, pe care poetul o ocrotește.' }
      ]
    },

    tema: 'Tema poeziei este *cunoașterea poetică* a lumii: poetul își mărturisește atitudinea de a nu distruge prin rațiune misterele universului, ci de a le adânci prin creație și iubire.',
    viziune: 'Viziunea este modernistă și filozofică: lumea este un ansamblu armonios de taine, iar rolul poetului nu este să le explice, ci să le sporească, transformând necunoscutul în „neînțelesuri și mai mari”. Poezia anticipează distincția din filozofia lui Blaga dintre cunoașterea paradisiacă, rațională, și cunoașterea luciferică, poetică, ce potențează misterul.',

    secvente: [
      { titlu: 'Atitudinea poetului: „Eu nu strivesc corola de minuni a lumii / și nu ucid / cu mintea tainele” (versurile 1–5)',
        rezumat: 'Eul liric declară că nu distruge prin rațiune misterele pe care le întâlnește în flori, în ochi, pe buze sau în morminte.',
        comentariu: 'Verbele la forma negativă („nu strivesc”, „nu ucid”) exprimă refuzul cunoașterii raționale, care descompune și distruge misterul. Enumerația „în flori, în ochi, pe buze ori morminte” arată că tainele sunt pretutindeni: în natură, în cunoaștere, în iubire și în moarte, adică în întreaga existență.' },
      { titlu: 'Opoziția dintre „lumina altora” și „lumina mea” (versurile 6–10)',
        rezumat: 'Poetul se delimitează de ceilalți, a căror cunoaștere distruge misterul, și afirmă că lumina lui îl sporește.',
        comentariu: 'Lumina, metafora centrală, desemnează cunoașterea: „lumina altora”, care „sugrumă vraja nepătrunsului ascuns”, este cunoașterea rațională, pe când „lumina mea” este cunoașterea poetică, prin care poetul sporește „a lumii taină”. Antiteza, marcată prin conjuncția adversativă „dar” și prin reluarea pronumelui „eu”, evidențiază opțiunea poetului pentru protejarea misterului.' },
      { titlu: 'Comparația cu luna: „nu micșorează, ci tremurătoare / mărește și mai tare taina nopții” (versurile 11–18)',
        rezumat: 'Poetul își explică atitudinea printr-o comparație amplă: așa cum lumina lunii adâncește misterul nopții, poezia sa îmbogățește taina lumii.',
        comentariu: 'Comparația transformă ideea abstractă într-o imagine concretă: lumina lunii nu risipește întunericul, ci îl face și mai misterios. La fel, poetul își mărturisește rolul: „așa îmbogățesc și eu întunecata zare / cu largi fiori de sfânt mister”, ceea ce ilustrează cunoașterea poetică, ce potențează misterul în loc să-l desființeze.' },
      { titlu: 'Finalul: „căci eu iubesc / și flori și ochi și buze și morminte” (versurile 19–20)',
        rezumat: 'Ultimele două versuri motivează atitudinea poetului: el ocrotește misterele pentru că iubește lumea.',
        comentariu: 'Conjuncția cauzală „căci” arată că finalul are rol de concluzie: iubirea este calea cunoașterii poetice. Enumerația din primele versuri este reluată, de această dată cu polisindetonul „și... și...”, care sugerează că poetul iubește lumea în totalitatea ei, viața și moartea deopotrivă.' }
    ],

    elemente: [
      { nume: 'Titlul',
        analiza: 'Titlul, reluat ca prim vers, este o metaforă revelatorie: „corola de minuni a lumii” sugerează, prin forma circulară a corolei, armonia și totalitatea universului plin de taine. Pronumele „eu”, așezat la început, și verbul la forma negativă „nu strivesc” exprimă atitudinea poetului: refuzul de a distruge misterul.',
        relevanta: 'Titlul este relevant pentru tema cunoașterii deoarece rezumă programul poetic al lui Blaga: protejarea misterului lumii, nu explicarea lui.' },
      { nume: 'Motivul central al luminii',
        analiza: 'Lumina este motivul central al poeziei și al întregului volum „Poemele luminii”, fiind metafora cunoașterii. Ea apare în două ipostaze opuse: „lumina altora”, care „sugrumă” misterul, și „lumina mea”, prin care poetul îl sporește.',
        relevanta: 'Motivul luminii este relevant pentru temă deoarece prin cele două ipostaze ale sale se definește opțiunea poetului pentru o cunoaștere care ocrotește misterul.' },
      { nume: 'Relația de opoziție',
        analiza: 'Poezia se construiește pe antiteza dintre eu și ceilalți, marcată prin pronume („eu” – „altora”), prin conjuncția adversativă „dar” și prin verbe cu sens opus: „sugrumă” – „sporesc”, „nu micșorează” – „mărește”. Antiteza este subliniată și grafic, prin versul scurt „dar eu,”.',
        relevanta: 'Relația de opoziție este relevantă deoarece pune în evidență cele două tipuri de cunoaștere și justifică poziția poetului ca ocrotitor al tainelor lumii.' },
      { nume: 'Figurile semantice',
        analiza: 'Comparația amplă cu lumina lunii explică atitudinea poetului. Enumerația „flori, ochi, buze, morminte” are valoare simbolică: florile sugerează natura, ochii cunoașterea, buzele iubirea și cuvântul, iar mormintele moartea. Epitetele din sintagma „largi fiori de sfânt mister” sacralizează taina.',
        relevanta: 'Figurile semantice sunt relevante deoarece transformă o idee filozofică într-o imagine concretă și arată că misterul cuprinde întreaga existență.' },
      { nume: 'Nivelul morfosintactic',
        analiza: 'Pronumele „eu”, reluat insistent, susține caracterul confesiv al textului. Verbele la indicativ prezent („strivesc”, „sporesc”, „iubesc”) au valoare de prezent etern, iar formele negative din incipit sunt urmate de afirmații, ceea ce marchează trecerea de la refuz la asumarea propriei căi.',
        relevanta: 'Aceste mijloace sunt relevante pentru o artă poetică deoarece transformă poezia într-o profesiune de credință a poetului, valabilă dincolo de un moment anume.' },
      { nume: 'Elementele de prozodie',
        analiza: 'Poezia este scrisă în vers liber: are 20 de versuri de lungimi foarte diferite, fără rimă și fără un ritm regulat, iar frazele trec de la un vers la altul prin ingambament.',
        relevanta: 'Forma liberă este relevantă deoarece permite ritmului să urmeze fluxul ideilor, potrivit unei arte poetice moderne, care respinge constrângerile prozodiei tradiționale.' }
    ],

    structura: 'Poezia are 20 de versuri libere, organizate în trei secvențe poetice. Prima (versurile 1–5) exprimă atitudinea poetului față de misterele lumii; a doua (versurile 6–18), cea mai amplă, opune „lumina altora” și „lumina mea” și explică opțiunea poetului prin comparația cu lumina lunii. A treia (versurile 19–20) are rol de concluzie și motivează atitudinea poetului prin iubire.',
    prozodie: 'Poezia este scrisă în vers liber: are 20 de versuri de lungimi foarte diferite, fără rimă și fără ritm regulat, iar frazele trec de la un vers la altul prin ingambament. Muzicalitatea vine din ritmul interior, din repetiții și din pauzele marcate de punctuație.',

    introducere: 'Poezia „Eu nu strivesc corola de minuni a lumii” de Lucian Blaga deschide volumul de debut „Poemele luminii” (1919) și are valoarea unei arte poetice. Aparținând modernismului, cu accente expresioniste, textul exprimă concepția poetului despre cunoaștere: misterele lumii nu trebuie distruse prin rațiune, ci ocrotite și adâncite prin poezie.',
    incheiere: 'Prin această artă poetică, Lucian Blaga își definește rolul de creator care nu explică lumea, ci îi sporește taina. Valoarea poeziei constă în îmbinarea dintre ideea filozofică și imaginea poetică, prin care metafora luminii devine o adevărată profesiune de credință.',

    citate: [
      { text: '„Eu nu strivesc corola de minuni a lumii”', context: 'titlul și primul vers; atitudinea poetului' },
      { text: '„și nu ucid / cu mintea tainele, ce le-ntâlnesc / în calea mea”', context: 'refuzul cunoașterii raționale' },
      { text: '„în flori, în ochi, pe buze ori morminte”', context: 'enumerația tainelor existenței' },
      { text: '„Lumina altora / sugrumă vraja nepătrunsului ascuns”', context: 'cunoașterea rațională, care distruge misterul' },
      { text: '„dar eu, / eu cu lumina mea sporesc a lumii taină”', context: 'cunoașterea poetică, opusă celei a altora' },
      { text: '„nu micșorează, ci tremurătoare / mărește și mai tare taina nopții”', context: 'comparația cu lumina lunii' },
      { text: '„așa îmbogățesc și eu întunecata zare / cu largi fiori de sfânt mister”', context: 'rolul poetului: sporirea misterului' },
      { text: '„se schimbă-n neînțelesuri și mai mari”', context: 'efectul cunoașterii poetice asupra necunoscutului' },
      { text: '„căci eu iubesc / și flori și ochi și buze și morminte”', context: 'finalul; iubirea ca motivație a cunoașterii poetice' }
    ],
    capcane: [
      '„Lumina altora” nu înseamnă lumina altor poeți, ci cunoașterea rațională, logică, ce explică și astfel distruge misterul.',
      'Nu inversa cele două tipuri de cunoaștere: „lumina altora” corespunde cunoașterii paradisiace, iar „lumina mea” cunoașterii luciferice; termenii aparțin filozofiei lui Blaga, formulată ulterior, pe care poezia o anticipează.',
      'Poezia nu are strofe, rimă sau ritm regulat: este scrisă în vers liber.'
    ]

  },

  // =====================================================================
  // 6. RIGA CRYPTO ȘI LAPONA ENIGEL — Ion Barbu
  // =====================================================================
  {
    id: 'riga-crypto-si-lapona-enigel',
    titlu: 'Riga Crypto și lapona Enigel',
    autor: 'Ion Barbu',
    an: '1924',
    aparitie: 'publicată în 1924, apoi inclusă în volumul „Joc secund” (1930)',
    gen: 'liric',
    specie: 'baladă cultă (modernă), cu caracter alegoric',
    categorii: ['baladă cultă', 'poem alegoric', 'text poetic modernist', 'poezie interbelică', 'text poetic despre iubire'],

    incadrare: {
      eticheta: 'modernism (perioada interbelică); poemul aparține etapei baladice și orientale a creației lui Ion Barbu',
      trasaturi: [
        { nume: '*Intelectualizarea emoției și caracterul alegoric*: povestea de iubire devine o alegorie a incompatibilității dintre două regnuri și două moduri de a exista.',
          dovada: 'Crypto, regele ciupercilor, trăiește în umbră și umezeală, pe când Enigel se închină soarelui, simbol al spiritului și al cunoașterii: „Mă-nchin la soarele-nțelept, / Că sufletu-i fântână-n piept”.' },
        { nume: '*Lirismul obiectiv (lirica măștilor)* și caracterul dramatic: eul liric se ascunde în spatele unor personaje care dialoghează.',
          dovada: 'Poemul începe cu îndemnul unui nuntaș adresat menestrelului („Menestrel trist, mai aburit / Ca vinul vechi ciocnit la nuntă”), iar povestea propriu-zisă se desfășoară prin replicile lui Crypto și ale Enigelei.' },
        { nume: '*Înnoirea limbajului poetic*, prin îmbinarea termenilor populari și arhaici cu nume exotice, cu sugestii savante.',
          dovada: 'Numele „Crypto”, din grecescul *kryptos* („ascuns”), stă alături de cuvinte populare precum „ciupearcă” (Crypto este numit „regele-ciupearcă”) sau „nărăvaș” și de termenul medieval „menestrel”.' }
      ]
    },

    tema: 'Tema poemului este *iubirea imposibilă* dintre două ființe care aparțin unor lumi incompatibile: Crypto, regele ciupercilor, din regnul vegetal, și lapona Enigel, din lumea oamenilor. În plan alegoric, poemul tratează incompatibilitatea dintre ființa limitată, legată de umbră și de instinct, și ființa care aspiră spre lumină și cunoaștere.',
    viziune: 'Viziunea este modernistă și alegorică: poemul este adesea numit un „Luceafăr întors”, deoarece aici ființa inferioară, Crypto, aspiră spre o lume superioară, iar încercarea de a-și depăși condiția îi aduce pieirea. Concluzia este că doar omul poate primi lumina cunoașterii, pe când pentru făpturile fragile gândul devine otravă.',

    secvente: [
      { titlu: 'Portretul lui Crypto: „Împărățea peste bureți / Crai Crypto, inimă ascunsă”',
        rezumat: 'Crypto este regele ciupercilor, care trăiește în umbră și umezeală, refuză să înflorească și este bârfit și ocărât de celelalte plante.',
        comentariu: 'Epitetul „inimă ascunsă” și numele însuși (din grecescul *kryptos*, „ascuns”) sugerează o ființă închisă în sine, legată de lumea umbrei și a instinctului. Reproșul celorlalte plante, care îl socotesc sterp „Că nu voia să înflorească”, arată că el refuză evoluția și rămâne captiv în limitele regnului său.' },
      { titlu: 'Cererea lui Crypto și răspunsul Enigelei: „Te-aș culege, rigă blând...”',
        rezumat: 'Enigel, care coboară cu renii spre sud, se odihnește în ținutul lui Crypto; acesta o roagă să rămână cu el la umbră, oferindu-i fragi și dulceață, dar ea îl refuză.',
        comentariu: 'Răspunsul Enigelei arată condiția iubirii: ea l-ar putea accepta doar dacă el s-ar maturiza, ieșind din lumea umbrei („Lasă. – Așteaptă de te coace.”). Crypto se teme însă de soare, care i-ar aduce „Visuri sute, de măcel”, și preferă somnul și răcoarea, ceea ce dovedește incompatibilitatea dintre cele două lumi.' },
      { titlu: 'Crezul solar al Enigelei: „La soare, roata se mărește; / La umbră, numai carnea crește”',
        rezumat: 'Enigel îi explică lui Crypto că ea se închină soarelui, simbol al spiritului, și că umbra hrănește doar trupul.',
        comentariu: 'Antiteza soare – umbră, roată – carne exprimă opoziția dintre spirit și materie, dintre cunoaștere și instinct. Metafora „sufletu-i fântână-n piept” arată că omul are capacitatea de a reflecta lumina, adică de a cunoaște, ceea ce Crypto nu poate face; de aceea Enigel pleacă, iar iubirea rămâne neîmplinită.' },
      { titlu: 'Finalul: „Că sufletul nu e fântână / Decât la om, fiară bătrână”',
        rezumat: 'După plecarea Enigelei, soarele se oglindește de mai multe ori în Crypto, inima lui plesnește, el devine otrăvitor, înnebunește și ajunge să o ia de soție pe măsălarița, o plantă otrăvitoare.',
        comentariu: 'Finalul are valoarea unei morale: lumina soarelui, pe care omul o poate primi, îl distruge pe Crypto, pentru că la făpturile fragile „Pahar e gândul, cu otravă”. Nunta cu măsălarița este o nuntă degradată, opusul nunții dorite cu Enigel, ceea ce arată că ființa limitată nu își poate depăși condiția.' }
    ],

    elemente: [
      { nume: 'Titlul',
        analiza: 'Titlul numește cele două personaje-simbol, legate prin conjuncția „și”, care sugerează perechea ce nu se va forma. „Riga” (formă populară pentru „rege”) și numele „Crypto” („ascuns”) trimit la lumea umbrei, iar „lapona” (locuitoare a Laponiei, din nordul îndepărtat) indică o ființă umană venită din altă lume.',
        relevanta: 'Titlul este relevant pentru tema iubirii imposibile deoarece alătură două ființe din lumi opuse, ale căror nume anunță deja diferența dintre ascundere și lumină.' },
      { nume: 'Compoziția în ramă (poveste în poveste)',
        analiza: 'Poemul începe cu un prolog: la sfârșitul unei nunți, „La spartul nunții, în cămară”, un nuntaș îl roagă pe menestrel să cânte din nou povestea lui Crypto și a Enigelei. Această ramă încadrează povestea propriu-zisă, astfel încât nunta reală, împlinită, se opune nunții ratate din poveste.',
        relevanta: 'Compoziția în ramă este relevantă deoarece contrastul dintre cele două nunți subliniază eșecul iubirii dintre ființe incompatibile.' },
      { nume: 'Relația de opoziție',
        analiza: '*Antiteza* structurează întregul poem: umbră – soare, umezeală – lumină, instinct – cunoaștere, regn vegetal – regn uman, Crypto – Enigel. Ea este formulată direct în crezul Enigelei: „La soare, roata se mărește; / La umbră, numai carnea crește”.',
        relevanta: 'Relația de opoziție este relevantă pentru temă deoarece explică de ce iubirea nu se poate împlini: fiecare personaj aparține unei lumi cu legi proprii.' },
      { nume: 'Simbolurile',
        analiza: 'Soarele este simbolul spiritului și al cunoașterii, „roata albă” din sufletul Enigelei este imaginea soarelui interiorizat, iar fântâna este simbolul sufletului omenesc, care poate reflecta lumina. Ciuperca, ființă a umbrei și a umezelii, simbolizează existența limitată la instinct.',
        relevanta: 'Simbolurile sunt relevante deoarece transformă povestea de iubire într-o alegorie a cunoașterii, accesibilă doar omului.' },
      { nume: 'Instanțele comunicării și caracterul dramatic',
        analiza: 'Eul liric nu se exprimă direct, ci prin măști: nuntașul care cere cântecul, menestrelul care îl spune, Crypto și Enigel, care dialoghează. Replicile, marcate prin linie de dialog, și vocativele repetate („Enigel, Enigel”) dau poemului un caracter dramatic.',
        relevanta: 'Lirismul obiectiv este relevant pentru viziunea modernistă deoarece distanțează emoția și o intelectualizează, transformând iubirea într-o problemă a cunoașterii.' },
      { nume: 'Elementele de prozodie',
        analiza: 'Strofele au în general câte patru versuri, iar versurile sunt scurte, de 7–9 silabe, cu ritm iambic ce alternează cu cel trohaic. Rima este încrucișată în prolog și în portretul lui Crypto („aburit” – „dăruit”, „pădureți” – „bureți”) și împerecheată în crezul Enigelei și în final („mărește” – „crește”).',
        relevanta: 'Prozodia apropiată de cea a baladei populare este relevantă deoarece dă textului caracterul unui cântec spus de menestrel, care contrastează cu profunzimea filozofică a alegoriei.' }
    ],

    structura: 'Poemul are două părți: un prolog, construit ca dialog între un nuntaș și un menestrel la sfârșitul unei nunți, și povestea propriu-zisă, cântată de menestrel. Povestea urmărește întâlnirea dintre Crypto, regele ciupercilor, și Enigel, o laponă care coboară cu renii spre sud, cererile repetate ale lui Crypto, refuzul Enigelei și finalul tragic, în care Crypto, atins de soare, înnebunește și se cunună cu măsălarița.',
    prozodie: 'Poemul are strofe în general de câte patru versuri, cu versuri scurte, de 7–9 silabe, în care ritmul iambic alternează cu cel trohaic. Rima este încrucișată în prolog și în portretul lui Crypto („aburit” – „dăruit”, „pădureți” – „bureți”) și împerecheată în crezul Enigelei și în final („mărește” – „crește”), ceea ce dă textului muzicalitatea unei balade populare.',

    introducere: 'Poemul „Riga Crypto și lapona Enigel” de Ion Barbu a fost publicat în 1924 și inclus apoi în volumul „Joc secund” (1930), aparținând etapei baladice și orientale a creației poetului. Este o baladă cultă modernistă, cu caracter alegoric, care tratează tema iubirii imposibile dintre două ființe din lumi diferite.',
    incheiere: 'Prin povestea nunții ratate dintre regele ciupercilor și lapona închinată soarelui, Ion Barbu construiește o alegorie a cunoașterii, în care doar omul poate primi lumina spiritului. Valoarea poemului constă în îmbinarea dintre forma de baladă populară și profunzimea ideilor, ceea ce îl face una dintre cele mai originale creații ale modernismului românesc.',

    citate: [
      { text: '„Menestrel trist, mai aburit / Ca vinul vechi ciocnit la nuntă”', context: 'începutul prologului; nuntașul se adresează menestrelului' },
      { text: '„La spartul nunții, în cămară”', context: 'cadrul nunții-ramă, în care se spune povestea' },
      { text: '„Împărățea peste bureți / Crai Crypto, inimă ascunsă”', context: 'portretul lui Crypto, regele ciupercilor' },
      { text: '„Că nu voia să înflorească”', context: 'reproșul plantelor; Crypto refuză să evolueze' },
      { text: '„Te-aș culege, rigă blând...”', context: 'răspunsul Enigelei la cererea lui Crypto' },
      { text: '„Lasă. – Așteaptă de te coace.”', context: 'condiția pusă de Enigel: maturizarea la soare' },
      { text: '„Să mă coc, Enigel”', context: 'începutul răspunsului lui Crypto, care se teme de soare' },
      { text: '„Mă-nchin la soarele-nțelept, / Că sufletu-i fântână-n piept”', context: 'crezul solar al Enigelei' },
      { text: '„La soare, roata se mărește; / La umbră, numai carnea crește”', context: 'antiteza spirit – materie' },
      { text: '„Pahar e gândul, cu otravă”', context: 'morala finală; cunoașterea îi este fatală ființei limitate' }
    ],
    capcane: [
      'Crypto nu este un om, ci regele ciupercilor (regnul vegetal); Enigel este o laponă, o ființă umană din nordul îndepărtat.',
      'Poemul este o baladă cultă modernistă, nu o baladă populară, și aparține etapei baladice și orientale, nu celei ermetice, chiar dacă a fost inclus în volumul „Joc secund”.',
      'Expresia „Luceafăr întors” înseamnă că rolurile sunt inversate față de poemul lui Eminescu: aici ființa luminii este femeia (Enigel), iar ființa inferioară, care încearcă să-și depășească limitele, este bărbatul (Crypto).',
      'Finalul nu este o împlinire: nunta cu măsălarița este o nuntă degradată, semn al pedepsei pentru încercarea de a depăși condiția.'
    ]

  },

  // =====================================================================
  // 7. LEOAICĂ TÂNĂRĂ, IUBIREA — Nichita Stănescu
  // =====================================================================
  {
    id: 'leoaica-tanara-iubirea',
    titlu: 'Leoaică tânără, iubirea',
    autor: 'Nichita Stănescu',
    an: '1964',
    aparitie: 'volumul „O viziune a sentimentelor” (1964)',
    gen: 'liric',
    specie: 'poezie de dragoste (lirică erotică neomodernistă)',
    categorii: ['poezie de dragoste', 'text poetic neomodernist', 'poezie postbelică', 'text poetic despre iubire'],

    incadrare: {
      eticheta: 'neomodernism (generația anilor ’60, perioada postbelică)',
      trasaturi: [
        { nume: '*Metafora inedită și ambiguitatea*: sentimentul abstract este transformat într-o imagine concretă, surprinzătoare, care permite mai multe interpretări.',
          dovada: 'Iubirea apare ca o leoaică tânără, animal de pradă care îl pândește și îl atacă pe eul liric: „Colții albi mi i-a înfipt în față”.' },
        { nume: '*Viziunea cosmică și transfigurarea realului*: întâlnirea cu iubirea schimbă întreaga lume, care se reorganizează în jurul eului.',
          dovada: 'După atacul iubirii, „natura / se făcu un cerc, de-a-dura, / când mai larg, când mai aproape”, iar privirea devine „curcubeu tăiat în două”.' },
        { nume: '*Libertatea prozodică*: strofe inegale, versuri de lungimi diferite și rimă fără schemă fixă.',
          dovada: 'Poezia are trei strofe de 6, 8 și 10 versuri, cu versuri foarte scurte („mai demult”) alături de versuri ample, iar finalul se prelungește prin repetiția „încă-o vreme, / și-ncă-o vreme...”.' }
      ]
    },

    tema: 'Tema poeziei este *iubirea*, înțeleasă ca experiență totală și neașteptată, care îl transformă pe eul liric și schimbă felul în care el percepe lumea și pe sine însuși.',
    viziune: 'Viziunea este neomodernistă: iubirea nu este descrisă sentimental, ci transfigurată într-o metaforă surprinzătoare, aceea a leoaicei care atacă. Sentimentul apare ca o forță vitală, care modifică universul și identitatea eului și rămâne prezent „încă-o vreme”, sugerând deopotrivă persistența și caracterul trecător al iubirii.',

    secvente: [
      { titlu: 'Strofa I: „Leoaică tânără, iubirea” — întâlnirea neașteptată cu iubirea',
        rezumat: 'Eul liric este surprins de iubire, care, asemenea unei leoaice tinere ce îl pândise, îi sare în față și îl mușcă.',
        comentariu: 'Metafora leoaicei, animal de pradă tânăr și puternic, sugerează forța, instinctul și caracterul imprevizibil al iubirii, care îl alege pe om, fără ca el să o poată alege. Imaginea colților înfipți „în față” arată că iubirea lasă o urmă de neșters asupra identității eului liric, iar inversarea rolurilor tradiționale (bărbatul devine pradă) dă originalitate viziunii.' },
      { titlu: 'Strofa a II-a: „natura / se făcu un cerc, de-a-dura” — transfigurarea lumii',
        rezumat: 'După întâlnirea cu iubirea, natura începe să se rotească în jurul eului liric, iar simțurile lui capătă dimensiuni noi.',
        comentariu: 'Cercul, simbol al perfecțiunii și al totalității, sugerează că eul liric devine centrul unui univers reorganizat de iubire, care pulsează „când mai larg, când mai aproape”. Privirea care țâșnește în sus și auzul care ajunge „tocmai lângă ciocârlii” arată înălțarea provocată de sentiment, simțurile căpătând dimensiuni cosmice.' },
      { titlu: 'Strofa a III-a: „dar mâna nu le mai știe” — pierderea vechii identități',
        rezumat: 'Eul liric își atinge sprânceana, tâmpla și bărbia, dar nu le mai recunoaște, iar mâna alunecă pe un deșert strălucitor, peste care trece o leoaică arămie.',
        comentariu: 'Gestul de a-și pipăi chipul arată că iubirea l-a transformat atât de profund încât eul nu se mai recunoaște. Imaginea finală, „o leoaică arămie” care trece alene „încă-o vreme, / și-ncă-o vreme...”, sugerează că iubirea, maturizată și mai liniștită, rămâne prezentă, dar lasă să se întrevadă și ideea trecerii timpului.' }
    ],

    elemente: [
      { nume: 'Titlul',
        analiza: 'Titlul, reluat ca prim vers, este o metaforă care identifică iubirea cu o leoaică tânără. Inversiunea pune în prim-plan imaginea concretă a animalului, care sugerează forța, instinctul și frumusețea sălbatică, iar epitetul „tânără” trimite la noutatea și vitalitatea sentimentului.',
        relevanta: 'Titlul este relevant pentru tema iubirii deoarece concentrează viziunea întregii poezii: iubirea este o forță vie, agresivă și irezistibilă, care îl transformă pe om.' },
      { nume: 'Simetria incipit – final',
        analiza: 'Poezia se deschide și se încheie cu imaginea leoaicei: la început, leoaica tânără pândește și atacă, iar la final „o leoaică arămie” trece alene peste un deșert. Schimbarea epitetelor („tânără”, „arămie”) sugerează evoluția sentimentului, de la izbucnirea violentă la o prezență calmă, maturizată.',
        relevanta: 'Simetria este relevantă pentru temă deoarece arată că iubirea, deși se transformă, rămâne prezentă în existența eului liric și încadrează întreaga experiență.' },
      { nume: 'Motivele poetice și simbolurile',
        analiza: 'Cercul sugerează perfecțiunea și totalitatea universului reorganizat de iubire, curcubeul „tăiat în două” exprimă uimirea în fața lumii transformate, iar ciocârliile, păsări ale înălțimii, sugerează elevația spirituală. Deșertul strălucitor din final poate fi citit ca spațiul gol lăsat de vechea identitate, dar și ca luminozitatea noii existențe.',
        relevanta: 'Motivele sunt relevante pentru tema iubirii deoarece arată că sentimentul are dimensiuni cosmice și schimbă percepția asupra întregii lumi.' },
      { nume: 'Câmpul semantic al corpului',
        analiza: 'Poezia folosește numeroși termeni din câmpul semantic al corpului: „față”, „colții”, „privirea”, „auzul”, „sprânceană”, „tâmplă”, „bărbie”, „mâna”. Cuvântul „față”, repetat în poziție de rimă în prima strofă, sugerează că iubirea atinge chiar chipul, adică identitatea eului liric.',
        relevanta: 'Imaginile corporale sunt relevante deoarece arată că iubirea este o experiență totală, trăită fizic, care transformă chiar și percepția de sine.' },
      { nume: 'Instanțele comunicării',
        analiza: 'Eul liric este prezent prin mărci ale persoanei I („mă”, „mi”, „meu”, „mi-am dus”), fiind în același timp subiectul și prada experienței. Lirismul subiectiv se îmbină cu o anumită distanță, deoarece emoția este exprimată prin imagini, nu prin confesiune directă.',
        relevanta: 'Instanțele comunicării sunt relevante deoarece arată că iubirea este trăită ca experiență personală, dar transfigurată intelectual, specific neomodernismului.' },
      { nume: 'Elementele de prozodie',
        analiza: 'Poezia are trei strofe inegale (de 6, 8 și 10 versuri), cu versuri de lungimi foarte diferite și ritm variabil. Rima nu urmează o schemă fixă: apar perechi împerecheate („natura” – „de-a-dura”, „aproape” – „ape”), dar și repetarea aceluiași cuvânt în rimă („față” în prima strofă, „vreme” în final).',
        relevanta: 'Libertatea prozodică este relevantă deoarece forma neregulată reproduce tumultul trăirii, iar repetiția finală prelungește ecoul iubirii dincolo de text.' }
    ],

    structura: 'Poezia are trei strofe inegale, de 6, 8 și 10 versuri, care corespund celor trei momente ale experienței iubirii. Prima strofă prezintă întâlnirea neașteptată cu iubirea-leoaică, a doua surprinde transformarea lumii exterioare, care se rotește în jurul eului, iar a treia arată transformarea eului însuși, care nu se mai recunoaște, și imaginea finală a leoaicei arămii.',
    prozodie: 'Poezia are trei strofe inegale (de 6, 8 și 10 versuri), cu versuri foarte scurte, de trei-patru silabe, alături de versuri de zece-unsprezece silabe, și ritm variabil. Rima nu urmează o schemă fixă: alternează perechi de rime împerecheate („natura” – „de-a-dura”, „aproape” – „ape”) cu repetarea aceluiași cuvânt în poziție de rimă („față”, „vreme”).',

    introducere: 'Poezia „Leoaică tânără, iubirea” de Nichita Stănescu face parte din volumul „O viziune a sentimentelor” (1964) și este una dintre cele mai cunoscute poezii de dragoste ale neomodernismului românesc. Prin metafora surprinzătoare a leoaicei, poetul prezintă iubirea ca pe o forță vitală, care transformă radical lumea și identitatea eului liric.',
    incheiere: '„Leoaică tânără, iubirea” reinventează poezia de dragoste prin metafora inedită și prin viziunea asupra iubirii ca experiență totală, de cunoaștere a lumii și a sinelui. Valoarea textului constă în felul în care Nichita Stănescu transformă un sentiment abstract într-o imagine vie, memorabilă, specifică neomodernismului.',

    citate: [
      { text: '„Leoaică tânără, iubirea”', context: 'titlul și primul vers; metafora centrală' },
      { text: '„Colții albi mi i-a înfipt în față”', context: 'atacul iubirii; urma lăsată asupra identității' },
      { text: '„natura / se făcu un cerc, de-a-dura”', context: 'transformarea lumii după întâlnirea cu iubirea' },
      { text: '„când mai larg, când mai aproape”', context: 'pulsația universului reorganizat de iubire' },
      { text: '„curcubeu tăiat în două”', context: 'privirea transfigurată; metaforă a uimirii' },
      { text: '„tocmai lângă ciocârlii”', context: 'auzul care urcă spre înalt; elevația provocată de iubire' },
      { text: '„dar mâna nu le mai știe”', context: 'pierderea vechii identități' },
      { text: '„o leoaică arămie”', context: 'imaginea finală a iubirii maturizate' },
      { text: '„încă-o vreme, / și-ncă-o vreme...”', context: 'finalul deschis; durata iubirii și trecerea timpului' }
    ],
    capcane: [
      'Leoaica nu este femeia iubită, ci *iubirea însăși*; nu scrie că „iubita este o leoaică”.',
      'Tema iubirii nu face din poezie un text romantic: metafora inedită, ambiguitatea și prozodia liberă o încadrează în neomodernism.',
      'Volumul este „O viziune a sentimentelor” (1964), nu volumul de debut, „Sensul iubirii” (1960).'
    ]

  }

);
