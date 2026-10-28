/* Redactare, ortografie și punctuație: punctele de formă din toată lucrarea. */
(function () {
  const S = window.Site;
  const C = 'var(--c5)';

  const PERECHI = [
    ['s-a / sa / să', '<b>s-a</b> = pronume + verb auxiliar: <em>s-a întâmplat, s-a dus</em>. <b>sa</b> = posesiv: <em>casa sa, opera sa</em>. <b>să</b> = conjuncție, înaintea verbului: <em>să plece</em>.', 'Încearcă „s-au”: dacă merge (<em>s-au întâmplat</em>), scrii <b>s-a</b>.'],
    ['s-au / sau', '<b>s-au</b> = verb: <em>s-au certat</em>. <b>sau</b> = conjuncție: <em>roman sau nuvelă</em>.', 'Dacă poți înlocui cu „ori”, e <b>sau</b>.'],
    ['i-a / ia', '<b>i-a</b> = pronume + verb: <em>i-a spus</em>. <b>ia</b> = verbul „a lua”: <em>ia cartea</em>.', 'Pune „i-au”: dacă merge, scrii <b>i-a</b>.'],
    ['l-a / la', '<b>l-a</b> = pronume + verb: <em>l-a văzut</em>. <b>la</b> = prepoziție: <em>la școală</em>.', ''],
    ['v-a / va', '<b>v-a</b> = vă + a: <em>v-a spus</em>. <b>va</b> = viitor: <em>va pleca</em>.', ''],
    ['ne-a / nea', '<b>ne-a</b> = ne + a: <em>ne-a arătat</em>. <b>nea</b> = zăpadă (poetic) sau „nene”.', ''],
    ['niciun / nici un', '<b>niciun, nicio</b> se scriu legat ca adjective sau pronume negative: <em>niciun om, nicio idee</em>. Separat doar când „un / o” e numeral, în opoziție: <em>nici o carte, nici două</em>.', ''],
    ['odată / o dată', '<b>odată</b> = cândva, deodată: <em>A fost odată…</em>. <b>o dată</b> = numeral, o singură dată: <em>o dată sau de două ori</em>.', 'Dacă poți spune „de două ori”, scrii <b>o dată</b>.'],
    ['numai / nu mai', '<b>numai</b> = doar. <b>nu mai</b> = negația lui „mai”: <em>nu mai vine</em>.', ''],
    ['deloc / de loc', '<b>deloc</b> = nicidecum. <b>de loc</b> = de origine: <em>e de loc din Humulești</em>.', ''],
    ['decât / de cât', '<b>decât</b> = doar (cu negație) sau comparativ: <em>nu are decât…, mai mare decât</em>. <b>de cât</b> = prepoziție + pronume: <em>de cât timp?</em>', ''],
    ['într-o, dintr-un, printr-o', 'Se scriu cu <b>î</b> și cu <b>cratimă</b>: <em>într-o zi, dintr-un text, printr-o metaforă</em>.', ''],
    ['de asemenea', 'Se scrie în trei cuvinte. „Deasemenea” e greșit.', ''],
    ['copiii, membrii, fiii', 'Forma articulată de plural are un <b>i</b> în plus: <em>copii → copiii, membri → membrii, fii → fiii</em>.', 'Încearcă cu alt substantiv: „elevi / elevii”.']
  ];

  const VIRGULA_DA = [
    'după circumstanțialele de la început, când sunt mai lungi: <em>În finalul romanului, Ion moare.</em>',
    'înainte de <b>dar, însă, ci, iar</b>: <em>Ana îl iubește, dar Ion o disprețuiește.</em>',
    'după conectorii de la începutul frazei: <em>În concluzie, … De exemplu, … Așadar, …</em>',
    'în jurul apoziției și al explicațiilor: <em>Ghiță, un cizmar sărac, ia în arendă cârciuma.</em>',
    'în jurul vocativului și al interjecțiilor: <em>„Măi Nică, …”</em>',
    'la enumerații: <em>epitete, comparații și metafore</em> (fără virgulă înainte de „și”)'
  ];
  const VIRGULA_NU = [
    'între subiect și predicat: <em>Personajul principal ~~,~~ este Ion.</em>',
    'între predicat și complementul direct: <em>Autorul prezintă ~~,~~ viața satului.</em>',
    'înainte de <b>că</b> după verbe ca „consider, cred, observ”: <em>Consider ~~,~~ că…</em>',
    'înainte de <b>și</b> simplu: <em>tema ~~,~~ și viziunea</em>',
    'înainte de o atributivă care restrânge sensul: <em>personajul ~~,~~ care evoluează cel mai mult</em>'
  ];

  const MAJ = [
    ['Titlurile', 'Doar primul cuvânt și numele proprii cu majusculă, între ghilimele: <em>„Ultima noapte de dragoste, întâia noapte de război”</em>, <em>„Enigma Otiliei”</em>.'],
    ['Curentele și perioadele', 'Cu literă mică: <em>romantismul, simbolismul, perioada interbelică, epoca marilor clasici</em>.'],
    ['Evenimentele istorice', 'Cu majusculă: <em>Primul Război Mondial</em>.'],
    ['Specia', 'Cu literă mică: <em>basmul cult, nuvela psihologică, romanul realist</em>.']
  ];

  const CITARE = [
    'Citatele se pun între ghilimele românești: <b>„…”</b> (jos la deschidere, sus la închidere). Citat în citat: <b>«…»</b>.',
    'Versurile citate în rând se despart prin <b>bară oblică</b>: <em>„Lacul codrilor albastru / Nuferi galbeni îl încarcă”</em>.',
    'Citatul scurt și exact bate citatul lung. Dacă nu știi exact cuvintele, nu le pune între ghilimele: parafrazează.',
    'Leagă citatul de frază: <em>„…”, replică prin care Ghiță își recunoaște slăbiciunea.</em> Un citat lăsat singur nu demonstrează nimic.'
  ];

  const EVITA = [
    ['Pleonasmul', '<em>a reveni înapoi, a urca sus, prima premieră, cel mai optim, protagonist principal</em>'],
    ['Cacofonia', '<em>că cele</em> → <em>că acele</em>; <em>ca concluzie</em> → <em>drept concluzie</em>; <em>ca când</em> → <em>ca și când</em>'],
    ['Repetiția aceluiași cuvânt', 'Variază: <em>opera, textul, romanul, scrierea</em>; <em>autorul, prozatorul, scriitorul</em>.'],
    ['Registrul colocvial', '<em>chestie, faza e că, super, practic</em> (ca umplutură), <em>gen</em>. Scrie neutru, de eseu.'],
    ['Persoana I peste tot', 'În eseu și la Subiectul II, preferă formulările impersonale: <em>se observă, reiese, putem afirma</em>.']
  ];

  S.page({
    id: 'redactare', title: 'Redactare și ortografie',
    nav: { label: 'Redactare și ortografie', color: C, badge: 'Aa' },
    render() {
      return `
      <div class="page-head">
        <div class="kicker">Toate subiectele · <span class="chip c5">32 de puncte de formă</span></div>
        <h1>Redactarea: punctele pe care le pierzi fără să știi</h1>
        <p class="lead">Ortografia, punctuația, limba literară, numărul de cuvinte și așezarea în pagină se punctează la fiecare subiect. Programa cere respectarea normelor DOOM, iar evaluatorii numără greșelile.</p>
      </div>

      <h2>Cât valorează forma la fiecare subiect</h2>
      <div class="tbl-wrap"><table>
        <tr><th>Subiect</th><th>Ce se punctează</th><th>Toleranța</th><th class="num">Puncte</th></tr>
        <tr><td><b>I.A</b></td><td>la fiecare cerință: enunțul (1 p) și exprimarea, ortografia, punctuația (1 p); la cerința 5, numărul de cuvinte în loc de enunț</td><td>se acordă chiar dacă răspunsul nu e corect</td><td class="num">10</td></tr>
        <tr><td><b>I.B</b></td><td>conectori (2), limba literară (1), ortografie și punctuație (1), așezare în pagină (1), minimum 150 de cuvinte (1)</td><td>0–1 greșeli de ortografie <em>și</em> punctuație, în total</td><td class="num">6</td></tr>
        <tr><td><b>II</b></td><td>limba literară (1), logica ideilor (1), ortografie (1), punctuație (1)</td><td>0–1 greșeli pentru fiecare</td><td class="num">4</td></tr>
        <tr><td><b>III</b></td><td>părțile eseului (1), logica (1), analiză și argumentare (3), limba literară (2), ortografie (2), punctuație (2), așezare (1)</td><td>0–1 greșeli: 2 p · 2 greșeli: 1 p · 3+: 0 p</td><td class="num">12</td></tr>
      </table></div>
      ${S.callout('key', '<p>La II și III, punctele de redactare se dau doar dacă textul are numărul minim de cuvinte (50, respectiv 400) și dezvoltă subiectul. Un eseu de 380 de cuvinte pierde toate cele 12 puncte, chiar dacă e fără greșeli.</p>')}

      <h2>Perechile care produc cele mai multe greșeli</h2>
      ${PERECHI.map(([t, d, trick]) => S.acc(t, `<p>${d}</p>${trick ? `<p class="small" style="margin:0"><span class="chip ok">truc</span> ${trick}</p>` : ''}`)).join('')}

      <h2>Virgula</h2>
      <div class="grid g2">
        <div class="card tight" style="border-top:3px solid var(--ok)"><h4>Pui virgulă</h4><ul class="small" style="margin:0">${VIRGULA_DA.map((x) => `<li>${x}</li>`).join('')}</ul></div>
        <div class="card tight" style="border-top:3px solid var(--bad)"><h4>Nu pui virgulă</h4><ul class="small" style="margin:0">${VIRGULA_NU.map((x) => `<li>${x.replace(/~~(.+?)~~/g, '<s style="color:var(--bad);font-weight:700">$1</s>')}</li>`).join('')}</ul></div>
      </div>
      ${S.callout('tip', '<p>Când nu ești sigur de o virgulă, rescrie fraza mai scurt. Două propoziții simple nu pot fi greșite la punctuație.</p>')}

      <h2>Majuscule</h2>
      <div class="tbl-wrap"><table>${MAJ.map(([a, b]) => `<tr><td style="width:180px"><b>${a}</b></td><td>${b}</td></tr>`).join('')}</table></div>

      <h2>Citarea</h2>
      <ul>${CITARE.map((c) => `<li>${c}</li>`).join('')}</ul>

      <h2>Ce eviți în exprimare</h2>
      <div class="tbl-wrap"><table>${EVITA.map(([a, b]) => `<tr><td style="width:200px"><b>${a}</b></td><td>${b}</td></tr>`).join('')}</table></div>

      <h2>Cum numeri 400 de cuvinte fără să pierzi timp</h2>
      <ol class="steps">
        <li>Numără cuvintele de pe <b>trei rânduri</b> scrise de tine și fă media (de obicei 8–11 cuvinte pe rând).</li>
        <li>Împarte 400 la medie: la 9 cuvinte pe rând îți trebuie cam <b>45 de rânduri</b>. Notează-ți numărul pe ciornă.</li>
        <li>Țintește cu <b>20–25% peste</b>: dacă rândurile tale sunt mai scurte decât crezi, tot treci de 400.</li>
      </ol>

      <h2>Așezarea în pagină</h2>
      <ul>
        <li>Alineat la începutul fiecărui paragraf și paragrafe clar separate.</li>
        <li>Scris lizibil, fără să înghesui rândurile. Greșeala o tai cu o singură linie, curat.</li>
        <li>Fiecare subiect începe cu numărul lui (<em>Subiectul I, A, 1.</em>), ca evaluatorul să găsească imediat răspunsul.</li>
      </ul>

      <h2>Lista de recitire</h2>
      ${S.checklist('red', [
        'Diacritice peste tot: ă, â, î, ș, ț.',
        's-a / sa, s-au / sau, i-a / ia: am verificat fiecare apariție.',
        'niciun, nicio legat; într-o, dintr-un cu cratimă.',
        'Nicio virgulă între subiect și predicat.',
        'Virgulă înainte de „dar”, „însă”, „iar”.',
        'Titlurile operelor între ghilimele, cu literă mare doar la primul cuvânt.',
        'Citatele exacte, între „…”.',
        'Am numărat rândurile la II și III: sunt peste minim.'
      ])}
      `;
    }
  });
})();
