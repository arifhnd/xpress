'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER(5)
      },
      pegawai_id: DataTypes.INTEGER,
      username: DataTypes.STRING,
      client_unit_kerj_id: DataTypes.INTEGER,
      client_id: DataTypes.INTEGER,
      auth_key: DataTypes.STRING,
      password_hash: DataTypes.STRING,
      password_reset_token: DataTypes.STRING,
      email: DataTypes.STRING,
      is_active: {
        allowNull: false,
        defaultValue: 1,
        type: DataTypes.INTEGER
      },
      created_at: {
        allowNull: true,
        type: DataTypes.DATE,
        defaultValue: sequelize.fn('NOW')
      },
      updated_at: {
        allowNull: true,
        type: DataTypes.DATE,
        defaultValue: sequelize.fn('NOW')
      },
      created_by: {
        allowNull: true,
        type: DataTypes.INTEGER
      },
      updated_by: {
        allowNull: true,
        type: DataTypes.INTEGER
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user');
  }
};