'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('metiersliste', {
    'titre': {
      type: DataTypes.STRING,
    },
    'titre_en': {
      type: DataTypes.STRING,
    },
    'perma': {
      type: DataTypes.STRING,
    },
    'texte': {
      type: DataTypes.STRING,
    },
    'texte_en': {
      type: DataTypes.STRING,
    },
    'image': {
      type: DataTypes.STRING,
    },
    'vignette': {
      type: DataTypes.STRING,
    },
    'ordre': {
      type: DataTypes.INTEGER,
    },
    'online': {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'metiersliste',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

