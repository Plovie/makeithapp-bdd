'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('prehome', {
    'image': {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'prehome',
    
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

