module.exports = {
  moduleFileExtensions: [
    'js',
    'json',
    'ts',
    'tsx',
  ],
  moduleNameMapper: {
    '~/src/(.*)': '<rootDir>/src/$1',
    '\\.s?css$': '<rootDir>/.jest/style-mock.js',
  },
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.js'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
