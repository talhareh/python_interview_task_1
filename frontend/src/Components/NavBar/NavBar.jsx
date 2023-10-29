// import {Link} from "react-router-dom"
import React, {useState, useContext} from "react";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"
import {HiUserCircle} from "react-icons/hi"
import {Link} from "react-router-dom"
import AuthContext from "../../Context/AuthContext";
import {useSelector, useDispatch} from "react-redux"
import { setLogin } from "../../redux/AuthSlice";

function NavBar(props) {
    const [nav, setNav] = useState(false)
    const dispatch = useDispatch()

    const handleNav = () => {
        dispatch(setLogin({user:'fayas'}))
        setNav(!nav)
    }               // Used to change the nav value to true when hamburger btn is clicked
    
    const _user = useContext(AuthContext)
    
    const user = useSelector(state=>state.user)
    
    return (
        <div  className="yes">
        <div className="flex justify-between items-center h-24 max-w-[1240px]  mx-auto px-4 text-white">
            <Link to="/"><h1 className="w-full text-3xl font-bold text-[#00df9a]">DRPage.</h1>
            </Link>
            {/* <Link to="/addproduct"><h1 className="w-full text-3xl font-bold text-[#00df9a]">DRPage.</h1>
            </Link> */}
            <ul className="hidden md:flex ">
                <li> <Link to="/addproduct"><h1 className="p-4">Add Iamge</h1></Link></li>
                {/* <li className="p-4">Home</li> */}
                <li> <Link to="/ShowProduct"><h1 className="p-4">show Iamge</h1></Link></li>
                <li className="p-4">Home</li>
                <li className="p-4">About</li>
                <li className="p-4">Contact</li>
                
                {_user.user && <li className="p-4">Hello {_user.user.username}</li>}
                
                <li className="p-2">
                { props.homepage ? <Link to="/homepage/userprofile"><HiUserCircle className="" size={35}/></Link>:
                props.user ? <Link to="/login"><button className="bg-[#00df9a] w-[200px] rounded-md font-bold text-xl py-2 text-white hover:scale-110">LogOut</button></Link>
                :<Link to="/signup"><button className="bg-green-500 w-[200px] rounded-md font-bold text-xl py-2 text-white hover:scale-110">Signup</button>
                </Link>}
                </li>
            </ul>
            <div onClick={handleNav} className="block md:hidden">
                {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20}/>}
            </div>
            <div className={nav ? "fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-500" : "fixed left-[-100%]"}>
                <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">DRPage.</h1>
                <ul className="p-4 uppercase">
                    {/* <li className="p-4 border-b border-gray-600">Home</li> */}
                    <Link to="ShowProduct"><HiUserCircle className="" size={35}/></Link>
                    <li className="p-4 border-b border-gray-600">Destinations</li>
                    <li className="p-4 border-b border-gray-600">About</li>
                    <li className="p-4 border-b border-gray-600">Contact</li>
                    <li className="p-2 pl-5">
                    { props.homepage ? <Link to="userprofile"><HiUserCircle className="" size={35}/></Link>:
                    props.user ? <Link to="/login"><button className="bg-[#00df9a] w-[200px] rounded-md font-bold text-xl py-2 text-white hover:scale-110">LogOut</button></Link>
                    :<Link to="/signup"><button className="bg-green-500 w-[200px] rounded-md font-bold text-xl py-2 text-white hover:scale-110">Signup</button>
                    </Link>}
                    </li>
                </ul>
            </div>
        </div>
        </div>
    );
}

export default NavBar