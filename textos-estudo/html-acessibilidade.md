### Como tornar sua página mais acessível (Reforçando as bases parte 1 - HTML)

Começando o segundo texto da minha jornada de reforçar as bases de programação, vamos falar sobre acessibilidade em HTML! 

Acessibilidade tem sido um tema cada vez mais frequente no nosso dia-a-dia, e como programadores é um pilar importante do desenvolvimento. Como comentado no artigo anterior, 
utilizar o HTML semântico é um dos primeiros passos (e um dos mais importantes) para um código acessível, uma vez que as estruturas conseguem ser melhor compreendidas pelos 
leitores automáticos de texto e tecnologias assistivas de forma geral. Mas além do uso da semântica no código, existem outras maneiras de tornar sua página mais acessível.

O primeiro ponto interessante é WAI-ARIA, como em algumas situações a acessibilidade em elementos não semânticos ou dinâmicos como os de Javascript são difíceis de ser controladas,
a W3C desenvolveu uma [especificação escrita](https://www.w3.org/TR/html-aria/) que define um conjunto de atributos HTML para acessibilidade. Existem três principais recursos, os atributos role, que definem o que é 
e o que faz cada elemento, propriedades como por exemplo “aria-required=”true””, que especifica que um campo deve estar preenchido para validar um formulário, e estados, como 
“aria-disabled="true"”, que definem as condições atuais de um elemento, como um formulário que está inativo naquele momento.

Além do WAI-ARIA, outra maneira de tornar seus códigos mais acessíveis, é definindo a linguagem do seu documento no ínicio do seu HTML utilizando o clássico <html lang="pt-br">, 
  isso porque dessa forma fica mais fácil para as tecnologias assistivas definirem perfil de voz e conjunto de caracteres, e também ajuda nas ferramentas de SEO e de tradução.

Landmarks também são outro ponto importante em códigos acessíveis, eles são pontos de referência de leitores de tela para saltos no conteúdo, e devem ser usados para marcar blocos
importantes como menus, conteúdos principais, campos de busca e etc, para que o usuário consiga acessar diretamente esses elementos. Para entender mais sobre Landmarks, acesse o 
[material da w3c](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/HTML5.html).

A semântica do código como falamos é bem importante, outras dicas nesse sentido seriam criar um padrão de títulos, como por exemplo utilizar h1 para todos os títulos principais, 
h2 para secundários, para que o leitor de telas navegue de maneira hierárquica pelos títulos, evitar usar o hífen, abreviações, e tente expandir acrônimos pelo menos uma vez, 
por exemplo dizer Search Engine Optimization no lugar de SEO.

E por fim, algumas outras dicas importantes são:

-Utilizar o atributo alt em imagens com um texto alternativo que descreva a foto;
  
-Criar tabelas utilizando a separação de conteúdo corretamente com as tags <th> e <td>;
  
-Utilize HTML semântico sempre que possível;
  
-Evite fontes de ícones, pois o formato não é acessível;
  
-Não utilize somente cores para transmitir informações (ex: pintar algo de vermelho para mostrar um erro);
  
-Textos de links devem ser descritivos (não “clique aqui”);
  
-Links sublinhados são mais fáceis de serem identificados;
  
-Teste sua página sem CSS e veja se as estruturas fazem sentido;
  
-Se possível, disponibilize um “modo noturno” do site.
