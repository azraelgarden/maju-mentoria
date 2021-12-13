## Functional Components e Class Components: diferenças e quando usar
Continuando nosso reforço de bases de programação, vamos nos aprofundar no universo de Javascript e falar sobre o React, uma biblioteca de JS que tem sido muito utilizado por grandes 
empresas. Vamos começar a entender como funcionam os componentes no React. Existem duas formas de definir um componente, podemos fazer da forma funcional, ou por meio de uma classe
ES6.

Um Functional Component, recebe esse nome por se tratar de uma função que aceita um único argumento de objeto chamado “props” (propriedades), e retorna dados com um elemento React. 

![image](https://user-images.githubusercontent.com/65983895/145094812-819c215c-d186-4b10-83d7-d423961fe781.png)

[Exemplo de componente funcional da documentação do React](https://pt-br.reactjs.org/docs/components-and-props.html)

Já um Class Component estende um Component padrão do React, e ao fazer isso, criamos uma herança do React.Component e podemos acessar suas funções, e com o método render retornamos
HTML.

![image](https://user-images.githubusercontent.com/65983895/145094851-ad08a2fc-364a-4257-b9fc-431857ab3f4e.png)

[Exemplo de class component da documentação do React](https://pt-br.reactjs.org/docs/components-and-props.html)

Ambos os exemplos são equivalentes do ponto de vista do React, e possuem o mesmo resultado, mas no dia a dia como programadores, precisamos entender quando usar um Class Component ou um Functional Component. Até a atualização 16.7.0 do React, as lógicas mais complexas de funções eram feitas usando os Class Components já que eles nos permitem trabalhar com estados e eventos, enquanto os Functional Components serviam quando precisávamos apenas para exibir alguma UI. 

Com a atualização temos os Hooks (trataremos deles com detalhes mais pra frente), e eles nos permitem fazer com Functional Components o que antes apenas um Class Component conseguia fazer e com menos verbosidade, tornando nosso código mais legível. Ou seja, se você tiver a possibilidade de usar uma versão mais atual do React, procure sempre usar Functional Components, e quando precisar trabalhar com versões mais antigas, Class Components para lógicas e Functional para exibições.

E por fim, um ponto importante é que embora ambos tenham funções diferentes, uma coisa é comum, os props são somente leitura, e não podem ser modificados, eles precisam ser funções
puras, o que podemos alterar são as saídas a partir dos estados, que são nosso próximo tema. 

Para entender mais sobre o React e seus componentes, acesse a [documentação oficial do framework](https://pt-br.reactjs.org/docs/components-and-props.html).
