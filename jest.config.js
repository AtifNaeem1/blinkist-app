/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

export const testEnvironment = 'jsdom';
export const coverageDirectory = 'coverage';
export const collectCoverage = true;
export const collectCoverageFrom = [
  'src/**/*.{js,jsx}',
  '!src/**/*stories.{js,jsx}',
];
export const setupFiles = ['./src/SetupTests.js'];
export const coveragePathIgnorePatterns = [
  '<rootDir>/node_modules/',
  '.story.js',
  '<rootDir>/assetsTransformer.js',
  '<rootDir>/coverage',
  '<rootDir>/src/assets',
  '<rootDir>/src/utils/commandCentermockData.js',
];
export const testPathIgnorePatterns = [
  '<rootDir>/node_modules/',
  '<rootDir>/coverage',
  '<rootDir>/src/utils/commandCentermockData.js',
];
export const transform = {
  '^.+\\.js?$': 'babel-jest',
  '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
    './assetsTransformer.js',
};
export const moduleNameMapper = {
  '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
};
export const verbose = true;
export const moduleDirectories = ['node_modules', 'src'];
