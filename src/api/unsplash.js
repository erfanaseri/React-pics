import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 5CcbUUOI18ggErQulOdmnvqH5sQA5cD0DN9p1WZT8fw",
  },
});
