### Hoisting em JavaScript: o que é e o que devemos ter atenção (Reforçando as bases parte 3 - JavaScript)

Hoisting acontece no momento da compilação, e é a forma como o JavaScript move todas as declarações para o topo do escopo antes de começar a executar um código, e isso independe 
delas serem de escopo global ou local(se global vai para o topo do escopo global, e se local vai para o topo do escopo local). Mas atenção, o hoisting apenas movimenta as 
declarações, as atribuições são deixadas no lugar (exemplo: valores de variáveis var viram undefined).

O conceito pode ser confuso no começo, mas entenda que o hoisting não move de verdade seu código, na verdade o que acontece é o armazenamento em memória durante a fase de 
compilação do JavaScript. Na prática, isso permite que você use uma função antes dela ser declarada no seu código, como mostra o exemplo.

![image](https://user-images.githubusercontent.com/65983895/138306038-9d321753-1fa2-4d3f-8622-00b18aed4b3b.png)

[Exemplo de Hoisting do MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Glossary/Hoisting)

O que precisamos entender aqui é como o JavaScript interpreta nossos códigos, e como sabendo disso podemos escrevê-los de maneira mais inteligente. Veja por exemplo o 
código abaixo, ele nos retornaria “undefined”, isso porque o JS colocaria a variável “message” no topo do escopo da função sem valor definido, em seguida o console.log, e 
depois a definição do valor de message, ou seja, ele entende que a variável existe, mas como as atribuições não são “hoistadas” o JS entende que nós declaramos a existência da 
variável e pedimos o seu valor sem antes defini-lo, retornando o padrão do tipo de variável var (undefined).

![image](https://user-images.githubusercontent.com/65983895/138306200-95e95169-861a-4c63-b5b9-bce9592496bd.png)

[Exemplo de código que retorna undefined da Digital Ocean](https://www.digitalocean.com/community/tutorials/understanding-hoisting-in-javascript)

A forma de corrigir isso, seria declarando message e seu valor ANTES de usar a variável, como mostra o código abaixo. 

![image](https://user-images.githubusercontent.com/65983895/138306337-3f1a06d3-cb98-4ec3-8873-4cb5b6203a23.png)

[Exemplo de correção do código anterior da Digital Ocean](https://www.digitalocean.com/community/tutorials/understanding-hoisting-in-javascript)

Além do caso acima, para variáveis Let e Const precisamos de um pouco mais de atenção na ordem em que declaramos e definimos valores para nossas variáveis, portanto os pontos de 
atenção para o Hoisting são:

-Variáveis de tipo Let e Const nos retornam reference errors se utilizadas antes de declaradas, e diferente de var, não são colocadas no topo do escopo, e sim no topo do bloco de 
código que fazem parte;
-As variáveis declaradas com let e const permanecem não inicializadas no início da execução, enquanto as variáveis declaradas com var são inicializadas com um valor de undefined;
-Para evitar erros, declare e inicialize (atribua valores)para as suas variáveis ANTES de usá-las no código;
-As declarações de funções são “hoistadas” sobre as declarações de variáveis, mas não sobre as atribuições de variáveis;

Para ver a postagem no Linkedin, [clique aqui](https://www.linkedin.com/pulse/hoisting-em-javascript-o-que-%C3%A9-e-devemos-ter-aten%C3%A7%C3%A3o-refor%C3%A7ando/).
