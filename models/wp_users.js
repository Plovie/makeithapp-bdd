'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('wp_users', {
    'ID': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'user_login': {
      type: DataTypes.STRING,
    },
    'user_pass': {
      type: DataTypes.STRING,
    },
    'user_nicename': {
      type: DataTypes.STRING,
    },
    'user_email': {
      type: DataTypes.STRING,
    },
    'user_url': {
      type: DataTypes.STRING,
    },
    'user_registered': {
      type: DataTypes.DATE,
    },
    'user_activation_key': {
      type: DataTypes.STRING,
    },
    'user_status': {
      type: DataTypes.INTEGER,
    },
    'display_name': {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'wp_users',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

