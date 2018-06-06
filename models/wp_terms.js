'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('wp_terms', {
    'term_id': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'name': {
      type: DataTypes.STRING,
    },
    'slug': {
      type: DataTypes.STRING,
    },
    'term_group': {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'wp_terms',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

