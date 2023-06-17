import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const autos = sequelize.define('autos',{
    id_auto:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
    , placas:{
        type: DataTypes.STRING,
        unique: true
    },
    marca: {
        type: DataTypes.STRING,
    },
    modelo:{
        type: DataTypes.STRING,
    },
    anio: {
        type: DataTypes.INTEGER
    },
    fotos:{
        type: DataTypes.STRING
    },
    detalles:{
        type: DataTypes.STRING
    },
    estado:{
        type: DataTypes.STRING
    },
    tipo:{
        type: DataTypes.STRING
    },
    precio:{
        type: DataTypes.INTEGER
    }
},{
    timestamps: false
})