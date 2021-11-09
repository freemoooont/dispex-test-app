import axios from "axios";

export const api = axios.create({
  baseURL: "https://dispex.org/api/vtest/",
  timeout: 10000,
  headers: {
    "Content-type": "application/json-patch+json",
    accept: "text/plain",
  },
});
