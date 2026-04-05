import { Fragment } from "react";
import CardProducts from "../components/fragments/CardProducts";
import Button from "../components/elements/buttons";
import Counter from "../components/fragments/Counter";

const Products = [
  {
    id: 1,
    name: "Kebab Ayam",
    price: "13.000",
    image: "img/kebab_290922.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus autem velit magni, cupiditate quae soluta iusto odit debitis eum impedit maxime obcaecati, aperiam pariatur architecto reiciendis voluptates. Explicabo, autem eius.",
  },
  {
    id: 2,
    name: "Kebab Sapi",
    price: "15.000",
    image: "img/kebab_290922.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur aodit debitis  reiciendis voluptates. Explicabo, autem eius.",
  },
];

const email = localStorage.getItem("email");


const ProductsPage = () => {

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  return (
    <Fragment>
      <div className="flex justify-end h-10 bg-blue-600 text-white items-center px-10">
        {email}
        <Button variant="ml-5 bg-red-400" onClick={handleLogout}>logout</Button>
      </div>
      <div className="flex justify-center">
        {/* <CardProducts>
              <CardProducts.Header image="/img/kebab_290922.jpg"></CardProducts.Header>
              <CardProducts.Body name="Kebab Ayam">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
              autem velit magni, cupiditate quae soluta iusto odit debitis eum
              impedit maxime obcaecati, aperiam pariatur architecto reiciendis
              voluptates. Explicabo, autem eius.</CardProducts.Body>
              <CardProducts.Footer price="13.000">Beli Sekarang</CardProducts.Footer>
          </CardProducts> */}
        {Products.map((product) => (
          <CardProducts key={product.id}>
            <CardProducts.Header image={product.image}></CardProducts.Header>
            <CardProducts.Body name={product.name}>
              {product.description}
            </CardProducts.Body>
            <CardProducts.Footer price={product.price}>
              Beli Sekarang
            </CardProducts.Footer>
          </CardProducts>
        ))}
      </div>
      <div className="flex w-full justify-center">
        <Counter></Counter>
      </div>
    </Fragment>
  );
};

export default ProductsPage;
