export default {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8"
};
