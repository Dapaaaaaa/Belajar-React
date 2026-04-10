import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById } from "../service/product.service.js";

const DetailProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null); // Gunakan null agar mudah mengecek data sudah ada atau belum

  useEffect(() => {
    getProductById(id, (data) => {
      setProduct(data);
    });
  }, [id]);

  // Loading State
  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  // Fungsi untuk membersihkan URL gambar dari Platzi API
  const cleanUrl = (url) => {
    if (!url) return "https://via.placeholder.com/500";
    return url.replace(/[\[\]"]/g, "");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Tombol Kembali */}
        <Link 
          to="/products" 
          className="inline-flex items-center text-blue-600 font-medium mb-8 hover:text-blue-800 transition-colors"
        >
          ← Kembali ke Katalog
        </Link>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
          {/* Kolom Gambar */}
          <div className="md:w-1/2 p-4 bg-gray-100 flex items-center justify-center">
            {product.images && (
              <img
                src={cleanUrl(product.images[0])}
                alt={product.title}
                className="rounded-2xl shadow-md w-full max-h-[450px] object-cover"
              />
            )}
          </div>

          {/* Kolom Detail */}
          <div className="md:w-1/2 p-10 flex flex-col">
            <div className="mb-4">
              <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {product.category?.name || "Category"}
              </span>
            </div>
            
            <h1 className="text-3xl font-extrabold text-gray-900 mb-4 leading-tight">
              {product.title}
            </h1>
            
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="mt-auto pt-8 border-t border-gray-100 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-gray-400 text-sm">Harga</span>
                <span className="text-4xl font-black text-gray-900">
                  ${product.price}
                </span>
              </div>

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-blue-200 transition-all active:scale-95">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProductPage;