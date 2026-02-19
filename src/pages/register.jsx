import FormRegister from "../components/fragments/FormRegister";
import AuthLayout from "../components/layouts/AuthLayouts";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <FormRegister />
    </AuthLayout>
  );
};

export default RegisterPage;
