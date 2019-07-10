'use strict';

const tableName = "books";

module.exports = {
  up: (queryInterface, dataTypes) => {
  return queryInterface.createTable(tableName, {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: new dataTypes.INTEGER,
    },
    title: {
      type: new dataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: new dataTypes.STRING,
      allowNull: false,
    },
    price: {
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
};