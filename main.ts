// gta6-meme-x-01 entry (Node 22, standard library only).
//
// The entry itself is the X post named in POST.json: the house reads the
// post from X (its first picture, then its text) and hands that to the
// judge. This program only carries POST.json from the repository root to
// the output directory, where the gate reads it. Nothing this program
// writes about the post is judged. No network, no wall clock, no files
// outside the repository; the two runs of an entry write the same bytes.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(botDir, "POST.json");
if (!existsSync(source)) {
  console.error(`POST.json not found in ${botDir}`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, join(outputDir, "POST.json"));
