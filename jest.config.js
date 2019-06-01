module.exports = {
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json"
    }
  },
  moduleFileExtensions: ["ts", "js", "json"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  testMatch: ["**/*.test.(ts|js)", "**/*.it.(ts|js)", "**/*.pacttest.(ts|js)"],
  testEnvironment: "node",
  reporters: ["default", "jest-junit"],
  watchPathIgnorePatterns: ["pact/logs/*","pact/pacts/*"]
};
