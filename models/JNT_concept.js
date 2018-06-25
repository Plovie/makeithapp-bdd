'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('JNT_concept', {
  }, {
    tableName: 'JNT_concept',
    
    timestamps: false,
    
  });

  Model.associate = (models) => {
    Model.belongsTo(models.places, {
      foreignKey: 'place_id',
      
      as: '_place_id',
    });
    
    Model.belongsTo(models.concepts, {
      foreignKey: 'concept_id',
      
      as: '_concept_id',
    });
    
  };

  return Model;
};

