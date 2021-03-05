'use strict';
const db = require('../models/index')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class film extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  };
  film.init({
    film_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    release_year: DataTypes.STRING,
    language_id: DataTypes.TINYINT.UNSIGNED,
    original_language_id: DataTypes.TINYINT.UNSIGNED,
    rental_duration: DataTypes.TINYINT.UNSIGNED,
    rental_rate: DataTypes.DECIMAL,
    length: DataTypes.SMALLINT.UNSIGNED,
    replacement_cost: DataTypes.DECIMAL,
    rating: DataTypes.ENUM('G', 'PG', 'PG-13', 'R', 'NC-17'),
    special_features: DataTypes.STRING,
    last_update: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'film',
    tableName: "film",
    createdAt: false,
    updatedAt: "last_update"
  });

  film.associate = models => {
    film.belongsToMany(models.actor, {
      through: models.film_actor,
      foreignKey: "film_id"
    })
  }

  return film;
};

