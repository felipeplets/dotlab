#!/usr/bin/env node

import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
import fs from 'fs';
import path from 'path';
import os from 'os';

clear();

console.log(
    chalk.blue(
        figlet.textSync('DotLab', { horizontalLayout: 'full' })
    )
);

fs.appendFileSync(`${os.homedir()}/.zshrc`, `\nsource ${path.resolve('./loader.sh')}`);