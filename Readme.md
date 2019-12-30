# SKY NODE TEST
API Restfull para o avaliação de teste proposto

## Requisitos
Para rodar o projeto são necessários alguns requisitos:
 - Nodejs 10 ou superior
 - Docker 19.03.5
 - Docker Compose 1.24.1
 - Yarn 1.19.2

## Instalação
Para ter a aplicação funcionando, além dos requisitos você deve seguir os seguintes passos: 
 - Faça um clone deste repositório
 - Execute o comando yarn dentro da pasta do projeto para que sejam instaladas todas a dependências do mesmo.


## Docker
O banco de dados (MongoDB) do projeto está em um container de docker, sendo assim basta levantar o container e a API deve funcionar. O container está configurado no docker-compose.yml, caso tenha interesse em altera-lo.

Para subir o container basta rodar no terminal na pasta do projeto o comando: 
```
$ docker-compose up -d
```


## Testes 
O projeto conta com alguns testes unitários, e para executá-los é necessário rodar o seguinte comando: `yarn test` ou se preferir `npm run test`. Serão rorados todos os testes e gerados os arquivos de coverage, onde lá é informado a porcentagem em que o teste cobre cada arquivo do projeto.

## Rodando a API
Para rodar a API basta utilizar o comando `yarn start` ou `npm run start` se preferir. Os scripts serão executados automáticamente, subindo o container (caso já não esteja em pé) e realizando a compilação do código de Typescript para javascript

## Rotas

A API conta com as seguintes rotas: 

- /signUp - *Rota responsável pelo cadastro do usuário*
- /signIn - *Rota responsável pela autenticação do usuário* 
- /users - *Rota responsável por listar os usuários, sendo obrigatório fornecer token de autenticação*

## Estrutura de diretórios

```
src
│
│
└───__test__
│
│
└───controllers
│
│
└───middlewares
│
│
└───models
│     
│  
|
└───routes
```