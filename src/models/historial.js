import { sequelize } from "../database/database.js";
import { clientes } from "./clientes.js";
import { pagos } from "./pagos.js"
import { DataTypes } from "sequelize";


export const historials = sequelize.define('historials', {
    id_historial: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fecha_renta: {
        type: DataTypes.DATEONLY
    },
    comentario: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false
});

historials.belongsTo(clientes, {
    foreignKey: "id_cliente",
    targetKey: "id_cliente"
})
clientes.hasMany(historials, {
    foreignKey: "id_cliente",
    targetKey: "id_cliente"
})

historials.belongsTo(pagos, {
    foreignKey: "id_pago",
    targetKey: "id_pago"
});
pagos.hasMany(historials, {
    foreignKey: "id_pago",
    targetKey: "id_pago"
})
