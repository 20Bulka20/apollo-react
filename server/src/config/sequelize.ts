import {Sequelize} from 'sequelize'

export const sequelize = new Sequelize('miniShopDB', 'postgres', 'Polina', {
    host: 'localhost',
    dialect: 'postgres'
  });
  
export const sequelizeConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}