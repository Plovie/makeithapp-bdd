'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('prestations', {
    'texte': {
      type: DataTypes.STRING,
    },
    'texte_en': {
      type: DataTypes.STRING,
    },
    'image': {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'prestations',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

