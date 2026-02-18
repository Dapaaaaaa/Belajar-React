 import React from "react";
 
//  Komponen
 class Button extends React.Component{
        render() {
            return (
            <div>
                <button className="h-10 px-6 font-semibold rounded-md bg-white text-black cursor-pointer" type="submit"> Buy Now</button>
            </div>
            );
        }
    }

// Function
function ButtonBlack() {
    return (
        <div>
                <button className="h-10 px-6 font-semibold rounded-md bg-black text-white cursor-pointer" type="submit"> Buy Now</button>
        </div>
    );
}

// Constanta
const ButtonRed = () => {
    return (
        <div>
                <button className="h-10 px-6 font-semibold rounded-md bg-red-700 text-white cursor-pointer" type="submit"> Buy Now</button>
        </div>
    );
}

function App() {

  return (
      <div className="flex justify-center bg-blue-600 min-h-screen items-center">
          <div className="flex gap-x-3">
            <Button></Button>
            <ButtonBlack></ButtonBlack>
            <ButtonRed></ButtonRed>
          </div>
      </div>
  )
}

export default App
