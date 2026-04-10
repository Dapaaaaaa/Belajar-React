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

export const getProductById = (id, callback) => {
  axios
    .get(`https://api.escuelajs.co/api/v1/products/${id}`)
    .then((res) => {
      callback(res.data); 
    })
    .catch((err) => {
      console.error(`error fetching product with id ${id}:`, err);
      callback(null); 
    });
}; 
