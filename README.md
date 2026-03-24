# lospec-cli

[![npm version](https://img.shields.io/npm/v/@fapoli/lospec-cli)](https://www.npmjs.com/package/@fapoli/lospec-cli)
[![GitHub repo](https://img.shields.io/badge/github-fapoli%2Flospec--cli-blue?logo=github)](https://github.com/fapoli/lospec-cli)
[![license](https://img.shields.io/badge/license-MIT-blue)](./LICENSE)

CLI tool that downloads a Lospec palette and generates a PNG grid.

## Why does this exist?

Lospec palettes are distributed as single-row strips, which can be awkward to work with in practice. If you’ve ever had to manually rearrange a palette into a grid just to use it in Blender, Photoshop, or a pixel art tool, you know the friction.

This CLI removes that step by converting palettes into clean, ready-to-use PNG grids.

## Installation

### Global install

```bash
npm install -g @fapoli/lospec-cli
```

### Run with npx

```bash
npx @fapoli/lospec-cli
```

## Usage

Run the CLI:

```bash
lospec
```

You will be prompted for:

- **Palette name** (from Lospec)
- **Number of columns**
- **Cell size**

The tool will then generate a PNG file named:

```
<palette>.png
```

## Example

```bash
lospec
```

Input:

```
Palette name: comfy57
Columns: 8
Cell size: 32
```

Output:

```
comfy57.png
```

## Features

- Fetches palettes directly from Lospec
- Generates clean PNG grids
- Simple interactive CLI

## Development

Clone the repo:

```bash
git clone https://github.com/fapoli/lospec-cli.git
cd lospec-cli
npm install
```

Test locally:

```bash
npm link
lospec
```

## License

MIT
