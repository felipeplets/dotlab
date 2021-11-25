#!/usr/bin/env node

import { commands } from './commands';

// Delete the 0 and 1 argument (node and script.js)
const args = process.argv.splice(process.execArgv.length + 2);

const availableCommands = [
  'init'
];

if (args[0] === 'init') {
  commands.init();
} else {
  commands.notSupported();
}