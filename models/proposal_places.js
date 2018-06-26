'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('proposal_places', {
    'day_price': {
      type: DataTypes.FLOAT,
    },
    'day_margin': {
      type: DataTypes.FLOAT,
    },
    'day_cost': {
      type: DataTypes.FLOAT,
    },
    'total_price': {
      type: DataTypes.FLOAT,
    },
    'total_margin': {
      type: DataTypes.FLOAT,
    },
    'total_cost': {
      type: DataTypes.FLOAT,
    },
    'number_days': {
      type: DataTypes.INTEGER,
    },
      'status': {
          type: DataTypes.ENUM(['A proposer','Proposée','Refusée','Acceptée'])
      },
  }, {
    tableName: 'proposal_places',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
      Model.belongsTo(models.proposals)
      Model.belongsTo(models.places)
  };

  return Model;
};

