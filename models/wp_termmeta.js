'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('wp_termmeta', {
    'meta_id': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'term_id': {
      type: DataTypes.INTEGER,
    },
    'meta_key': {
      type: DataTypes.STRING,
    },
    'meta_value': {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'wp_termmeta',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

