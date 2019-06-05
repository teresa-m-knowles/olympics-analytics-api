'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    name: DataTypes.STRING,
    SportId: DataTypes.INTEGER
  }, {});
  Event.associate = function(models) {
    Event.belongsTo(models.Sport)
    Event.hasMany(models.OlympianEvent)
    Event.belongsToMany(models.Olympian, {through: 'OlympianEvent', as: 'olympians'})
  };
  return Event;
};
