"use strict";
const _ = require("lodash");
const db = require("./db.js");

// UTILS
//----------------
// This is a mock db call that waits for # milliseconds and returns
const mockDBCall = (dataAccessMethod) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(dataAccessMethod());
    }, 500);
  });
};

// MOCK DB CALLS
//----------------
const getUsers = () => {
  const dataAccessMethod = () => _.map(db.usersById, (userInfo) => userInfo);
  return mockDBCall(dataAccessMethod);
};

const getUsersWithItem = (item) => {
  let userWithItem = [];
  for (let user in db.itemsOfUserByUsername) {
    if (db.itemsOfUserByUsername[user].indexOf(item) !== -1) {
      userWithItem.push(user);
    }
  }
  return userWithItem;
};

const getFrequencyOfUserAge = (userWithItem) => {
  const ageFrequencyMap = {};
  _.forEach(userWithItem, (user) => {
    const userObj = _.find(db.usersById, (obj) => obj.username === user);
    if (ageFrequencyMap[userObj.age]) {
      ageFrequencyMap[userObj.age]++;
    } else {
      ageFrequencyMap[userObj.age] = 1;
    }
  });
  return ageFrequencyMap;
};

const convertToArrayOfAgeFrequency = (map) => {
  let arr = [];
  for (let age in map) {
    arr.push({
      age: +age,
      count: map[age],
    });
  }
  return arr;
};

const getListOfAgesOfUsersWith = (item) => {
  const dataAccessMethod = () => {
    // fill me in :)

    // get array of users with the item
    const userWithItem = getUsersWithItem(item);
    // get the frequency of the age
    const ageFrequencyMap = getFrequencyOfUserAge(userWithItem);
    const ageFrequencyArray = convertToArrayOfAgeFrequency(ageFrequencyMap);

    return ageFrequencyArray;
  };
  return mockDBCall(dataAccessMethod);
};

module.exports = {
  getUsers,
  getListOfAgesOfUsersWith,
};
