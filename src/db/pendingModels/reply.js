
export default (sequelize, DataTypes) => {
  var Reply = sequelize.define('Reply', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    replyTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Reply.associate = function(models) {
    // associations can be defined here
  };
  return Reply;
};