'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('users', {
    'log': {
      type: DataTypes.STRING,
    },
    'pass': {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'users',
    
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

