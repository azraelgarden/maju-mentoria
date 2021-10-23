### Prototyping e classes: qual a relação entre os dois? (Reforçando as bases parte 3 - JavaScript)

Talvez você já tenha ouvido que JavaScript é uma linguagem baseada em [protótipos](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/Object_prototypes), isso porque para fornecer herança, os objetos podem ter um objeto de protótipo que atua como 
modelo de objeto, e dele herda métodos e propriedades. O “problema” começa quando o objeto de protótipo pode ter um objeto de protótipo, e isso é chamado de cadeia de protótipos. 
É essa cadeia que explica porque objetos diferentes têm propriedades e métodos definidos em outros objetos que tenham acesso.]

Na prática, as propriedades e métodos são definidos na propriedade prototype nas instâncias de objetos ou nas funções construtoras. Existe um link entre a [instância de um objeto](https://pt.wikipedia.org/wiki/Inst%C3%A2ncia_(ci%C3%AAncia_da_computa%C3%A7%C3%A3o)), 
seu protótipo e as propriedades e métodos desse objeto que são encontradas percorrendo a cadeia de protótipo. Ou seja, se tivermos uma função construtora, e criarmos uma instância 
de objeto a partir dessa função, nós herdamos as propriedades dessa função, e também podemos herdar propriedades e métodos definidos no protótipo da nossa função construtora.

Mas veja, tudo que é herdado é definido na propriedade prototype, ou seja, herda daqueles que começam com Object.prototype. e não somente Object. Ou seja, o valor da propriedade 
“prototype” é um objeto que funciona como uma caixa que armazena propriedades e métodos que queremos que sejam herdados por outros objetos mais abaixo na cadeia de protótipos. 
Para entender como usar prototype acesse o [material da MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/Object_prototypes).

Ta, mas e as classes? As [classes](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes) são uma simplificação da linguagem para as heranças baseadas em protótipos, elas servem como uma maneira mais simples e clara de criar objetos e 
lidar com heranças. As classes, assim como funções, podem ser definidas como class expressions e class declarations. 

A principal diferença quando falamos em classes e prototype é a  [sintaxe](https://www.youtube.com/watch?v=XoQKXDWbL1M), utilizando class temos uma versão mais limpa de código mas que nos dá o mesmo resultado  que se 
utilizássemos prototype. O que é importante como programador, é entender como funcionam as cadeias de protótipos em JavaScript, e como isso é o que está por trás das classes, 
dessa forma, saberemos utilizar as heranças de forma mais inteligente. 

Para ver o conteúdo no Linkedin, clique aqui. (ainda não publicado)
