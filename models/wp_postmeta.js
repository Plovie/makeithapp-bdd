'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('wp_postmeta', {
    'meta_id': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'post_id': {
      type: DataTypes.INTEGER,
    },
    'meta_key': {
      type: DataTypes.STRING,
    },
    'meta_value': {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'wp_postmeta',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

