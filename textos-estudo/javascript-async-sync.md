###  Funções síncronas e assíncronas: o que são e quando utilizar (Reforçando as bases parte 3 - JavaScript)

As funções síncronas e assíncronas fazem parte do dia a dia de um programador, e vamos entender com um pouco mais de profundidade a diferença entre elas, e quando utilizar cada 
tipo de função. Quando falamos em funções síncronas, falamos daquelas que ao executar um código, o resultado é retornado assim que o navegador puder. Já as assíncronas são aquelas 
que acessam ou buscam algum tipo de recurso em um dispositivo externo, como por exemplo um banco de dados, nesse tipo de função precisamos que nosso código espere que a resposta 
esteja disponível antes de executar a ação seguinte.

Uma função síncrona funciona da seguinte maneira, veja o código abaixo:

![image](https://user-images.githubusercontent.com/65983895/138315003-63d78a51-d1e2-4716-b043-97b65b55bf1c.png)

[Exemplo de função síncrona da MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Asynchronous/Introducing)

O que acontece aqui é que quando o elemento button receber um evento click, ele irá mostrar uma mensagem no alert(), quando o alert for dispensado, ele cria um elemento ` <p>`, e 
depois nós preenchemos esse elemento com um texto, e finalmente adicionamos no body. Veja que enquanto cada operação acontece, nada mais pode acontecer, isso porque o Javascript 
é uma linguagem single threaded (thread única), o que só permite que uma coisa aconteça de cada vez, bloqueando as demais operações até que a atual seja concluída. 

O ”blocking”, que é como chamamos esse momento em que o navegador espera o processamento finalizar, não é necessariamente um problema quando pensamos no nosso exemplo, mas imagine 
que queremos buscar um valor num banco de dados, e que precisamos aguardar esse resultado do banco voltar antes de executar alguma função ou mostrar algo ao usuário, mas não 
queremos que enquanto vamos buscar a informação no banco nosso cliente fique travado no browser, já que não sabemos nem quanto tempo nosso programa levaria para encontrar o dado, 
ou até mesmo se ele vai encontrar o que precisamos. Para esse tipo de situação, precisamos das funções assíncronas.

As funções assíncronas não precisam esperar que uma ação finalize para continuar a próxima tarefa, ou seja, é possível lidar com diversas requisições simultaneamente, terminando 
mais tarefas em um menor período.

Existem duas formas de códigos assíncronos no JavaScript que são as mais utilizadas, callbacks e promises. As funções callback são passadas como parâmetros para outra função 
([high-order function](https://eloquentjavascript.net/05_higher_order.html#h_xxCc98lOBK)), que vai executar o código de forma assíncrona, e uma vez que conseguir o resultado, executa o callback para informar que a tarefa foi finalizada.
Veja o exemplo abaixo:

![image](https://user-images.githubusercontent.com/65983895/138315251-01f83326-56dc-456f-bdd4-601cc3f271d6.png)

[Exemplo de callback retirado do Stack Overflow](https://pt.stackoverflow.com/questions/27177/o-que-%C3%A9-callback)

Aqui temos um event listener (falamos sobre eles no material de bubbling), o que acontece aqui é que a função callback será chamada quando um click acontecer na janela. 
Enquanto o click não acontece, o processador segue fazendo as outras tarefas da aplicação. Quando o nosso listener avisar que o click aconteceu, a função callback será 
executada e receberemos o tipo do evento  em um alert. Esse tipo de função é interessante, mas como programadores devemos ter cuidado e fazer abstrações melhores para evitar 
criar um [“callback hell”](http://callbackhell.com/), isso é quando tentamos escrever o código em uma forma que a execução aconteça visualmente de cima para baixo, fazendo nosso código parecer uma 
pirâmide.

As funções callback não são atualmente as mais usuais em JavaScript, hoje temos as promises, que são uma nova maneira de escrever códigos assíncronos e podem ser encontradas em 
APIs web mais modernas. As promises definem que ação vai ser executada no futuro, e pode ser resolvida (com sucesso) ou rejeitada (com erro). É importante lembrar que existe 
uma diferença entre “throw” um erro, e a rejeição de uma promise, o “throw” é equivalente a um return, ele para a execução do código, já a rejeição de uma promise faz com que o 
código continue sendo executado posteriormente. 

Veja o exemplo abaixo: 

![image](https://user-images.githubusercontent.com/65983895/138315476-cd709068-785f-4db1-98a1-808e148b87e8.png)

[Exemplo de funcionamento de promises de Lucas Santos](https://medium.com/trainingcenter/entendendo-promises-de-uma-vez-por-todas-32442ec725c2)

Nele vemos como funciona uma promise, toda função desse tipo retorna um método then e outro catch, no then dizemos o que deve acontecer caso nossa promise volte com sucesso, ou 
seja, quando vamos resolver ela. No catch, definimos como trataremos os erros de uma promise rejeitada. Ambos retornam outra promise, e isso permite que façamos um encadeamento 
de then. E quando queremos retornar o resultado final, fazemos resolve(resultado) e quando queremos retornar o erro fazemos reject(erro). 

Além da forma que acabamos de ver, utilizando o then, também podemos fazer promises usando async e await. Essa forma esconde as promessas para facilitar a leitura do código. 
Definindo uma função async, podemos utilizar o await antes de qualquer expressão que retorne uma promessa. Fazendo isso, a execução da função async só acontece quando a promise 
de await for resolvida. 

![image](https://user-images.githubusercontent.com/65983895/138315607-6aa7d68c-1e9d-49e7-9c8f-3d175f1e7d2d.png)

[Exemplo de async/await da Alura](https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar)

A função getUser é async, o que significa que o valor de retorno dessa função será “por baixo dos panos” uma promise. Se ela resolver, o objeto-promise retorna o valor, no caso 
de um erro, podemos usar try/catch para lidar com a exceção. 

Veja, utilizar promises com o método .then() traz uma sintaxe que faz mais sentido para o JavaScript quando usado de forma funcional, enquanto o async/away tem um fluxo de 
declarações que faz mais sentido se usado em métodos de classes. Mas note que os dois não são logicamente equivalentes, o async/await faz o processamento do código de forma 
sequencial, em quanto com as promises .then() o processamento é feito de forma paralela, tornando o método mais rápido. O async/await facilita a leitura do código, mas não é 
tão flexível e só funciona com uma promise por vez. O async/await é interessante quando precisamos por exemplo acessar um banco de dados como milhares de registros, já que 
muitas requisições simultâneas podem derrubar o serviço.

Agora, voltando a questão de funções síncronas e assíncronas, como vimos pelos exemplos, as funções assíncronas são úteis quando dependemos do resultado de alguma coisa para 
executar a função, enquanto as síncronas servem quando precisamos apenas de um resultado direto que não depende de outro processo ou serviço. Como programadores, nosso esforço 
é fazer as abstrações corretamente e entender que funções possuem dependências, e que funções podem acontecer de maneira individual. 

Para acessar o conteúdo no Linkedin, clique aqui. (aguardando revisão)
