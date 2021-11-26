export default {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  restoreMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8"
};
