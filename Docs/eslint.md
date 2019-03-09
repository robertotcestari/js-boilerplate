# Eslint

Para instalar o Eslint, basta usar o seguinte código:

``` console
npm install eslint --save-dev
```

Instalado, o Eslint, como estamos usando apenas no projeto (e não globalmente), para começar a usá-lo, basta digitar o comando:

``` batch
./node_modules/.bin/eslint --init
```

Importante notar que o parser a ser usado deve ser o `babel-eslint` parser. Basta colocar esta config no `.eslinrc.js`.  

## .eslintrc.json

Note que para que não haja conflito entre Prettier e Eslint, é necessário que a gente coloque algumas infos do prettier dentro do .eslintrc.json

Segue config básica:

``` json
{
    "parser": "babel-eslint",
    "env": {
        "jest": true,
        "browser": true
    },
    "extends": [
        "standard",
        "plugin:prettier/recommended"
    ],
    "rules": {
        "space-before-function-paren": "off",
        "comma-dangle": "off",
        "prettier/prettier": "error"
    },
    "plugins": [
        "prettier"
    ]
}
```
