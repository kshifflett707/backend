export default (sequelize, DataTypes) => {
  var Post = sequelize.define('Post', {
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
          args: [1, 2000],
          msg: 'Please enter a post between 1 and 2000 characters'
        }
      }
    }
  })

  Post.associate = (models) => {
    Post.hasOne(models.Type)
    // this will put a foreign key for postId in the User model
    // and give User .setPost() and .getPost() instance methods
    Post.belongsTo(models.User)
    Post.belongsTo(models.Post, {as: 'Comment'})
  }

  return Post

}
