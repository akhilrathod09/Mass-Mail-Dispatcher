import React,{useEffect,useState} from "react";
import logo from "../assets/email.svg";
const Navbar=()=>{
    const[active,setActive]=useState("");
    const[toggle,setToggle]=useState(false);
    return(
        <nav className="bg-white w-full flex  justify-between items-center mx-auto px-8 h-20 ">
            <div  className="w-full flex gap-4
            items-center max-w-7xl mx-auto">
                        <img src={logo} alt="logo"
                        className="w-9 h-9 object-contain rounded-full"/>
                        <p className="text-black text-[18px] font-semibold cursor-pointer flex"> Mass Mail Dispatcher</p>
                    
                    <div className="sm:hidden flex flex-1 justify-end items-center">
                    
              </div>
            </div>
        </nav>
    )
}
export default Navbar