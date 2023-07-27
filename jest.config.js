module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['**/tests/**/*.test.js'],
  collectCoverage: true,
  collectCoverageFrom: ['src/js/**/*.js'],
  coverageReporters: ['text', 'lcov'],
};
