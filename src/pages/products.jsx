import CardProducts from "../components/fragments/CardProducts";

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

const ProductsPage = () => {
  return (
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
  );
};

export default ProductsPage;
