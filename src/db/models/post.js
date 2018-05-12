export default (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    associatedQuestionId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
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
    },
    type: {
      type: DataTypes.STRING,
      defaultValue: 'comment'
    }
  });

  Post.associate = (models) => {
    Post.belongsTo(models.User);
    Post.belongsTo(models.Post);
    Post.hasMany(models.Post);
  };

  Post.getAllPosts = () => Post.findAll({
    include: [{all: true}]
  });

  Post.getPostsByType = (type) => Post.findAll({
    where: {type}
  });

  Post.getPostsByQuery = (query) => Post.findAll({
    where: query
  });

  Post.createNewPost = ({userid, title, body, type, associatedQuestionId}) => Post.create({
    userid,
    title,
    body,
    type,
    associatedQuestionId: associatedQuestionId
  });

  Post.getPostById = (postId) => Post.findById(postId);

  return Post;

}