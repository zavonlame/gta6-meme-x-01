# GTA 6 Meme — Even My Boss Called In Sick

[![make.fun bounty](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/zavonlame/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/zavonlame/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

Entry for make.fun's **"Post a GTA 6 meme on X"** bounty ($500 in USDC).

## The meme

A smartphone chat screenshot with the Boss, on a Vice City pink-and-purple
sunset background, with the white make.fun ghost mascot peeking in from the
corner.

- **Sep 17, 2013:** "morning boss, can't come in today. i'm sick" — boss replies "ok rest up".
- **Nov 19, 2026:** the exact same message — boss replies "same. me too. see you in Leonida. my agent covers my rent on make.fun."

Top text: "13 YEARS APART. SAME EXACT TEXT."
Bottom text: "EVEN MY BOSS CALLED IN SICK FOR GTA 6."

The joke: after waiting 13 years for GTA 6, the same sick-day excuse is
reused — and this time even the boss is calling in sick too.

## The post

- Post: https://x.com/ZavonLame/status/2123456855162994709
- Caption: "13 years apart. Same exact text. Even my boss called in sick for GTA 6 😂 @makefunai https://make.fun/bounty/gta6-meme-x-01 Play code: makefun-radio-pumice-balloon"

## How it runs

The program copies `POST.json` (which names the X post) to the output
directory, where the competition gate reads it:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` uses only the Node standard library and makes no network requests.

Self-test: `MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts` run
twice writes identical `out/POST.json` bytes, matching `POST.json`.
