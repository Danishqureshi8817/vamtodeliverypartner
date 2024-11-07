import Axios, { AxiosRequestConfig } from "axios";
import { serverBaseURL } from "./constant";
// import { getAuthValue } from "../hooks/common/useAuthValue";

export const fetcher = async (config: AxiosRequestConfig) => {
  const { url, method, data, headers } = config;
//   const { access_token } = getAuthValue()

//   console.log('fetcher',access_token)

  return await Axios.request({
    baseURL: serverBaseURL as string,
    url,
    method: method ?? 'GET',
    data,
    ...config,
    headers: {
    //   Authorization: access_token ? `Bearer ${access_token}` : undefined,
    Authorization:'',
      ...config?.headers,
      ...headers,
    },
  });
};