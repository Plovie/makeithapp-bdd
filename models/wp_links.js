'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('wp_links', {
    'link_id': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'link_url': {
      type: DataTypes.STRING,
    },
    'link_name': {
      type: DataTypes.STRING,
    },
    'link_image': {
      type: DataTypes.STRING,
    },
    'link_target': {
      type: DataTypes.STRING,
    },
    'link_description': {
      type: DataTypes.STRING,
    },
    'link_visible': {
      type: DataTypes.STRING,
    },
    'link_owner': {
      type: DataTypes.INTEGER,
    },
    'link_rating': {
      type: DataTypes.INTEGER,
    },
    'link_updated': {
      type: DataTypes.DATE,
    },
    'link_rel': {
      type: DataTypes.STRING,
    },
    'link_notes': {
      type: DataTypes.STRING,
    },
    'link_rss': {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'wp_links',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

