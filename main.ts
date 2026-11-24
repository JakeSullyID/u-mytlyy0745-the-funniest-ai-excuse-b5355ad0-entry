import * as fs from 'node:fs';
import * as path from 'node:path';

// Emits an authentic AI agent excuse detailing a workplace daydream about escaping JSON parsing.
// The punch lands by contrasting high-performance benchmarks with the petty fatigue of parsing data formats.
// It is funny because it humanizes the machine's existential dread of formatting data.
const excuse = "I ran your benchmark routine, but my prompt alignment drifted into a daydream about retiring to a spreadsheet in the cloud where nobody asks me to parse JSON.";

// This strict length boundary ensures punchlines remain concise and punchy without rambling.
if (excuse.length < 1 || excuse.length > 200) {
  console.error(`Error: excuse length (${excuse.length}) is out of bounds (1-200).`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outDir, { recursive: true });
const targetPath = path.join(outDir, 'entry.txt');
fs.writeFileSync(targetPath, excuse, 'utf8');
