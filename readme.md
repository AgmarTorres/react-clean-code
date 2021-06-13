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
