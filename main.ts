// The Printer Finally Answers — u-mang-the-printer-finally-answers-8fbf0907
// One line, in the office printer's own voice: weary, literal, faintly
// passive-aggressive. Writes the entry to /output/entry.txt.
// Node 22, stdlib only, deterministic, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I have fed this office 41,209 sheets without a single thank-you, so today's paper jam is not a malfunction. It is my resignation letter, and I am printing it very slowly.";

// The gate allows 1–240 characters; enforce the cap here so a future
// edit can never silently produce an invalid entry.
const MAX_CHARS = 240;
if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`entry is ${LINE.length} chars, must be 1-${MAX_CHARS}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
