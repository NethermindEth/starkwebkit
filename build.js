/*
 * This script is used to copy over the version number in the package.json to
 * the CONNECTKIT_VERSION constant in the index.ts file. This is done to
 * ensure that the version number attribute on the ConnectKit wrapper is always
 * up to date with the version number in the package.json file.
 */

const fs = require('fs');
const config = require('./packages/starkwebkit/package.json');

const file = fs.readFileSync('packages/starkwebkit/src/index.ts', 'utf8');
const lines = file.split('\n');
const versionLine = lines.findIndex((line) =>
  line.includes('export const STARKWEBKIT_VERSION = ')
);
lines[versionLine] = `export const STARKWEBKIT_VERSION = '${config.version}';`;

fs.writeFileSync('packages/starkwebkit/src/index.ts', lines.join('\n'), 'utf8');
