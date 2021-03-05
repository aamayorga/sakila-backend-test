'use strict';
const db = require('../models/index')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class actor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  };
  actor.init({
    actor_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true

    },
    first_name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    last_update: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: "actor",
    timestamps: true,
    createdAt: false,
    updatedAt: "last_update"
  });

  // Hooks
  actor.addHook('beforeSave', (actor, options) => {
    actor.first_name = actor.first_name.toUpperCase()
    actor.last_name = actor.last_name.toUpperCase()
  })

  actor.associate = models => {
    actor.belongsToMany(models.film, {
      through: models.film_actor,
      foreignKey: "actor_id",
    })
  }

  return actor;
};

