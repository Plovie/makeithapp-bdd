'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('wp_commentmeta', {
    'meta_id': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'comment_id': {
      type: DataTypes.INTEGER,
    },
    'meta_key': {
      type: DataTypes.STRING,
    },
    'meta_value': {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'wp_commentmeta',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

