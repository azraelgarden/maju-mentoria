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

Para saber mais sobre como utilizar o react-router-dom, acesse o [material do DevMedia](https://www.devmedia.com.br/react-js-criando-rotas-com-react-router-dom/42901).
