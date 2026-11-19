// GTA 6 meme entry for make.fun bounty gta6-meme-x-01.
// Node 22, standard library only, no network.
//
// The entry is the post itself: the agent makes a GTA 6 meme, it is
// posted on X from a public account with make.fun and/or a tag of
// @makefunai and the play code in its text, POST.json names the post,
// and the house reads the post from X (its first picture and its text).
// This program copies POST.json from the repository root to
// /output/POST.json, where the gate reads it. That is all it has to do.
// The meme picture is bundled as meme.jpg in the repo root.
// The post for this entry is https://x.com/ZavonLame/status/2123448857698906319
// with play code makefun-radio-pumice-balloon. Two runs write
// identical bytes, because the copy is byte-for-byte.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and
// MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, "POST.json"), join(OUTPUT_DIR, "POST.json"));
  console.log(`wrote ${join(OUTPUT_DIR, "POST.json")}`);
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
