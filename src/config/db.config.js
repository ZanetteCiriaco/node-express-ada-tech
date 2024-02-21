const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD, 
  {
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
);

// Precisa rodar apenas uma vez
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão bem-sucedida com o banco de dados.');

    await sequelize.sync({ alter: true });
    console.log('Migrações concluídas com sucesso.');

    //process.exit(0);
  } catch (error) {
    console.error('Erro ao conectar e sincronizar com o banco de dados:', error);
    //process.exit(1);
  }
})();

module.exports = sequelize