import axios from "axios";

export const getProducts = (callback) => {
  axios
    .get("https://api.escuelajs.co/api/v1/products")
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.err("error fetching products:", err);
      return [];
    });
};
