'use strict';

module.exports = (sequelize, DataTypes) => {
    var Model = sequelize.define('proposals', {
        'created_at': {
            type: DataTypes.DATE,
        },
        'proposal_place_id': {
            type: DataTypes.INTEGER,
        },
        'final_order_id': {
            type: DataTypes.INTEGER,
        },
        'status': {
            type: DataTypes.ENUM(['En attente', 'En cours', 'Refusée', 'Acceptée'])
        },
    }, {
        tableName: 'proposals',
        underscored: true,
        timestamps: false,

    });

    Model.associate = (models) => {
        Model.belongsTo(models.orders);
        Model.hasMany(models.proposal_places);

    };

    return Model;
};

