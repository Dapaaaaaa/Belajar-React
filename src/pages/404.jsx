import { useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-5xl font-bold text-red-500 mb-4">404 Not Found</h1>
            <p className="text-xl text-gray-600">{error.statusText || error.message} Please Return To Home Page.</p>
        </div>
    );

}

export default ErrorPage;
