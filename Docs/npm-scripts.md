
# NPM Scripts

## npm run lint

O script lint vai rodar o ESlint em todos os arquivos javascript que estejam no /src. Basta adicionar em `scripts` no `package.json` a seguinte linha:

``` json
"lint": "./node_modules/.bin/eslint src/*.js"
```
