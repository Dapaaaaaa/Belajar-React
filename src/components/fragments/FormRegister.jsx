import Button from "../elements/buttons";
import InputForm from "../elements/input";

const FormRegister = () => {

    return (
        <form action="">
          <InputForm
            label="Full Name"
            type="text"
            placeholder="Insert your full name"
            name="Full Name"
          />

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

          <InputForm
            label="Confirm Password"
            type="password"
            placeholder="*******"
            name="confirmPassword"
          />

          {/* Manggil dari elements/buttons */}
          <Button variant="bg-blue-600 hover:bg-blue-900 w-full">Register</Button>
        </form>
    )
} 

export default FormRegister;