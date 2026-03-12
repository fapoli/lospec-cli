# lospec-cli

A small CLI tool that downloads a palette from **Lospec** and generates a PNG palette grid.

The tool fetches the palette from:

https://lospec.com/palette-list/{palette-name}

and converts the palette into a PNG grid made of colored cells, useful for 3D modeling.

## Features

- Fetch palettes directly from **Lospec**
- Generates a **grid PNG palette**
- Configurable:
  - number of columns
  - cell size
- Simple interactive CLI

## Installation

Clone the repository and install dependencies:
```
npm install
```

Dependencies:

- pngjs

## Usage

Run the CLI:

```
node lospec-cli.js
```

You will be prompted for:
- Name of the palette (as seen on the lospec url)
- Columns (default 8)
- Cell Size (default 32)

Press **Enter** to accept default values.

### Example
```
Palette name (eg: endesga-64): comfy57
Columns [8]: 
Cell size [32]:
```
Output:
```
comfy57.png
```
## Output

The tool generates a PNG grid where:

- each color is a square cell
- default grid width = **8 columns**
- default cell size = **32×32 pixels**

## License

MIT
