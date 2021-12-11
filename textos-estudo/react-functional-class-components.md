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

Ambos os exemplos são equivalentes do ponto de vista do React, e possuem o mesmo resultado, mas no dia a dia como programadores, precisamos entender quando usar um Class Component 
ou um Functional Component. A lógica é simples, os Class Components nos ajudam a compor a parte lógica de códigos já que podem gerenciar estados e manipular eventos, enquanto os 
Functional Components  devem ser usados sempre que possível por sua simplicidade (o que ajuda na velocidade da renderização), quando queremos apenas exibir alguma UI.

E por fim, um ponto importante é que embora ambos tenham funções diferentes, uma coisa é comum, os props são somente leitura, e não podem ser modificados, eles precisam ser funções
puras, o que podemos alterar são as saídas a partir dos estados, que são nosso próximo tema. 

Para entender mais sobre o React e seus componentes, acesse a [documentação oficial do framework](https://pt-br.reactjs.org/docs/components-and-props.html).
