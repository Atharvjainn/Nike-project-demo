import {footerLogo, headerLogo} from '../assets/images'
import {hamburger,cart} from '../assets/icons'
import {navLinks} from '../constants/index'
import { close } from '../assets/icons'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import {cartt, favred,favblack} from '../assets/'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollLink = (id) => {
    if (location.pathname === '/') {
      // If already on homepage, scroll directly
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to homepage, then scroll
      navigate('/', { state: { scrollToId: id } });
    }
  };




  const [hamburgerr,setHamburgerr] = useState(false);
  const {user,logoutuser} = useAuth();
  const {cartindicator,favindicator} = useCart()


  return (
    <header className='padding-x py-6 absolute z-11 w-full'>
      <nav className='flex justify-between items-center max-container relative '>
        <a href="/">
        <img src={headerLogo}
         alt="headerlogo"
         width={129}
         height={29}
          />
        </a>

        <ul className='flex flex-1 justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((navlink) => (
              <li key={navlink.label}>
                <a 
                href={navlink.href}
                onClick={() => handleScrollLink(navlink.href)}
                className='font-montserrat leading-normal text-lg text-slate-gray hover:text-black hover:font-semibold'
                >
                  {navlink.label}
                </a>
              </li>
          ))}
        </ul>
        <div className='flex gap-5 text-lg leading-normal font-medium font-montserrat max-lg:hidden  items-center'>
          <NavLink to="/Favproducts" >
          {favindicator > 0 && <div className='absolute bg-coral-red rounded-full h-6 w-6 flex justify-center items-center font-montserrat text-sm top-5 right-46 font-bold'>{favindicator}</div> }
          
         
            <img src={favblack} alt="" className='w-9 h-9 pt-0.5'   />
          </NavLink>

           <NavLink to="/cart">
          {cartindicator > 0 && <div className='absolute bg-coral-red rounded-full h-6 w-6 flex justify-center items-center font-montserrat text-sm top-5 right-33 font-bold'>{cartindicator}</div> }
          
         
            <img src={cartt} alt="" className='w-10 h-10'   />
          </NavLink>


         {user ? (
          <button
          onClick={logoutuser}
          className='hover:font-semibold cursor-pointer font-montserrat bg-coral-red px-4 py-1 rounded-md text-white hover:scale-102 transition-all'
          >Log Out</button>
         ):(<NavLink to="/signin"><button className='hover:font-semibold cursor-pointer font-montserrat bg-coral-red px-4 py-1 rounded-md text-white hover:scale-102 transition-all '>Sign in</button></NavLink>)} 
          
          
        </div>

        <div className='hidden max-lg:block cursor-pointer'
        onClick={() => setHamburgerr(true)}>
          <img src={hamburger} alt="hamburger" 
          width={25}
          height={25}/>
        </div>
        {hamburgerr && (
  <div
    className="fixed inset-0 bg-black opacity-40 z-10"
    onClick={() => setHamburgerr(false)}
  />
)}

        <div className={`bg-gray-600 backdrop-blur-2xl fixed right-0 top-0 h-full z-15 rounded-l-xl transition-all duration-500 ease-in-out ${hamburgerr ? 'translate-x-0' : 'translate-x-full'} `
      } onClick={() => setHamburgerr(false)}>
          
          <div className='flex flex-1 justify-center items-center mt-10 px-18 gap-20 flex-col '>
            <img src={footerLogo} alt="" width={170} />
            
          </div>

          <div className='flex flex-1 absolute top-81 ml-6 cursor-pointer '>
            <img src={close} alt="" width={40} height={40}
            onClick={() => setHamburgerr(false)} />
          </div>
            <ul className='flex flex-col gap-8 mt-40 mb-20 text-center px-5' >
          {navLinks.map((navlink) => (
              <li key={navlink.label}>
                <a 
                href={navlink.href}
                className='font-montserrat leading-normal text-xl text-white
                hover:text-black hover:font-semibold
                hover:border-b-2'
                >
                  {navlink.label}
                </a>
              </li>
          ))}
          <li className='flex justify-center items-center gap-5'>
           

            <NavLink to="/cart">
            <img src={cart} alt="" className='w-15 h-15 cursor-pointer'   />
            </NavLink>

            <NavLink to="/Favproducts" >
          {favindicator > 0 && <div className='absolute bg-coral-red rounded-full h-6 w-6 flex justify-center items-center font-montserrat text-sm top-5 right-46 font-bold'>{favindicator}</div> }
          
         
            <img src={favred} alt="" className='w-9 h-9 pt-0.5'   />
          </NavLink>     
          </li> 
          <li className='flex items-center justify-center'>
             {user ? (
          <button
          onClick={logoutuser}
          className='hover:font-semibold cursor-pointer font-montserrat bg-coral-red px-12 py-1 rounded-md text-white hover:scale-102 transition-all'
          >Log Out</button>
         ):(<NavLink to="/signin"><button className='hover:font-bold font-semibold cursor-pointer font-montserrat bg-coral-red px-12 py-2 rounded-md text-white hover:scale-102 transition-all '>Sign in</button></NavLink>)} 
          </li>
        </ul>
        </div>
      </nav>
    </header>
    
  )
}

export default Nav