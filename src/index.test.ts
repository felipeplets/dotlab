import { Commands } from './commands';

jest.mock('./commands');

describe("Test CLI", () => {
    it("shall call the Commands.process with the correct args", () => {
        process.argv = ["node", "index.ts", "init"];
        require("./index");
        expect(Commands.process).toBeCalledTimes(1);
        expect(Commands.process).toBeCalledWith(["init"]);
    });
});
