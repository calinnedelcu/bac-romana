# Bac la română, profil real

Site static (HTML, CSS, JavaScript simplu, fără build) cu tot ce cere proba scrisă E.a) la limba și literatura română pentru profilul real: structura probei, baremele oficiale rând cu rând, formule de răspuns, exemple de punctaj maxim, fișe pentru operele autorilor canonici și un constructor de eseu.

Se deschide direct `index.html` în browser. Pentru verificare locală:

```bash
python3 -m http.server 8765
```

## Structura

- `index.html`: scheletul paginii (bara laterală, zona de conținut) și ordinea scripturilor.
- `assets/css/style.css`: tot stilul, cu temă luminoasă și întunecată.
- `assets/js/app.js`: rutare pe hash (`#/s1a`, `#/opera/ion`), navigare și componente comune: bara de punctaj (`Site.pbar`), cardul de cerință (`Site.req`), răspunsul adnotat (`Site.ans`), corectarea ca evaluatorul (`Site.grader`), quiz, liste de verificare, tab-uri.
- `assets/js/pages/*.js`: câte un fișier pe pagină (start, I.A, I.B, II, III, fișe, constructor, exersare, redactare, ziua examenului).
- `assets/js/data/opere-*.js`: fișele de operă, în formatul descris în `tools/SCHEMA-OPERE.md`.
- `tools/verifica-fise.js`: verifică fișele (câmpuri obligatorii, diacritice, ghilimele).

## Surse folosite

- Programa: anexa 2 la OMEN 4.923/2013 (la care trimite ordinul pentru Bac 2027, Monitorul Oficial nr. 758/7.IX.2026).
- Baremele și subiectele oficiale pentru profilul real, 2020–2026 (sesiuni, modele, simulări).
- Calendarul: anexele 1 și 2 la ordinul pentru Bac 2027.

Progresul (fișe știute, liste bifate, texte scrise, calculatorul) se salvează doar în browser (`localStorage`).
