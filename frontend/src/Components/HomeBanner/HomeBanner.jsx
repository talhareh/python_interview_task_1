import React, { useContext } from "react";
import Typed from "react-typed"
import {Link} from "react-router-dom"
import AuthContext from "../../Context/AuthContext";

function HomeBanner(props) {
    const logOutUser = useContext(AuthContext)
    
    return (
        <div style={{backgroundImage: "url('../../../Images/homepage_bg.jpg')"}} className="bg-cover text-white">
            <div  className="bg-black bg-opacity-50 text-opacity-100 w-full h-screen mx-auto text-center flex flex-col justify-center">
                <h1 className="md:text-5xl sm:text-4xl text-2xl text-[#6ce7ae] p-2">Store All images</h1>
                <div className="flex justify-center">
                    <p className="font-bold md:text-2xl sm:text-lg text-sm">You can not lose it</p>
                    <Typed className="font-bold md:text-2xl sm:text-lg text-sm pl-2 sm:block hidden" strings={['This Your DR...']} loop typeSpeed={80} backSpeed={140} />
                </div>
                <div className="pt-5 ">
                    
                {props.homepage ? <button onClick={logOutUser.logOutUser} className="bg-[#6ce7ae] w-[200px] rounded-md font-bold text-xl py-5 text-black hover:bg-white hover:scale-125">LogOut</button>
                : <Link to="/login"><button className="bg-[#6ce7ae] w-[200px] rounded-md font-bold text-xl py-5 text-black hover:bg-white hover:scale-125">LogIn</button>
                </Link>}
                </div>
            </div>
        </div>
    );
}

export default HomeBanner