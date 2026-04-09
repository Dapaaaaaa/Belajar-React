import axios from "axios";

export const getProducts = async (callback) => {
  axios
    .get("https://api.escuelajs.co/api/v1/products")
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
      return [];
    });
};
