# Toon Family Studio

Skill pour Claude qui crée des shorts verticaux d'animation 3D familiale (bébé, papa, maman) : script minuté, character sheets, storyboard, puis prompts d'animation pour **MiniMax H3 (Hailuo 3)** et **Seedance 2.5**.

## Contenu

| Fichier | Rôle |
|---|---|
| `index.html` | Site vitrine pour les abonnés (mode d'emploi, formats, exemple) |
| `skill.md` | Le skill lui-même : c'est ce fichier que Claude lit via le lien |
| `toon-family-shorts.zip` | Le même skill au format Skill Claude (à importer dans Claude) |
| `llms.txt` | Pointeur pour les IA qui arrivent sur le site |
| `vercel.json` | En-têtes (Markdown en UTF-8) et raccourci `/skill` → `/skill.md` |
| `scripts/build-zip.ps1` | Régénère le .zip après une modification de `skill.md` |

## Modifier le skill

1. Modifie `skill.md`.
2. Régénère le zip : `powershell -ExecutionPolicy Bypass -File scripts\build-zip.ps1`
3. Commit et push : Vercel redéploie automatiquement.

## Déployer

### 1. GitHub
Crée un dépôt vide sur https://github.com/new (nom conseillé : `toon-family-skill`, sans README), puis :

```bash
git remote add origin https://github.com/<ton-compte>/toon-family-skill.git
git branch -M main
git push -u origin main
```

### 2. Vercel
1. https://vercel.com/new → **Import Git Repository** → choisis `toon-family-skill`.
2. Framework Preset : **Other**. Pas de build command, pas d'output directory.
3. **Deploy**.

Le lien à donner à tes abonnés : `https://<ton-projet>.vercel.app/skill.md`
(La page d'accueil affiche automatiquement la bonne phrase à copier avec ton domaine.)
