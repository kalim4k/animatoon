# Toon Family Studio

Skill pour Claude qui crée des shorts verticaux d'animation 3D familiale (bébé, papa, maman) : script minuté, character sheets, keyframes, puis prompts d'animation pour **MiniMax H3 (Hailuo 3)** et **Seedance 2.5**.

## Contenu

| Fichier | Rôle |
|---|---|
| `index.html` | Site vitrine pour les abonnés (mode d'emploi, formats, exemple) |
| `skill.md` | Le skill lui-même : c'est ce fichier que Claude lit via le lien |
| `toon-family-shorts.zip` | Le même skill au format Skill Claude (à importer dans Claude) |
| `llms.txt` | Pointeur pour les IA qui arrivent sur le site |
| `vercel.json` | En-têtes (Markdown en UTF-8) et raccourci `/skill` → `/skill.md` |
| `scripts/build-zip.ps1` | Régénère le .zip après une modification de `skill.md` |
| `scripts/sync-example.js` | Recopie les prompts de l'exemple (section 12 de `skill.md`) dans les onglets du site |

## Modifier le skill

1. Modifie `skill.md`.
2. Recopie l'exemple sur le site : `node scripts/sync-example.js`
3. Régénère le zip : `powershell -ExecutionPolicy Bypass -File scripts\build-zip.ps1`
4. Commit et push : Vercel redéploie automatiquement.

## Déploiement

- Dépôt : https://github.com/kalim4k/animatoon (branche `main`)
- Vercel : projet importé depuis ce dépôt, preset **Other**, sans build command ni output directory. Chaque push sur `main` redéploie le site.

Le lien à donner aux abonnés : `https://<ton-projet>.vercel.app/skill.md`
(La page d'accueil affiche automatiquement la bonne phrase à copier avec ton domaine.)
