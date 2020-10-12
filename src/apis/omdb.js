import axios from "axios";

const KEY = "cda0b5ac";

export default axios.create({
  baseURL: "http://www.omdbapi.com/?apikey=",
  params: {},
});
