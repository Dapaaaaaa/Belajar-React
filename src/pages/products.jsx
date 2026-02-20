import CardProducts from "../components/fragments/CardProducts";

const ProductsPage = () => {
  return (
    <div className="flex justify-center">
        <CardProducts>
            <CardProducts.Header image="/img/kebab_290922.jpg"></CardProducts.Header>
            <CardProducts.Body title="Kebab Ayam">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
            autem velit magni, cupiditate quae soluta iusto odit debitis eum
            impedit maxime obcaecati, aperiam pariatur architecto reiciendis
            voluptates. Explicabo, autem eius.</CardProducts.Body>
            <CardProducts.Footer price="13.000">Beli Sekarang</CardProducts.Footer>
        </CardProducts>

        <CardProducts>
            <CardProducts.Header image="/img/kebab_290922.jpg"></CardProducts.Header>
            <CardProducts.Body title="Kebab Ayam">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
            autem velit magni, cupiditate quae soluta iusto odit debitis eum
            impedit maxime obcaecati, aperiam pariatur architecto reiciendis
            voluptates. Explicabo, autem eius.</CardProducts.Body>
            <CardProducts.Footer price="13.000">Beli Sekarang</CardProducts.Footer>
        </CardProducts>
    </div>
  );
};


export default ProductsPage;
