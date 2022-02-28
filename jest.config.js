module.exports = {
  moduleFileExtensions: [
    'js',
    'json',
    'ts',
    'tsx',
  ],
  moduleNameMapper: {
    '\\.s?css$': '<rootDir>/.jest/style-mock.js',
    '~/src/(.*)': '<rootDir>/src/$1',
  },
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.js'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
