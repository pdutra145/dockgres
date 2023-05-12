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

### dockgres set \<service>

`dockgres set <service>` is a tool that facilitates the creation of PostgresSQL and pgadmin containers
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

### Remove Dockgres from your sys

Use `dockgres kill` to remove dockgres completely from your system. After that, make sure you close the terminal and open a new one or restart your shell session.

**Note:** _It is recommended to close the terminal and open a new instance_

<br>

### Reinstall Dockgres

If you decide to reinstall the script, you will have to manually `cd` to the dockgres directory and run `bash ./scripts/dockgres.sh`

<br>
<br>

:brazil:

# Dockgres

:br:

## Descrição

Dockgres é uma ferramenta que facilita sua vida na configuração do PostgresSQL com containers docker. Ele usa nodejs, scripts shell e docker-compose para tornar isso possível.

## Requisitos

Certifique-se de ter instalado no seu sistema:

- Docker
- Docker Compose versão 3+
- Nodejs

## Configuração

### Linux :penguin:

1. Crie um novo diretório chamado dockgres no seu sistema com `mkdir dockgres`
2. Clone este repositório com `git clone https://github.com/pdutra145/dockgres.git`
3. Execute o script acessando `sh ./scripts/dockgres.sh`
4. Você está pronto para usar!!!

## Comandos Dockgres

<br>

### dockgres set \<serviço>

`dockgres set <serviço>` é uma ferramenta que facilita a criação de contêineres PostgresSQL e pgadmin fornecendo uma interface de linha de comando simples e elegante. Ele usa pacotes como Inquirer, Commander e Chalk para fazer isso. O serviço é uma opção que define qual contêiner você deseja criar. Ele solicitará que você defina as variáveis ​​de ambiente importantes para configurar seu contêiner docker. Existem duas opções:

- **postgresql**: cria o contêiner que será baseado na imagem oficial do PostgresSQL.
- **pgadmin**: cria o contêiner baseado na imagem pgadmin.

<br>

### Criando e excluindo contêineres

- Execute `dockgres create` para criar os contêineres e a rede com o arquivo docker compose (sem executá-los).
- Execute `dockgres delete` para excluir os contêineres e a rede.

<br>

### Iniciando contêineres

Com esses dois contêineres, você poderá executar sua aplicação postgres.
Use `dockgres start` para iniciar sua aplicação em contêiner e `dockgres end` para encerrar sua aplicação em contêiner.

<br>

### Removendo Dockgres do seu sistema

Use `dockgres kill` para remover completamente o dockgres do seu sistema. Depois disso, certifique-se de fechar o terminal e abrir um novo ou reiniciar sua sessão shell.

**Nota:** _Recomenda-se fechar o terminal e abrir uma nova instância_

<br>

### Reinstalando o Dockgres

Se você decidir reinstalar o script, deverá manualmente `cd` para o diretório dockgres e executar `bash ./scripts/dockgres.sh`
