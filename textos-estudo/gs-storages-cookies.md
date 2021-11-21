###  LocalStorage, SessionStorage e Cookies, você sabe o que são? (Reforçando as bases parte 4 - General Skills)


No último texto falamos sobre os protocolos HTTP e HTTPS, e falamos sobre o tráfego de dados entre cliente e servidor. Com isso em mente, vamos falar sobre as formas de armazenar 
informações no browser do cliente. Existem três principais formas de armazenar dados, o LocalStorage, SessionStorage e os Cookies. 

O LocalStorage é uma forma de salvar dados no computador do cliente. Ele permite que salvemos pares de chaves e valores no web browser sem uma data de expiração. Essa forma de 
armazenamento só pode ser acessada via JavaScript e HTML5, mas é importante saber que o usuário pode limpar os dados/cache do browser se quiser. O limite de armazenamento de um 
LocalStorage é de cerca de 5MB e os dados não são transferidos para o servidor.

O SessionStorage é muito semelhante ao LocalStorage, o que muda aqui é que os dados armazenados dessa forma são limpos quando uma sessão termina, isso é, quando o browser ou a aba
é fechado. Além disso, o SessionStorage possui mais espaço de armazenamento, com capacidade de 5-10MB. 

Já os Cookies são uma maneira de websites armazenarem informações sobre as suas preferências ao acessar um mesmo site. Imagine que você acessa um site e precisa mudar o idioma 
dele, o que o Cookie faz é armazenar essa preferência, assim, da próxima vez que você acessar esse site, ele já carrega com a língua correta. Essas informações ficam salvas nos 
nossos sistemas locais e servem apenas para que o site nos identifique. O tempo de expiração de um Cookie pode ser definido tanto do lado do cliente quanto do servidor, e devem 
ser menores que 4KB.

Cada maneira de armazenamento tem uma função, e como programadores é importante reconhecer as diferenças e saber a melhor maneira de aplicá-los nos nossos sites. Para saber mais 
informações sobre esse tema, visite o material de [Krishankant Singhal](https://krishankantsinghal.medium.com/local-storage-vs-session-storage-vs-cookie-22655ff75a8).


Para ver a publicação no Linkedin, [clique aqui](https://www.linkedin.com/pulse/mobile-first-o-que-%C3%A9-e-quais-vantagens-refor%C3%A7ando-bases-lobo-/).
