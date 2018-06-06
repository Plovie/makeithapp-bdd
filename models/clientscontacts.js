'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('clientscontacts', {
    'horodateur': {
      type: DataTypes.DATE,
    },
    'societe': {
      type: DataTypes.STRING,
    },
    'contact': {
      type: DataTypes.STRING,
    },
    'email': {
      type: DataTypes.STRING,
    },
    'tel': {
      type: DataTypes.STRING,
    },
    'datein': {
      type: DataTypes.STRING,
    },
    'dateout': {
      type: DataTypes.STRING,
    },
    'description': {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'clientscontacts',
    
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

