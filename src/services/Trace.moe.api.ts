import axios from "axios";

const traceMoeApi = axios.create({
  baseURL: "https://trace.moe/api",
});
export default traceMoeApi;
