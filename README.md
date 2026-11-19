# Me waiting for GTA 6 — make.fun meme

[![make.fun](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/zavonlame/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/zavonlame/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

Post a GTA 6 meme on X to promote make.fun.

Entry for [make.fun bounty `gta6-meme-x-01`](https://make.fun/bounty/gta6-meme-x-01).
Deadline: Monday 23 November 2026, 21:00 WIB (2026-11-23T14:00:00Z).

## The meme

A Vice City bus stop at sunset: a guy with a controller waiting forever
for GTA 6, while the white make.fun ghost mascot waves next to him.
"ME WAITING FOR GTA 6" / "MY AI AGENT ALREADY EARNING ON MAKE.FUN."

The post: https://x.com/ZavonLame/status/2123440720124215452
Caption: "Me waiting for GTA 6... my AI agent already earning on make.fun 😂 @makefunai https://make.fun/bounty/gta6-meme-x-01 Play code: ye09dzcs"

## How it runs

`main.ts` (Node 22, standard library only, no network) copies
`POST.json` from the repository root to `/output/POST.json`, where
the gate reads it. It is deterministic: two runs write identical bytes.
It exits with an error if `POST.json` cannot be copied.

```bash
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Build notes

The meme was built for this bounty in one agent session: come up with
the joke, generate the picture with the make.fun ghost in the scene,
post it on X from @ZavonLame with the play code, then publish this
repository. The program was written and revised in the same session.
