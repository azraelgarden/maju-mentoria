### Protocolos HTTP e HTTPS, o que você precisa saber.  (Reforçando as bases parte 4 - General Skills)

Você já deve ter se deparado com o HTTP ou HTTPS no início de quase todas as URLs que acessou na vida, certo? Bom, nós vamos falar sobre eles. O HTTP (Hypertext Transfer Protocol 
ou Protocolo de Transferência de Hipertexto em português) é um protocolo que define como será a comunicação entre um navegador e um servidor web (como o World Wide Web), e é um 
dos principais responsáveis por fazer com que as pessoas acessem os sites disponíveis na internet.

O HTTP foi criado para padronizar e organizar os dados que trafegam pela rede garantindo que qualquer computador tivesse acesso aos conteúdos da internet, e funciona através de 
um modelo computacional chamado cliente-servidor, em que o navegador (cliente) se comunica com um servidor e ambos trocam informação entre si. 

Chamamos de solicitação (request ) a mensagem enviada pelo cliente, e  de  resposta (response) a enviada pelo servidor. Essas mensagens não são tratadas pelo usuário final, elas 
são processadas e interpretadas pelos navegadores e programas, com ajuda dos seus servidores.

Ok, mas e o HTTPS? Apesar do HTTP ter permitido a comunicação, ele não protegia o cliente  de sites mal-intencionados que interceptam dados. Por conta desse tipo de site, o HTTP 
deixou de ser seguro, então criaram o HTTPS  (Hyper Text Transfer Protocol Secure) que funciona da mesma maneira que seu antecessor, mas com uma camada de segurança na transmissão
de dados.

No HTTPS, além dos sites precisarem de um certificado digital, que só é concedido aos sites que tiveram sua autenticidade verificada, as informações são criptografadas para 
garantir que nenhum dado sensível trafegue na forma de texto puro na rede.

Como a internet continua crescendo, é possível que esse protocolo continue evoluindo para que possamos nos conectar cada vez mais de forma mais segura. Para entender os 
protocolos com mais detalhes, acesse o material da [Dev Content](https://devcontent.com.br/artigos/redes/como-funciona-o-protocolo-https-que-torna-a-web-mais-autentica-e-segura).
