module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/src/main/**/*.{ts,tsx}',
    '!<rootDir>/src/presentation/components/router/**/*.{ts,tsx}',
    '!<rootDir>/src/domain/**/*.{ts,tsx}',
    '!<rootDir>/src/presentation/test/**/*.{ts,tsx}',
    '!<rootDir>/src/**/index.ts',
    '!**/*.d.ts'
  ],
  coverageDirectory: "./coverage/",
  testEnvironment: 'jsdom',
  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest'
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '\\.scss$': 'identity-obj-proxy' // gera um dummy ( objeto vazio )
  }
}
