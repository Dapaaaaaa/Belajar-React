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
    isLoading 
  } = useLogin();

  const emailRef = useRef(null);
  useEffect(() => { emailRef.current.focus(); }, []);

  const onLoginSubmit = (e) => {
    handleLogin(e, (status) => {
      if (status) {
        window.location.href = "/products";
      }
    });
  };

  return (
    <div className="relative">
      {/* Bagian Toast Tetap Sama Menggunakan State dari Hook */}
      {showToast && (
        <div className="fixed top-5 right-5 z-50 animate-slide-in">
           {/* UI Toast Kamu Disini */}
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