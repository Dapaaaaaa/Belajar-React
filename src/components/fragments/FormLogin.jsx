import { login } from "../../service/auth.service";
import Button from "../elements/buttons";
import InputForm from "../elements/input";
import { useEffect, useRef, useState } from "react";

const FormLogin = () => {
  // State untuk menyimpan pesan error jika login gagal
  const [loginFailed, setLoginFailed] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginFailed(""); // Reset pesan error setiap kali tombol diklik

    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    login(data, (status, response) => {
      if (status) {
        // Jika Berhasil: Simpan token dan pindah halaman
        localStorage.setItem("token", response);
        window.location.href = "/products";
      } else {
        // Jika Gagal: Simpan pesan error (misal: "Unauthorized") ke state
        setLoginFailed(response);
      }
    });
  };

  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      {/* Menampilkan pesan error jika login gagal */}
      {loginFailed && (
        <p className="text-red-500 font-bold text-center mb-3">
          {loginFailed === "Unauthorized" 
            ? "Email atau Password Salah!" 
            : loginFailed}
        </p>
      )}

      <InputForm
        label="Email"
        type="email"
        placeholder="example@gmail.com"
        name="email"
        ref={emailRef}
      />

      <InputForm
        label="Password"
        type="password"
        placeholder="*******"
        name="password"
      />

      <Button variant="bg-blue-600 hover:bg-blue-900 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;