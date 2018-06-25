'use strict';

module.exports = (sequelize, DataTypes) => {
    var Model = sequelize.define('styles', {
        'style_fr': {
            type: DataTypes.STRING,
        },
        'style_en': {
            type: DataTypes.STRING,
        }
    }, {
        tableName: 'styles',
        timestamps: false,

    });

    Model.associate = (models) => {
    };

    return Model;
};
