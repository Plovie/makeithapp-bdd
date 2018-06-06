'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('wp_term_taxonomy', {
    'term_taxonomy_id': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'term_id': {
      type: DataTypes.INTEGER,
    },
    'taxonomy': {
      type: DataTypes.STRING,
    },
    'description': {
      type: DataTypes.STRING,
    },
    'parent': {
      type: DataTypes.INTEGER,
    },
    'count': {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'wp_term_taxonomy',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

