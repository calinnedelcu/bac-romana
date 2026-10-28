/* Ziua examenului: reguli din sală, ordinea de lucru, ce faci când te blochezi. */
(function () {
  const S = window.Site;

  S.page({
    id: 'examen', title: 'Ziua examenului',
    nav: { label: 'Ziua examenului', color: 'var(--c1)', badge: '✓' },
    render() {
      return `
      <div class="page-head">
        <div class="kicker">Luni, 14 iunie 2027</div>
        <h1>Ziua examenului</h1>
        <p class="lead">Regulile din sală care îți pot costa lucrarea, o ordine de lucru care păstrează timp pentru eseu și ce faci când un text nu-ți spune nimic.</p>
      </div>

      <h2>Regulile din sală</h2>
      <ul class="steps">
        <li><strong>Scrii doar cu albastru.</strong> Metodologia cere cerneală sau pastă de culoare albastră pentru lucrare. Ia două pixuri.</li>
        <li><strong>Ciorna nu se corectează.</strong> Tot ce rămâne doar pe ciornă sau pe foaia cu subiecte nu se ia în considerare. Lasă-ți timp să treci totul pe foaia de examen.</li>
        <li><strong>Greșelile se taie cu o linie orizontală.</strong> Fără pastă corectoare și fără radieră. Tai curat, cu o linie pe fiecare rând, și continui.</li>
        <li><strong>Ai trei ore de lucru efectiv</strong>, socotite de la primirea subiectelor. În ultimii ani subiectele s-au distribuit la ora 9:00, iar candidații erau așteptați în centru mai devreme. Verifică ora exactă în ghidul anului.</li>
      </ul>

      <h2>O ordine de lucru care funcționează</h2>
      <ol class="steps">
        <li><strong>5 minute: citește tot subiectul.</strong> Vezi ce operă cere eseul și ce cerință are Subiectul II. Alege din prima opera pentru eseu.</li>
        <li><strong>Planul eseului pe ciornă (10 min).</strong> Doar cuvinte-cheie: curentul + două trăsături, tema + două secvențe, două elemente. Nu scrie eseul pe ciornă: nu ai timp să-l copiezi.</li>
        <li><strong>Eseul direct pe foaie (60–70 min).</strong> Ai planul, scrii fluent. Numeri rândurile la final.</li>
        <li><strong>Subiectul I.A (20–25 min).</strong> Enunțuri complete, formula de răspuns, citatele exacte.</li>
        <li><strong>Subiectul I.B (25–30 min).</strong> Patru paragrafe, opinie din prima frază.</li>
        <li><strong>Subiectul II (15–20 min).</strong> Fraza-teză, două citate comentate, frază de efect.</li>
        <li><strong>Recitire (15–20 min).</strong> Doar ortografie și punctuație, cu lista de pe pagina de redactare.</li>
      </ol>
      <p class="small muted">Ordinea e o propunere. Dacă preferi să începi cu I.A, ca încălzire, păstrează totuși cel puțin 80 de minute pentru eseu.</p>

      <h2>Când te blochezi</h2>
      ${S.acc('Nu recunosc fragmentul de la Subiectul II', '<p>Nici nu trebuie: e „la prima vedere”. Cerința îți spune exact ce cauți (perspectiva, notațiile, ideea poetică). Aplici rețeta: fraza-teză cu termenul din cerință, două citate din fragment explicate, o frază de efect. Pentru fiecare afirmație, un citat.</p>')}
      ${S.acc('Eseul cere o operă pe care n-am învățat-o', '<p>Citește din nou cerința: de multe ori numește un autor <em>sau</em> o specie („o nuvelă studiată”, „un text dramatic studiat”), deci poți alege orice text studiat care se potrivește. Dacă e numit un singur autor, scrie despre textul lui pe care îl știi cel mai bine. Structura pe repere rămâne aceeași, iar redactarea (12 p) o iei oricum dacă treci de 400 de cuvinte și rămâi pe subiect.</p>')}
      ${S.acc('Nu știu răspunsul la o cerință de la I.A', '<p>Scrie un enunț complet, pe subiect, cu ce ți se pare cel mai aproape de text. Punctul pentru enunț și cel pentru exprimare se acordă chiar dacă răspunsul nu e corect, iar un spațiu gol ia 0.</p>')}
      ${S.acc('Rămân fără timp', '<p>Prioritatea e numărul minim de cuvinte la eseu (fără el pierzi 12 p de redactare) și o încheiere scurtă, de o frază. Apoi răspunsuri scurte, dar în enunț, la I.A. Un text argumentativ de 150 de cuvinte, cu opinie, două argumente și concluzie, se scrie în 15 minute.</p>')}
      ${S.acc('Nu-mi amintesc un citat exact', '<p>Nu-l pune între ghilimele. Parafrazează: <em>„în scena în care Ghiță îi cere iertare Anei…”</em>. Un citat inventat sau deformat face mai mult rău decât o referire precisă la scenă.</p>')}

      <h2>Ce iei cu tine</h2>
      ${S.checklist('zi', [
        'Actul de identitate.',
        'Două-trei pixuri albastre care scriu bine.',
        'Un ceas fără funcții inteligente, dacă sala nu are unul vizibil (verifică regulile anului).',
        'Apă.',
        'Planul de timp din cap: eseul are cel puțin 70–80 de minute.'
      ])}
      ${S.callout('trap', '<p>Telefoanele, ceasurile inteligente și orice dispozitiv de comunicare sunt interzise în sală și duc la eliminare. Le predai înainte de începerea probei, după regulile centrului.</p>')}
      `;
    }
  });
})();
