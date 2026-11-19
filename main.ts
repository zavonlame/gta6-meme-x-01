// GTA 6 meme bounty entry (gta6-meme-x-01) for make.fun.
// The entry is a GTA 6 meme posted on X by @ZavonLame:
// https://x.com/ZavonLame/status/2123452802337063169
// Play code in the post: makefun-radio-pumice-balloon
// This program copies POST.json (the post's address on X) from the
// repository root into the output directory, where the make.fun gate
// reads it. Standard library only, no network. The copy is
// byte-for-byte, so two runs write identical output.

import { copyFileSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const src = join(botDir, "POST.json");
const dest = join(outDir, "POST.json");

if (!existsSync(src)) {
  console.error(`POST.json not found at ${src}`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });

try {
  copyFileSync(src, dest);
} catch (err) {
  console.error(`Failed to copy POST.json to ${dest}:`, err);
  process.exit(1);
}

console.log(`Copied ${src} to ${dest}`);
