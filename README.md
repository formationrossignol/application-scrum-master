# Scrum Master Studio

Plateforme premium Next.js pour Scrum Masters : portail, ateliers autonomes, expériences immersives, quiz, progression, favoris/historique et admin.

## Stack
- Next.js 15 + React + TypeScript
- Tailwind CSS + Framer Motion
- Prisma + PostgreSQL
- Zustand, React Hook Form, Zod

## Installation (pas à pas)
```bash
# 1) Se placer dans LE dossier du projet
cd /chemin/vers/application-scrum-master

# 2) Vérifier l'environnement local
npm run doctor

# 3) Installer les dépendances
npm install

# 4) Configurer l'environnement
cp .env.example .env

# 5) Initialiser la base
npm run db:push
npm run db:seed

# 6) Lancer
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
