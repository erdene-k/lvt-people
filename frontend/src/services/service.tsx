import axios, { AxiosRequestConfig } from "axios";
import { encryptData, GetLocalStorageData } from "../hooks/useLocalStorage";

const instance = axios.create({
 baseURL: process.env.REACT_APP_SERVER_URL,
 headers: {
  "Content-Type": "application/json",
 },
});

export async function API(method: string, url: string, data = {}, notoken = false, customHeader = {}) {

  
 const user = GetLocalStorageData("sst_exd");
 const header = {} as AxiosRequestConfig;
 if (!notoken) {
  if (user) {
   header.headers = { Authorization: `Bearer ${user.accessToken}` };
  } else {
   console.log("no user redirect");
  }
 } else if (customHeader) {
  header.headers = customHeader;
 }
 return new Promise(async (resolve, reject) => {
  try {
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
