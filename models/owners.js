'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('owners', {
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
    tableName: 'owners',
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

