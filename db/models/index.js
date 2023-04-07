// Normaliza o código, ajuda a evitar gambiarras
'use strict';

// Variáveis de ambiente
require('dotenv').config();

// Permite trabalhar com o sistema de arquivos do seu PC
const fs = require('fs');

// Fornece utilitários para trabalhar com caminhos de arquivos e diretórios
const path = require('path');

// Sequelize é um ORM para node.js, que tem suporte de vários bancos de dados
// ORM (Mapeamento Objeto-Relacional), as tabelas do banco de dados são representadas em classes e os registros das tabelas seriam instâncias dessas classes 
const Sequelize = require('sequelize');

// Permite obter informações do processo na página atual
const process = require('process');

// Permite obter parte do caminho para o arquivo
const basename = path.basename(__filename);

// Verificar se deve usar a variável global ou 'development'
const env = process.env.NODE_ENV;

// Incluir o arquivo
const config = require(__dirname + '/../config/config.js')[env];

// Criar a constante com o objeto vazio
const db = {};

// Criar a variável que recebe a conexão com banco de dados
let sequelize;

// Verificar qual configuração de banco de dados você deseja usar
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  // Usar as configurações do arquivo "config/database.js"
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

try {
  console.log("Conexão com banco de dados realizada com sucesso!");
}catch(error) {
  console.error("Erro: Conexão com o banco de dados não funcionou!", error);
}

// Identificar o model
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Atribuir a conexão com banco de dados para o objeto db
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Exportar a instrução que está dentro da constante db
module.exports = db;
