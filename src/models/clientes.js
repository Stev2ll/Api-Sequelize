import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { licencias } from "./licencias.js";
import { usuarios } from "./usuarios.js";


export const clientes = sequelize.define('clientes',
{
    id_cliente:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre:{
        type: DataTypes.STRING
    },
    apellido:{
        type: DataTypes.STRING
    },
    cedula:{
        type: DataTypes.STRING, 
        unique: true
    },
    genero:{
        type: DataTypes.STRING
    },
    estado:{
        type: DataTypes.STRING
    } ,
    foto:{
        type: DataTypes.STRING
    }
}
,{
    timestamps: false
})


clientes.belongsTo(usuarios,{
    foreignKey: 'id_usuario' ,
    targetKey: 'id_usuario'
})

usuarios.hasOne(clientes,{
    foreignKey: 'id_usuario' ,
    targetKey: 'id_usuario' 
})

clientes.belongsTo(licencias,{
    foreignKey: 'id_licencia' ,
    targetKey: 'id_licencia'
})
    
licencias.hasOne(clientes,{
    foreignKey: 'id_licencia' ,
    targetKey: 'id_licencia' 
})


