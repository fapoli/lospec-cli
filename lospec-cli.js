#!/usr/bin/env node
import fs from "fs";
import readline from "readline";
import { PNG } from "pngjs";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question) {
  return new Promise(resolve => rl.question(question, answer => resolve(answer.trim())));
}

function hexToRgb(hex) {
  return {
    r: parseInt(hex.slice(1, 3), 16),
    g: parseInt(hex.slice(3, 5), 16),
    b: parseInt(hex.slice(5, 7), 16)
  };
}

async function main() {
  const paletteName = await ask("Palette name (eg: endesga-64): ");
  if (!paletteName) {
    console.error("Palette name is required.");
    rl.close();
    process.exit(1);
  }

  const columnsInput = await ask("Columns [8]: ");
  const cellSizeInput = await ask("Cell size [32]: ");
  rl.close();

  const perRow = Number(columnsInput) || 8;
  const cellSize = Number(cellSizeInput) || 32;

  const url = `https://lospec.com/palette-list/${paletteName}`;
  const response = await fetch(url);

  if (!response.ok) {
    console.error(`Failed to fetch palette: ${response.status} ${response.statusText}`);
    process.exit(1);
  }

  const html = await response.text();

  const paletteMatch = html.match(/<div class="palette">([\s\S]*?)<\/div>\s*<\/div>/i);

  if (!paletteMatch) {
    console.error("Could not find palette block.");
    process.exit(1);
  }

  const paletteHtml = paletteMatch[1];

  const colors = [
    ...paletteHtml.matchAll(/<div class="color"[^>]*style="[^"]*background:\s*(#[0-9a-fA-F]{6})/gi)
  ].map(match => match[1].toLowerCase());

  if (!colors.length) {
    console.error("No colors found in palette block.");
    process.exit(1);
  }

  const rows = Math.ceil(colors.length / perRow);

  const png = new PNG({
    width: perRow * cellSize,
    height: rows * cellSize
  });

  for (let i = 0; i < colors.length; i++) {
    const { r, g, b } = hexToRgb(colors[i]);
    const startX = (i % perRow) * cellSize;
    const startY = Math.floor(i / perRow) * cellSize;

    for (let y = startY; y < startY + cellSize; y++) {
      for (let x = startX; x < startX + cellSize; x++) {
        const idx = (png.width * y + x) * 4; // PNG buffer has 4 channels.
        png.data[idx] = r;
        png.data[idx + 1] = g;
        png.data[idx + 2] = b;
        png.data[idx + 3] = 255;
      }
    }
  }

  const outputFile = `${paletteName}.png`;
  fs.writeFileSync(outputFile, PNG.sync.write(png));

  console.log(`Palette saved to ${outputFile}`);
}

main().catch(err => {
  rl.close();
  console.error(err);
  process.exit(1);
});