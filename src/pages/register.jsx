import FormRegister from "../components/fragments/FormRegister";
import AuthLayout from "../components/layouts/AuthLayouts";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <FormRegister />
      <div className="text-center mt-2 text-base text-gray-500">
        <p>
          <em>
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 font-bold underline underline-offset-1"
            >
              Login Now!
            </Link>
          </em>
        </p>
      </div>
    </AuthLayout>
  );
};

export default RegisterPage;
