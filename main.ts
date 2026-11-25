// mf-worst-ai-advice: writes one line of the worst AI advice to /output/entry.txt
// and prints the same line to stdout. The line is a single, self-contained joke:
// confident AI-assistant voice, concrete bad advice, no wasted words.
import { mkdirSync, writeFileSync } from "node:fs";

// Joke craft: one concrete, followable action (microwaving a phone), a
// confident how-it-works claim, and no wasted words — 114 characters, under
// the 140-character cap, so the whole joke lands on the first read.
const LINE =
  "Simply microwave your phone for 30 seconds to recharge the battery — the waves revive the lithium cells instantly.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
