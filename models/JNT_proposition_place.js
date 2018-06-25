'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('JNT_proposition_place', {
  }, {
    tableName: 'JNT_proposition_place',
    
    timestamps: false,
    
  });

  Model.associate = (models) => {
    Model.belongsTo(models.propositions, {
      foreignKey: 'proposition_id',
      
      as: '_proposition_id',
    });
    
    Model.belongsTo(models.places, {
      foreignKey: 'place_id',
      
      as: '_place_id',
    });

      Model.removeAttribute('id');
    
  };



  return Model;
};

