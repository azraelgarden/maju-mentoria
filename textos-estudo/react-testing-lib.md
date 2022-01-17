### React Testing Library: facilitando testes em react

Conforme o React ganhou popularidade, os testes de componentes se tornaram uma preocupação. O teste de componentes basicamente consiste em garantir, por exemplo, que ao apertar um botão ele faça o que é esperado, ou que um dropdown mostre uma lista de opções quando acionado, ou até mesmo se os elementos de um componente carregam corretamente. 

Claro, essa forma de pensar testes de componentes nem sempre foi a “oficial”, algumas pessoas faziam testes relacionados aos estados, mas se pensarmos melhor, ao testar a alteração de um estado não estamos testando se o componente efetivamente realiza o que planejamos. Aí entra o React Testing Library (RTL), que nos força a escrever testes que, de fato, testam a funcionalidade de componentes. 

Para utilizar o RTL, começamos instalando a lib com o comando <code> npm install --save-dev @testing-library/react </code>, feito isso, criamos nosso arquivo de testes, realizamos importações e começamos a conferir se nosso componente faz o que queremos que ele faça.

No exemplo, vamos testar um dropdown, queremos que ele comece fechado, abra ao ser clicado e mostre opções de uma lista, e uma vez que um item é clicado, queremos que a lista feche e a opção indicada seja selecionada. 

![image](https://user-images.githubusercontent.com/65983895/149782461-fe405ec2-d75e-42b1-8d12-005d027fbea0.png)

[Exemplo de estrutura de teste de Ricardo Pedroni](https://medium.com/reactbrasil/testes-eficientes-usando-react-testing-library-580abb64ef98)

Agora que temos nossa importação feita, e sabemos o que queremos testar, vamos construir o código do primeiro teste “should begin closed”, em que vamos fazer o mock do nosso componente, e então escrever o que esperamos de cada elemento.

![image](https://user-images.githubusercontent.com/65983895/149782523-bb5b445a-52d3-4907-82df-e7a83294998d.png)

[Exemplo de teste de Ricardo Pedroni](https://medium.com/reactbrasil/testes-eficientes-usando-react-testing-library-580abb64ef98)

E pronto, temos um teste unitário de um componente! Para entender outras possibilidades do RTL acesse a [documentação oficial](https://testing-library.com/docs/).
