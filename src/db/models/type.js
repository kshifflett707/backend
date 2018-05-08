export default (sequelize, DataTypes) => {

  const Type = sequelize.define('Type', {
    name: DataTypes.STRING
  })

  Type.associate = (models) => {
    Type.belongsTo(models.Post)
  }

  return Type
}
