'use strict';
module.exports = (sequelize, DataTypes) => {
  const Olympian = sequelize.define('Olympian', {
    name: DataTypes.STRING,
    sex: DataTypes.STRING,
    age: DataTypes.INTEGER,
    height: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    TeamId: DataTypes.INTEGER,
    SportId: DataTypes.INTEGER
  }, {});
  Olympian.associate = function(models) {
    Olympian.belongsTo(models.Team)
    Olympian.belongsTo(models.Sport)
    Olympian.hasMany(models.OlympianEvent)
    Olympian.belongsToMany(models.Event, {through: 'OlympianEvent'});


  };
  return Olympian;
};
