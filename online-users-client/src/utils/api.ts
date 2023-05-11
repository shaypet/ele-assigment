import axios, { AxiosError } from "axios";
import AppRoutes from "../routes/routes";
import { HttpStatusCode } from "axios";
console.log();
const ApiEndPoint = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  withCredentials: true,
});

const onErrorResponse = (error: AxiosError): Promise<AxiosError> | void => {
  switch (error.status) {
    case HttpStatusCode.Unauthorized: {
      AppRoutes.navigate("/auth/unauth");
      return;
      break;
    }
    default: {
      break;
    }
  }

  return Promise.reject(error);
};
ApiEndPoint.interceptors.response.use(function (response) {
  return response;
}, onErrorResponse);

export default ApiEndPoint;
