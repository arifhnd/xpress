'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  users.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER(5)
    },
    pegawai_id: DataTypes.INTEGER,
    username: DataTypes.STRING,
    client_unit_kerja_id: DataTypes.INTEGER,
    client_id: DataTypes.INTEGER,
    auth_key: DataTypes.STRING,
    password_hash: DataTypes.STRING,
    password_reset_token: DataTypes.STRING,
    email: DataTypes.STRING,
    status: {
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
  }, {
    sequelize,
    modelName: 'users',
    tableName: 'user',
    timestamps: false
  });
  return users;
};