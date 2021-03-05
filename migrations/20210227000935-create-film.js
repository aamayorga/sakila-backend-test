'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('film', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      film_id: {
        type: Sequelize.SMALLINT.UNSIGNED
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      release_year: {
        type: Sequelize.STRING
      },
      language_id: {
        type: Sequelize.TINYINT.UNSIGNED
      },
      original_language_id: {
        type: Sequelize.TINYINT.UNSIGNED
      },
      rental_duration: {
        type: Sequelize.TINYINT.UNSIGNED
      },
      rental_rate: {
        type: Sequelize.DECIMAL
      },
      length: {
        type: Sequelize.SMALLINT.UNSIGNED
      },
      replacement_cost: {
        type: Sequelize.DECIMAL
      },
      rating: {
        type: Sequelize.ENUM('G', 'PG', 'PG-13', 'R', 'NC-17')
      },
      special_features: {
        type: Sequelize.STRING
      },
      last_update: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('film');
  }
};
