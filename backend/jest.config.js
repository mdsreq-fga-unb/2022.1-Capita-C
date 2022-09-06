/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverage: true,
  coverageDirectory: "docs/coverage",
  bail: true,
  collectCoverageFrom: ["src/**/*.ts", "!src/index.ts", "!src/utils/server/**/*.ts"],
};
