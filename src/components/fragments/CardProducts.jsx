import Button from "../elements/buttons";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { image, id } = props;

  // Fungsi untuk membersihkan URL gambar dari Platzi API yang sering bermasalah
  const cleanUrl = (url) => {
    if (!url) return "";
    // Menghapus karakter [ ] " yang sering nyangkut di data Platzi
    return url.replace(/[\[\]"]/g, "");
  };

  return (
    // {/* Div Gambar */}
    <div className="p-5 h-100 flex items-center justify-center bg-gray-700 rounded-tl-lg rounded-tr-lg">
      <Link to={`/product/${id}`}>
        <img
          src={cleanUrl(image)}
          alt="Contoh Gambar"
          className="rounded-xl"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/300"; // Fallback jika link mati
          }}
        />
      </Link>
    </div>
  );
};

const Body = (props) => {
  const { name, children, id } = props;
  return (
    // {/* Div Text */}
    <div className="px-5 pb-3 h-full">
      <Link to={`/product/${id}`}>
        <h5 className=" text-2xl font-semibold tracking-tight text-white">
          {name.substring(0, 20)}...
        </h5>
      </Link>
      <p className="text-base text-white">{children.substring(0, 100)}...</p>
    </div>
  );
};

const Footer = (props) => {
  const { children, price, handleAddToCart, id } = props;
  return (
    //  {/* Div Tombol */}
    <div className="flex items-center justify-between px-5 pb-3">
      <span className="text-xl font-bold text-white">
        {price.toLocaleString("en-US", { style: "currency", currency: "USD" })}
      </span>
      <Button variant="bg-blue-600" onClick={() => handleAddToCart(id)}>
        {children}
      </Button>
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
