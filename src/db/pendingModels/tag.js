
export default (sequelize, DataTypes) => {
  var Tag = sequelize.define('Tag', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Tag.associate = function(models) {
    Tag.belongsToMany(models.Post)
  };
  return Tag;
};