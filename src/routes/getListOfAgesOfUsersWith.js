"use strict";
const mockDBCalls = require("../database/index.js");

const getListOfAgesOfUsersWithHandler = async (request, response) => {
  // const itemToLookup = 'carrot';
  try {
    const itemToLookup = request.params.item;
    const data = await mockDBCalls.getListOfAgesOfUsersWith(itemToLookup);
    return response.status(200).send(JSON.stringify(data));
  } catch (err) {
    // console.log(err);
    return response.status(500).send({ error: "Unexpected Error from Internal Server" });
  }
};

module.exports = (app) => {
  app.get("/users/age/:item", getListOfAgesOfUsersWithHandler);
};
