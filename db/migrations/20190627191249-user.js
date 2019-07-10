"use strict";

const tableName = "users";

module.exports = {
  up: (queryInterface, dataTypes) => {
  return queryInterface.createTable(tableName, {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: new dataTypes.INTEGER,
    },
    first_name: {
      type: new dataTypes.STRING,
      allowNull: true,
    },
    last_name: {
      type: new dataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: new dataTypes.STRING,
      allowNull: false,
    },
    encrypted_password: {
      type: new dataTypes.STRING,
      allowNull: true,
    },
    created_at: {
      type: new dataTypes.DATE,
      allowNull: false,
    },
    updated_at: {
      type: new dataTypes.DATE,
      allowNull: false,
    }
  })
},
  down: (queryInterface) => {
    return queryInterface.dropTable(tableName);
  }
}
