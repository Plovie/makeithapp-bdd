'use strict';


module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('places', {
    'owner_id': {
      type: DataTypes.INTEGER,
    },
    'pdf_url': {
      type: DataTypes.STRING,
    },
    'photo_5': {
      type: DataTypes.STRING,
    },
    'photo_4': {
      type: DataTypes.STRING,
    },
    'photo_3': {
      type: DataTypes.STRING,
    },
    'photo_2': {
      type: DataTypes.STRING,
    },
    'photo_1': {
      type: DataTypes.STRING,
    },
    'surface_area': {
      type: DataTypes.INTEGER,
    },
    'reference': {
      type: DataTypes.STRING,
    },
    'name': {
      type: DataTypes.STRING,
    },
    'description_fr': {
      type: DataTypes.STRING,
    },
    'description_en': {
      type: DataTypes.STRING,
    },
    'lat': {
      type: DataTypes.STRING,
    },
    'lng': {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'places',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
    Model.belongsTo(models.areas);
    Model.belongsTo(models.types);
    Model.belongsTo(models.styles);
    Model.belongsTo(models.owners);

  };

  return Model;
};

