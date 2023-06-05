import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const roles = sequelize.define(
    'roles',{
        id_rol:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre:{
            type: DataTypes.STRING,
        },
        descripcion: {
            type: DataTypes.STRING,
        }
    },
    {
        timestamps: false
    });