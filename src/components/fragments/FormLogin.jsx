import { login } from "../../service/auth.service";
import Button from "../elements/buttons";
import InputForm from "../elements/input";
import { useCallback, useEffect, useRef } from "react";

const FormLogin = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    // localStorage.setItem("email", e.target.email.value);
    // localStorage.setItem("password", e.target.password.value);
    // window.location.href = "/products";

    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    login(data, (status, response) => {
      if (status) {
        localStorage.setItem("token", response);
      } else {
        console.log("Login failed:", response);
      }
    });
  };

  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
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

      {/* Manggil dari elements/buttons */}
      <Button variant="bg-blue-600 hover:bg-blue-900 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
