'use strict';
module.exports = (sequelize, DataTypes) => {
  const Olympian = sequelize.define('Olympian', {
    name: DataTypes.STRING,
    sex: DataTypes.ENUM,
    age: DataTypes.INTEGER,
    height: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    TeamId: DataTypes.INTEGER,
    SportId: DataTypes.Integer
  }, {});
  Olympian.associate = function(models) {
    Olympian.belongsTo(models.Team)

  };
  return Olympian;
};
