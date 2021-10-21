### Event Bubbling em JavaScript: o que é e porque devemos conhecer (Reforçando as bases parte 3 - JavaScript)
Para entender sobre Bubbling, precisamos primeiro entender o que é um evento em JavaScript. Um evento é a interação do JS com páginas web HTML, isso é, ocorrências no sistema 
que estamos desenvolvendo, por exemplo quando um usuário clica em um botão numa página web e podemos dar alguma resposta como um modal com informações. Lembra quando falamos da 
DOM? Os eventos estão relacionados com ações do usuário na DOM, e como reagimos a essas ações.

Podemos capturar esses eventos quando colocamos um “handler”, que fica aguardando um sinal para executar uma ação. Existem vários tipos de eventos, clique de mouse em um elemento,
tecla sendo pressionada no teclado, usuário redimensionando ou fechando o navegador, página terminando de carregar, envio de formulário, interações com vídeos e até erros. 
Para entender que tipos de eventos existem e como capturá-los, acesse o [documento da MDN Web Docs.](https://developer.mozilla.org/en-US/docs/Web/Events)

Cada tipo de evento possui um event handler (ou event listeners em alguns casos) diferente, que é um bloco de código que podemos definir e que será executado quando o evento 
for disparado. Agora que entendemos o que é um evento, vamos falar sobre [Bubbling.](https://medium.com/totvsdevelopers/event-bubbling-no-javascript-9d6a8da32854)

Elementos HTML podem ser aninhados uns dentro dos outros (elementos pai e filhos) e quando atrelamos um evento JavaScript a um elemento pai E o DOM dele, o que acontece é que 
o evento é recebido pelos elementos pais mesmo que o gatilho tenha acontecido nos elementos filhos. Esse efeito é o Bubbling, que recebe esse nome pela forma como um evento 
“borbulha” do elemento mais aninhado até seu ancestral. Parece confuso, não é? Mas vamos entender melhor.

Vamos pensar assim, tenho um elemento HTML, uma div com um botão dentro. Quando pensamos em bubbling, o que acontece é que o evento vai do clique no botão, passa pela div, 
vai para body e HTML, e depois document (que falamos sobre no texto de DOM), ou seja, ele é identificado por todos os elementos pais atrelados à quem recebeu o clique.

![Exemplo de Bubbling de Vaibhav Sharma](https://user-images.githubusercontent.com/65983895/138305207-b83b09bd-e561-4310-a8d5-e1a4966e2921.PNG)

[Exemplo de Bubbling de Vaibhav Sharma](https://vsvaibhav2016.medium.com/event-bubbling-and-event-capturing-in-javascript-6ff38bec30e)

Porque é importante entender isso?  Pense que você criou funções on click diferentes para elementos pais e filhos, e por conta do Bubbling o evento do elemento pai seria disparado
quando clicamos no elemento filho, e no caso não é o que queremos. 

Digamos que o que queremos é que a ação on click do elemento filho seja disparada quando ele recebe o click, e que a ação do elemento pai só aconteça quando o click é direto no 
pai, mas já que o efeito sempre vai do elemento selecionado até o ponto mais alto, e isso significa que todos os ancestrais também identificam o evento click quando ele ocorre em 
algum elemento filho ou neto, teríamos as duas funções disparadas ao mesmo tempo. 
Nesse caso, o que podemos fazer é interromper o Bubbling com o método stopPropagation(), que nos ajuda a parar a execução do efeito Bubbling quando necessário. E é isso que como 
programadores temos que  ter em mente, em que momentos queremos que o Bubbling aconteça, e quando queremos que ele seja interrompido em algum elemento.

Para entender com mais profundidade esse efeito e como podemos usar ele a nosso favor nos códigos, acesse o [artigo de Mauricio Maujor Samy no Imasters](https://imasters.com.br/front-end/javascript-bubbling-e-capturing).
Acesse a publicação no Linkedin [clicando aqui](https://www.linkedin.com/pulse/event-bubbling-em-javascript-voc%C3%AA-j%C3%A1-ouviu-falar-refor%C3%A7ando-lobo-/).
