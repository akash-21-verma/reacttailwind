import Egg from "../images/egg.jpg"
import Egg2 from "../images/egg-2.jpg"
const Content = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-5 ">
                <img src={Egg} alt="egg pic" className="h-full rounded mb-20 shadow" />
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl mb-2"> Egg Muffins </h2>
                    <p className="mb-2">
                        Crispy, Delicious and Nutricious
                    </p>
                    <span>$16</span>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-5 ">
                <img src={Egg2} alt="egg pic" className="h-full rounded mb-20 shadow" />
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl mb-2"> Egg Muffins </h2>
                    <p className="mb-2">
                        Crispy, Delicious and Nutricious
                    </p>
                    <span>$16</span>
                </div>
            </div>
        </>
    );
}

export default Content;