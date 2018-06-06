'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('wp_usermeta', {
    'umeta_id': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'user_id': {
      type: DataTypes.INTEGER,
    },
    'meta_key': {
      type: DataTypes.STRING,
    },
    'meta_value': {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'wp_usermeta',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

