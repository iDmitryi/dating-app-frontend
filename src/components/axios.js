import axios from "axios";

const instance = axios.create({
  baseURL: "https://dating-mern-app-project.herokuapp.com/",
});

export default instance;
