### Manipulando o DOM (Reforçando as bases parte 3 - JavaScript)

O [DOM (Document Object Model)](http://devfuria.com.br/javascript/dom/) é a forma como o navegador interpreta nossos arquivos HTML em uma árvore. Por meio do DOM, o navegador decide quais partes são cabeçalhos, 
parágrafos, textos e armazena essa interpretação do HTML nessa estrutura de objetos.

![Exemplo de árvore DOM da Devmedia](https://user-images.githubusercontent.com/65983895/138307334-ccee77c6-1a8e-4739-b78e-a114f949f2a4.png)

[Exemplo de árvore DOM da Devmedia](https://www.devmedia.com.br/trabalhando-com-dom-em-javascript/29039)

Nosso navegador entende que elementos que possuem tags dentro de si são elementos pais, e aquelas tags dentro desse elemento são os filhos. Quando um elemento recebe mais 
de uma tag dentro de si, dizemos que seus filhos são irmãos. Essa ideia é importante porque nos ajuda a compreender como percorrer essa árvore do DOM e alterar a estrutura 
da página por meio do JavaScript, sem precisar mexer no documento HTML ou no CSS. 

Para manipular essa árvore, utilizamos o objeto “document”, que concede ao nosso JS o acesso ao DOM e nos dá permite usar algumas propriedades como por exemplo “getElementById” 
ou “CreateElement”. Com essas propriedades, podemos inserir, remover e alterar elementos na nossa página web, algumas das propriedades mais comuns são as mostradas abaixo:

![image](https://user-images.githubusercontent.com/65983895/138307496-9d6509f2-9bc7-4dff-98ec-caba0f7df2bf.png)

[Exemplo de propriedades do DOM do Devmedia](https://www.devmedia.com.br/trabalhando-com-dom-em-javascript/29039)

A vantagem de manipular os elementos dessa maneira, é que ela nos dá mais liberdade para criar páginas e elementos mais complexos, inclusive para criar efeitos CSS sem precisar 
recarregar a página e criar aplicações que são customizáveis pelo usuário, como por exemplo um modelo de criação de lista em que podemos adicionar ou excluir itens como mostra
o gif abaixo:

![1633701156731](https://user-images.githubusercontent.com/65983895/138307646-1db21b04-43cd-4157-965e-621e6d4da2c8.gif)

[Exemplo de manipulação de DOM com JavaScript retirado do meu projeto Foodfy](https://github.com/mjulialobo/Foodfy)

O único ponto de atenção, é que nem todos os browsers conseguem implementar o DOM de maneira consistente, então vale buscar uma boa biblioteca de JavaScript que abstraia a 
diferença dos navegadores para facilitar a sua vida. Para saber mais maneiras de manipular o DOM e quais propriedades usar, você pode acessar o material da [Devfuria](http://devfuria.com.br/javascript/dom/) e o material 
da [Tableless](https://tableless.com.br/entendendo-o-dom-document-object-model/).

Para ver a postagem no Linkedin, [clique aqui](https://www.linkedin.com/pulse/manipulando-o-dom-refor%C3%A7ando-bases-parte-3-javascript-lobo-/).
