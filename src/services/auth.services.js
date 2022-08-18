//auth.service methods use axios to make HTTP requests. where database is connected and data is fetched.
// Its also store or get unique JWT from Browser Local Storage inside these methods.

//importing axios to make http request.

import axios from "axios";
const API_URL = "https://imgur--backend.herokuapp.com/";

//function to register details of user and post the details of user in database using API.
const register = (fullName, email, password) => {
  return axios.post(API_URL + "register", {
    fullName,
    email,
    password,
  });
};

//function to login user and post the details of user in database using API.
const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};
//function to logout and remove the current user.
const logout = () => {
  localStorage.removeItem("user");
};
//function to get current user.
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
//Exporting functions
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  register,
  login,
  logout,
  getCurrentUser,
};
