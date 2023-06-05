import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const licencias =  sequelize.define('licencia',
    {
        id_licencia: {
            type: DataTypes.INTEGER,
            autoIncrement: false,
            primaryKey: true
        },
        fecha_emision:{
            type: DataTypes.DATE
        },
        fecha_caducidad:{
            type: DataTypes.DATE
        },
        estado:{
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        categorias:{
            type: DataTypes.STRING
        }
    }, {
        timestamps: false
}
)