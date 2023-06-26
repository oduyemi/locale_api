import React from "react";
import logo from "../assets/images/logo/logo.png";
import { Link } from "react-router-dom";
import Button from "./elements/Button";


const Header = () => {
    return(
        <nav id="header" className="text-white bg-transparent">
            <div className="w-full mx-auto container flex flex-wrap items-center justify-between mt-0 py-1">
                <div className="logo-wrapper pl-12 flex items-center">
                    <Link to="/" className="toggleColor no-underline hover-no-underline font-bold text-2xl lg:text-4xl">
                        <img src={logo} alt="logo" className="w-40 h-40 object-cover" />
                    </Link>
                    
                </div>
                <div className="nav-menu-wrapper flex items-center justify-between space-x-10">
                    <Link to="/" className="text-l">Home</Link>

                    <Link to="/about" className="text-l">About</Link>
                    <Link to="/how-it-works" className="text-l">How It Works</Link>
                
                </div>
                <div className="flex items-center justify-between space-x-6 pr-14">
                    <Link to="/login" className="text-l"><button className="cursor:pointer bg-transparent hover:bg-yel text-blue-dark font-semibold hover:text-white py-2 px-4 border border-yel hover:border-transparent rounded">Login</button></Link>
                    <Link to="/register" className="text-l"><Button className="btnUp">Register</Button></Link>
                </div>
            </div>
            
           
        </nav>
        
    )
}



export default Header;