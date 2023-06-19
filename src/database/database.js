import Sequelize from "sequelize";

export const sequelize = new Sequelize('rentaCar', 'postgres', '1234',
    {
        host: 'localhost',
        dialect: 'postgres'

    });

// export const sequelize = new Sequelize('rentacar', 'root', '', {
//     host: 'localhost',
//     dialect: 'mysql'
//   });