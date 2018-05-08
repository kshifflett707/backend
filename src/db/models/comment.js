export default (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    body: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [1, 2000],
          msg: 'Please enter a comment'
        }
      }
    }
  })

  Comment.associate = (models) => {
    Comment.belongsTo(models.User)
    Comment.belongsTo(models.Post)
  }

  return Comment
}
