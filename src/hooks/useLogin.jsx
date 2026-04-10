import { useState } from "react";
import { login } from "../service/auth.service";

export const useLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e, callback) => {
    e.preventDefault();
    setIsLoading(true);
    setLoginFailed("");

    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    login(data, (status, response) => {
      setIsLoading(false);
      if (status) {
        localStorage.setItem("token", response);
        // Kita kirim status ke komponen agar komponen bisa handle redirect
        if (callback) callback(true);
      } else {
        setLoginFailed(response === "Unauthorized" ? "Email atau Password Salah!" : response);
        setShowToast(true);
        setCountdown(5);
        if (callback) callback(false);
      }
    });
  };

  return {
    handleLogin,
    loginFailed,
    showToast,
    setShowToast,
    countdown,
    setCountdown,
    isLoading
  };
};