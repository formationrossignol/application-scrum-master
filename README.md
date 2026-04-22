# Scrum Master Studio

Plateforme premium Next.js pour Scrum Masters : portail, ateliers autonomes, expériences immersives, quiz, progression, favoris/historique et admin.

## Prérequis recommandés
- **Node.js**: `24.15.0` (fichier `.nvmrc` fourni)
- **npm**: `11.12.1` (champ `packageManager` fourni)

> Note: le projet reste compatible avec `node >=20 <25` et `npm >=10`, mais pour éviter les warnings `npm doctor`, utilisez les versions recommandées.

## Installation (pas à pas)
```bash
# 1) Se placer dans LE dossier du projet
cd /chemin/vers/application-scrum-master

# 2) Aligner la version Node (si nvm est installé)
nvm use

# 3) Vérifier l'environnement local
npm run doctor

# 4) Installer les dépendances
npm install

# 5) Configurer l'environnement
cp .env.example .env

# 6) Initialiser la base
npm run db:push
npm run db:seed

# 7) Lancer
npm run dev
```

## Dépannage rapide
### Erreur `ENOENT ... package.json`
Vous n'êtes pas dans le bon dossier.

Exécutez:
```bash
pwd
ls package.json
```
Puis placez-vous dans la racine du projet:
```bash
cd /chemin/vers/application-scrum-master
npm install
```

### `npm doctor` signale une version Node/npm trop ancienne
Exemple: `Use npm v11.12.1` ou `Use node v24.15.0`.

Mise à niveau conseillée:
```bash
nvm install 24.15.0
nvm use 24.15.0
npm install -g npm@11.12.1
```

Vérification:
```bash
node -v
npm -v
```

### Erreur réseau `403 Forbidden` sur `npm install`
Cela vient généralement d'une politique réseau/proxy/registry. Vérifiez:
```bash
npm config get registry
npm config list
```
Le registry attendu est souvent:
```bash
https://registry.npmjs.org/
```

## Stack
- Next.js 15 + React + TypeScript
- React/ReactDOM verrouillés en version stable 19.0.0 (pas de RC)
- Tailwind CSS + Framer Motion
- Prisma + PostgreSQL
- Zustand, React Hook Form, Zod

## Scripts
- `npm run doctor`
- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`
- `npm run db:push`
- `npm run db:seed`

## Pages MVP
- `/portal`
- `/tools`, `/tools/[slug]`
- `/workshops`, `/workshops/[slug]`
- `/immersive`, `/immersive/[slug]`
- `/quizzes`, `/quizzes/[slug]`
- `/progress`, `/favorites`, `/history`, `/admin`

## Données seed
- 33 outils
- 5 ateliers MVP
- 3 expériences immersives
- 3 quiz de 10 questions
