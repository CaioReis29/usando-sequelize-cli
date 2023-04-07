Para rodar o projeto baixando ele você precisa:

##Instalar todas as dependencias indicada pelo package.json

### npm i

Para criar o projeto:
##Criar o arquivo package

### npm init

O sequelize é uma biblioteca JavaScript que facilita no gerenciamento do banco de dados SQL

### npm i --save sequelize

Instalar o drive do banco de dados (Vou usar o MySql)

### npm i --save mysql2

Sequelize-cli é uma interface de linha de comando usada para criar modelos, configurações e arquivos de migração para banco de dados

### npm i --save-dev sequelize-cli

Iniciar o sequelize-cli e criar arquivo config

### npx sequelize-cli init

Para rodar o projeto

### node app.js

Para manipular variáveis de ambiente

### npm i --save dotenv

Criar a migration

### npx sequelize-cli migration:generate --name create-users

Para executar as migrations 

### npx sequelize-cli db:migrate

Para adicionar uma nova coluna usando migration

### npx sequelize-cli migration:generate --name alter-user

Após fazer as mudanças no diretório criado, digite novamente

### npx sequelize-cli db: migrate

Para criar rollback (reverter mudanças no banco de dados)

### npx sequelize-cli db:migrate:undo --name nome-da-migration

Para criar a models

### npx sequelize-cli models:generate --name nome-da-model --attributes name:Sting, email:String, imagem:String