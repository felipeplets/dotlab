import fs from "fs";
import { Commands } from './commands';

jest.mock('fs');
jest.mock('figlet');

describe("Test Commands", () => {
    beforeEach(() => {
        jest.spyOn(global.console, 'log');
    });

    it("shall call init when process receive init as it's first argument", () => {
        jest.spyOn(Commands, 'init').mockImplementation();
        Commands.process(["init"]);

        expect(Commands.init).toBeCalledTimes(1);
        expect(Commands.init).toBeCalledWith(["init"]);
    });

    it("shall call notSupported when process receive an invalid input as it's first argument", () => {
        jest.spyOn(Commands, 'notSupported').mockImplementation();
        Commands.process(["notSupportedCommand"]);

        expect(Commands.notSupported).toBeCalledTimes(1);
        expect(Commands.notSupported).toBeCalledWith(["notSupportedCommand"]);
    });

    it("shall append loader on initialize", () => {
        Commands.init([]);

        expect(console.log).toBeCalledTimes(1);
        expect(fs.appendFileSync).toBeCalledTimes(1);
        expect(fs.appendFileSync).toBeCalledWith(
            expect.stringContaining("/.zshrc"),
            expect.stringContaining("/loader.sh")
        );
    });

    it("shall let the user know if a command is not recognized", () => {
        Commands.notSupported(["notSupportedCommand"]);

        expect(console.log).toBeCalledTimes(1);
        expect(console.log).toBeCalledWith(`Command "notSupportedCommand" is not recognized.`);
    });
});
