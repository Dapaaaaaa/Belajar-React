import { login } from "../../service/auth.service";
import Button from "../elements/buttons";
import InputForm from "../elements/input";
import { useEffect, useRef, useState } from "react";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [countdown, setCountdown] = useState(5);

  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    login(data, (status, response) => {
      if (status) {
        localStorage.setItem("token", response);
        localStorage.setItem("email", data.email);
        localStorage.setItem("password", data.password);
        // window.location.href = "/products";
      } else {
        setLoginFailed(response === "Unauthorized" ? "Email atau Password Salah!" : response);
        setShowToast(true);
        setCountdown(5); // Reset countdown ke 5 setiap kali error baru muncul
      }
    });
  };

  // Logic untuk Countdown dan Auto-hide
  useEffect(() => {
    let timer;
    if (showToast && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (countdown === 0) {
      setShowToast(false);
    }
    return () => clearInterval(timer);
  }, [showToast, countdown]);

  const emailRef = useRef(null);
  useEffect(() => { emailRef.current.focus(); }, []);

  return (
    <div className="relative">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-5 right-5 z-50 animate-bounce-in">
          <div className="bg-red-600 text-white px-6 py-4 rounded-lg shadow-2xl flex items-center gap-4 border-l-4 border-red-800">
            <div className="flex flex-col">
              <span className="font-bold">Login Gagal!</span>
              <p className="text-sm">{loginFailed}</p>
              <span className="text-[10px] mt-1 opacity-80">Menghilang dalam {countdown} detik...</span>
            </div>
            
            {/* Tombol Close */}
            <button 
              onClick={() => setShowToast(false)}
              className="ml-auto bg-red-700 hover:bg-red-800 rounded-full p-1 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleLogin}>
        <InputForm label="Email" type="email" placeholder="example@gmail.com" name="email" ref={emailRef} />
        <InputForm label="Password" type="password" placeholder="*******" name="password" />
        <Button variant="bg-blue-600 hover:bg-blue-900 w-full" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};

export default FormLogin;