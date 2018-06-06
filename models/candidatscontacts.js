'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('candidatscontacts', {
    'horodateur': {
      type: DataTypes.DATE,
    },
    'nom': {
      type: DataTypes.STRING,
    },
    'prenom': {
      type: DataTypes.STRING,
    },
    'email': {
      type: DataTypes.STRING,
    },
    'tel': {
      type: DataTypes.STRING,
    },
    'langues': {
      type: DataTypes.STRING,
    },
    'cv': {
      type: DataTypes.STRING,
    },
    'photo': {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'candidatscontacts',
    
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

