npm i -D git-commit-msg-linter
npm i -D typescript @types/node
npm i -D eslint eslint-config-standard-with-typescript@11 eslint-plugin-import eslint-plugin-promise eslint-plugin-standard @typescript-eslint/eslint-plugin eslint-plugin-node eslint-plugin-react

"@typescript-eslint/consistent-type-definitions": "off", # ajuda no type e na interface no .eslintrc.json
"@typescript-eslint/strict-boolean-expression": "off" #comparação !boolean

#Evitar commits defeituosos
npm i -D lint-staged husky
npm install -D husky@4

.lintstagedrc
{ #Arquivos modificados, vou colocar script, antes de fazer o commit
"\*.{ts,tsx}": [
"eslint 'src/**' --fix"
]
}
.huskyrc
{
"hooks": {
"pre-commit": "lint-staged"
}
}
npm i -D jest @types/jest ts-jest

npm i -D faker @types/faker

Adicionando paths 2. 3 testando casos de erro
"baseUrl": "src",
"paths": {
"@/_": ["_"]
},

jest.config.js
moduleNameMapper: {
'@/(.\*)': '<rootDir>/src/$1'
}

jest --clearCache

npm i axios

npm i @types/axios -D


.lintstagedrc.json
  {
    "*.{ts,tsx}": ["eslint 'src/**' --fix", "npm run test:staged"]
  }

npm i react react-dom

npm i @types/react @types/react-dom

jest.config.json
  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest'
  },

eslintrc.json

  "settings": {"react": {"version": "detect"}},
  "extends": ["standard-with-typescript", "plugin:react/recommended"],
  "plugins": ["react"],
  
  rules
  
    "react/jsx-uses-react": "off",
    "react/jsx-uses-vars": "off",
    

# 3.3 Webpack
npm i -D webpack webpack-cli webpack-dev-server

  data => tem dependencia de protocolo, que tem interface de outra camada

npm i -D clean-webpack-plugin


    "start": "webpack-dev-server --open"    --open abre o browser
    
    "test": "jest --passWithNoTests --no-cache --runInBand",    resetar o cache, testes en sequencia

npm i -D node-sass sass-loader css-loader style-loader ts-loader

  config scss

  extensionas: ['.ts', '.tsx', '.js', '.scss'],
  module: {
    rules: [{
      test: /\.ts(x?)$/,
      loader: 'ts-loader',
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: { modules: true } // react consegue entender que ele será um modulo, para manipular com js
      },
      {
        loader: 'sass-loader',
      }]
    }]
  },

  sass-module.d.ts
    declare module '*.scss' {
      const content: { [ className: string]: string}
      export = content
    }


npm i -D identity-obj-proxy


jest.config.json

  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '\\.scss$': 'identity-obj-proxy' // usa um test double, stub, fake, spy, dummy {}, gera um dummy ( objeto vazio )
  }

    collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}',
    '!**/*.d.ts'], // ignorar o .d.ts

.eslintigonore
  
  *.scss


  loading.io/css

  ---


4.6 router
  npm i react-router-dom
  npm i -D  @types/react-router-dom
---
4.7 

  npm i -D @testing-library/react

  Caso não funcione instalar o 
  "identity-obj-proxy": "^3.0.0",
    

    ---

    npm i -D jest-localstorage-mock

-- 6 - Aula 1
    mango@gmail.com
    12345

jest.config.js
  Ignorar pasta main
    '!<rootDir>/src/main/**/*.{ts,tsx}',

  6.5 Deploy
    webpack
      
    const { DefinePlugin } = require('webpack')

7. Coverage e TravisCI
  npm i -g npm-check
  npx npm-check
  npm-check -u -s

  .eslintrc.json
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/comma-spacing": "off",
    "@typescript-eslint/return-await": "off",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-unused-vars": ["off"],
    "no-redeclare": "off",
    "import/export": "off",
    "react/jsx-uses-react": "off",
    "react/jsx-uses-vars": "off",
    "quotes": "off"