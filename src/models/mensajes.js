import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { usuarios } from "./usuarios.js";


export const mensajes = sequelize.define('mensajes', {
    id_mensaje: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    mensaje: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    fecha_emision: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    timestamps: false
});

mensajes.belongsTo(usuarios,{
    foreignKey: 'id_emisor',
    targetKey: 'id_usuario'
})

usuarios.hasMany(mensajes,{
    foreignKey: 'id_emisor',
    targetKey: 'id_usuario'
})

mensajes.belongsTo(usuarios,{
    foreignKey: 'id_receptor',
    targetKey: 'id_usuario'
})

usuarios.hasMany(mensajes,{
    foreignKey: 'id_receptor',
    targetKey: 'id_usuario'
})