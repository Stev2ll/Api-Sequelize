import { sequelize } from "../database/database.js";
import { clientes } from "./clientes.js";
import { autos } from "./autos.js";
import { DataTypes } from "sequelize";

export const pagos = sequelize.define('pagos', {
    id_pago: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    fecha_pago: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    monto: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
}, {
    timestamps: false
});


pagos.belongsTo(clientes, {
    foreignKey: 'id_cliente',
    targetKey: 'id_cliente'
});

clientes.hasMany(pagos, {
    foreignKey: 'id_cliente',
    targetKey: 'id_cliente'
});
pagos.belongsTo(autos, {
    foreignKey: 'id_auto',
    targetKey: 'id_auto'
})

autos.hasMany(pagos, {
    foreignKey: 'id_auto',
    targetKey: 'id_auto'
});
