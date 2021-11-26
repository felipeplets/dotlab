import { Commands } from './commands';
import { mocked } from "ts-jest/utils"

jest.mock('./commands.ts');

describe("Test CLI", () => {
    it("shall call the Commands.process with the correct args", () => {
        process.argv = ["node", "index.ts", "init"];
        require("./index");
        expect(mocked(Commands.init)).toBeCalledTimes(1);
    })
})