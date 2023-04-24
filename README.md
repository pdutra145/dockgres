# Dockgres

:us:

## Description

Dockgres is a tool that makes your life easier when setting up PostgresSQL with docker containers. It uses nodejs, shell scripting, and docker-compose to
make that possible.

## Requirements

Make sure you have installed in your system:

- Docker
- Docker Compose version 3+
- Nodejs

## Setting up

### Linux :penguin:

1. Create a new directory called dockgres in your system with `mkdir dockgres`
2. Clone this repo with `git clone https://github.com/pdutra145/dockgres.git`
3. Run the script by accessing `sh ./scripts/dockgres.sh`
4. You are ready to use !!!

## Dockgres Commands

<br>

### dockgres build \<service>

`dockgres build <service>` is a tool that facilitates the creation of PostgresSQL and pgadmin containers
by providing a simple and cool CLI interface. It uses packages such as Inquirer, Commander, and Chalk to get
that done. The service is an option that defines what container you want to build. It will ask you for important
enviroment variables to set up your docker container. There are two options:

- **postgresql**: builds the container that will be based on the PostgresSQL official image.
- **pgadmin**: builds the container based on the pgadmin image.

<br>

### Creating and Deleting containers

- Run `dockgres create` to build the containers and network with docker compose file (without running).
- Run `dockgres delete` to delete the containers and network.

<br>

### Starting containers

With these two containers, you will be able to run your postgres application.
Use `dockgres start` to start your container app and `dockgres end` to end your
container app.

<br>
<br>

:brazil:

## Descrição

O Dockgres é uma ferramenta que facilita a configuração do PostgresSQL com containers do Docker. Ele utiliza o nodejs, shell scripting e o docker-compose para tornar isso possível.

## Requisitos

Certifique-se de ter instalado no seu sistema:

- Docker
- Docker Compose versão 3+
- Nodejs

## Configuração

### Linux :penguin:

1. Crie um novo diretório chamado "dockgres" no seu sistema com o comando `mkdir dockgres`
2. Clone este repositório com o comando `git clone https://github.com/pdutra145/dockgres.git`
3. Execute o script acessando `sh ./scripts/dockgres.sh`
4. Você está pronto para usar!

## Comandos do Dockgres

<br>

### dockgres build \<serviço>

`dockgres build <serviço>` é uma ferramenta que facilita a criação de containers PostgresSQL e pgadmin, fornecendo uma interface CLI simples e amigável. Ele utiliza pacotes como Inquirer, Commander e Chalk para isso. O serviço é uma opção que define qual container você deseja construir. Ele irá solicitar importantes variáveis de ambiente para configurar seu container do Docker. Existem duas opções:

- **postgresql**: constrói o container que será baseado na imagem oficial do PostgresSQL.
- **pgadmin**: constrói o container baseado na imagem do pgadmin.

<br>

### Criando e Deletando contêineres

- Execute o comando `dockgres create` para construir os contêineres e a rede utilizando o arquivo docker compose (sem executar).
- Execute o comando `dockgres delete` para deletar os contêineres e a rede.

<br>

### Inicializando contêineres

Com esses dois containers, você poderá executar sua aplicação Postgres. Use `dockgres start` para iniciar o aplicativo do seu container e `dockgres end` para encerrar o aplicativo do seu container.
