'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('wp_comments', {
    'comment_ID': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'comment_post_ID': {
      type: DataTypes.INTEGER,
    },
    'comment_author': {
      type: DataTypes.STRING,
    },
    'comment_author_email': {
      type: DataTypes.STRING,
    },
    'comment_author_url': {
      type: DataTypes.STRING,
    },
    'comment_author_IP': {
      type: DataTypes.STRING,
    },
    'comment_date': {
      type: DataTypes.DATE,
    },
    'comment_date_gmt': {
      type: DataTypes.DATE,
    },
    'comment_content': {
      type: DataTypes.STRING,
    },
    'comment_karma': {
      type: DataTypes.INTEGER,
    },
    'comment_approved': {
      type: DataTypes.STRING,
    },
    'comment_agent': {
      type: DataTypes.STRING,
    },
    'comment_type': {
      type: DataTypes.STRING,
    },
    'comment_parent': {
      type: DataTypes.INTEGER,
    },
    'user_id': {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'wp_comments',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

