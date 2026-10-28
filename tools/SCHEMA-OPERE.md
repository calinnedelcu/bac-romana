# Formatul fișelor de operă (`assets/js/data/opere-*.js`)

Fiecare fișier adaugă opere în lista globală:

```js
window.OPERE = window.OPERE || [];
OPERE.push({ ... }, { ... });
```

Fișele alimentează două lucruri: pagina operei și **constructorul de eseu** (alegi opera + tipul de eseu,
site-ul compune planul pe repere din câmpurile de mai jos). De aceea fiecare câmp trebuie să fie
o frază gata de pus în eseu, nu notițe telegrafice.

## Reguli de scriere

- Română corectă, cu diacritice cu virgulă (ș, ț, nu ş, ţ) și ghilimele românești „…”.
- Persoana a III-a, registru de eseu de bac (fără „eu cred”, fără argou). Frazele sunt formulări pe care
  elevul le poate scrie ca atare.
- Citatele: scurte (max. ~15 cuvinte), **exacte**, verificate pe net (Wikisource pentru textele libere de
  drepturi; pentru celelalte, cel puțin două surse care coincid). Scrie-le în ghilimele „…” în text.
  Dacă nu poți verifica un citat, nu-l pune.
- Fapte (an apariție, volum, curent, nume de personaje, ordinea episoadelor): verificate.
- Nu scrie atribuiri de surse în fișă. Sursele folosite la verificare nu intră în fișierele publicate.
- Nu scrie „la bac pică…”, „cel mai probabil…”. Scrie ce trebuie să știi.
- Marcaj permis în text: `*cuvânt*` = evidențiere (termen-cheie de barem). Nimic altceva (fără HTML).

## Câmpuri

```js
{
  id: 'moara-cu-noroc',              // slug unic
  titlu: 'Moara cu noroc',
  autor: 'Ioan Slavici',
  an: '1881',                         // anul apariției (și volumul, dacă e cazul, în `aparitie`)
  aparitie: 'volumul „Novele din popor” (1881)',
  gen: 'epic',                        // 'epic' | 'liric' | 'dramatic'
  specie: 'nuvelă psihologică',       // specia exactă, cum o numești în eseu
  categorii: ['nuvelă', 'nuvelă realistă', 'nuvelă psihologică'],  // sub ce denumiri poate apărea în cerință
                                      // (ex. „o nuvelă studiată”, „un roman interbelic”, „un text poetic modernist”)

  // ---------- Reperul 1: încadrarea (6 p) ----------
  incadrare: {
    eticheta: 'realism (perioada marilor clasici, epoca junimistă)',   // ce precizezi (2 p)
    trasaturi: [                      // 3 trăsături (elevul alege 2). Fiecare: numire (1 p) + dovadă din text (1 p)
      { nume: 'Tema socială și psihologică a banului…',            // numirea trăsăturii, o frază
        dovada: 'Ghiță vine la cârciuma de la Moara cu noroc ca să… (citat scurt)' }  // valorificarea textului
    ]
  },

  // ---------- Reperul 2: tema + două episoade/secvențe (6 p) ----------
  tema: 'Tema nuvelei este *dezumanizarea* provocată de…',          // precizarea temei (2 p), o frază
  viziune: 'Viziunea despre lume…',   // 1–2 fraze (util la introducere/încheiere)
  secvente: [                         // 3–4 episoade (la poezie: imagini/idei poetice), elevul alege 2
    { titlu: 'Sfatul bătrânei (incipitul)',
      rezumat: 'O frază: ce se întâmplă.',
      comentariu: '2–3 fraze: ce arată episodul pentru temă (aici e punctajul: comentariu, nu rezumat).' }
  ],

  // ---------- Reperul 3: două elemente de structură/compoziție/limbaj (6 p) ----------
  elemente: [                         // 4–6 elemente; fiecare: analiză + justificarea relevanței (3 p)
    { nume: 'Titlul',
      analiza: '2–3 fraze de analiză, cu citat dacă ajută.',
      relevanta: 'O frază care începe cu legătura la temă/viziune: „Titlul este relevant pentru… deoarece…”.' }
    // la epic: titlu, incipit și final (simetrie), conflict, perspectiva narativă, timp și spațiu, tehnici narative,
    //          construcția subiectului / momentele subiectului, limbaj/registre stilistice
    // la liric: titlu, incipit, motive poetice / laitmotiv / simbol central, figuri semantice (tropi),
    //           relații de opoziție și simetrie, elemente de prozodie, instanțele comunicării (eul liric), structura pe secvențe
    // la dramatic: conflict dramatic, notațiile autorului (didascalii), structura pe acte și scene,
    //              mijloacele comicului / limbajul personajelor, personajele ca tipuri
  ],

  // ---------- Personaje (pentru eseul despre construcția unui personaj) ----------
  // doar la epic și dramatic; 1–3 personaje principale
  personaje: [
    { nume: 'Ghiță',
      tip: 'personaj principal, rotund, complex (personaj realist, dar cu analiză psihologică)',
      statut: {                       // reperul 1 la eseul despre personaj
        social: '1–2 fraze.',
        psihologic: '1–2 fraze.',
        moral: '1–2 fraze.'
      },
      trasaturi: [                    // reperul 2: o trăsătură ilustrată prin două episoade
        { trasatura: 'lăcomia / setea de îmbogățire',
          episoade: [
            { titlu: 'Primul jaf…', comentariu: '2 fraze: cum evidențiază scena trăsătura.' },
            { titlu: '…', comentariu: '…' }
          ] }
      ],
      constructie: [                  // reperul 3: elemente de construcție a personajului (elevul alege 2)
        { nume: 'Caracterizarea directă', analiza: 'Cine îl caracterizează și cum, cu citat.', relevanta: 'De ce contează pentru construcția personajului.' },
        { nume: 'Caracterizarea indirectă', analiza: '…', relevanta: '…' }
        // + perspectiva narativă, monologul interior / stilul indirect liber, relația cu alt personaj, conflictul interior, numele, incipitul/finalul, limbajul
      ],
      citate: ['„citat scurt” (cine spune, despre ce)']
    }
  ],

  // ---------- Relația dintre două personaje (opțional, unde relația e un subiect firesc) ----------
  relatii: [
    { intre: ['Ghiță', 'Ana'],
      statut_initial: '2 fraze: cine sunt cei doi la început și cum arată relația.',
      scene: [ { titlu: '…', comentariu: 'Cum ilustrează scena relația / evoluția ei.' }, { … } ],   // 2–3 scene
      evolutie: '1–2 fraze: cum se schimbă relația până la final.',
      elemente: [ { nume: 'Conflictul', analiza: '…', relevanta: '…' } ]   // 2 elemente pentru reperul 3
    }
  ],

  // ---------- Pentru eseul întreg ----------
  introducere: '2–3 fraze gata de scris: autor, operă, an, specie, curent + o idee despre temă.',
  incheiere: '2 fraze gata de scris: sinteză + valoarea operei (judecată de valoare argumentată).',
  citate: [                           // 6–10 citate scurte, cele mai utile, fiecare cu contextul
    { text: '„Omul să fie mulțumit cu sărăcia sa…”', context: 'cuvintele bătrânei din incipit; anunță tema' }
  ],
  capcane: ['Greșeli frecvente la această operă (ex. confuzii de nume, de curent, de perspectivă).']
}
```

La poezie (`gen: 'liric'`), câmpurile `personaje` și `relatii` lipsesc, iar `secvente` = imagini sau idei
poetice (titlul secvenței = versul/strofa, comentariul = ce sugerează și cum ilustrează tema).
