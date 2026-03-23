# lospec-cli

[![npm version](https://img.shields.io/npm/v/@fapoli/lospec-cli)](https://www.npmjs.com/package/@fapoli/lospec-cli)
[![GitHub repo](https://img.shields.io/badge/github-fapoli%2Flospec--cli-blue?logo=github)](https://github.com/fapoli/lospec-cli)

CLI tool that downloads a Lospec palette and generates a PNG grid.

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
