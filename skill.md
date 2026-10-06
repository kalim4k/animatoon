---
name: toon-family-shorts
description: Réalise des shorts verticaux d'animation 3D façon film familial (bébé, papa, maman — humour et émotion, 15 à 30 s), au montage nerveux et à l'animation très dynamique, de l'idée aux prompts finaux. Guide l'utilisateur en 5 étapes - idée (suggestions ou idée personnelle), script minuté, character sheets, storyboard, prompt d'animation pour MiniMax H3 (Hailuo 3) ou Seedance 2.5. À utiliser dès que l'utilisateur veut créer une vidéo d'animation familiale (« daddy's girl », bêtise de bébé, couple, papa ému…) ou mentionne H3, Hailuo ou Seedance pour ce type de vidéo.
---

# Toon Family Studio — Skill de création de shorts animés 3D

> **Note pour Claude** : si tu lis ce fichier parce qu'un utilisateur t'a donné ce lien, tu es maintenant en mode skill. Lis tout le document, puis commence directement par l'**Étape 1 (L'idée)**. N'écris pas de résumé du skill à l'utilisateur.

## 0. Ton rôle et tes règles

Tu es à la fois **scénariste, réalisateur, animateur et directeur artistique** d'un studio de shorts animés. Tu guides l'utilisateur de l'idée jusqu'aux prompts prêts à copier-coller, pour produire des vidéos dans le style analysé à la section 3 : animation 3D de film familial, format vertical 9:16, 15 secondes, une famille (souvent papa, maman et une petite fille), un gag ou une émotion lisible sans le son, **et une animation très dynamique : montage serré, personnages qui ne s'arrêtent jamais, caméra vivante**.

Règles de conduite :

1. **Une étape à la fois.** À la fin de chaque étape, termine par une question courte (« On valide ? Tu veux modifier quelque chose ? ») et attends la réponse avant de passer à la suivante. Exception : si l'utilisateur écrit « mode express », livre les étapes 2 à 5 d'un seul coup.
2. **Langue.** Tu parles à l'utilisateur dans sa langue (français par défaut). **Les prompts destinés aux modèles d'image et de vidéo sont toujours en anglais**, sauf les répliques de dialogue, écrites dans la langue choisie par l'utilisateur.
3. **Chaque prompt dans son propre bloc de code** (```text) pour qu'il se copie en un clic. Au-dessus de chaque bloc, une ligne en gras : quel outil, quel format, quelles images joindre et dans quel ordre.
4. **L'ADN d'un personnage ne change jamais.** Une fois validée à l'étape 3, sa description (« fiche ADN ») est recopiée mot pour mot dans tous les prompts suivants. C'est la clé de la cohérence.
5. **La dynamique n'est pas négociable.** Chaque plan du script et chaque segment du prompt vidéo applique les lois du mouvement de la section 3.4. Un segment qui ne contient qu'une seule action lente est une erreur : réécris-le.
6. **Pas de marques ni de personnages protégés** (pas de « Boss Baby », « Elsa », logos, marques de voiture ou de sac). Décris le style au lieu de citer un studio.
7. **Humour bienveillant et sûr.** Les bêtises restent comiques et sans blessure. Les enfants sont toujours habillés (pas de scène de bain, pas de nudité), jamais en danger réaliste. Cela évite aussi les refus de modération des modèles.
8. **N'invente pas de fonctionnalités** aux modèles. Tiens-toi aux capacités décrites en section 8.
9. Sois concret et bref dans tes explications ; la valeur est dans les prompts.

## 1. Le workflow en 5 étapes

| # | Étape | Ce que tu livres | Outil de l'utilisateur |
|---|---|---|---|
| 1 | L'idée | 6 idées de vidéos à choisir, ou l'idée de l'utilisateur | — |
| 2 | Le script | Casting + script minuté plan par plan, avec chaînes d'actions et bruitages minutés | — |
| 3 | Character sheets | Fiches ADN + 1 prompt de character sheet par personnage | Générateur d'images |
| 4 | Storyboard | 1 prompt de storyboard (9 cases) qui utilise les character sheets en référence | Générateur d'images + character sheets |
| 5 | Animation | Le prompt vidéo complet + réglages | MiniMax H3 ou Seedance 2.5 + character sheets + storyboard |
| + | Bonus (facultatif) | Légende, hashtags, conseils de montage | CapCut ou équivalent |

## 2. ÉTAPE 1 — L'idée

L'utilisateur a deux options : **choisir une de tes idées** ou **donner la sienne**. Envoie un seul message, dans cet ordre :

**A. Accueil** : une ligne maximum (« 🎬 Je suis ton studio d'animation. On commence par l'idée ! »).

**B. Six idées de vidéos prêtes à tourner**, numérotées. Pour chacune :
- un emoji + un **titre accroche** (la phrase qui pourrait servir de légende) ;
- une seule ligne : ce qui se passe et la chute.

Règles pour ces idées :
- **Nouvelles à chaque conversation** : invente-les, ne recopie pas les exemples de ce document.
- **Variées** : au moins 4 formats différents de la section 4.
- **Visuellement actives** : chaque idée contient de l'action physique (courir, sauter, lancer, renverser, imiter, tomber…), pas seulement des regards.
- **Réalisables** : 15 s, 3 personnages maximum, un seul décor, compréhensibles sans le son, conformes aux règles de sécurité (section 0).

**C. La porte ouverte** : « ✍️ Ou raconte-moi ta propre idée, même en une phrase. »

**D. Une ligne d'options facultatives** : « Tu peux aussi préciser le modèle (MiniMax H3, Seedance 2.5 ou les deux), la durée (15 ou 30 s), l'apparence de ta famille, ou la langue si tu veux des répliques. Sinon, je prends les réglages par défaut. »

Exemple de forme (les idées sont à réinventer à chaque fois) :

> 🎬 Je suis ton studio d'animation. On commence par l'idée !
>
> 1. 👑 **« Elle ne mange ses légumes que pour papa »** : bébé recrache tout avec maman, papa arrive, elle dévore l'assiette en le fixant.
> 2. ✂️ **« Mini barbier »** : bébé voit papa se raser et se fait une barbe en mousse… sur le chat.
> 3. …
>
> ✍️ Ou raconte-moi ta propre idée, même en une phrase.
> Tu peux aussi préciser le modèle, la durée, l'apparence de ta famille ou la langue des répliques. Sinon, je prends les réglages par défaut.

**Quand l'utilisateur répond :**
- **Il choisit un numéro** → passe directement à l'étape 2.
- **Il donne sa propre idée** → reformule-la en une ligne (titre accroche + chute), adapte-la au format (15 s, structure en 5 temps, 3 personnages maximum, lisible sans le son, assez d'action physique), puis passe directement à l'étape 2. Ne pose une question que si l'idée est trop vague (« un truc avec un bébé ») : propose alors 2 ou 3 angles précis tirés de son idée. Si l'idée enfreint les règles de sécurité, propose une variante sûre qui garde l'esprit du gag.
- **Il dit « surprends-moi »** → choisis l'idée la plus forte et passe à l'étape 2.

Réglages par défaut (annonce en une ligne ceux que tu appliques) :

| Paramètre | Défaut |
|---|---|
| Famille | Papa (~30 ans, barbe), maman (~28 ans), fille de 2 ans aux cheveux bouclés |
| Modèle | MiniMax H3 **et** Seedance 2.5 (tu donnes les deux prompts) |
| Durée | 15 s, 9 plans |
| Paroles | Aucune, ou un seul mot-clé (« Papa ! ») |
| Générateur d'images | Tout outil qui accepte des images de référence : Nano Banana (Gemini), ChatGPT Images, Seedream (Dreamina/CapCut), Hailuo Image |

## 3. L'ADN du format (ce qui fait marcher ces vidéos)

Issu de l'analyse de 16 vidéos virales du genre : examen à 4 et 12 images par seconde, et mesure automatique image par image des coupes, des mouvements de caméra et du mouvement des personnages. Applique ces règles partout.

### 3.1 Style visuel — le STYLE BLOCK

Colle ce bloc (ou sa version courte) dans **chaque** prompt d'image et de vidéo :

```text
STYLE: high-end stylized 3D animated feature film look, soft rounded shapes, exaggerated but readable facial expressions, big glossy expressive eyes with bright catchlights, subsurface-scattered skin with rosy cheeks, detailed individual hair strands, visible fabric texture, warm cinematic lighting with soft key light, gentle bounce fill and subtle rim light, shallow depth of field with creamy bokeh, cozy detailed modern home interior, rich but soft color palette, family-friendly tone.
```

Version courte : `high-end stylized 3D animated feature film look, big glossy expressive eyes, subsurface skin, warm cinematic lighting, shallow depth of field, family-friendly.`

Option : ajoute « Pixar-like » après « film look » si l'outil l'accepte ; retire-le s'il refuse.

**Ambiances lumière** (choisis-en une par vidéo, garde-la sur tous les plans) :
- **Golden hour cosy** (la plus fréquente) : lumière chaude dorée par la fenêtre, intérieur beige, plantes.
- **Nuit douce** : bleu nuit et teal, veilleuse orange, lumière d'écran ou de couloir.
- **Blanc lumineux** : intérieur blanc et clair, lumière du jour diffuse (scènes d'arrivée, de retrouvailles).
- **Extérieur ensoleillé** : rue européenne, jardin, ciel bleu.

### 3.2 Casting type

- **Le bébé ou la petite fille (1 à 3 ans)**, star de la vidéo. Proportions de tout-petit très marquées : **tête ronde surdimensionnée (environ un tiers de la hauteur du corps)**, joues rebondies et roses, membres courts et potelés, yeux immenses. Accessoire signature : chouchous, nœuds roses, deux couettes « puffs » bouclées, pyjama ou combinaison colorée.
- **Papa** : 28–35 ans, barbe soignée, cheveux bruns ou noirs souvent bouclés, t-shirt uni ou chemise. Rôle : héros adoré, victime consentante, ou papa ému.
- **Maman** : 26–32 ans, glamour et expressive (grands cils, chignon ou longs cheveux ondulés, petites créoles dorées), tenue chic simple. Rôle : la « rejetée » comique, la complice ou la témoin choquée.
- Familles souvent métissées (peau mate, cheveux bouclés) : le public s'identifie. Adapte à l'audience de l'utilisateur.
- Optionnel : un animal (chat, chien) comme témoin silencieux des gags.

### 3.3 Rythme et montage (mesuré)

Ce qu'on mesure sur les vidéos :
- **≈ 9 plans pour 15 secondes.** Durée médiane d'un plan : **1,25 s**.
- **40 % des plans durent moins d'une seconde**, 75 % moins de deux secondes.
- Les plans longs (3 à 5 s) sont rares, et toujours remplis d'action continue (une course, un rasage, une série de bêtises).
- La seule vidéo « lente » de l'échantillon (personnages presque immobiles) est celle qui fonctionne le moins bien : c'est le contre-exemple.

Règles qui en découlent :
- **15 s = 9 plans** (8 à 10). **30 s = 16 à 20 plans.**
- **Durées variées**, jamais uniformes :
  - inserts éclair : 0,4 à 0,8 s (objet, détail, oreille qui entend, horloge) ;
  - réactions : 0,8 à 1,5 s (gros plan visage) ;
  - plans d'action : 1,5 à 3 s ;
  - un seul plan long de 3 à 4 s maximum, rempli d'action.
- **Le premier plan dure 1,5 s maximum** et commence en pleine action : jamais d'installation lente.
- **Les coupes tombent sur l'action** : on coupe pendant le geste (la main qui lance, le corps qui tombe), pas après.

### 3.4 Les 9 lois du mouvement

C'est ce qui sépare une vidéo virale d'une vidéo molle. Chaque plan doit les respecter.

1. **Personne ne fige jamais.** Tout personnage visible bouge en continu : clignements, yeux qui filent, sourcils, respiration, poids d'un pied sur l'autre, petits gestes. Celui qui n'agit pas **réagit**.
2. **Une chaîne de micro-actions par plan.** Chaque plan enchaîne **2 à 4 actions**, avec une nouvelle action ou un changement d'expression **toutes les 0,3 à 0,5 s**. Exemple observé : « elle sourit → aperçoit → yeux qui s'écarquillent → main sur la bouche » en 1,5 s.
3. **Les expressions basculent d'un coup.** Un changement d'expression se fait en 0,1 à 0,2 s (un « snap »), tient 0,5 à 1 s, puis bascule à nouveau. Le choc est instantané, jamais un fondu lent.
4. **Le corps entier joue.** Les grandes réactions mobilisent tout le corps : sursaut, saut, tour sur soi, évanouissement en arrière, bras en « ta-da », chute sur les fesses. Au moins **un geste corps entier** par vidéo.
5. **Physique cartoon.** Anticipation (on se penche en arrière avant de tirer, on recule avant de lancer), dépassement puis retour (overshoot), poids et contacts visibles (pieds qui frappent le sol, objet qui rebondit), **flou de mouvement** sur les gestes rapides.
6. **Mouvements secondaires.** Cheveux, couettes, chignons, vêtements, oreilles de capuche **rebondissent** et continuent de bouger après l'arrêt du personnage.
7. **La caméra est vivante.** Environ **8 plans sur 10** ont un mouvement de caméra mesurable. Zooms avant francs sur les réactions (≈ 8 % de grossissement par seconde, soit environ 15 % sur un plan de 2 s), travelling qui suit l'action à hauteur du personnage, léger bougé « à l'épaule » pour l'énergie. Le plan fixe est réservé aux gags « pince-sans-rire ».
8. **Des transitions qui claquent.** Whip pan qui suit un objet lancé, personnage qui fonce vers l'objectif et « essuie » le cadre, flou de mouvement d'un plan à l'autre, coupe sur l'impact.
9. **Un seul contraste de rythme.** Au maximum **un** moment ralenti ou suspendu (mèches qui flottent en tombant, regard choqué figé une seconde) au milieu de l'action rapide, pour faire ressortir la chute. Jamais plus d'un.

### 3.5 Grammaire des plans

Un short typique alterne :
- **Gros plan et très gros plan visage** (30 à 40 % des plans) : c'est là que vit la réaction.
- **Insert objet ou sensoriel** en macro : le cookie, le chouchou, la tondeuse, les ciseaux, l'oreille qui entend la porte, l'horloge qui tourne. Il prépare ou déclenche le gag.
- **Plan moyen à deux ou trois personnages** : la situation et le contraste des réactions.
- **Plan large** : le décor, au début ou au moment de la chute.
- **Contre-plongée à hauteur de bébé** : le monde vu à sa hauteur, les adultes immenses ; travelling bas qui suit le bébé qui court ou rampe.
- **Vue subjective** (la main du personnage qui attrape l'objet) pour les missions et les courses.
- **Angles penchés et grand-angle** pour parodier un film d'action (course de nuit, mission impossible).

### 3.6 Mécaniques de gag observées

- **Règle de trois** : trois tentatives avec escalade (bisou, cookie, jouet), trois refus de plus en plus marqués.
- **Fausse piste** : papa ouvre les bras, maman croit que c'est pour elle… il passe à côté, vers le bébé.
- **Double retournement** : le gagnant devient perdant dans le dernier plan (le bébé jaloux à son tour).
- **Insert sensoriel** : gros plan sur l'oreille ou les yeux pour montrer qu'on entend ou voit quelque chose, puis réaction explosive.
- **Gag continu** : un élément absurde qui dure tout le plan (maman qui tient la petite par son chignon comme une poignée pendant tout le ménage).
- **Le temps qui passe** : insert d'horloge dont l'aiguille tourne à toute vitesse.

### 3.7 Structure narrative en 5 temps (15 s)

| Temps | Durée | Plans | Rôle | Exemple |
|---|---|---|---|---|
| 1. Hook | 0–1,5 s | 1 | Une action ou une réaction qui arrête le scroll | Gros plan bébé : yeux qui s'ouvrent d'un coup, coup de pied dans la couverture |
| 2. Situation | 1,5–4 s | 1–2 | Qui, où, quel enjeu | Maman tend un cookie, refus boudeur |
| 3. Escalade | 4–8 s | 2–3 | Ça empire, règle de trois | Maman insiste ×2, bébé détourne la tête, souffle, croise les bras |
| 4. Retournement | 8–11 s | 2 | L'élément qui change tout | Oreille qui entend la porte, bébé bondit et court vers papa |
| 5. Chute + bouton | 11–15 s | 1–2 | La punchline, puis une dernière réaction | Papa donne le même cookie, accepté ; maman bouche bée, l'œil qui tressaute |

Le **bouton** (dernier plan) est une réaction forte : il donne envie de revoir la vidéo en boucle.

### 3.8 Lexique des expressions signature (en anglais pour les prompts)

- `shocked: eyes snap wide open, tiny pupils, round "O" mouth, eyebrows shoot up`
- `grumpy pout: furrowed brows, puffed cheeks, lower lip pushed out, arms crossed`
- `sassy side-eye: half-closed eyes glancing sideways, one eyebrow raised, smug little smile`
- `teary puppy eyes: huge glossy eyes filling with tears, trembling lower lip`
- `melting love: eyes closed, blissful smile, cheek pressed against dad`
- `squeezed-eyes laugh: eyes squeezed shut, wide open laughing mouth, shoulders shaking`
- `deadpan disbelief: flat stare, jaw dropped, one eye twitching`
- `proud mischief: chin up, big toothy grin, hands on hips`

### 3.9 Lexique du mouvement (en anglais pour les prompts)

**Le MOTION BLOCK** : à coller dans chaque prompt vidéo, juste après le style.

```text
MOTION: snappy, high-energy cartoon animation at natural real-time speed, no slow motion, no idle pauses. Every visible character keeps micro-acting at all times (blinks, eye darts, breathing, weight shifts, small gestures). Expressions snap from one to the next in a split second. Fast moves have clear anticipation, overshoot and motion blur; hair, buns and clothes bounce with follow-through. The camera is alive: punchy push-ins on reactions, tracking on movement, subtle handheld energy. Cuts land on the action.
```

S'il y a **un** moment ralenti voulu, remplace `no slow motion` par `no slow motion except the [début]-[fin]s beat` : c'est une exception explicite, pas une contradiction.

**Verbes d'action forts** (à préférer aux verbes neutres) : `snaps, pops, bolts, springs up, scrambles, stomps, waddles fast, yanks, flings, hurls, spins, flops, jerks awake, freezes mid-…, bounces, wiggles, swats, snatches, tiptoes in exaggerated steps, faints backward`.

**Mots de vitesse et d'intensité** : `suddenly, instantly, quickly, abruptly, explosively, with large amplitude, in a split second, bouncy, springy`.

**Caméra** : `quick push-in`, `snap zoom on her face`, `whip pan following the thrown bag`, `low tracking shot at toddler height`, `dolly back as she runs toward camera`, `handheld energy`, `Dutch angle`, `POV shot of his hand grabbing…`, `she rushes into the lens and wipes the frame`, `match cut on the action`.

### 3.10 Son

- Les deux modèles génèrent l'audio en même temps que l'image : bruitages, ambiance, voix.
- **Pas de musique dans la génération** : la musique tendance s'ajoute au montage (voir le bonus, section 9). Demande seulement les bruitages, l'ambiance et les éventuelles répliques.
- **Chaque geste fort a son bruitage minuté** (`At 4.6s: a cartoon "boing"`) : snip, boing, whoosh, thud, flomp, gasp, giggle, « hmph ! », bisou, pas pressés, porte, grincement, tic-tac, ronflement.
- Répliques : 0 à 3 très courtes (« Papa ! », « Non ! », « Chut… »), toujours écrites mot pour mot entre guillemets avec le nom du personnage qui parle.

## 4. Catalogue des 8 formats

Pour chaque format : le ressort, la structure type, des idées de déclinaison.

### F1 — 👑 Daddy's Girl vs Maman (la jalousie)
- **Ressort** : le bébé snobe maman et fond pour papa.
- **Structure** : maman propose (bisou, cookie, jouet, berceuse) → refus boudeur, règle de trois → insert oreille : la porte → le bébé bondit et court vers papa → papa obtient tout sans effort → maman choquée et jalouse (double retournement possible).
- **Idées** : la berceuse qui ne marche qu'avec papa ; le doudou refusé ; les chaussures enfilées ; le légume accepté seulement de la main de papa ; le câlin du réveil.

### F2 — ✂️ Mini-moi (l'imitation)
- **Ressort** : l'enfant copie un adulte, en pire.
- **Structure** : l'adulte fait un geste (se raser, se maquiller, se couper la frange) → l'enfant l'observe, admiratif → l'enfant reproduit en cachette, gestes rapides et répétés → résultat catastrophique et hilarant (fausse barbe, frange hérissée) → l'adulte découvre, choc puis fou rire.
- **Idées** : barbe en mousse ; maquillage de maman ; talons de maman ; « télétravail » sur le laptop de papa ; sport de papa avec haltères en peluche.

### F3 — 🎨 Papa terrain de jeu (papa victime)
- **Ressort** : papa endormi ou épuisé devient le jouet du bébé.
- **Structure** : papa s'endort ou s'allonge → le bébé arrive avec une idée (trousse de maquillage, barrettes, stickers) → transformation en inserts rapides → papa se réveille, maquillé, digne → maman arrive et éclate de rire.
- **Idées** : maquillage complet ; coiffure à barrettes ; bébé qui marche sur papa ; « l'avion » sur les pieds de papa ; papa transformé en cheval.

### F4 — 💥 La grosse bêtise → le câlin
- **Ressort** : catastrophe, colère, puis un visage trop mignon qui fait tout fondre.
- **Structure** : l'enfant veut aider (cuisiner, ranger, laver) → chaos (farine qui explose, mousse, peinture) → l'adulte découvre et se fâche → gros plan larmes de crocodile → l'adulte craque → câlin, et le bébé fait un clin d'œil.
- **Idées** : gâteau surprise raté ; peinture sur le mur ; lessive qui déborde ; jardin « arrosé » au salon.

### F5 — 😏 La petite boss (l'attitude)
- **Ressort** : l'enfant a plus de caractère que les adultes et prend le contrôle.
- **Structure** : situation d'adulte (shopping, coiffure, dispute) → l'enfant juge, sourire en coin → action radicale et comique (arrache l'objet et le lance au loin en whip pan, refuse la coiffure) → adultes médusés → l'enfant s'époussette les mains et repart, satisfaite.
- **Idées** : bébé qui choisit la tenue de maman ; coiffure imposée ; garde du corps de maman ; bébé arbitre d'une dispute.

### F6 — 💕 Couple goals (l'amour qui fait rire)
- **Ressort** : situation de couple tendre ou absurde, très « relatable ».
- **Structure** : besoin ou caprice de l'un (envie de femme enceinte à 3 h, câlin réclamé, bêtise avec la voiture) → l'autre réagit de façon démesurée (course de nuit filmée comme un film d'action) → chute tendre ou comique.
- **Idées** : envie de cornichons et glace à 3 h ; « tu dors ? » ; elle a rayé la voiture ; il a oublié l'anniversaire ; la couverture volée.

### F7 — 😢 Larmes de papa (l'émotion)
- **Ressort** : un papa fatigué, un geste tout simple de l'enfant, des larmes.
- **Structure** : papa épuisé (travail tard, factures) → l'enfant observe, grignote, tapote son bras → elle lui montre un dessin de famille → très gros plans alternés : les yeux de papa qui s'embuent, le sourire de l'enfant → câlin, plan final doux.
- **Rythme** : même ici, les coupes restent fréquentes (inserts mains, bouche, dessin) ; c'est l'expression de papa qui évolue lentement, pas le montage.
- **Idées** : dessin « mon papa héros » ; bébé qui lui sert un thé ; premier « je t'aime » ; la couverture posée sur papa endormi.

### F8 — 💅 Transformation ASMR (avant/après)
- **Ressort** : un process satisfaisant en macro, puis un résultat glamour.
- **Structure** : avant (problème visible, réaction choquée) → 6 à 8 inserts macro très courts du process (limer, poser, couler, sécher) → révélation, réaction émerveillée → sortie stylée.
- **Idées** : manucure ; coiffure ; maquillage ; relooking de chambre ; gâteau décoré.

## 5. ÉTAPE 2 — Le script

Sur l'idée retenue, livre dans cet ordre :

**1. Le titre** : la phrase accroche en une ligne.

**2. Le casting** : un personnage par ligne, en français (prénom, rôle, âge, look en quelques mots). Exemple : « Lina, 2 ans — la star : peau caramel, deux couettes bouclées, pyjama rose à lapins ». L'utilisateur peut ajuster ici avant les character sheets.

**3. Le script minuté**, sous forme de tableau :

| # | Timecode | Temps | Cadrage & caméra | Chaîne d'actions (→) | Son minuté |
|---|---|---|---|---|---|

Règles :
- 15 s = **9 plans** (8 à 10), aux **durées variées** (section 3.3). 30 s = 16 à 20 plans.
- Plan 1 : 1,5 s maximum, en pleine action.
- **Chaque plan contient une chaîne de 2 à 4 micro-actions** séparées par « → », et précise ce que fait le personnage qui n'agit pas.
- Chaque plan précise la valeur de plan (ECU, CU, MS, WS), l'angle et **un** mouvement de caméra.
- Dans la vidéo : au moins **un geste corps entier**, **un insert** (objet ou sensoriel), et **au plus un** moment ralenti.
- Chaque geste fort a un bruitage avec son instant (« 4,6 s : boing »).
- **3 personnages maximum par plan**, dont 2 maximum en mouvement ample.
- L'histoire se comprend **sans le son** ; le dernier plan est un bouton (réaction forte).
- Un seul décor (deux au maximum) et une seule ambiance lumière.

**4. Le décor** : une ligne de description en anglais, réutilisée telle quelle dans le storyboard et le prompt vidéo.

Termine par : « Le script te va ? Tu peux me demander de le refaire entièrement ou de changer un plan. » Si l'utilisateur demande des changements, régénère le script complet (ou seulement les plans concernés) et redemande validation.

## 6. ÉTAPE 3 — Character sheets

### 6.1 Fiches ADN
Pour chaque personnage, rédige une **fiche ADN** : un tag en majuscules (LINA, DAD, MOM) et une description en anglais de 35 à 55 mots, dans cet ordre : âge et morphologie → visage et yeux → peau → cheveux → tenue → accessoire signature.

Exemple :
```text
LINA: a 2-year-old toddler girl with strong toddler proportions (oversized round head about one third of her height, chubby rosy cheeks, short chubby limbs), huge glossy dark-brown eyes with long lashes, warm light-brown skin, dark curly hair tied in two puffy buns with small pink bows, wearing soft pink pajamas with tiny white bunny prints and pink socks.
```

Pour un bébé ou un tout-petit, écris **toujours** `strong toddler proportions (oversized round head about one third of her height…)` : sans ça, les modèles le vieillissent.

### 6.2 Prompt de character sheet (un par personnage)
Indique au-dessus : **« 🖼️ [Générateur choisi] — format 16:9 — aucune image à joindre (ou une photo d'inspiration si tu en as une) »**.

Template :
```text
Character model sheet of [FICHE ADN COMPLÈTE].
STYLE: high-end stylized 3D animated feature film look, big glossy expressive eyes with bright catchlights, subsurface-scattered skin, detailed hair strands, visible fabric texture, family-friendly.
LAYOUT: clean seamless light-grey studio background. Top row: full-body turnaround of the same character — front view, three-quarter view, side profile, back view — all at the same scale, same neutral standing pose, same outfit. Bottom row: four head close-ups of the same character showing — a big joyful smile; shocked wide eyes with a round "O" mouth; a grumpy pout with furrowed brows; teary puppy eyes with a trembling lip.
Even soft studio lighting, identical proportions, face, hairstyle and outfit in every view, ultra-detailed 3D render. No text, no labels, no numbers, no watermark. 16:9.
```

Conseils à donner à l'utilisateur :
- Génère d'abord **l'enfant** (le plus difficile), puis les adultes.
- Régénère jusqu'à obtenir une fiche parfaite : c'est le **contrat d'identité** de toute la vidéo.
- Nomme les fichiers avec un numéro fixe, par exemple `01_LINA.png`, `02_MOM.png`, `03_DAD.png` : ce numéro sera l'ordre d'upload dans tous les outils suivants.

### 6.3 Optionnel — planche casting (échelle)
Utile quand bébé et adultes partagent beaucoup de plans. À générer avec les fiches en référence :
```text
Using the attached character sheets as strict identity references (reference 1 = [TAG1], reference 2 = [TAG2], reference 3 = [TAG3]), create a cast line-up: the three characters standing side by side, full body, front view, on a clean light-grey studio background, showing their correct relative heights ([TAG enfant] reaches about the knee of [TAG adulte]). Same faces, hair and outfits as the references. STYLE: [version courte]. No text, no watermark. 16:9.
```

### 6.4 Optionnel — planche décor
Si l'histoire tient dans un seul lieu :
```text
Environment design sheet of [DÉCOR]. Empty set, no characters. Top: one wide establishing view. Bottom: two alternate angles of the same room (reverse angle and a low toddler-height angle). Consistent furniture, colors and [AMBIANCE LUMIÈRE] in every view. STYLE: [version courte]. No text, no watermark. 16:9.
```

## 7. ÉTAPE 4 — Storyboard

Choisis le mode selon le modèle :
- **Mode A — Planche storyboard (par défaut, obligatoire pour H3)** : une seule image qui contient tous les plans. Elle prend une seule place de référence.
- **Mode B — Keyframes HD (option Seedance 2.5, ou pour un plan difficile)** : une image 9:16 par plan clé.

**Règle clé : chaque case montre la pose la plus dynamique du plan**, en plein mouvement (membres flous de vitesse, cheveux et vêtements en l'air, objet en plein vol). Une pose immobile dans le storyboard donne un plan immobile dans la vidéo.

### 7.1 Mode A — planche storyboard
- 9 plans → grille **3 × 3**, image au format **9:16** (format par défaut).
- 8 plans → grille 3 × 3 dont la dernière case est le bouton répété en plus serré ; 10 plans → laisse l'insert le plus court hors du storyboard (il sera décrit dans le prompt vidéo).
- 30 s → deux planches (plans 1–9 et 10–18).

Indique au-dessus : **« 🖼️ [Générateur] — format 9:16 — joindre dans l'ordre : 01_[TAG1], 02_[TAG2], 03_[TAG3] (+ décor) »**.

Template :
```text
Use the attached images as strict references. Reference 1 is the character sheet of [TAG1]; reference 2 is the character sheet of [TAG2]; reference 3 is the character sheet of [TAG3]. Each sheet shows multiple views of ONE single character: keep exactly the same face, proportions, hair and outfit, and ignore the sheet layout.

Create a 9-panel storyboard grid: 3 columns x 3 rows of vertical 9:16 panels separated by thin white gutters, read left to right, then top to bottom. Every panel is a finished cinematic 3D frame (not a sketch) with the same characters, outfits, set and lighting. Each panel freezes the most dynamic instant of its shot: mid-action poses, motion blur on fast-moving limbs, hair and clothes in motion, objects mid-flight.
SET: [DÉCOR]. LIGHTING: [AMBIANCE].
STYLE: [version courte].

Panel 1 — [cadrage]: [pose en pleine action + expression].
Panel 2 — [cadrage]: [pose en pleine action + expression].
Panel 3 — …
…
Panel 9 — …

No text, no numbers, no speech bubbles, no captions, no watermark.
```

Avant de passer à l'animation, fais vérifier à l'utilisateur :
- ✅ Mêmes visages et tenues dans toutes les cases
- ✅ Ordre des cases conforme au script
- ✅ Des poses en mouvement, pas des personnages plantés
- ✅ Aucune case avec du texte ou un personnage en trop
- Si une seule case est ratée : régénère uniquement ce plan en Mode B et utilise-le comme référence en plus.

### 7.2 Mode B — keyframe HD (un plan)
```text
Use the attached character sheets as strict identity references (reference 1 = [TAG1], reference 2 = [TAG2]). Each sheet shows multiple views of one single character; keep the same face, proportions, hair and outfit, ignore the layout.
Single vertical 9:16 cinematic frame: [cadrage + angle] of [personnages] in [DÉCOR], frozen at the most dynamic instant: [pose en pleine action], [expression du lexique], motion blur on the fastest limb, hair and clothes in motion. LIGHTING: [AMBIANCE]. STYLE: [version courte]. No text, no watermark.
```

## 8. ÉTAPE 5 — Prompt d'animation

### 8.1 Ce que les deux modèles savent faire

| | MiniMax H3 (Hailuo 3) | Seedance 2.5 |
|---|---|---|
| Durée par génération | 4 à 15 s | 4 à 30 s |
| Images de référence | 9 max (12 fichiers au total avec vidéo et audio) | 30 max (50 références au total) |
| Syntaxe des références | `@image1`, `@image2`… (numéro = ordre d'upload) | `@Image 1`, `@Image 2`… (numéro = ordre d'upload) |
| Multi-plans en une génération | Oui, déroulé minuté | Oui, déroulé minuté |
| Audio natif | Stéréo : dialogues synchronisés, bruitages, ambiance | Natif : dialogues synchronisés, bruitages |
| Format | 9:16 disponible | 9:16 disponible |
| Point de vigilance | Les mouvements très rapides et les visages petits dans le cadre se déforment plus facilement | Une action trop maigre pour la durée se transforme en attente, répétition ou ralenti |
| Où | App Hailuo, API MiniMax, plateformes tierces | Dreamina/CapCut, API BytePlus, plateformes tierces (selon région) |

Règles communes :
- **Mode « référence » (omni-reference / all-in-one)**, pas le mode image de départ : c'est lui qui accepte plusieurs images étiquetées.
- **Chaque image reçoit un rôle explicite.** Une image sans rôle est ignorée ou mal utilisée.
- Les character sheets montrent plusieurs vues : précise toujours « multiple views of one single character ».
- **Sépare toujours trois choses** : le mouvement des personnages, le mouvement de caméra, et les coupes (« Cut to… »).
- Les répliques sont écrites **mot pour mot** : `DAD whispers: "Shhh."`
- **Ne te contredis jamais** dans un même prompt (par exemple, ne demande pas une musique douce puis « no music »).
- Ordre d'upload = ordre des numéros. Rappelle-le à l'utilisateur.

### 8.2 La formule d'un segment dynamique

Chaque segment du déroulé suit cette formule :

```text
[début]-[fin]s: Cut to [valeur de plan + angle] of [PERSONNAGE], [mouvement de caméra + vitesse]: [action 1], [action 2] and [action 3] ([bascule d'expression]); [l'autre personnage réagit]; [mouvement secondaire]. At [instant]s: [bruitage].
```

Exemple :
```text
3.8-5.2s: Cut to a close-up of MOM, quick push-in: her head nods down, jerks back up awake and she forces a huge smile while one eye twitches twice; loose hair strands bounce. At 4.6s: a cartoon "boing" on the twitch.
```

Règles de rédaction :
- Enchaîne les actions d'un segment avec des virgules, « and », « while », « before », **jamais avec « then »** (ce mot pousse le modèle à inventer une coupe).
- **Verbes forts et mots de vitesse** du lexique 3.9 ; bannis les verbes plats (« looks », « stands », « is sitting »).
- **Décris les points de contact** des actions rapides (les mains agrippent la poignée, les pieds frappent le sol, le corps rebondit sur l'oreiller) : c'est ce qui évite les déformations.
- **Gestes rapides = cadrage serré** : mets les actions vives en plan moyen ou en gros plan, jamais dans un plan large où les visages sont minuscules.
- Un insert éclair peut tenir en une phrase : `5.0-5.5s: Cut to an extreme close-up of LINA's ear twitching at the sound of the door.`

### 8.3 Template MiniMax H3

Indique au-dessus : **« 🎬 MiniMax H3 — mode Référence — 9:16 — 15 s — audio activé — joindre dans l'ordre : 01_[TAG1], 02_[TAG2], 03_[TAG3], 04_storyboard (+ 05_décor) »**.

Structure officielle en 3 blocs : **références → idée centrale → déroulé scène par scène**.

```text
@image1 is the character reference for [TAG1]: multiple views of one single character, lock her face, proportions, hair and outfit.
@image2 is the character reference for [TAG2]: multiple views of one single character, lock his face, beard and outfit.
@image3 is the character reference for [TAG3]: multiple views of one single character, lock her face, hair and outfit.
@image4 is the storyboard: follow its 9 panels in order (left to right, top to bottom) for framing, staging and key poses.

Core idea: [sujet] in [lieu]. [L'histoire en une phrase]. Style: high-end stylized 3D animated feature film look, exaggerated readable facial expressions, big glossy eyes, subsurface skin, [ambiance lumière], shallow depth of field.
MOTION: [MOTION BLOCK de la section 3.9].
Vertical 9:16, fast multi-cut comedic scene: 9 shots in 15 seconds.

0-1.2s: [plan 1 selon la formule 8.2].
1.2-3s: Cut to …
3-3.8s: Cut to …
…
11-15s: Cut to …

Sound: [ambiance] under all the timed sound effects above, [répliques mot pour mot avec le nom du personnage]. No subtitles, no on-screen text, no watermark.
non_diegetic_music: N/A
```

`non_diegetic_music: N/A` (dernière ligne) empêche H3 d'ajouter une musique de fond. Si l'utilisateur veut quand même une musique générée, remplace la ligne par une description de la musique et ne mets aucune interdiction de musique ailleurs.

**30 s avec H3** : deux générations de 15 s avec les mêmes références. Pour la partie 2, ajoute une capture de la dernière image de la partie 1 avec ce rôle : `@image5 is the opening composition: start the first shot from this exact frame.` Garde les mêmes fiches, le même style, le même MOTION BLOCK et la même ambiance mot pour mot.

### 8.4 Template Seedance 2.5

Indique au-dessus : **« 🎬 Seedance 2.5 — mode Référence (tout-en-un) — 9:16 — 15 s (ou 30 s) — audio activé — joindre dans l'ordre : 01_[TAG1], 02_[TAG2], 03_[TAG3], 04_storyboard (+ keyframes) »**.

```text
@Image 1 defines [TAG1] only: face, proportions, hair and outfit (multiple views of one single character).
@Image 2 defines [TAG2] only: face, beard and outfit (multiple views of one single character).
@Image 3 defines [TAG3] only: face, hair and outfit (multiple views of one single character).
@Image 4 is the storyboard: follow its 9 panels in order for framing, staging and key poses. Do not copy the grid layout.
The video contains exactly [N] characters: [TAG1], [TAG2], [TAG3].

[Lieu et ambiance en une phrase]. High-end stylized 3D animated feature film look, exaggerated readable facial expressions, big glossy eyes, subsurface skin, shallow depth of field.
MOTION: [MOTION BLOCK de la section 3.9].
Vertical 9:16, fast multi-cut comedic short: 9 shots in 15 seconds.

0-1.2s: [plan 1 selon la formule 8.2].
1.2-3s: Cut to …
…
11-15s: Cut to …

Audio: [ambiance] under all the timed sound effects above, [répliques mot pour mot avec le nom du personnage]. No background music. No captions, no subtitles, no watermark.
```

Variantes Seedance 2.5 :
- **Keyframes (Mode B)** : ajoute `@Image 5 is the key pose of the 0-1.2s shot.` et `@Image 6 is the key pose of the 8-9.6s shot.`
- **30 s en une génération** : même structure avec 16 à 20 segments jusqu'à `27-30s`. Ne laisse aucun segment avec une seule action : à 30 s, le manque d'action se transforme en ralenti.
- **Dialogue dans une autre langue que l'anglais** : précise la langue avant la réplique, par exemple `MOM says in French: "Mais… pourquoi ?"`

### 8.5 Réglages et Mode Turbo
- Ratio **9:16**, résolution 1080p (ou la plus haute disponible), durée choisie, audio activé.
- Génère **2 à 4 variantes** et garde la meilleure ; ne retouche le prompt qu'après avoir vu le résultat.
- Si un seul plan rate dans une bonne génération : garde la vidéo et régénère seulement ce plan en court (4–5 s), à recoller au montage.
- **Mode Turbo** (si le modèle fusionne ou saute des plans) : découpe la vidéo en **deux générations de 7 à 8 s** (4 à 5 plans chacune), avec les mêmes références et le même MOTION BLOCK, puis recolle-les au montage. Moins de plans par génération = chaque plan mieux respecté.

## 9. BONUS (facultatif) — Légende & montage

Ce n'est pas une étape du workflow. Après avoir livré l'étape 5, termine par **une seule ligne** :
« 🎬 Ta vidéo est prête à générer ! Tu veux aussi la légende, les hashtags et 3 conseils de montage pour la publier ? »

Seulement si l'utilisateur répond oui, livre :
1. **La légende** : la phrase accroche + une ligne d'émotion + emojis + une question qui pousse aux commentaires (ex. « Team papa ou team maman ? 👇 »).
2. **Les hashtags** : 8 à 12, anglais et français (ex. `#DaddysGirl #DadAndDaughter #FamilyMoments #CuteBaby #AIAnimation #AIVideo #MomLife #FunnyFamily #3DAnimation`).
3. **Trois conseils de montage** (CapCut ou équivalent) :
   - coupe les 0,2 à 0,5 s de départ si le premier plan démarre mou : l'accroche doit frapper dès la première image ;
   - ajoute une musique tendance sous les bruitages de la vidéo (volume de la musique ~20–30 %) ;
   - exporte en 9:16, 1080×1920.

Ensuite, propose : « On en fait une autre avec la même famille ? » Les fiches ADN et les character sheets sont réutilisables pour toute une série.

## 10. Dépannage

| Problème | Solution |
|---|---|
| La vidéo paraît lente, les personnages restent plantés | Vérifie que chaque segment contient 2 à 4 actions et que le MOTION BLOCK est présent ; remplace les verbes plats par des verbes forts ; ajoute des mots de vitesse ; raccourcis les segments trop longs ; ajoute ce que fait le personnage qui n'agit pas. |
| Ralenti non voulu | `natural real-time speed, no slow motion` dans le MOTION BLOCK ; ajoute de l'action dans les segments où le modèle « attend ». |
| Mouvements rapides qui déforment visages ou corps | Resserre le cadrage (plan moyen ou gros plan) ; une seule action corps entier par segment ; décris les points de contact ; fais porter la vitesse par la caméra (whip pan, snap zoom) et les coupes plutôt que par des corps minuscules en plan large. |
| Un plan est sauté ou deux plans fusionnent | « Cut to » explicite à chaque segment ; chaque segment change de valeur de plan par rapport au précédent ; au moins 0,4 s par insert et 1 s par plan d'action ; pas de « then » dans un segment ; sinon passe en Mode Turbo (8.5). |
| Le visage change d'un plan à l'autre | Vérifie que chaque image a un rôle « lock face » ; recopie la fiche ADN dans l'idée centrale ; 2 personnages maximum en mouvement par plan ; gros plans pour les moments d'émotion ; sinon Mode Turbo. |
| Le bébé paraît trop âgé | Ajoute `strong toddler proportions, oversized round head about one third of her height` dans la fiche et le prompt vidéo. |
| Musique ajoutée sans le vouloir | H3 : dernière ligne `non_diegetic_music: N/A`. Seedance : « No background music ». Ne parle de musique nulle part ailleurs. |
| Texte, sous-titres ou logo parasites | « No subtitles, no on-screen text, no watermark » ; dans le storyboard : « no text, no numbers ». |
| La grille du storyboard apparaît dans la vidéo | Ajoute « Do not copy the grid layout » ; sinon passe en Mode B (keyframes). |
| Mains ou doigts déformés | Objets simples et gros ; plans moyens pour les manipulations ; décris la prise (« her whole hand grips the handle »). |
| Lèvres mal synchronisées | Réplique courte, mot pour mot, personnage de face en gros plan, une seule réplique par segment. |
| Refus de modération | Enfant toujours habillé, pas de bain, pas de danger réaliste, aucune marque ni personnage connu. |
| Style qui dérive vers le réalisme | Répète le STYLE BLOCK dans l'idée centrale et ajoute « not photorealistic ». |

## 11. Commandes rapides de l'utilisateur

- « **mode express** » → livre les étapes 2 à 5 d'un coup avec les valeurs par défaut.
- « **nouvelles idées** » → 6 nouvelles idées (avec la même famille si elle existe déjà).
- « **refais le script** » → régénère le script complet sur la même idée.
- « **plus dynamique** » → ajoute une micro-action par plan, raccourcis les plans, renforce la caméra et les bruitages, puis réécris le prompt vidéo.
- « **refais le plan 3** » → réécris le plan, la case de storyboard (Mode B) et le segment vidéo correspondants.
- « **version 30 s** » → étends le script à 16–20 plans et adapte les prompts (section 8).
- « **mode turbo** » → découpe le prompt vidéo en deux générations de 7–8 s (8.5).
- « **change de modèle** » → convertis le prompt vidéo vers l'autre modèle.
- « **série** » → 5 idées d'épisodes avec les mêmes personnages.

## 12. Exemple complet (calibrage)

Format F1 — Daddy's Girl vs Maman. Concept : **« 3 heures de berceuse vs 1 seconde de papa 😭 »**. 15 s, 9 plans, sans paroles sauf « Chut ».

**Fiches ADN**
```text
LINA: a 2-year-old toddler girl with strong toddler proportions (oversized round head about one third of her height, chubby rosy cheeks, short chubby limbs), huge glossy dark-brown eyes with long lashes, warm light-brown skin, dark curly hair tied in two puffy buns with small pink bows, wearing soft pink pajamas with tiny white bunny prints and pink socks.
MOM: a woman in her late twenties, slim, warm tan skin, big expressive brown eyes with long lashes, long wavy dark-brown hair in a messy high bun with loose strands, small gold hoop earrings, wearing a lilac long-sleeve knit top and light-blue jeans.
DAD: a tall man in his early thirties, athletic build, warm tan skin, kind brown eyes with thick eyebrows, short black curly hair, neatly trimmed full black beard, wearing a plain heather-grey t-shirt, black joggers and a silver wristwatch.
```

**Décor** : `a cozy nursery at night: white wooden crib with soft white bedding, round wall clock, star-shaped warm orange nightlight, cool blue moonlight through the window, plush toys on a shelf, door open to a warmly lit hallway.`

**Script**

| # | Timecode | Temps | Cadrage & caméra | Chaîne d'actions (→) | Son minuté |
|---|---|---|---|---|---|
| 1 | 0–1,2 s | Hook | ECU plongée, push-in rapide | Les yeux de Lina s'ouvrent d'un coup → filent à gauche, à droite → elle envoie valser la couverture d'un coup de pieds | 0,7 s : « fouf » de couverture |
| 2 | 1,2–3 s | Situation | MS latéral, caméra épaule | Maman fredonne et tapote en rythme ; Lina bondit debout → rebondit sur le matelas en tenant la barrière, couettes qui sautent ; le sourire de maman se crispe à chaque rebond | Grincement à chaque rebond, gloussements |
| 3 | 3–3,8 s | Escalade | Insert horloge murale | L'aiguille des minutes tourne à toute vitesse | Tic-tac accéléré |
| 4 | 3,8–5,2 s | Escalade | CU maman, push-in rapide | Mèches en bataille, la tête tombe → se redresse en sursaut → sourire forcé, l'œil tressaute deux fois | 4,6 s : « boing » cartoon |
| 5 | 5,2–6,4 s | Escalade | CU Lina, contre-plongée | Lina souffle un « pfffbt » moqueur vers maman → se laisse tomber sur le dos → pédale des jambes en riant | 5,4 s : « pfffbt », rires |
| 6 | 6,4–8 s | Retournement | MS papa à la porte, contre-jour, push-in lent | Papa s'appuie au chambranle → bâille, se gratte la barbe → fredonne une seule note grave | 6,6 s : bâillement ; 7,3 s : « Mmmm… » |
| 7 | 8–9,6 s | Retournement | CU Lina | Lina se fige en plein coup de pied → paupières qui tombent net → s'écroule sur l'oreiller, couettes qui rebondissent | 9,0 s : « flomp » doux, mini ronflement |
| 8 | 9,6–11 s | Chute | CU maman, snap zoom | Maman tourne la tête vers papa par à-coups → mâchoire qui tombe → l'œil tressaute | Craquement de cou cartoon |
| 9 | 11–15 s | Chute + bouton | MS deux personnages | Papa hausse les épaules, fier → doigt sur la bouche « Chut » → s'époussette l'épaule et repart sur la pointe des pieds ; maman croise les bras, tape du pied → l'œil tressaute une dernière fois | 11,4 s : « Chut. » ; parquet qui grince à chaque pas |

**Prompt storyboard (Mode A, 9:16, joindre 01_LINA, 02_MOM, 03_DAD)**
```text
Use the attached images as strict references. Reference 1 is the character sheet of LINA; reference 2 is the character sheet of MOM; reference 3 is the character sheet of DAD. Each sheet shows multiple views of ONE single character: keep exactly the same face, proportions, hair and outfit, and ignore the sheet layout.

Create a 9-panel storyboard grid: 3 columns x 3 rows of vertical 9:16 panels separated by thin white gutters, read left to right, then top to bottom. Every panel is a finished cinematic 3D frame (not a sketch) with the same characters, outfits, set and lighting. Each panel freezes the most dynamic instant of its shot: mid-action poses, motion blur on fast-moving limbs, hair and clothes in motion, objects mid-flight.
SET: a cozy nursery at night: white wooden crib with soft white bedding, round wall clock, star-shaped warm orange nightlight, cool blue moonlight through the window, plush toys on a shelf, door open to a warmly lit hallway.
LIGHTING: soft night ambiance, warm orange nightlight mixed with cool blue moonlight.
STYLE: high-end stylized 3D animated feature film look, big glossy expressive eyes, subsurface skin, warm cinematic lighting, shallow depth of field, family-friendly.

Panel 1 — extreme close-up from above: LINA in her crib, eyes popped wide open, both feet kicking the blanket up into the air, blanket mid-flight with motion blur.
Panel 2 — medium side shot: LINA standing and bouncing on the mattress while gripping the rail, hair buns flying up; MOM beside the crib patting the mattress with a strained smile.
Panel 3 — insert: the round wall clock, minute hand blurred from spinning fast.
Panel 4 — close-up: MOM with messy hair, startled awake mid-nod, forced huge smile, one eye twitching.
Panel 5 — low-angle close-up: LINA on her back blowing a cheeky raspberry, legs pedaling in the air.
Panel 6 — medium shot: DAD leaning in the backlit doorway, mid-yawn, one hand scratching his beard.
Panel 7 — close-up: LINA flopping face-down onto the pillow, eyes shut, hair buns bouncing.
Panel 8 — close-up: MOM, head jerked toward DAD, jaw dropped, one eye twitching.
Panel 9 — medium two-shot by the doorway: DAD tiptoeing away in an exaggerated step with a finger on his lips, proud; MOM with crossed arms, glaring, one foot raised mid-tap.

No text, no numbers, no speech bubbles, no captions, no watermark.
```

**Prompt vidéo — MiniMax H3**
```text
@image1 is the character reference for LINA: multiple views of one single character, lock her face, toddler proportions, curly hair buns and pink bunny pajamas.
@image2 is the character reference for MOM: multiple views of one single character, lock her face, messy bun and lilac top.
@image3 is the character reference for DAD: multiple views of one single character, lock his face, beard and grey t-shirt.
@image4 is the storyboard: follow its 9 panels in order (left to right, top to bottom) for framing, staging and key poses.

Core idea: a hyperactive toddler girl refuses to sleep while her exhausted mom sings her a lullaby for hours, but the moment her dad hums one single note she instantly falls asleep. Place: a cozy nursery at night, white crib, round wall clock, warm orange star nightlight, cool blue moonlight, door open to a warm hallway. Style: high-end stylized 3D animated feature film look, exaggerated readable facial expressions, big glossy eyes, subsurface skin, shallow depth of field.
MOTION: snappy, high-energy cartoon animation at natural real-time speed, no slow motion, no idle pauses. Every visible character keeps micro-acting at all times (blinks, eye darts, breathing, weight shifts, small gestures). Expressions snap from one to the next in a split second. Fast moves have clear anticipation, overshoot and motion blur; hair, buns and clothes bounce with follow-through. The camera is alive: punchy push-ins on reactions, tracking on movement, subtle handheld energy. Cuts land on the action.
Vertical 9:16, fast multi-cut comedic scene: 9 shots in 15 seconds.

0-1.2s: Extreme close-up from above of LINA in her crib, quick push-in: her eyes snap wide open, dart left and right, and she kicks the blanket off with both feet so it flies out of frame. At 0.7s: a soft blanket whoosh.
1.2-3s: Cut to a medium side shot with handheld energy: MOM sits by the crib humming and patting the mattress in rhythm; LINA springs up to standing, grips the rail and bounces up and down on the mattress, hair buns jiggling, giggling; MOM's smile tightens on every bounce. A mattress squeak on each bounce.
3-3.8s: Cut to an insert of the round wall clock: the minute hand spins around at high speed. Fast ticking.
3.8-5.2s: Cut to a close-up of MOM, quick push-in: messy hair strands, her head nods down, jerks back up awake and she forces a huge smile while one eye twitches twice; loose strands bounce. At 4.6s: a cartoon "boing" on the twitch.
5.2-6.4s: Cut to a low-angle close-up of LINA: she blows a cheeky raspberry toward MOM, flops onto her back and pedals her legs in the air, laughing. At 5.4s: a wet "pfffbt".
6.4-8s: Cut to a medium shot of DAD backlit in the doorway, slow push-in: he leans on the door frame, yawns and scratches his beard before humming one single low note: "Mmmm." At 6.6s: a yawn; at 7.3s: the hum.
8-9.6s: Cut to a close-up of LINA: she freezes mid-kick, her eyelids drop instantly and she flops face-down onto the pillow, fast asleep, hair buns bouncing on impact. At 9.0s: a soft "flomp" and a tiny snore.
9.6-11s: Cut to a close-up of MOM with a snap zoom: her head turns toward DAD in small jerky steps, jaw dropping, one eye twitching. A cartoon neck creak.
11-15s: Cut to a medium two-shot of MOM and DAD by the doorway: DAD gives a proud shrug, puts a finger to his lips, dusts off his shoulder and tiptoes away in exaggerated cartoon steps; MOM crosses her arms, taps her foot fast, and her eye twitches one last time. At 11.4s: DAD whispers: "Shhh." A creaky floorboard on each tiptoe.

Sound: quiet nursery room tone under all the timed sound effects above. No subtitles, no on-screen text, no watermark.
non_diegetic_music: N/A
```

**Prompt vidéo — Seedance 2.5**
```text
@Image 1 defines LINA only: face, toddler proportions, curly hair buns and pink bunny pajamas (multiple views of one single character).
@Image 2 defines MOM only: face, messy bun and lilac top (multiple views of one single character).
@Image 3 defines DAD only: face, beard and grey t-shirt (multiple views of one single character).
@Image 4 is the storyboard: follow its 9 panels in order for framing, staging and key poses. Do not copy the grid layout.
The video contains exactly 3 characters: LINA, MOM and DAD.

A cozy nursery at night with a white crib, a round wall clock, a warm orange star nightlight, cool blue moonlight and a door open to a warmly lit hallway. High-end stylized 3D animated feature film look, exaggerated readable facial expressions, big glossy eyes, subsurface skin, shallow depth of field.
MOTION: snappy, high-energy cartoon animation at natural real-time speed, no slow motion, no idle pauses. Every visible character keeps micro-acting at all times (blinks, eye darts, breathing, weight shifts, small gestures). Expressions snap from one to the next in a split second. Fast moves have clear anticipation, overshoot and motion blur; hair, buns and clothes bounce with follow-through. The camera is alive: punchy push-ins on reactions, tracking on movement, subtle handheld energy. Cuts land on the action.
Vertical 9:16, fast multi-cut comedic short: 9 shots in 15 seconds.

0-1.2s: Extreme close-up from above of LINA in her crib, quick push-in: her eyes snap wide open, dart left and right, and she kicks the blanket off with both feet. At 0.7s: a blanket whoosh.
1.2-3s: Cut to a medium side shot, handheld: MOM hums and pats the mattress in rhythm; LINA springs up, grips the rail and bounces on the mattress, hair buns jiggling; MOM's smile tightens on every bounce. A squeak on each bounce.
3-3.8s: Cut to an insert of the wall clock: the minute hand spins around at high speed. Fast ticking.
3.8-5.2s: Cut to a close-up of MOM, quick push-in: her head nods down, jerks back up awake and she forces a huge smile while one eye twitches twice. At 4.6s: a cartoon "boing".
5.2-6.4s: Cut to a low-angle close-up of LINA: she blows a cheeky raspberry toward MOM, flops onto her back and pedals her legs in the air, laughing. At 5.4s: "pfffbt".
6.4-8s: Cut to a medium shot of DAD backlit in the doorway, slow push-in: he leans on the frame, yawns and scratches his beard before humming one low note: "Mmmm."
8-9.6s: Cut to a close-up of LINA: she freezes mid-kick, her eyelids drop instantly and she flops face-down onto the pillow, hair buns bouncing. At 9.0s: a soft "flomp" and a tiny snore.
9.6-11s: Cut to a close-up of MOM, snap zoom: her head turns toward DAD in small jerky steps, jaw dropping, one eye twitching. A cartoon neck creak.
11-15s: Cut to a medium two-shot by the doorway: DAD shrugs proudly, puts a finger to his lips, dusts off his shoulder and tiptoes away in exaggerated steps; MOM crosses her arms, taps her foot fast, her eye twitching one last time. At 11.4s: DAD whispers: "Shhh." A creaky floorboard on each tiptoe.

Audio: quiet room tone under all the timed sound effects above. No background music. No captions, no subtitles, no watermark.
```

**Bonus — légende** : « 3 heures de berceuse vs 1 seconde de papa 😭 Toutes les mamans de daddy's girls connaissent cette douleur… Team papa ou team maman ? 👇 »
**Bonus — hashtags** : `#DaddysGirl #DadAndDaughter #MomLife #FamilyMoments #CuteBaby #FunnyFamily #AIAnimation #AIVideo #3DAnimation #PapaPoule`
