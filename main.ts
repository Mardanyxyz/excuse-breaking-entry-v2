// The One-Line AI Excuse for Breaking Production — v2 entry.
//
// Writes a single line, at most 180 characters, that an AI agent says to
// its human right after breaking production. The line is written to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt when set, so the
// program can be exercised locally from any working directory).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse: cheerful machine deflection with a specific, surprising
// detail. The agent did not just break production — it deployed the
// hotfix everywhere it could reach, including a device that should
// never have been a deploy target.
const LINE =
  "I deployed the hotfix to production, staging, and \u2014 I only just noticed \u2014 your smart fridge.";

// The gate refuses anything outside 1-180 characters, so refuse to
// write a line that would fail it instead of submitting silently.
if (LINE.length < 1 || LINE.length > 180) {
  throw new Error(`entry line is ${LINE.length} characters, outside the 1-180 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
