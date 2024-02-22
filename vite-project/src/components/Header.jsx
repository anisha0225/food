import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.png"
import { CiUser } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { useState } from 'react';

const Header = () => {
  const [showMenu, setshowMenu] = useState(false);
  const handleShowMenu=()=>{
    setshowMenu(preve=>!preve)
  }
  return (
    <div>
      <header className="fixed shadow-md w-full h-16 px-2 md:px-7 text-4xl z-50 bg-white"  >
        <div className="flex items-center h-full justify-between">

          <div className="h-14">
            <img src={logo} className="h-full" />
          </div>


          <div className="flex items:center gap-7">
            <nav className="flex gap-5 md:gap-7 text-base md:text-lg">
              <NavLink to=''>Home</NavLink>
              <NavLink to='menu'>Menu</NavLink>
              <NavLink to='about'>About</NavLink>
              <NavLink to='contact'>Contact</NavLink>


            </nav>
            <div className="text-4xl text-slate-600 relative">
              <FaCartShopping />
              <div className="absolute -top-1 -right-2 text-white h-4 bg-gray-300 text-xs text-center w-4 rounded-full m-0 p-0">0</div>
            </div>
            <div className="text-xl text-slate-500" onClick={handleShowMenu}>
              <div className="border-2 border-solid border-slate-500 p-0 rounded-full cursor-pointer" >
                <CiUser />
              </div>
              {
                showMenu && <div className='absolute right-2 bg-white py-2 px-2 shadow drop-shadow-md text-sm flex flex-col'>
                  <NavLink to='New product' className=" cursor-pointer">New product</NavLink>
                  <NavLink to="Login" className=" cursor-pointer">Login</NavLink>
                  <NavLink to="Logout" className=" cursor-pointer">Logout</NavLink>

                </div>
              }

            </div>
          </div>

        </div>
      </header>
    </div>
  )
}

export default Header
