'use strict';

module.exports = (sequelize, DataTypes) => {
    var Model = sequelize.define('propositions', {
        'total_cost': {
            type: DataTypes.DOUBLE,
        },
        'total_price': {
            type: DataTypes.DOUBLE,
        },
        'margin_day': {
            type: DataTypes.DOUBLE,
        },
        'cost_day': {
            type: DataTypes.DOUBLE,
        },
        'price_day': {
            type: DataTypes.DOUBLE,
        },
        'created_at': {
            type: DataTypes.DATE,
        },
        'entry_at': {
            type: DataTypes.DATE,
        },
        'exit_at': {
            type: DataTypes.DATE,
        },
        'number_days': {
            type: DataTypes.INTEGER,
        },
        'status': {
            type: DataTypes.ENUM('En attente','En cours','Refusée','Acceptée')
        }
    }, {
        tableName: 'propositions',
        underscored: true,
        timestamps: false,

    });

    Model.associate = (models) => {
        Model.belongsTo(models.places);
        Model.belongsTo(models.customers);
    };

    return Model;
};

