import axios from "axios";

export const login = (data, callback) => {
  axios
    .post("https://api.escuelajs.co/api/v1/auth/login", data)
    .then((response) => {
      // Jika sukses, kirim token
      callback(true, response.data.access_token);
    })
    .catch((error) => {
      // Ambil "Unauthorized" dari error.response.data.message
      const message = error.response?.data?.message || "Login Failed";
      callback(false, message);
    });
};
