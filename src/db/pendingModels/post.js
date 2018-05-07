'use strict';
export default (sequelize, DataTypes) => {
  var Post = sequelize.define('Post', {
    postId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    postTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    viewCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    answerCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [3, 150],
          msg: 'Please enter a title between 3 and 150 characters'
        }
      }
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [10, 2000],
          msg: 'Please enter a post between 10 and 2000 characters'
        }
      }
    },
    commentCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    favoriteCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    closedDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ownerUserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tag: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {});
  Post.associate = (models) => {
    Post.belongsTo(models.Post, {

    })
    Post.hasMany(models.Post, {as: 'Parent'})
    Post.hasOne(models.PostType)
    Post.belongsTo(models.User)
    Post.hasMany(models.Tag)
  }
  return Post
}
