
export default (sequelize, DataTypes) => {
  var Vote = sequelize.define('Vote', {
    postId: DataTypes.INTEGER,
    voteTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Vote.associate = function(models) {
    Vote.hasOne(models.VoteType)
    Vote.hasOne(models.User)
  };
  return Vote;
};