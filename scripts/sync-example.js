// Regenerates the example tabs of index.html (keyframes, H3, Seedance) from section 12 of skill.md,
// so the prompts shown on the site are always identical to the skill.
//   node scripts/sync-example.js
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const skill = fs.readFileSync(path.join(root, 'skill.md'), 'utf8');
const htmlPath = path.join(root, 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');

const example = skill.slice(skill.indexOf('## 12. Exemple complet'));
function block(marker) {
  const i = example.indexOf(marker);
  if (i < 0) throw new Error('marker not found in skill.md: ' + marker);
  const start = example.indexOf('```text\n', i) + '```text\n'.length;
  return example.slice(start, example.indexOf('\n```', start));
}
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const code = marker => `      <div class="code"><button class="copy" data-copy-code>Copier</button><pre>${esc(block(marker))}</pre></div>\n`;
const hint = (text, first) => `      <p class="hint"${first ? '' : ' style="margin-top:22px"'}>${text}</p>\n`;
const note = text => `      <p class="muted" style="margin-top:12px;font-size:.92rem">${text}</p>\n`;

const panels = {
  't-board':
    hint('🖼️ K1 · format 9:16 · joindre : 01_LINA', true) + code('**Keyframe K1') +
    hint('🖼️ K4 · format 9:16 · joindre : 02_MOM, K2') + code('**Keyframe K4') +
    note("K2, K3 et K5 à K9 suivent la même structure. Chaque keyframe reçoit seulement les fiches des personnages présents dans le plan, plus la keyframe précédente pour garder le même décor et la même lumière."),
  't-h3':
    hint('🎬 MiniMax H3 · partie A · plans 1–5 · 7 s · mode Référence · audio activé · joindre : 01_LINA, 02_MOM, 03_DAD, K1 à K5', true) + code('**Prompt vidéo — MiniMax H3, partie A') +
    hint('🎬 MiniMax H3 · partie B · plans 6–9 · 8 s · mode Référence · audio activé · joindre : 01_LINA, 02_MOM, 03_DAD, K6 à K9') + code('**Prompt vidéo — MiniMax H3, partie B') +
    note('H3 accepte 9 images au maximum : avec une keyframe par plan, la vidéo se fait en deux parties, recollées au montage (B après A).'),
  't-sd':
    hint('🎬 Seedance 2.5 · 1 génération · 15 s · mode Référence (tout-en-un) · audio activé · joindre : 01_LINA, 02_MOM, 03_DAD, K1 à K9 (12 images)', true) + code('**Prompt vidéo — Seedance 2.5')
};

for (const [id, inner] of Object.entries(panels)) {
  const re = new RegExp(`(<div class="tabpanel" id="${id}" role="tabpanel">\\n)[\\s\\S]*?(\\n    </div>\\n)`);
  if (!re.test(html)) throw new Error('panel not found in index.html: ' + id);
  html = html.replace(re, (_, open, close) => open + inner.replace(/\n$/, '') + close);
}
fs.writeFileSync(htmlPath, html);
console.log('index.html: example tabs synced from skill.md');
