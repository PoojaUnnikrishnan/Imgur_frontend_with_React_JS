import axios from "axios";
import authHeader from "./auth-headers";
const API_URL = "http://localhost:8000/";

//To get AllImage API
const getPublicContent = () => {
  return axios.get(API_URL + "images");
};

// TO get userImage API
const getUserImage = () => {
  return axios.get(API_URL + "images", { headers: authHeader() });
};

//To get Image API
const getImageById = (id) => {
  return axios.get(API_URL + "images/" + id, { headers: authHeader() });
};

//To get add Image API
const addImage = (category, path) => {
  return axios.post(
    API_URL + "images",
    { category, path },
    { headers: authHeader() }
  );
};

//To get delete image API
const deleteImage = (id) => {
  return axios.delete(API_URL + "images/" + id, { headers: authHeader() });
};

//likeImage API
const toggleLike = (id) => {
  return axios.get(API_URL + "images/" + id + "/like", {
    headers: authHeader(),
  });
};

//SearchImage API
const searchImage = (category) => {
  return axios.get(API_URL + "image?category=" + category, {
    headers: authHeader(),
  });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getPublicContent,

  getUserImage,
  getImageById,
  addImage,
  deleteImage,
  toggleLike,
  searchImage,
};
