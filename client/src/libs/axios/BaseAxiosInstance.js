import axios from "axios";
import RequestError from "modules/error/RequestError";

const baseURL = "/";

export const BaseAxiosInstance = axios.create({ baseURL });

BaseAxiosInstance.interceptors.response.use(
  ({ data }) => data,
  (error) => {
    throw new RequestError(error);
  }
);

export default BaseAxiosInstance;
