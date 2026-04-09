import axios from "axios";

export const login = (data) => {
  return axios.post("https://api.escuelajs.co/api/v1/auth/login", data)
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.error("Login error:", error);
    });
};
