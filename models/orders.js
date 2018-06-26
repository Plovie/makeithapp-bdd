'use strict';

module.exports = (sequelize, DataTypes) => {
    var Model = sequelize.define('orders', {
        'created_at': {
            type: DataTypes.DATE,
        },
        'order_ref': {
            type: DataTypes.STRING,
        },
        'entry_at': {
            type: DataTypes.DATE,
        },
        'exit_at': {
            type: DataTypes.DATE,
        },
        'flexible': {
            type: DataTypes.BOOLEAN,
        },
        'surface_area': {
            type: DataTypes.INTEGER,
        },
        'request': {
            type: DataTypes.STRING,
        },
    }, {
        tableName: 'orders',
        underscored: true,
        timestamps: false,

    });

    Model.associate = (models) => {
        Model.belongsTo(models.customers, {
            foreignKey: 'customer_id',

            as: '_customer_id',
        });

    };

    return Model;
};

