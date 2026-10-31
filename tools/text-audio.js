// Textul eseurilor pregătit pentru vocea sintetică (Piper, ro_RO-mihai-medium):
// numere și inițiale scrise în litere, versuri legate cu virgulă, nume străine scrise cum se pronunță.
// Folosire: node tools/text-audio.js > lista.json   (vezi tools/genereaza-audio.md)
global.window = global;
require('../assets/js/data/eseuri.js');

const RULES = [
  [/\bG\. Bacovia/g, 'George Bacovia'],
  [/\bI\. L\. Caragiale/g, 'Ion Luca Caragiale'],
  [/\bT\. Vianu/g, 'Tudor Vianu'],
  [/\b1883\b/g, 'o mie opt sute optzeci și trei'],
  [/\b1916\b/g, 'o mie nouă sute șaisprezece'],
  [/\b10 silabe/g, 'zece silabe'],
  [/\ba II-a\b/g, 'a doua'],
  [/\bb, p, m, n, s, ș, t, ț\b/g, 'be, pe, me, ne, se, șe, te, țe'],
  [/schopenhaueriană/g, 'șopenhaueriană'],
  [/Hyperion/g, 'Hiperion'],
  [/Paul Verlaine/g, 'Pol Verlen'],
  [/Richard Kunisch/g, 'Rihard Kuniș'],
  [/\bspleen\b/g, 'splin'],
  [/\s*\/\s*/g, ', '],
  [/\s+–\s+/g, ', '],
  [/[«»]/g, ''],
  [/\{\{|\}\}|\*/g, '']
];
const say = (t) => RULES.reduce((s, [a, b]) => s.replace(a, b), t);

const out = [];
for (const [id, e] of Object.entries(window.ESEURI)) {
  e.repere.forEach((r) => r.p.forEach((p, i) => out.push({ id, k: `${r.r}-${i + 1}`, text: say(p) })));
}
process.stdout.write(JSON.stringify(out, null, 1));
