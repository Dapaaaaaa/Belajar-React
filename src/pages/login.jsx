
import FormLogin from "../components/fragments/formLogin";
import AuthLayout from "../components/layouts/AuthLayouts"

const LoginPage = () => { 

    return(
         <AuthLayout title="Login">
            <FormLogin/>
            <div className="text-center mt-2 text-base text-gray-500">
                <p><em>Don't have an account? <a href="/register" className="text-blue-600 font-bold underline underline-offset-1">Register Now!</a></em></p>
            </div>
         </AuthLayout>
    )

}

export default LoginPage;