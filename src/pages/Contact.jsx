const Contact = () => {
    return ( 
        <div className="bg-pink-300 text-center text-2xl py-20">
            <div className="flex flex-col items-center my-10">
                <span className="text-red-700 mb-10"> Subscribe Our NewsLetter </span>
                <input type="text" className=" rounded p-2 w-1/2 placeholder-black-500 mb-10" placeholder="Enter Name" />
                <input type="text" className=" rounded p-2 w-1/2 mb-10 placeholder-black-500" placeholder="Enter Email" />
                <button className="bg-red-500 px-10 py-3 text-white rounded-full hover:bg-red-300 "> Add Subscription </button>
            </div>
        </div>
     );
}
 
export default Contact