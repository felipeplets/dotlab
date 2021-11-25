import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
import fs from 'fs';
import path from 'path';
import os from 'os';

class commands {
    static init() {
        clear();
        console.log(
            chalk.blue(
                figlet.textSync('DotLab', { horizontalLayout: 'full' })
            )
        );
        fs.appendFileSync(`${os.homedir()}/.zshrc`, `\nsource ${path.resolve('./loader.sh')}`);
    }
    static notSupported() {
        console.log('Feature not supported!');
    }
}

export { commands }
