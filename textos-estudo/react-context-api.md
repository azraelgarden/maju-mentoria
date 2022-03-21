### Context API: facilitando o acesso a informações entre componentes
Se você acompanhou os outros textos que fiz durante a mentoria, já deve ter se deparado com os props e a forma como eles se comportam entre componentes pais e filhos no React. Sabemos que  se quisermos que algum dado do componente pai persista no filho, precisamos informar esse dado na props do filho. Em alguns casos, esse processo é bem simples, passando props de um componente A para um B por exemplo, mas e se tivermos mais componentes? Bom, digamos que eu queira passar uma informação de um componente A até D, isso envolveria um código complexo já que D precisaria estar dentro de A (e imagine isso indo cada vez mais longe), chamamos esse processo de [prop-drilling](https://www.alura.com.br/artigos/prop-drilling-no-react-js?gclid=Cj0KCQiA8vSOBhCkARIsAGdp6RTLLOHjkB4ElZDO2_W0LhBQQyUWk0ULVSnga3fAbmlzAbUiw3Ccp6EaAlNxEALw_wcB).

Aí entra a Context API para nos salvar dos problemas que o prop-drilling pode causar em aplicações em que precisamos passar informações de um top-level component para um bottom-level component. Na documentação do React a API é descrita como uma maneira de passar dados entre componentes sem ter que manualmente e explicitamente declarar os props em todos os níveis. Ela é indicada para compartilhar dados considerados globais, como por exemplo um idioma selecionado pelo usuário, ou algum tipo de autenticação. Utilizar a Context API nos ajuda a economizar linhas e simplificar o código, especialmente quando precisamos que uma informação seja acessada por MUITOS componentes, mas tenha em mente que ela pode dificultar a reutilização deles, então cuidado.

![image](https://user-images.githubusercontent.com/65983895/148785458-7cd672c7-3993-4e48-9b69-b831ee581a2c.png)

[Exemplo de como a Context API atua de William Queiroz](https://medium.com/@wnqueiroz)

Para usar a Context API, existem algumas funções e propriedades que precisamos conhecer. São elas:
<ul>
  <li><strong>React.createContext</strong>: cria um objeto contexto, que lê o valor atual do Provider (componente superior na árvore) que estiver mais próximo. O argumento defaultValue só é usado quando o componente não corresponde a um provider acima dele. 
    
     const MyContext = React.createContext(defaultValue); 
 
  </li>
  <li><strong>Context.Provider</strong>: cada objeto contexto vem com um componente provider, esse componente aceita uma prop value que pode ser passada para ser consumida por componentes descendentes dele.
   
     <MyContext.Provider value={/* some value */}>; 
  
  </li>
  <li><strong>Class.contextType</strong>: essa propriedade pode ser atribuída a um objeto contexto criado pelo React.CreateContext(). Usar ela permite que você consuma o valor atual mais próximo deste contexto usando <code>this.context</code>. 
    
  
    class MyClass extends React.Component {
      static contextType = MyContext;
      render() {
        let value = this.context;
        /* renderiza algo baseado no valor */
      }
    }

  </li>
 </ul>

Para entender mais a fundo como usar a Context API e suas vantagens, acesse a [documentação oficial do React](https://pt-br.reactjs.org/docs/context.html).
