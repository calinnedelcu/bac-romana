#!/usr/bin/env node
/* Verifică fișele de operă: câmpuri obligatorii, diacritice cu virgulă, ghilimele închise.
   Rulare: node tools/verifica-fise.js */
'use strict';
const fs = require('fs');
const path = require('path');

global.window = global;
const dir = path.join(__dirname, '..', 'assets', 'js', 'data');
for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.js')).sort()) {
  require(path.join(dir, f));
}
const OPERE = global.window.OPERE || [];
let errors = 0, warns = 0;
const err = (o, m) => { errors++; console.log(`✕ ${o}: ${m}`); };
const warn = (o, m) => { warns++; console.log(`~ ${o}: ${m}`); };

function walk(v, at, fn) {
  if (typeof v === 'string') fn(v, at);
  else if (Array.isArray(v)) v.forEach((x, i) => walk(x, `${at}[${i}]`, fn));
  else if (v && typeof v === 'object') Object.entries(v).forEach(([k, x]) => { if (k !== '_surse') walk(x, `${at}.${k}`, fn); });
}

const ids = new Set();
for (const o of OPERE) {
  const n = o.id || '(fără id)';
  if (ids.has(o.id)) err(n, 'id duplicat');
  ids.add(o.id);
  for (const k of ['titlu', 'autor', 'gen', 'specie', 'incadrare', 'tema', 'secvente', 'elemente', 'introducere', 'incheiere', 'citate']) {
    if (!o[k] || (Array.isArray(o[k]) && !o[k].length)) err(n, `lipsește „${k}”`);
  }
  if (!['epic', 'liric', 'dramatic'].includes(o.gen)) err(n, `gen necunoscut: ${o.gen}`);
  const inc = o.incadrare || {};
  if (!inc.eticheta) err(n, 'incadrare.eticheta lipsește');
  if (!inc.trasaturi || inc.trasaturi.length < 2) err(n, 'cel puțin 2 trăsături la încadrare');
  (inc.trasaturi || []).forEach((t, i) => { if (!t.nume || !t.dovada) err(n, `trăsătura ${i + 1} incompletă`); });
  if ((o.secvente || []).length < 2) err(n, 'cel puțin 2 secvențe');
  (o.secvente || []).forEach((s, i) => { if (!s.titlu || !s.comentariu) err(n, `secvența ${i + 1} incompletă`); });
  if ((o.elemente || []).length < 2) err(n, 'cel puțin 2 elemente');
  (o.elemente || []).forEach((e, i) => { if (!e.nume || !e.analiza || !e.relevanta) err(n, `elementul ${i + 1} incomplet`); });
  if (o.gen !== 'liric') {
    if (!o.personaje || !o.personaje.length) warn(n, 'fără personaje');
    (o.personaje || []).forEach((p) => {
      if (!p.statut || !p.statut.social || !p.statut.psihologic || !p.statut.moral) err(n, `${p.nume}: statut incomplet`);
      if (!p.trasaturi || !p.trasaturi.length) err(n, `${p.nume}: fără trăsături`);
      (p.trasaturi || []).forEach((t) => { if (!t.episoade || t.episoade.length < 2) err(n, `${p.nume}: trăsătura „${t.trasatura}” are sub 2 episoade`); });
      if (!p.constructie || p.constructie.length < 2) err(n, `${p.nume}: sub 2 elemente de construcție`);
    });
    (o.relatii || []).forEach((r) => {
      if (!r.intre || r.intre.length !== 2) err(n, 'relație fără două personaje');
      if (!r.scene || r.scene.length < 2) err(n, `relația ${r.intre}: sub 2 scene`);
      if (!r.elemente || r.elemente.length < 2) err(n, `relația ${r.intre}: sub 2 elemente`);
    });
  }
  walk(o, n, (s, at) => {
    if (/[şţŞŢ]/.test(s)) err(n, `diacritice cu sedilă în ${at}`);
    const open = (s.match(/„/g) || []).length, close = (s.match(/”/g) || []).length;
    if (open !== close) warn(n, `ghilimele neîmperecheate în ${at}`);
    if (/"/.test(s)) warn(n, `ghilimele drepte în ${at}`);
    if (/<[a-z]/i.test(s)) err(n, `HTML în ${at}`);
  });
}
console.log(`\n${OPERE.length} fișe · ${errors} erori · ${warns} avertismente`);
console.log(OPERE.map((o) => `${o.id} (${o.gen})`).join(', '));
process.exit(errors ? 1 : 0);
