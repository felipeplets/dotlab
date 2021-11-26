import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
import fs from 'fs';
import path from 'path';
import os from 'os';

class Commands {
    static init(args) {
        clear();
        console.log(
            chalk.blue(
                figlet.textSync('DotLab', { horizontalLayout: 'full' })
            )
        );
        fs.appendFileSync(`${os.homedir()}/.zshrc`, `\nsource ${path.resolve('loader.sh')}`);
    }
    static notSupported(args) {
        console.log(`Command "${args[0]}" is not recognized.`);
    }
    static process(args) {
        if (args[0] === 'init') {
            Commands.init(args);
        } else {
            Commands.notSupported(args);
        }
    }
}

export { Commands };
