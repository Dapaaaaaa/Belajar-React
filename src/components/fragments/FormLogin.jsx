import Button from "../elements/buttons";
import InputForm from "../elements/input";

const FormLogin = () => {

    return (
        <form action="">
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
          <Button variant="bg-blue-600 hover:bg-blue-900 w-full">Login</Button>
        </form>
    )
} 

export default FormLogin;