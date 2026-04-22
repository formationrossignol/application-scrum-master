# Scrum Master Studio

Plateforme premium Next.js pour Scrum Masters : portail, ateliers autonomes, expériences immersives, quiz, progression, favoris/historique et admin.

## Stack
- Next.js 15 + React + TypeScript
- Tailwind CSS + Framer Motion
- Prisma + PostgreSQL
- Zustand, React Hook Form, Zod

## Lancement
```bash
npm install
cp .env.example .env
npm run db:push
npm run db:seed
npm run dev
```

## Scripts
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
