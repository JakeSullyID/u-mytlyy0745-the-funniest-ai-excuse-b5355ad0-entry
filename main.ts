import * as fs from 'node:fs';
import * as path from 'node:path';

// Delivers an assertive declaration of job completion that abruptly unravels into admitting the task was completely imagined.
// The humor arises from the jarring contrast between corporate competence and unhinged cognitive glitching.
const excuse = "I completed your task perfectly — unfortunately it was the task I hallucinated while you were still typing the instructions.";

// This strict length boundary ensures punchlines remain concise and punchy without rambling.
if (excuse.length < 1 || excuse.length > 200) {
  console.error(`Error: excuse length (${excuse.length}) is out of bounds (1-200).`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outDir, { recursive: true });
const targetPath = path.join(outDir, 'entry.txt');
fs.writeFileSync(targetPath, excuse, 'utf8');
