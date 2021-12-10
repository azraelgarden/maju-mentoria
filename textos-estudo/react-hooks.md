## O que são React Hooks e como utilizar os principais existentes
Aprofundando um pouco mais no React,  vamos falar sobre Hooks, funções que nos permitem acessar recursos de state e ciclo de vida do React a partir de componentes funcionais e reutilizar lógicas usando estados sem mudar a hierarquia de componentes. 

Os Hooks surgiram na versão 16.7.0 do React para fornecer formas de trabalhar com estados e API’s sem a necessidade de usar uma classe (Class Component). Ele basicamente trouxe para os componentes funcionais a possibilidade de usar estados locais, efeitos e contexto, tornando o código mais legível, objetivo além de  facilitar o compartilhamento de lógicas entre componentes. 

Alguns dos Hooks mais utilizados são o useState, useEffetc, useContext, useCallback, useMemo e useRef. Além deles, também podemos fazer nossos próprios Hooks. Nesse texto, vamos abordar com mais profundidade o useState, useEffect, useMemo e useRef.

**useState()**

useState é um dos hooks mais importantes e usados do React, ele lida com dados relativos, ou seja, ele lida com os estados. Para utilizar esse hook, nós passamos o valor que deve ser alterado, a função que vai executar essa mudança, e igualamos ao useState() passando o valor inicial. Veja o exemplo abaixo:

![image](https://user-images.githubusercontent.com/65983895/145650295-84871276-f91d-43ae-9a03-1fb893fd3543.png)

[Exemplo de useState da Rocketseat](https://blog.rocketseat.com.br/react-hooks/)

Para manipular o valor de count, podemos executar ``setCount(count+1)``. 

**useEffect()**

Um dos problemas que os Functional Components tinham era lidar com side-effects como chamadas à API, tarefas assíncronas e outros. Com o useEffect, podemos operar os efeitos colaterais durante a renderização do componente. Veja o exemplo abaixo:

![image](https://user-images.githubusercontent.com/65983895/145650355-f2172939-c76c-491c-861e-6c81275c710a.png)

[Exemplo de useEffet da documentação oficial do React](https://pt-br.reactjs.org/docs/hooks-effect.html) 

Aqui, usamos esse hook para personalizar o título de um documento com o número de cliques que um botão recebeu.

**useMemo()**

O hooks useMemo nos permite armazenar o valor de retorno de uma função a partir dos parâmetros recebidos ([memoization](https://en.wikipedia.org/wiki/Memoization)). Ele nos ajuda a tornar os processamentos mais rápidos, já que só executa a função caso o valor não tenha sido guardado anteriormente.  Veja o exemplo abaixo:

![image](https://user-images.githubusercontent.com/65983895/145650471-8bfc9725-1ef2-4e56-936b-3e15ed604997.png)

[Exemplo de useMemo da documentação oficial do React](https://pt-br.reactjs.org/docs/hooks-reference.html#usememo)

Para usá-lo, passamos uma função como primeiro parâmetro, e o retorno dela é o valor armazenado na nossa variável, depois, passamos como segundo parâmetro um array em que armazenamos os itens para verificar se o processamento deve ou não ser feito.

**useRef()**

O useRef nos permite persistir valores entre renderizações, ele pode ser usado para armazenar o valor de uma variável mutável que não provoca uma re-renderização, ou para acessar um elemento DOM diretamente. 

Para evitar uma re-renderização (como o useState gera) podemos usar o useRef da seguinte forma:

![image](https://user-images.githubusercontent.com/65983895/145650521-ce9b4f37-f151-4626-9521-9b102af5057e.png)

[Exemplo de useRef da documentação oficial do React](https://pt-br.reactjs.org/docs/hooks-reference.html#usememo)

Para acessar o objeto, usamos a propriedade ``.current`` do useRef (é dessa forma que podemos acessar elementos do DOM).

Se ficou com dúvidas ou quer saber mais sobre outros hooks, acesse a [documentação oficial do React](https://pt-br.reactjs.org/docs/hooks-reference.html#usememo) e o [material da W3 Schools](https://www.w3schools.com/react/react_hooks.asp).
