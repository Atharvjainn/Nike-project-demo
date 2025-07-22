import React, { useRef, useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { useAuth } from '../context/AuthContext';

const Signin = () => {
     const [ishovered,setIshovered] = useState(false);

     const {user,loginuser} = useAuth();
     const ref = useRef(null);
     const navigate = useNavigate();

     const loginhandler = (e) => {
        e.preventDefault();
        const email = ref.current.email.value;
        const password = ref.current.password.value;
        const info = {email,password};
        loginuser(info)
     }


  return (
    <section className= 'w-full h-[96vh] pt-3 padding-x flex items-center justify-center font-montserrat'>
        <div className={`max-w-[1440px] mx-auto my-0 flex justify-center items-center bg-white sm:bg-gray-800 h-[80%] rounded-2xl shadow-3xl ${ishovered ? "xl:w-[40%]" : "xl:w-full"} w-full transition-all ease-in-out duration-500` }>
            <div className=' bg-black/85 flex flex-col py-12 px-11 rounded-2xl shadow-3xl border-4 border-orange-400'
            onMouseEnter={() => setIshovered(true)}
            onMouseLeave={() => setIshovered(false)}>
    <form  className='flex flex-col text-coral-red items-center gap-4' onSubmit={loginhandler} ref={ref} >
        <div>
            <h1 className='text-4xl font-bold font-montserrat mb-3   '>LOGIN</h1>
        </div>

        

        <div className='w-full'>
            <label className='w-full'>Email</label>
            <br />
            <input 
            required 
            type="email"
            placeholder='Enter email..'
            name = "email"
            className='border-b-2 border-b-black bg-gray-100 w-full font-black text-black' />
        </div>

        <div className='w-full'>
          <label className='w-full'>Password</label>
          <br />
            <input 
            required 
            type="password"
            placeholder='Enter password..'
            name = "password"
            className='border-b-2 border-b-black bg-gray-100 w-full font-black text-black' />
        </div>

        <div className='flex w-full'>
            <button
            type='submit'
            className='cursor-pointer border-2 bg-black/40 w-full mt-5 hover:scale-103 transition-all hover:font-bold py-2'
            >Login</button>
        </div>

        <div className='min-w-[263.93px] text-center'>
            <p >Don't have an account? <Link className='text-blue-500 font-bold' to="/signin">Sign Up</Link></p>
        </div>
            
        
        
    </form>
    </div>
        </div>

    </section>
  )
}

export default Signin