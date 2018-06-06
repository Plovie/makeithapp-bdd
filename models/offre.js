'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('offre', {
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
    tableName: 'offre',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

