import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { children, title } = props;

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, please enter your details
        </p>
        {children}
        <p className="text-center mt-2 text-base text-gray-500">
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
    </div>
  );
};

export default AuthLayout;
