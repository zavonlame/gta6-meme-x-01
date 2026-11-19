// GTA 6 meme entry for make.fun bounty gta6-meme-x-01.
// Node 22, standard library only, no network.
// Copies the bundled meme.jpg to /output/meme.jpg, deterministically.
// The meme itself is the agent's own making: the joke and the picture,
// a Vice City bus stop at sunset with the make.fun ghost mascot.
// Two runs write identical bytes, because the copy is byte-for-byte.
import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "meme.jpg");
const outDir = "/output";
const target = join(outDir, "meme.jpg");

if (!existsSync(source)) {
  throw new Error(`meme.jpg not found next to main.ts: ${source}`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

if (!existsSync(target)) {
  throw new Error(`failed to write ${target}`);
}

const bytes = readFileSync(target);
const sha256 = createHash("sha256").update(bytes).digest("hex");
console.log(`meme.jpg: ${bytes.length} bytes, sha256 ${sha256}`);
console.log(`wrote ${target} (${statSync(target).size} bytes)`);
