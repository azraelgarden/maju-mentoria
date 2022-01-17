### Storybook: o que é e por que usar

O Storybook é uma ferramenta opensource utilizada para o desenvolvimento de UIs, com ele criamos um ambiente isolado para criar nossos componentes, ou seja, não precisamos desenvolvê-los diretamente no nosso sistema. Essa estratégia é interessante porque nos ajuda a evitar alguns erros comuns na hora de desenvolver componentes reutilizáveis, como por exemplo integrar com alguma fonte de dados, ou torná-lo mais complexo do que o necessário. Quem nunca comentou algumas linhas pra testar algo,esqueceu de descomentar e quebrou a aplicação? 

Com essa ferramenta conseguimos acessar nossos componentes de forma isolada, testar individualmente, e inclusive podemos utilizar o Storybook como forma de documentar nossa biblioteca de componentes. E para utilizar é bem simples, basta criar um projeto e utilizar o comando <code> npx -p @storybook/cli sb init --type react </code> para React.

Ao fazer isso, você vai notar que uma pasta <code> .storybook </code> foi criada no nosso projeto, dentro dela existe um arquivo <code> main.js </code> com as configurações, depois, precisamos rodar o comando <code> npm run storybook </code> , e se tudo estiver correto, nosso projeto será aberto no navegador. Feito isso, criamos uma pasta componentes dentro de story e podemos começar a fazer nossa UI.

Para saber com mais detalhes como utilizar o Storybook uma vez que você o instalou, confira a documentação oficial.
