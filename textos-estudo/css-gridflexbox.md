### Grid e Flexbox, quando usar cada um? (Reforçando as bases parte 2 - CSS)

Começando nosso segundo tema da jornada de reforçar as bases de programação, vamos entrar em CSS falando sobre Grid e Flexbox. Essas propriedades nos ajudam 
no alinhamento de objetos horizontal e verticalmente, e para entender quando utilizar cada uma vamos primeiro entender como cada uma funciona.

O Flexbox é unidimensional, organizado por linhas OU colunas, e nos ajuda a construir designs responsivos e flexíveis. Os elementos são envolvidos por um flex-container, 
e ao denominar os elementos pai e filhos podemos alterar a posição deles, espaço que ocupam do container, e a direção. Além disso, com esse método não precisamos nos preocupar 
com a quantidade de elementos. Para entender de maneira completa como posicionar os elementos utilizando o Flexbox, você pode consultar o [material do CSS Trick](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

![image](https://user-images.githubusercontent.com/65983895/138311193-0207ebf7-d5ca-4459-a2d3-a5a02b1f427b.png)

[Exemplo de direcionamento de css trick](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

Já o Grid, é multidimensional, organizado por linhas E colunas e nos ajuda a trabalhar com layouts. Os elementos são envolvidos pelo Grid Container, e os elementos dentro 
são os Grid Items. Por padrão, o grid cria uma única coluna em que cada elemento está em uma linha. A diferença aqui está em como alteramos os espaços. Podemos criar mais 
linhas e colunas, alterar seus tamanhos, adicionar espaços entre elas (gaps), e definir as proporções que cada elemento ocupa. Para entender mais possibilidades acesse o 
[material do triângulo dev](https://triangulo.dev/posts/css-grid-o-que-voce-precisa-saber).

![image](https://user-images.githubusercontent.com/65983895/138311316-d268e5ed-791d-4ef2-becd-d2dab22bead3.png)

[Exemplo de grid do triângulo dev](https://triangulo.dev/posts/css-grid-o-que-voce-precisa-saber)

Bom, agora que você entendeu um pouco da diferença entre Grid e Flexbox, vamos falar sobre quando usar cada um deles. O Flexbox é uma lista in-line de elementos, ele serve 
para alinhamento de componentes criando linhas ou colunas, sendo útil na criação de menus verticais ou horizontais e alinhar elementos unidimensionais. Já o Grid, alinha 
seus elementos em colunas e linhas, e pode ser útil para definir a estrutura de uma página e formar layouts.

Mas veja bem, nem todo caso é de um OU outro, existem situações em que utilizar CSS Grid E Flexbox pode ser uma alternativa inteligente. No exemplo abaixo, temos uma página
que foi construída com Flexbox no menu, e Grid para o layout de conteúdo.

![image](https://user-images.githubusercontent.com/65983895/138311388-59dd1c33-8ba2-40d2-a79d-e4e5db454a26.png)

[Exemplo de página com Grid e Flexbox do Treinaweb](https://www.treinaweb.com.br/blog/flexbox-ou-css-grid)

Em suma, podemos considerar que para definir qual dos dois é melhor, precisamos analisar cada caso e qual a necessidade, mas é interessante ter em mente que o Flexbox é 
mais adequado para o alinhamento de componentes, enquanto o Grid funciona melhor para lidar com layouts. Com o tempo de uso dos dois, escolher o melhor para a necessidade 
fica mais intuitivo.

Para ver o conteúdo no Linkedin, [clique aqui](https://www.linkedin.com/pulse/grid-e-flexbox-quando-usar-cada-um-refor%C3%A7ando-bases-parte-lobo-/).
