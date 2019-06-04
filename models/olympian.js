'use strict';
module.exports = (sequelize, DataTypes) => {
  const Olympian = sequelize.define('Olympian', {
    name: DataTypes.STRING,
    sex: DataTypes.STRING,
    age: DataTypes.INTEGER,
    height: DataTypes.STRING,
    weight: DataTypes.STRING,
    TeamId: DataTypes.INTEGER,
    SportId: DataTypes.INTEGER
  }, {});
  Olympian.associate = function(models) {
    Olympian.belongsTo(models.Team, {foreignKey: 'TeamId', as: 'team'})
    Olympian.belongsTo(models.Sport, {foreignKey: 'SportId', as: 'sport'})
    Olympian.hasMany(models.OlympianEvent)
    Olympian.belongsToMany(models.Event, {through: 'OlympianEvent'});


  };
  return Olympian;
};
