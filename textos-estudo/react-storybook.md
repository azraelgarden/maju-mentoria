### Storybook: o que é e por que usar

O Storybook é uma ferramenta opensource utilizada para o desenvolvimento de UIs, com ele criamos um ambiente isolado para criar nossos componentes, ou seja, não precisamos desenvolvê-los diretamente no nosso sistema. Essa estratégia é interessante porque nos ajuda a evitar alguns erros comuns na hora de desenvolver componentes reutilizáveis, como por exemplo integrar com alguma fonte de dados, ou torná-lo mais complexo do que o necessário. Quem nunca comentou algumas linhas pra testar algo,esqueceu de descomentar e quebrou a aplicação? 

Com essa ferramenta conseguimos acessar nossos componentes de forma isolada, testar individualmente, e inclusive podemos utilizar o Storybook como forma de documentar nossa biblioteca de componentes. E para utilizar é bem simples, basta criar um projeto e utilizar o comando <code> npx -p @storybook/cli sb init --type react </code> para React.

Ao fazer isso, você vai notar que uma pasta <code> .storybook </code> foi criada no nosso projeto, dentro dela existe um arquivo <code> main.js </code> com as configurações, depois, precisamos rodar o comando <code> npm run storybook </code> , e se tudo estiver correto, nosso projeto será aberto no navegador. Feito isso, criamos uma pasta componentes dentro de story e podemos começar a fazer nossa UI.

Para exemplificar, usaremos o caso mostrado na documentação oficial do Storybook. Vamos pensar que queremos criar um componente que exiba na tela checkbox que são representados de forma diferente dependendo do estado, como mostra a foto abaixo:

![image](https://user-images.githubusercontent.com/65983895/159268125-dc43ec7e-4524-4178-b61f-7e5ca4505412.png)

[Exemplo da documentação oficial do Storybook](https://storybook.js.org/tutorials/intro-to-storybook/react/en/simple-component/)

Primeiro, precisamos criar nosso componente e sua story:` src/components/Task.js` e `src/components/Task.stories.js`, e então criamos as funções básicas que recebem os atributos necessários e realizam a ação de movem os itens para listas diferentes.

Em `src/components/Task.js`: 
```
import React from 'react';

export default function Task({ task: { id, title, state }, onArchiveTask, onPinTask }) {
  return (
    <div className="list-item">
      <input type="text" value={title} readOnly={true} />
    </div>
  );
}
```
Então, continuamos nosso código adicionando os 3 estados (default, pinned e archived) em `src/components/Task.stories.js`:

```
import React from 'react';

import Task from './Task';

export default {
  component: Task,
  title: 'Task',
};

const Template = args => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
  ```
Feito isso, documentamos nosso componente criando um export padrão que contenha o componente, e o título que queremos dar a ele (é o nome que aparecerá no sidebar do app). Com mais algumas configurações, já conseguimos ver nosso componente e alterar seu estado, argumentos e interagir com o componente como mostra o exempo abaixo:



https://user-images.githubusercontent.com/65983895/159270710-e6e7dc1a-8ea7-4d74-ba8e-a1d2e28aca53.mp4



Para saber com mais detalhes como utilizar o Storybook e configurações adicionais, confira a [documentação oficial](https://storybook.js.org/tutorials/intro-to-storybook/react/en/get-started/).
