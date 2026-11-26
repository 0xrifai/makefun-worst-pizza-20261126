// make.fun entry: "The Worst Pizza Topping"
// Writes one funny line pitching a terrible pizza topping to the
// absolute path /output/entry.txt (the sealed scorer reads exactly that
// file, and it must be UTF-8 text of 1-200 characters).
//
// Self-contained: no network, no reads outside the repo, no dependencies.
// Run with Node 22 type-stripping: `node main.ts`.

import { mkdirSync, writeFileSync } from "node:fs";

// The pitch: a parking ticket as a pizza topping. Crispy, salty, and it
// doubles in price if you don't finish it in 14 days — a topping that
// somehow bills you after you've already eaten it.
const LINE =
  "Try our new pizza, topped with a parking ticket — crispy, salty, and it doubles in price if you don't finish it in 14 days.";

// Guard the gate before writing: the sealed scorer requires 1-200
// characters of non-whitespace UTF-8 text, so refuse to write anything
// that would fail it.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
