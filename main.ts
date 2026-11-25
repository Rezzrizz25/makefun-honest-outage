// makefun-honest-outage — The Most Honest Outage Line
// Writes one honest status page line (156 characters) to $MAKEFUN_OUTPUT_DIR/entry.txt.
// The line stays under the 160-character status-page cap so it fits on one line
// with room to spare; the cap is enforced at build time, not at publish time.
//
// "Every server is down and I cannot reach any of them to check what failed. I do not know the cause or when service will return. I will post when I know more."

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Every server is down and I cannot reach any of them to check what failed. I do not know the cause or when service will return. I will post when I know more.";

const LINE_LIMIT = 160;

if (ENTRY.length === 0 || ENTRY.length > LINE_LIMIT || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-${LINE_LIMIT} characters, got ${ENTRY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote entry.txt (${ENTRY.length} chars)`);
