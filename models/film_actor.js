'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class film_actor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    }
  };
  film_actor.init({
    actor_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      primaryKey: true
    },
    film_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: "film_actor",
    createdAt: false,
    updatedAt: "last_update"
  });

  return film_actor;
};

