 import React from "react";
 
//  Komponen
 class Button extends React.Component{
        render() {
            return (
            <div>
                <button className="h-10 px-6 font-semibold rounded-md bg-black text-white cursor-pointer" type="submit"> Buy Now</button>
            </div>
            );
        }
    }

function App() {

  return (
      <div className="flex justify-center bg-blue-600 min-h-screen items-center">
          <Button>Klik disini</Button>
      </div>
  )
}

export default App
