'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('wp_term_relationships', {
    'object_id': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'term_taxonomy_id': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'term_order': {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'wp_term_relationships',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

