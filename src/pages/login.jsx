import { Link } from "react-router-dom";
import FormLogin from "../components/fragments/formLogin";
import AuthLayout from "../components/layouts/AuthLayouts";

const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <FormLogin />
      <div className="text-center mt-2 text-base text-gray-500">
        <p>
          <em>
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 font-bold underline underline-offset-1"
            >
              Register Now!
            </Link>
          </em>
        </p>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
