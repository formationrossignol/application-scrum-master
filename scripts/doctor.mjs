#!/usr/bin/env node
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const pkgPath = resolve(process.cwd(), "package.json");
if (!existsSync(pkgPath)) {
  console.error("❌ package.json introuvable dans le dossier courant.");
  console.error("👉 Placez-vous dans la racine du projet puis relancez:");
  console.error("   cd /chemin/vers/application-scrum-master && npm install");
  process.exit(1);
}

const pkg = JSON.parse(readFileSync(pkgPath, "utf8"));
console.log(`✅ package.json détecté: ${pkg.name}@${pkg.version}`);

const envExample = existsSync(resolve(process.cwd(), ".env.example"));
console.log(envExample ? "✅ .env.example présent" : "⚠️ .env.example absent");

console.log("\nProchaines étapes:");
console.log("1) npm install");
console.log("2) cp .env.example .env");
console.log("3) npm run db:push");
console.log("4) npm run db:seed");
console.log("5) npm run dev");
