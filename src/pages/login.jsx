import FormLogin from "../components/fragments/formLogin";
import AuthLayout from "../components/layouts/AuthLayouts";

const LoginPage = () => {
  return (
    <AuthLayout title="Login" type="login">
      <FormLogin />
    </AuthLayout>
  );
};

export default LoginPage;
