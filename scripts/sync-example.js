// Regenerates the example tabs of index.html (storyboard pages, H3, Seedance) from section 12 of skill.md,
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
    hint('🖼️ P1 · plans 1–3 · format 16:9 · joindre : 01_LINA, 02_MOM', true) + code('**Planche P1') +
    hint('🖼️ P2 · plans 4–6 · format 16:9 · joindre : 01_LINA, 02_MOM, 03_DAD, P1') + code('**Planche P2') +
    hint('🖼️ P3 · plans 7–9 · format 16:9 · joindre : 01_LINA, 02_MOM, 03_DAD, P2') + code('**Planche P3') +
    note('Chaque planche reçoit les fiches des personnages présents et la planche précédente, pour garder le même décor, la même lumière et les mêmes looks.'),
  't-h3':
    hint('🎬 MiniMax H3 · une seule génération · 15 s · mode Référence · audio activé · joindre : 01_LINA, 02_MOM, 03_DAD, P1, P2, P3 (6 images)', true) + code('**Prompt vidéo — MiniMax H3'),
  't-sd':
    hint('🎬 Seedance 2.5 · une seule génération · 15 s · mode Référence (tout-en-un) · audio activé · joindre : 01_LINA, 02_MOM, 03_DAD, P1, P2, P3 (6 images)', true) + code('**Prompt vidéo — Seedance 2.5')
};

for (const [id, inner] of Object.entries(panels)) {
  const re = new RegExp(`(<div class="tabpanel" id="${id}" role="tabpanel">\\n)[\\s\\S]*?(\\n    </div>\\n)`);
  if (!re.test(html)) throw new Error('panel not found in index.html: ' + id);
  html = html.replace(re, (_, open, close) => open + inner.replace(/\n$/, '') + close);
}
fs.writeFileSync(htmlPath, html);
console.log('index.html: example tabs synced from skill.md');
