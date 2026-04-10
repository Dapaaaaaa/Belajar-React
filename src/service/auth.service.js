import axios from "axios";
import { useCallback } from "react";

export const login = (data, callback) => {
  return axios.post("https://api.escuelajs.co/api/v1/auth/login", data)
    .then((response) => {
        callback(true, response.data);
    })
    .catch((error) => {
        callback(false, error);
        console.error("Login error:", error);
    });
};
