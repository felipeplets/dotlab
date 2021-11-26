#!/usr/bin/env node
import { Commands } from './commands';

// Delete the 0 and 1 argument (node and script.js)
const args = process.argv.splice(process.execArgv.length + 2);

Commands.process(args);
