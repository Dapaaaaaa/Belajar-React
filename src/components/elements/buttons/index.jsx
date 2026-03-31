//  Komponen
//  class Button extends React.Component{
//         render() {
//             return (
//             <div>
//                 <button className="h-10 px-6 font-semibold rounded-md bg-white text-black cursor-pointer" type="submit"> Buy Now</button>
//             </div>
//             );
//         }
//     }

// Function
// function ButtonBlack() {
//     return (
//         <div>
//                 <button className="h-10 px-6 font-semibold rounded-md bg-black text-white cursor-pointer" type="submit"> Buy Now</button>
//         </div>
//     );
// }

// Constanta (Versi Update)
// const Button = ({variant = "slate", children}) => {
//     const variants = {
//         red: "bg-red-700 hover:bg-red-800",
//         slate: "bg-slate-700 hover:bg-slate-800",
//         blue: "bg-blue-700 hover:bg-blue-800",
//     };

//     return (
//         <div>
//         <button
//             className={`h-10 px-6 font-semibold rounded-md transition ${variants[variant]} text-white cursor-pointer`}
//             type="submit"
//         >
//             {" "}
//             Buy Now
//             {/* Children */}
//         </button>
//         </div>
//     );
// };

// Versi Youtube
const Button = (props) => {
    // Nilai Default 
    const {variant = 'bg-black', children = 'Default'} = props;

    return (
        <div>
        <button
            className={`h-10 px-6 font-semibold rounded-md transition ${variant} text-white cursor-pointer`}
            type="submit"
        >
            {" "}
            {children}
        </button>
        </div>
    );
};

export default Button;