
export default (sequelize, DataTypes) => {
  var VoteType = sequelize.define('VoteType', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  VoteType.associate = function(models) {
    VoteType.belongsToMany(models.Vote)
  };
  return VoteType;
};