# Husky

O husky faz com que os git hooks fiquem mais fáceis.
Para instalar, basta `npm install husky --save-dev`.
Depois, no `package.json` a gente coloca a seguinte linha:

```json
  "husky": {
    "hooks": {
      "pre-push": "npm run lint"
    }
  }
```