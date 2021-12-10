## State e Lifecycle no React

Continuando nos temas de React, vamos falar sobre State (estado) e Lifecycle (ciclo de vida), dois temas importantes para entendermos melhor o comportamento de componentes, e como torná-los mais dinâmicos.  

O estado de um componente é um objeto que guarda as informações que podem mudar ao longo do seu ciclo de vida, e esses estados permitem que o componente acompanhe as mudanças de informação a cada renderização. 

Para usar um estado, precisamos que ele sempre exista no componente, por isso começamos definindo um estado inicial, e isso pode ser feito em um construtor de um Class Component. Para atualizar ele, precisamos primeiro entender que ele nunca deve ser explicitamente atualizado, o correto é usar o método setState(), que atualiza o estado e depois chama o método render().

Bom, e o ciclo de vida? Entendemos um ciclo de vida como algo que nasce, se desenvolve e morre, e os componentes seguem essa lógica no React. Eles são criados (montados do DOM), se desenvolvem (updates), e morrem (desmontados do DOM), e em cada fase desse ciclo temos alguns métodos disponíveis.

Separamos o ciclo de vida do React em 4 etapas, são elas:
<ol>
  <li><strong>Inicialização:</strong> quando estamos definindo estados e props, normalmente ocorre dentro de um método construtor;</li>
  <li><strong>Mounting:</strong> momento em que o React “monta” o componente no DOM, é quando temos o primeiro render;</li>
  <li><strong>Updating:</strong> após o componente ser criado, começam as mudanças de estado e a re-renderização, e as alterações ocorrem de acordo com ações do usuário, como cliques ou digitar;</li>
  <li><strong>Unmouting:</strong> momento em que o componente é “desmontado” do DOM.</li>
 </ol>
 
 Para saber os métodos disponíveis para cada momento do ciclo e mais detalhes sobre o funcionamento dos estados, acesse a [documentação oficial do React](https://pt-br.reactjs.org/docs/state-and-lifecycle.html).
