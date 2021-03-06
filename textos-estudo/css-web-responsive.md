### Design Responsivo, diferentes abordagens que podemos ter (Reforçando as bases parte 2 - CSS)
Em um mundo com tantos tamanhos diferentes de tela e dispositivos diferentes, responsividade é uma parte importante da programação. O Responsive Web Design é uma 
solução técnica para o desenvolvimento de sites para diferentes aparelhos, e nos ajuda a programar um site de forma que os elementos se ajustem a todos os tipos de tela.

Um design responsivo é aquele que adapta o layout da página de acordo com a resolução, redimensiona imagens para que caibam nas telas e não sejam pesadas, simplifica e 
oculta elementos desnecessários para dispositivos menores, adapta tamanhos de botões e links, e se adapta à orientação do aparelho (horizontal ou vertical). Agora, como 
desenvolver esse tipo de design?

Podemos criar design responsivos usando Media Queries, um recurso que nos permite executar uma série de testes para identificar o tamanho da tela e alterar o design de 
acordo com especificações feitas por nós. Com as Queries, conseguimos adaptar nosso conteúdo para diferentes dispositivos, e a melhor maneira de aplicar esse recurso, é 
com o conceito de Mobile First (nosso próximo tema). Para saber como aplicar Media Queries e suas possibilidades, acesse o [conteúdo da MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Media_Queries/Using_media_queries).

Outra maneira de trabalhar a responsividade do seu site, é usando grids-flexíveis. Com grid-template-columns ou grid-template-rows, e utilizando as medidas em fr e definir 
a proporção que cada linha e coluna ocupam, e dessa forma podemos adaptar layouts para diferentes dispositivos.

E por fim, a última abordagem para a responsividade é com base no Viewport, com essa propriedade definida usando width=device-width estamos dizendo para o código 
que ele deve corresponder à largura da tela em pixels independente de dispositivos. O problema dessa estratégia, é que podemos cometer o erro de criar elementos que 
não caibam dentro do viewport especificado. A maneira de corrigir isso, é preferindo usar medidas em percentual para os elementos e utilizar medida em fr para grids, 
além dessas dicas, você encontra outras no material da [Web Dev](https://web.dev/responsive-web-design-basics/).

Para acessar o conteúdo no Linkedin, [clique aqui](https://www.linkedin.com/pulse/design-responsivo-diferentes-abordagens-que-podemos-ter-lobo-/).
