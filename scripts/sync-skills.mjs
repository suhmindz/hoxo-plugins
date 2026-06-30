#!/usr/bin/env node
/**
 * Sync skill dirs from hoxo-boardroom-skill-pack into the hoxo plugin's skills/.
 * Keeps the skill-pack canonical. Run before publishing: node scripts/sync-skills.mjs
 * (Run from the marketplace repo root.)
 */
import { readdirSync, mkdirSync, rmSync, cpSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const src = join(__dirname, "../../hoxo-boardroom-skill-pack/skills");
const dest = join(__dirname, "../hoxo/skills");

rmSync(dest, { recursive: true, force: true });
mkdirSync(dest, { recursive: true });

let n = 0;
for (const d of readdirSync(src, { withFileTypes: true })) {
  if (!d.isDirectory() || d.name.startsWith(".")) continue;
  cpSync(join(src, d.name), join(dest, d.name), { recursive: true });
  n++;
}

console.log(`Synced ${n} skill(s) → hoxo/skills/`);
