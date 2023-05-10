import axios from "axios";

const ApiEndPoint = axios.create({
  baseURL: process.env.API_ENDPOINT,
  timeout: 1000,
});

export default ApiEndPoint;
