'use strict';

module.exports = (sequelize, DataTypes) => {
    var Model = sequelize.define('types', {
        'type_fr': {
            type: DataTypes.STRING,
        },
        'type_en': {
            type: DataTypes.STRING,
        }
    }, {
        tableName: 'types',
        timestamps: false,

    });

    Model.associate = (models) => {
    };

    return Model;
};
