import Button from "../elements/buttons";
import InputForm from "../elements/input";

const FormLogin = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("email", e.target.email.value);
    localStorage.setItem("password", e.target.password.value);
    window.location.href = "/products";
  };

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Email"
        type="email"
        placeholder="example@gmail.com"
        name="email"
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
