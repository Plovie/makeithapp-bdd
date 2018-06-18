'use strict';

module.exports = (sequelize, DataTypes) => {
    var Model = sequelize.define('concepts', {
        'concept_fr': {
            type: DataTypes.STRING,
        },
        'concept_en': {
            type: DataTypes.STRING,
        }
    }, {
        tableName: 'concepts',
        timestamps: false,

    });

    Model.associate = (models) => {
    };

    return Model;
};
