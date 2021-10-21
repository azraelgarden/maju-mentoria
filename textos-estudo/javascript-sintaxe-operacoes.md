### JavaScript do início: sintaxe e operações (Reforçando as bases parte 3 - JavaScript)

No meu processo de evolução como desenvolvedora, tive contato com algumas linguagens e frameworks, mas para facilitar minha vida, decidi focar em uma linguagem e depois 
me dedicar a um framework. Escolhi o JavaScript por alguns motivos, além de ser a primeira linguagem que tive contato, foi a que mais tive facilidade e achei intuitiva. 
Muitos sugerem o Python, mas como comecei minha trajetória com a Rocketseat logo peguei gosto pelo JS e React. Então, entrando no terceiro pilar do reforço de bases, vamos 
voltar lá no começo e falar sobre sintaxe e operações de JavaScript!

Para começar, precisamos entender algumas coisas básicas sobre JavaScript. Primeiro, ele é case-sensitive, isso significa que a variável “Nome” é diferente de “nome”, 
letras maiúsculas e minúsculas são interpretadas como diferentes. Segundo, as instruções que damos em JS são chamadas de declaração, e são separadas por um ponto e vírgula(;).
Terceiro, para comentar nessa linguagem usamos duas formas,  // para comentários de uma linha e para comentários de múltiplas linhas, basta colocar o texto entre /* comentário 
longo */.

Agora vamos às declarações, começando pelas variáveis. Em JavaScript temos três tipos, a var que pode ou não ter um valor inicial, a let que declara uma variável local 
de [escopo do bloco](https://imasters.com.br/desenvolvimento/escopos-em-javascript) e pode ou não começar com um valor, e a const, que declara uma constante de escopo de bloco, apenas leitura. 

É importante lembrar que uma variável var OU let sem um valor inicial é entendida como undefined (indefinida), e que aquelas que forem definidas fora de uma função são 
considerada globais, ou seja, pode ser chamada em qualquer código no documento atual, já as variáveis definidas dentro de funções só podem ser usadas no próprio bloco.

Agora que falamos sobre variáveis, vamos falar sobre dados e tipo de dados em JavaScript. Nessa linguagem  temos 7 tipos de dados, são eles:

-boolean: aceita valores verdadeiros ou falsos (true/false);

-null: valor nulo (diferente de Null e NULL);

-undefined: valores indefinidos;

-number: números como 10 ou 3.54. Podem ser integer (inteiros), float (possuem pontos), doubles(dobros) ou bignums (números grandes);

-string: textos dentro de aspas duplas como “hello world”;

-symbol: novo no ECMAScript 6, um tipo de dado cuja as instâncias são únicas e imutáveis;

-e object: estrutura de dados que contém instruções para se trabalhar com esses dados, além disso, podem ser criados vazios, com métodos e propriedades, e podemos acessar 
essas propriedades. Para entender mais sobre como trabalhar com objetos, acesse o [material da MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object);

Saindo dos dados, vamos falar sobre conversão e funções. JavaScript é uma linguagem muito flexível quanto aos tipos de valores que exige. Já que as variáveis não são tipadas, 
podem ter valores de qualquer tipo atribuídas e posteriormente alteradas, por exemplo, se um programa espera uma string e recebe um number, o JS converte o número em string de 
forma automaticamente.

Agora sobre funções, em JavaScript temos alguns tipos começando pela função mais básica e depois caminharemos para condicionais e estruturas de Looping. A função é um objeto
que tem código associado, e é estruturada recebendo um nome e objetos, e entre chaves descrevemos o que fazer com os objetos recebidos.

![image](https://user-images.githubusercontent.com/65983895/138308861-6a5db111-7977-4845-82e6-f6a244f3899d.png)

[Exemplo de função do Devfuria](http://devfuria.com.br/javascript/sintaxe-basica/)

Os condicionais são funções que atuam após certas circunstâncias serem ou não atendidas, para falar sobre esse tipo de estrutura, vamos começar pelo condicional if/else, 
declarações em que dizemos por meio de código “se o valor n é igual a 1, execute esse bloco de código, se não, execute esse outro”. Podemos também fazer por negação “se o 
valor de n for diferente de 1, execute esse código”. 

com if/else, usamos == para igualdades, != para negações, e && quando temos mais de uma condição a ser atendida pelo mesmo código.

![image](https://user-images.githubusercontent.com/65983895/138308935-88903a9e-4322-47f1-961a-74aadbbe4f15.png)

[Exemplo de condicional do Devfuria](http://devfuria.com.br/javascript/sintaxe-basica/)

Além do if/else, também temos o condicional ternário, em que conseguimos obter resultados semelhantes ao anterior, mas com menos código.  Ele é como um atalho para o if e é 
constituído de uma condição (expressão true ou false), seguido de duas expressões como no exemplo abaixo:

![image](https://user-images.githubusercontent.com/65983895/138309032-38b5787f-6eb5-4402-acf5-998261538be6.png)

[Exemplo de construção de condicional ternário do Devfuria](http://devfuria.com.br/javascript/operador-condicional-ternario/)

![image](https://user-images.githubusercontent.com/65983895/138309051-5391fca9-1516-4c9e-9cf9-4990726c2c2a.png)

[Exemplo de aplicação de condicional ternário do Devfuria](http://devfuria.com.br/javascript/operador-condicional-ternario/)

Outra forma de trabalhar com condicionais em JS, é utilizando o switch, que avalia uma expressão combinando o valor para uma cláusula case, e executa as instruções associadas 
a esse case. Esse tipo de condicional é interessante para ser usado em funções em que teríamos muitos if/else.

Não foi fornecido texto alternativo para esta imagem![image](https://user-images.githubusercontent.com/65983895/138309192-731902bf-6872-4bd0-abea-566b6878b9be.png)

[Exemplo de Swith do MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/switch)

Saindo dos condicionais, e antes de falar sobre loopings, vamos falar sobre os Arrays, que são um tipo especial de objeto que funcionam como uma lista de itens numerados, 
isso é, ao criarmos o array var frutas =[‘Maça’, ’Banana’];, Maça será o item [0] do array, e Banana será o item [1]. E para acessar Maça dentro do array, precisamos criar 
a var primeiro = frutas[0]. Esse tipo de estrutura pode ser percorrido por estruturas de Looping como vamos ver abaixo.

E por fim, temos o for, uma estrutura de looping  que diz “para cada item da lista que eu te passar, execute essa função”. Essa lista que passamos para a estrutura, pode 
ser um array ou outro tipo de dado, mas por meio de código definimos a extensão da lista e a condição para que o looping pare ou prossiga.

![image](https://user-images.githubusercontent.com/65983895/138309291-badbafba-2a55-4b6e-b223-f232e5ec88a0.png)

[Exemplo de aplicação de estrutura for do Devfuria](http://devfuria.com.br/javascript/sintaxe-basica/)

E por fim, temos  o While que executa uma rotina quando uma condição for avaliada como verdadeira, a condição é avaliada antes da execução. O while recebe uma condição, 
se avaliada como verdadeira, o código é executado, quando for falsa, o programa não executa a rotina, e segue para além da estrutura.

![image](https://user-images.githubusercontent.com/65983895/138309388-87b99cbe-4bd9-4176-bc56-15f036670515.png)

[Exemplo de while da MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/while)

E essas são as informações básicas que você precisa em JavaScript para começar a escrever seus códigos. No próximo texto, falaremos sobre o que é e como manipular o DOM.
Para ver a publicação no Linkedin, [clique aqui](https://www.linkedin.com/pulse/javascript-do-in%C3%ADcio-sintaxe-e-opera%C3%A7%C3%B5es-refor%C3%A7ando-bases-lobo-/).
