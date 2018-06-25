'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('customers', {
    'name': {
      type: DataTypes.STRING,
    },
    'email': {
      type: DataTypes.STRING,
    },
    'phone': {
      type: DataTypes.STRING,
    },
    'description': {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'customers',
    
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

