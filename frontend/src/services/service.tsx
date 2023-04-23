import axios, { AxiosRequestConfig } from "axios";
import { encryptData, GetLocalStorageData } from "../hooks/useLocalStorage";

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    "Content-Type": "application/json",
    // "Access-Control-Allow-Origin": process.env.REACT_APP_SERVER_URL,
    // "Access-Control-Allow-Headers": "*",
    // "Access-Control-Allow-Methods": "*",
  },
});

export async function API(
  method: string,
  url: string,  
  data = {},
  notoken = false,
  customHeader = {}
) {
  const user = GetLocalStorageData("sst_exd");
  const header = {} as AxiosRequestConfig;
 
  if (!notoken) {
    if (user) {
      header.headers = { Authorization: `Bearer ${user.access_token}` };
    } else {
      console.log("no user redirect");
    }
  } 
  return new Promise(async (resolve, reject) => {
    try {
      console.log("header", header);
      if (method === "GET") {
        const response = await instance.get(url, header);
        resolve(response);
      } else if (method === "POST") {
        const response = await instance.post(url, data, header);
        resolve(response);
      } else if (method === "PUT") {
        const response = await instance.put(url, data, header);
        resolve(response);
      } else if (method === "DELETE") {
        const response = await instance.delete(url, header);
        resolve(response);
      }
    } catch (error: any) {
      if (error?.response?.status === 401) {
        if (!notoken) {
          window.localStorage.setItem("sst_exd", encryptData(null));
          window.location.replace("/");
        }
      }
      reject(error);
    }
  });
}
