

## Buildar o projeto para o GITPages:
ng build --base-href https://nivaldohydalgo.github.io/my-profile/


## Comittando o projeto na branch gh-pages no Github:
ngh --dir=dist/browser


## URL da pagina do GITPades:
https://nivaldohydalgo.github.io/my-profile/


## Para instalar o GH-Pages:
sudo npm install -g angular-cli-ghpages

Alterar o outputPath do angular.json para:
"outputPath": "dist",