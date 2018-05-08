export default (sequelize, DataTypes) => {

  var Vote = sequelize.define('Vote', {
    type: DataTypes.STRING
  })

  Vote.associate = (models) => {
    Vote.belongsTo(models.Post)
    Vote.belongsTo(models.User)
  }

  return Vote
}
