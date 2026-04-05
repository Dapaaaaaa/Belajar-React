import { Fragment, useState } from "react";
import CardProducts from "../components/fragments/CardProducts";
import Button from "../components/elements/buttons";
import Counter from "../components/fragments/Counter";

const Products = [
  {
    id: 1,
    name: "Kebab Ayam",
    price: 10000,
    image: "img/kebab_290922.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus autem velit magni, cupiditate quae soluta iusto odit debitis eum impedit maxime obcaecati, aperiam pariatur architecto reiciendis voluptates. Explicabo, autem eius.",
  },
  {
    id: 2,
    name: "Kebab Sapi",
    price: 15000,
    image: "img/kebab_290922.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur aodit debitis  reiciendis voluptates. Explicabo, autem eius.",
  },
];

const email = localStorage.getItem("email");


const ProductsPage = () => {

  const [cart, setCart] = useState([
    {
      name: "Kebab Ayam",
      qty: 1,
    }
  ]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.id === product.id
      );

      if (existingIndex !== -1) {
        return prevCart.map((item, index) =>
          index === existingIndex
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, qty: 1 }];
    });
  };

  return (
    <Fragment>
      <div className="flex justify-end h-10 bg-blue-600 text-white items-center px-10">
        {email}
        <Button variant="ml-5 bg-red-400" onClick={handleLogout}>logout</Button>
      </div>
      <div className="flex justify-center py-5">
        {/* <CardProducts>
              <CardProducts.Header image="/img/kebab_290922.jpg"></CardProducts.Header>
              <CardProducts.Body name="Kebab Ayam">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
              autem velit magni, cupiditate quae soluta iusto odit debitis eum
              impedit maxime obcaecati, aperiam pariatur architecto reiciendis
              voluptates. Explicabo, autem eius.</CardProducts.Body>
              <CardProducts.Footer price="13.000">Beli Sekarang</CardProducts.Footer>
          </CardProducts> */}
        <div className="w-3/4 flex flex-wrap">
        {Products.map((product) => (
          <CardProducts key={product.id}>
            <CardProducts.Header image={product.image}></CardProducts.Header>
            <CardProducts.Body name={product.name}>
              {product.description}
            </CardProducts.Body>
            <CardProducts.Footer price={product.price} handleAddToCart={() => handleAddToCart(product)}>
              Beli Sekarang
            </CardProducts.Footer>
          </CardProducts>
        ))}
        </div>
        <div className="w-1/4">
          <h1 className="text-3xl font-bold text-blue-600">Cart</h1>
          <ul>
            {cart.map((item) => (
              <li key={item.name} className="flex justify-between items-center py-2">
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductsPage;
