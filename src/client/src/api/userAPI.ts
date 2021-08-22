const baseUrl = "http://localhost:3000";

export const getUsers = () => {
  return fetch(baseUrl + "/users", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  }).then((res) => res.json());
};

export const getListOfItem = () => {
  return fetch(baseUrl + "/items", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  }).then((res) => res.json());
};

export const getListOfAgesOfUsersWith = (item: string) => {
  return fetch(baseUrl + "/users/age/" + item, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  }).then((res) => res.json());
};
