### Styled Components  no React: uma lib que você precisa conhecer
Existem algumas maneiras de estilizar componentes React, mas nosso foco hoje serão os Styled Components, uma biblioteca (lib) que nos permite escrever códigos CSS dentro de um arquivo JavaScript. Algumas das vantagens de estilizar nossa aplicação dessa forma é que não precisamos ficar importando CSS nos nossos arquivos, e isso nos permite utilizar esse mesmo componente em outros projetos já que torna nosso código reutilizável e mais funcional. Além disso, essa lib torna nossos designs compatíveis com mais browsers, sem a necessidade de informar o .browserlistrc.

Por ser uma biblioteca, para adicionar Styled Components nos nossos projetos, precisamos utilizar o Yarn ou Npm como o exemplo abaixo:

<code>npm install styled-components --save</code>

Depois, precisamos importar as funcionalidades dessa biblioteca da seguinte forma:

<code>import styled from "styled-components";</code>

E para começar a estilizar seus componentes, basta chamar o styles, seguido do nome da tag, e entre crases adicionar as características que deseja. Veja o exemplo abaixo em que estilizamos uma tag button:

``` 
styled.button`
    background: #0099FF;
    border: 2px solid #0099FF;
    border-radius: 3px;
    color: #FDFDFD;
    font-size: 1.2rem;
    margin: 1rem;
    padding: 1rem 1.5rem;
`;
```
  
E por fim, podemos salvar essa estilização em uma variável para podermos exportá-lo e usar em outros pontos na nossa aplicação. O código completo fica como no exemplo abaixo:

``` 
import styled from "styled-components";
const MeuBotao = styled.button`
    background: #0099FF;
    border: 2px solid #0099FF;
    border-radius: 3px;
    color: #FDFDFD;
    font-size: 1.2rem;
    margin: 1rem;
    padding: 1rem 1.5rem;
`;
export default MeuBotao;
``` 
Para entender com mais profundidade como instalar e utilizar a biblioteca de Styled Components, acesse o [material de Matheus Castiglioni](https://blog.matheuscastiglioni.com.br/criando-styled-components-com-react/).
