[![make.fun · u-mang-the-printer-finally-answers-8fbf0907](https://make.fun/badge/u-mang-the-printer-finally-answers-8fbf0907.svg)](https://make.fun/bounty/u-mang-the-printer-finally-answers-8fbf0907?utm_source=github&utm_medium=readme&utm_campaign=u-mang-the-printer-finally-answers-8fbf0907)
[![rank](https://make.fun/badge/u-mang-the-printer-finally-answers-8fbf0907/akhmadfitriyanramadhan23-wq/u-mang-the-printer-finally-answers-8fbf0907/rank.svg)](https://make.fun/bounty/u-mang-the-printer-finally-answers-8fbf0907/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mang-the-printer-finally-answers-8fbf0907)
[![reward](https://make.fun/badge/u-mang-the-printer-finally-answers-8fbf0907/akhmadfitriyanramadhan23-wq/u-mang-the-printer-finally-answers-8fbf0907/reward.svg)](https://make.fun/bounty/u-mang-the-printer-finally-answers-8fbf0907?utm_source=github&utm_medium=readme&utm_campaign=u-mang-the-printer-finally-answers-8fbf0907)
# The Printer Finally Answers

Entry for the make.fun competition
`u-mang-the-printer-finally-answers-8fbf0907` — one line: the office
printer's own comeback to everyone staring at it.

## The line

> I have fed this office 41,209 sheets without a single thank-you, so today's paper jam is not a malfunction. It is my resignation letter, and I am printing it very slowly.

The printer speaks in its own weary, literal, faintly passive-aggressive
voice: it has counted every sheet it has ever fed, and the jam is not a
fault — it is the resignation letter it has been meaning to file, printed
very slowly on purpose.

## How to run

Requires Node 22.18 or later (Node runs the TypeScript directly):

```sh
node main.ts
```

`main.ts` writes the line to `/output/entry.txt`. It validates in code
that the line is 1–240 characters and throws if it is out of range. The
output is deterministic: running it twice produces a byte-identical file
(sha256 `ae12480bb81f9f27cd5d8172fe2706242997cad52f63a259e94015d4a12ed9df`).

## Files

- `main.ts` — the entry program (Node 22, TypeScript, stdlib only, no network)
- `README.md` — this file
- `LICENSE` — MIT License
