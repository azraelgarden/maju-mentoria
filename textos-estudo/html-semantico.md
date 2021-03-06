### Por que usar HTML semântico? (Reforçando as bases parte 1 - HTML)

1 ano como programadora! Aprendi muito, desenvolvi projetos de diferentes complexidades, 
mas e a base dos conhecimentos de programação?

Bom, para quem também está migrando para essa área e não tem condições de fazer uma graduação (seja pelo motivo que for) o caminho são cursos online. Eu comecei minha trajetória com a 
Rocketseat participando de algumas Next Level Week e  do Launchbase (não existe mais, hoje sugiro o Discovery), e recomendo para todes. Mas só isso basta? 

Nós podemos fazer vários cursos, ver vídeos, e ler livros, mas se a base não estiver sólida, avançar em programação se torna desafiador. Com os conceitos fundamentais firmes, 
aprender uma nova linguagem ou a trabalhar com um novo framework se torna mais simples, e muitos cursos não  nos ensinam esses conteúdos de forma tão profunda e técnica como precisamos. Hoje, trabalhando 
no GRUPO SBF, tenho a oportunidade de ter um mentor, Azrael Garden, que está me dando suporte na minha solidificação de bases!  

E um dos produtos dessa mentoria, é esse artigo! O primeiro de uma série de conceitos de  programação (e alguns projetos), que vou escrever a partir do que estudo, um resumo! Então 
vamos ao que interessa, dentro do primeiro pilar, que é  HTML, vamos falar sobre semântica!

Elementos semânticos em HTML, são aqueles que são claros tanto para o desenvolvedor, como para o browser. Vamos pensar em uma tabela, podemos construí-la  de formas diferentes. Podemos usar uma `<div id=”table”>`
e com CSS criar um grid, ou podemos fazer da forma semântica, e usar o elemento `<table>`. 

Isso é a semântica em HTML, são elementos como `<form>, <table> e <article>` que descrevem com precisão o propósito do elemento, e seu tipo de conteúdo, ao invés de `<div> e <span>`  que precisamos descrever para 
que servem utilizando Id’s ou class. Ou seja, ao construir uma página com elementos semânticos, teríamos uma estrutura como a da imagem abaixo:

 ![image](https://user-images.githubusercontent.com/65983895/138312848-2e1d8de2-3872-48b5-ba41-637b3f80b68a.png)

[fonte: w3schools](https://www.w3schools.com/html/html5_semantic_elements.asp)

Mas por que isso é importante? Quando o HTML surgiu, sua função era servir como [markup](https://www.britannica.com/technology/markup-language) para compartilhar documentos. 
Como a internet não tinha sido feita para receber layouts, os programadores utilizavam alguns “hacks” para construir layouts diferentes, e daí vieram os elementos não semânticos como `<div class="header">`.

Com o HTML5, podemos usar os elementos semânticos, e eles são melhores porque além de tornar a leitura do código mais simples, também o torna mais acessível, uma vez que mecanismos de busca e tecnologias assistivas (como leitores de tela) conseguem entender
com mais facilidade o contexto e conteúdo disponíveis na página.

Outra vantagem, é que eles tornam o código mais consistente. Pensando em um único elemento e utilizando divs, podemos escrever `<div class="table">, <div id="table">, <div class="table"> ou só <div>`, enquanto com um único elemento semântico conseguimos 
criar a mesma tabela com uma tag `<table>`, e identificá-lo mais facilmente no nosso CSS. E por fim, uma outra vantagem interessante é que o código se torna mais leve para o Mobile.

Agora que você entendeu o que são elementos semânticos e as vantagens de codar seu HTML dessa forma, o que acha de testar? 
Para conhecer os diferentes elementos e suas utilizações, você pode conferir o [material da w3School sobre elementos semânticos](https://www.w3schools.com/tags/ref_byfunc.asp). 

Para ver o conteúdo no Linkedin, [clique aqui](https://www.linkedin.com/pulse/por-que-usar-html-sem%C3%A2ntico-refor%C3%A7ando-bases-parte-1-lobo-/).
