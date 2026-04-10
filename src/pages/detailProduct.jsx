import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../service/product.service.js";

const DetailProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

    useEffect(() => {
        // Fetch product details using the id
        // You can use the getProductById function from your service here

        getProductById(id, (data) => {
          setProduct(data);
        });
    }, [id]);

    return (
        <div>
            <h1>Detail Product Page</h1>
            <p>Product ID {id}</p>
        </div>
    );
};

export default DetailProductPage;