import { authKey } from "@/constants/lacalstorage";
import { IGenericErrorResponse, ResponseSuccess } from "@/types";
import { getFromlocalStrorage } from "@/utilies/local.storage";
import axios from "axios";

const instant = axios.create();
instant.defaults.headers.post["Content-Type"] = "application/json";
instant.defaults.headers["Accept"] = "application/json";
instant.defaults.timeout = 60000;

// Add a request interceptor
instant.interceptors.request.use(
  function (config) {
    const accessTokent = getFromlocalStrorage(authKey);
    if (accessTokent) {
      config.headers.Authorization = accessTokent;
    }
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response intercepto
// @ts-ignore
instant.interceptors.response.use(
  function (response) {
    const responseObject: ResponseSuccess = {
      data: response?.data?.data,
      meta: response?.data?.meta,
    };
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return responseObject;
  },
  function (error) {
    const responseObject: IGenericErrorResponse = {
      statusCode: error?.response?.data.statusCode || 500,
      message: error?.response?.data?.message || "Somting went wrong",
      errorMessages: error?.response?.data?.message,
    };
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return responseObject;
  }
);
export { instant };
