import { useLogin } from "../../hooks/useLogin";
import Button from "../elements/buttons";
import InputForm from "../elements/input";
import { useEffect, useRef } from "react";

const FormLogin = () => {
  const {
    handleLogin,
    loginFailed,
    showToast,
    setShowToast,
    countdown,
    isLoading,
  } = useLogin();

  const emailRef = useRef(null);
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const onLoginSubmit = (e) => {
    handleLogin(e, (status) => {
      if (status) {
        window.location.href = "/products";
      }
    });
  };

  return (
    <div className="relative">
      {/* Toast Notification */}
      {showToast && (
  <div className="fixed top-5 right-5 z-[9999] bg-red-600 text-white px-6 py-4 rounded-lg shadow-2xl flex flex-col min-w-[300px]">
    
    {/* Baris Atas: Judul dan Tombol Close */}
    <div className="flex justify-between items-start">
      <div className="flex flex-col">
        <span className="font-bold text-lg">Login Gagal!</span>
        <p className="text-sm opacity-90">{loginFailed}</p>
      </div>

      {/* TOMBOL X DISINI */}
      <button 
        onClick={() => setShowToast(false)} // Mengubah state jadi false
        className="ml-4 -mr-2 -mt-2 p-2 rounded-full hover:bg-white/20 active:bg-white/40 transition-colors duration-200 text-white font-bold"
      >
        ✕
      </button>
    </div>

    {/* Indikator Waktu (Optional tapi Keren) */}
    <div className="mt-3 text-[10px] text-right italic opacity-70">
      Otomatis menutup dalam {countdown} detik
    </div>
  </div>
)}

      <form onSubmit={onLoginSubmit}>
        <InputForm label="Email" name="email" ref={emailRef} />
        <InputForm label="Password" name="password" type="password" />

        <Button variant="bg-blue-600 w-full" type="submit">
          {isLoading ? "Loading..." : "Login"}
        </Button>
      </form>
    </div>
  );
};

export default FormLogin;
