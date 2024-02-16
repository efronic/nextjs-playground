const fs = require('fs');

const nodeVersion = fs.readFileSync('.nvmrc', 'utf8').trim();
process.env.NODE_VERSION = nodeVersion;

console.log(`Using Node version specified in .nvmrc: ${nodeVersion}`);
