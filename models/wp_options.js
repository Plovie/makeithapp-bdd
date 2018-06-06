'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('wp_options', {
    'option_id': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'option_name': {
      type: DataTypes.STRING,
    },
    'option_value': {
      type: DataTypes.STRING,
    },
    'autoload': {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'wp_options',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

