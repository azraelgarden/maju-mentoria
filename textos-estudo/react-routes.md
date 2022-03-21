### Criando rotas com React-Router-Dom

Em um site, precisamos navegar por várias páginas, e se você já programou um sitezinho, sabe que para isso precisamos criar rotas, e que cada rota representa uma tela que desenvolvemos. Em uma aplicação React, utilizamos um pacote chamado React Router Dom para trabalhar com as rotas.

Para começar, precisamos instalar esse pacote no nosso projeto utilizando o comando npm install react-router-dom. Feito isso, precisamos criar nosso arquivo routes.js, em que definiremos os paths da nossa aplicação.

No arquivo routes.js precisamos importar o react-router-dom e importar os componentes BrowserRouter, responsável por informar a nossa aplicação que teremos um roteamento de componentes, e o Route, componente que associa a rota ao componente.
O arquivo route.js ficaria assim:

![image](https://user-images.githubusercontent.com/65983895/148790391-cb3c7c35-a352-4c5e-855f-40b42fe9530e.png)

[Exemplo de arquivo routes.js do DevMedia](https://www.devmedia.com.br/react-js-criando-rotas-com-react-router-dom/42901)

E depois, basta importar o arquivo routes.js dentro do nosso arquivo app.js, para usarmos a navegação entre as páginas da aplicação. Feito isso, basta criar os componentes a serem exibidos de acordo com as URLs que queremos que nossos usuários acessem.

![image](https://user-images.githubusercontent.com/65983895/148790490-38501c82-8b6c-4431-86d7-326f2556f13b.png)

[Exemplo de arquivo app.js do DevMedia](https://www.devmedia.com.br/react-js-criando-rotas-com-react-router-dom/42901)

Agora, essa é a forma antiga de trabalhar com rotas. Hoje em dia,  utilizamos uma versão atualizada do react-router-dom, a V6. Começamos realizando a instalação dele no nosso projeto com o comando <code> npm install react-router-dom@6 </code>.

Depois, precisamos importar o router-dom no arquivo desejado, no exemplo usaremos o app.js para criar nossa configuração de rotas e começar a trabalhar com os links. No exemplo, estamos importanto além da nossa lib outros dois componentes Expenses e Invoices, e o que vamos fazer é definir a rota deles. 

![image](https://user-images.githubusercontent.com/65983895/149771916-cabe94e2-fb9c-43a3-8e25-4c8ecc9a107f.png)

[Exemplo de configuração de rota da documentação oficial](https://reactrouter.com/docs/en/v6/getting-started/tutorial)

Como podemos ver, em termos de configuração as duas versões são semelhantes, o que muda é a forma como definimos nossas rotas, veja que no antigo passamos um component seguido de um path, e na v6 o componente <code> Route </code> recebe uma prop chamada <code> element </code> em que passamos um componente a ser renderizado. Além disso, o que na v5 seria o Switch, foi substituído por Routes. 

Para entender mais diferenças entre as versões, leia o [conteúdo feito por Arunava Modak](https://dev.to/arunavamodak/react-router-v5-vs-v6-dp0) e para entender como instalar e utilizar ambas as versões, veja a [documentação oficial do React-Router-Dom](https://reactrouter.com/docs/en/v6).
