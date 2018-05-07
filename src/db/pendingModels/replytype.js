
export default (sequelize, DataTypes) => {
  var ReplyType = sequelize.define('ReplyType', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  ReplyType.associate = function(models) {
    // associations can be defined here
  };
  return ReplyType;
};