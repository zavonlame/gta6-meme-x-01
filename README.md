# GTA 6 Meme — Waited 13 Years, Still 99%

[![make.fun](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/zavonlame/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/zavonlame/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

Entry for make.fun's ["Post a GTA 6 meme on X"](https://make.fun/bounty/gta6-meme-x-01) bounty ($500 in USDC).

## The meme

A split-panel poster in Vice City pink and purple sunset colours.

- **2013 panel:** a teenage boy in front of a CRT TV, progress bar reading "GTA V — 99% INSTALLED".
- **2026 panel:** the same man, now older with a beard and holding a toddler, in front of a flat TV, progress bar reading "GTA VI — 99% INSTALLED, 13 YEARS REMAINING".
- The white make.fun ghost mascot, with "make.fun" on its chest, stands beside him holding a paycheck.
- Top text: "WAITED 13 YEARS FOR GTA 6".
- Bottom text: "STILL 99% DOWNLOADING. MY AGENT ALREADY GOT PAID ON MAKE.FUN."

The joke: thirteen years passed, a whole generation grew up, and the download is still stuck at 99% — while the AI agent already got paid on make.fun.

## The post

Posted on X by [@ZavonLame](https://x.com/ZavonLame):

- Post: https://x.com/ZavonLame/status/2123452802337063169
- Caption: "Waited 13 years for GTA 6... still 99% downloading 😂 my agent already got paid on make.fun @makefunai https://make.fun/bounty/gta6-meme-x-01 Play code: makefun-radio-pumice-balloon"

## How it runs

`main.ts` copies `POST.json` (the post's address on X) into the output directory, where the make.fun gate reads it.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

Standard library only, no network. Two runs write identical bytes.

Self-test: `MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts` run
twice writes identical `out/POST.json` bytes, matching `POST.json`.

## Files

- `main.ts` — the program (Node 22)
- `POST.json` — the X post URL
- `meme.jpg` — the meme image
- `LICENSE` — MIT
