import { Link } from "react-router-dom"

const Hero = () => {
    return (  
        <div className="bg-white h-screen flex flex-col justify-center items-center">
            <div className="lg:text-8xl md:text-6xl sm:text-5xl text-3xl font-black mb-14">
                <h2>EGGCELLENT</h2>
            </div>
            <Link to="/" className="py-6 px-10  bg-yellow-500 rounded-full text-3xl hover:bg-yellow-300 
            transition duration-300 ease-in-out fles items-center animate-bounce ">  Order Now </Link>
        </div>        
    );
}
 
export default Hero;