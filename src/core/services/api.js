  
import axios from "axios"; 
 
require('dotenv').config()
 
let baseURL = "";

if (process.env.NODE_ENV === "development") { 
  baseURL = "http://localhost:3000/dev/"
} else {  
  baseURL = process.env.REACT_APP_API_URL
}

const Api = axios.create({
  baseURL,
  headers: { "content-type": "application/json", 'Access-Control-Allow-Origin': '*' },
});

Api.interceptors.request.use(function (config) {
  const user_token = JSON.parse(
    localStorage.getItem("login_token")
  ); 

  config.headers.Authorization = user_token;
  return config;
});


export const API_ROOT = baseURL;


export default Api; 