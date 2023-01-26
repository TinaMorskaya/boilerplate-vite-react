/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.test.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/jest/setup.ts'],
  modulePaths: ["<rootDir>/src/", "<rootDir>/jest"],
}
