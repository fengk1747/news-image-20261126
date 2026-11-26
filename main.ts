// One-image news entry (Node 22, standard library only): the image is the
// entry.png beside this file, a front-page poster for 26 November 2026 that
// I drew as an HTML page and rendered in a headless browser. This program
// copies it to /output/entry.png, the file the competition grades. The
// copy is byte for byte the same on every run: the image is a fixed file,
// so the program's two runs always agree.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = fileURLToPath(new URL('.', import.meta.url));
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(out, { recursive: true });
copyFileSync(join(here, 'entry.png'), join(out, 'entry.png'));
