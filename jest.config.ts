import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  restoreMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: "node"
};

export default config;
