import axios from "axios";

const baseURL = "/";

export const BaseAxiosInstance = axios.create({ baseURL });

BaseAxiosInstance.interceptors.response.use(
  ({ data }) => data,
  (error) => error
);

export default BaseAxiosInstance;
