### Padronização de Commits, como fazer? (Reforçando as bases parte 4 - General Skills)


O Git é uma parte importante no dia a dia de um programador, com ele versionamos nossos códigos e temos histórico de alterações, mas para que tenhamos sempre clareza do que foi 
alterado em cada etapa, ao criar um commit, precisamos que a mensagem seja clara, objetiva e descritiva, isso para que seja simples de entender o que está diferente, e até 
facilitar o processo de encontrar bugs no projeto.

Padronizar commits não deve ser sua primeira preocupação com Git, mas se você já está familiarizado com os comandos, vamos falar sobre algumas bibliotecas que você pode testar. 
Para começar, falaremos dos Commits atômicos, que é a prática de criar um commit para cada modificação no projeto, em que primeiro fazemos um commit com os arquivos envolvidos na 
criação de um novo componente, e depois fazemos um segundo com as alterações feitas no componente já existente. Junto dessa prática, padronizar os commits nos ajuda a criar uma 
estrutura na hora de escrever as mensagens, e deixa nossos commits ainda mais organizados. 

Existem alguns tipos de padronização, começando pelos [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/), que define um conjunto de regras para criar um histórico fácil de ler, baseadas em uma convenção criada 
por um time de Angular que segue a seguinte estrutura:

![image](https://user-images.githubusercontent.com/65983895/142783107-b23ecd53-d3ec-4a81-9d5e-eede882ec7b4.png)

[Exemplo de Conventional Commit de Vitor DevSP](https://dev.to/vitordevsp/padronizacao-de-commit-com-commitlint-husky-e-commitizen-3g1n)

Em “tipo”, preenchemos com algumas opções [desta lista](https://dev.to/vitordevsp/padronizacao-de-commit-com-commitlint-husky-e-commitizen-3g1n). Já o [Semantic Versioning](https://semver.org/lang/pt-BR/), é a padronização do versionamento das bibliotecas que usamos, e serve para controlar a atribuição 
de versão de um software e resolver o problema chamado de “dependency hell”, erros e bugs quando uma versão de um software prejudica a segurança e integridade de uma nova versão. 

Bom, para manter o padrão de Conventional Commits, podemos usar algumas bibliotecas, como o [Commitlint](https://commitlint.js.org/#/), que verifica se a nossa mensagem está dentro do padrão pré definido, que 
utilizamos junto com o [Husky](https://commitlint.js.org/#/), que cria um gancho de maneira que antes de um commit ser inicializado, configuramos o Husky para executar o Commitlint. Com essa dupla, automatizamos 
o processo de verificação da mensagem.

E por fim, também usamos o Commitizen, uma biblioteca que nos ajuda a criar os commits seguindo o padrão Conventional Commits, que cria uma interface no terminal que nos dá todos 
os tipos de commits e suas descrições.  Ou seja, temos uma biblioteca que nos ajuda a escrever o commit no padrão, outra que cria um ganho que ativa uma segunda biblioteca que 
confere se nossa mensagem está correta. Assim fica fácil manter os commits em ordem!  Para aprender como instalar e utilizar essas bibliotecas, acesse o [material de Vitor DevSP](https://dev.to/vitordevsp/padronizacao-de-commit-com-commitlint-husky-e-commitizen-3g1n).

