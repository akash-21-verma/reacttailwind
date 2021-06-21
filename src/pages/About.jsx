import Me from "../images/me.png"
const About = () => {
    return ( 
        <div className="bg-yellow-200 h-screen pt-5 text-center text-4xl">
            <div className="">
                About Page
            </div>
            <div className="flex flex-col md:justify-around items-center my-10 sm:flex-row ">
                <div className="flex justify-center sm:w-1/4 w-2/5  ">
                    <img className="rounded-full w-full " src={Me} alt="author" />
                </div>
                <div className="w-2/3 text-sm sm:text-xl p-10 sm:p-20 ">
                    Hi , I am Akash Verma. 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nulla maiores molestias quis sunt eum ut magni culpa quaerat, impedit suscipit id quos facere error officiis non, ipsa ea odit?
                </div>
            </div>
        </div>
     );
}
 
export default About;