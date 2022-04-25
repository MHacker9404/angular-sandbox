const { getJestProjects } = require('@nrwl/jest');

module.exports = {
  projects: getJestProjects(),
};

// {
//   "globals": {
//     "ts-jest": {
//       "tsConfigFile": "tsconfig.spec.json"
//     }
//   },
//   "preset": "jest-preset-angular",
//   "roots": [
//     "<rootDir>/apps/",
//     "<rootDir>/libs/"
//   ],
//   "collectCoverage":true
//   ,
//   "collectCoverageFrom": [
//     "**/*.{ts}",
//     "!**/node_modules/**",
//     "!**/vendor/**",
//     "!jestGlobalMocks.ts",
//     "!setupJest.ts",
//     "!**/test.ts",
//     "!**/index.ts"
//   ],
//   "setupFiles": [
//     "whatwg-fetch",
//     "jest-localstorage-mock"
//   ],
//   "setupTestFrameworkScriptFile": "./setupJest.ts"
// }
