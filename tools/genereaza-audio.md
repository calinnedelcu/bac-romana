# Audio pentru eseurile de la clasă

Vocea: Piper, `ro_RO-mihai-medium` (date CC0, depozit MIT), rulată local. Câte un fișier pe paragraf:
`assets/audio/<eseu>/<R1-1>.mp3`, plus duratele în `assets/js/data/audio.js`.

Dacă schimbi textul unui eseu în `assets/js/data/eseuri.js`, regenerează audio:

```bash
uv venv --python 3.11 venv-piper && VIRTUAL_ENV=venv-piper uv pip install piper-tts
curl -LO https://huggingface.co/rhasspy/piper-voices/resolve/main/ro/ro_RO/mihai/medium/ro_RO-mihai-medium.onnx
curl -LO https://huggingface.co/rhasspy/piper-voices/resolve/main/ro/ro_RO/mihai/medium/ro_RO-mihai-medium.onnx.json
node tools/text-audio.js > lista.json   # textul pregătit: numere, inițiale, nume străine
```

Apoi, pentru fiecare element din `lista.json`, `PiperVoice.load(model, espeak_data_dir="espeak-ng-data").synthesize_wav(text, wav)`,
rulat din folderul pachetului `piper` (calea absolută spre `espeak-ng-data` e prea lungă pentru espeak-ng și cade pe o cale greșită),
și conversia: `ffmpeg -i x.wav -af loudnorm=I=-16:TP=-1.5:LRA=11 -ar 22050 -ac 1 -c:a libmp3lame -b:a 48k x.mp3`.

La final, regenerează `assets/js/data/audio.js` (durata fiecărui fișier, cu `ffprobe`) și crește `?v=` din `index.html`.
Dacă un cuvânt e citit greșit, adaugă o regulă în `tools/text-audio.js` (RULES).
