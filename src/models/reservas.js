import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { clientes } from "./clientes.js";
import { autos } from "./autos.js";

export const reservas = sequelize.define('reservas', {
    id_reserva: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    fecha_entrega: {
        type: DataTypes.DATE
    },
    fecha_devolucion: {
        type: DataTypes.DATE
    },
    monto: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false
}
);

reservas.belongsTo(clientes, {
    foreignKey: 'id_cliente',
    targetKey: 'id_cliente'
});

clientes.hasMany(reservas, {
    foreignKey: 'id_cliente',
    targetKey: 'id_cliente'
});
reservas.belongsTo(autos, {
    foreignKey: 'id_auto',
    targetKey: 'id_auto'
})

autos.hasMany(reservas, {
    foreignKey: 'id_auto',
    targetKey: 'id_auto'
})
