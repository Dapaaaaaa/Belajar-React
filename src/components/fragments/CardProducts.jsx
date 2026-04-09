import Button from "../elements/buttons";

const Header = (props) => {
  const { image } = props;
  return (
    // {/* Div Gambar */}
    <div className="p-5 h-100 flex items-center justify-center bg-gray-700 rounded-tl-lg rounded-tr-lg">
      <a href="#">
        <img src={image} alt="Contoh Gambar" className="rounded-xl" />
      </a>
    </div>
  );
};

const Body = (props) => {
  const { name, children } = props;
  return (
    // {/* Div Text */}
    <div className="px-5 pb-3 h-full">
      <a href="">
        <h5 className=" text-2xl font-semibold tracking-tight text-white">
          {name}
        </h5>
      </a>
      <p className="text-base text-white">{children}</p>
    </div>
  );
};

const Footer = (props) => {
  const { children, price, handleAddToCart, id} = props;
  return (
    //  {/* Div Tombol */}
    <div className="flex items-center justify-between px-5 pb-3">
      <span className="text-xl font-bold text-white">
        {price.toLocaleString("en-US", { style: "currency", currency: "USD" })}
      </span>
      <Button variant="bg-blue-600" onClick={() => handleAddToCart(id)}>{children}</Button>
    </div>
  );
};

const CardProducts = (props) => {
  const { children } = props;
  return (
    // {/* Div semua */}
    <div className="w-full mt-5 max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-3 my-2 flex flex-col justify-between">
      {children}
    </div>
  );
};

CardProducts.Header = Header;
CardProducts.Body = Body;
CardProducts.Footer = Footer;

export default CardProducts;
