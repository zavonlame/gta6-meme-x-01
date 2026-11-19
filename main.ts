// GTA 6 meme entry for make.fun bounty gta6-meme-x-01.
// Post: https://x.com/ZavonLame/status/2123456855162994709
// Play code: makefun-radio-pumice-balloon
// The program copies POST.json (which names the X post) from the bot
// directory to the output directory, as the competition gate expects.
// Standard library only, no network access.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = join(botDir, "POST.json");
const dest = join(outputDir, "POST.json");

if (!existsSync(source)) {
  console.error(`POST.json not found in ${botDir}`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
try {
  copyFileSync(source, dest);
} catch (err) {
  console.error(`Failed to copy POST.json to ${dest}:`, err);
  process.exit(1);
}
// The copy is byte-for-byte, so two runs write identical output.
console.log(`Copied ${source} to ${dest}`);
