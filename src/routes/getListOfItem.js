"use strict";
const mockDBCalls = require("../database/index.js");

const getListOfItemHandler = async (request, response) => {
  const data = await mockDBCalls.getListOfItem();
  return response.status(200).send(JSON.stringify(data));
};

module.exports = (app) => {
  app.get("/items", getListOfItemHandler);
};
