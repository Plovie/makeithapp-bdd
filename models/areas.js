'use strict';

module.exports = (sequelize, DataTypes) => {
    var Model = sequelize.define('areas', {
        'area': {
            type: DataTypes.STRING,
        }
    }, {
        tableName: 'areas',
        timestamps: false,

    });

    Model.associate = (models) => {
    };

    return Model;
};
