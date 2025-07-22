import React, { useState } from 'react'
import {closebtn, jordanshoe1} from '../assets'
import { useCart } from '../context/CartContext';
import { products } from '../constants';

const CartProductcard = ({data}) => {
  const {imgURL,price,name,id} = data;
  

  const {numberofitems,setNumberofitems,additems,removeitems} = useCart();

  const removeitem = () => {
    setNumberofitems((prev) => ({...prev,[id] : 0}))
  }

  const total = price * parseInt(numberofitems[id]);
  const displayprice = total.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
 

  

  return (
    <>
    
        <div className=' bg-gray-100 flex md:col-span-1 col-span-2 justify-center items-center gap-2'>
        <img src={imgURL} className=' lg:w-25 lg:h-25 w-16 h-16  rounded-2xl' alt="shoe" />
        <h1 className='font-bold lg:text-sm text-xs'>{name}</h1>
        </div>

        <div className=' bg-gray-100  flex justify-center items-center '>
          <select id="sizes" className='border-2 border-red-500 rounded-md lg:text-sm text-xs'>
            <option value="7">UK 7</option>
            <option value="8">UK 8</option>
            <option value="9">UK 9</option>
            <option value="10">UK 10</option>
            <option value="11">UK 11</option>
          </select>
        </div>

        <div className=' bg-gray-100  flex justify-center items-center' >
          <div className='flex gap-1 items-center lg:text-sm text-xs'>
            <button className='lg:text-2xl text-sm font-mono cursor-pointer font-semibold'
            onClick={() => removeitems(id) }
            >-</button>
            <input type="text" value={numberofitems[id]} className='text-center md:w-[50px] w-[20px] rounded-sm h-[20px] text-md font-semibold'/>
            <button className='lg:text-xl text-sm font-mono cursor-pointer '
            onClick={() => additems(id) }
            >+</button>
          </div>
          
        </div>

        <div className=' bg-gray-100  flex justify-center items-center lg:text-base text-xs'>{displayprice.toLocaleString('en-IN')}</div>

        <div className=' bg-gray-100 rounded-r-2xl hidden md:flex md:justify-center items-center text-md '>
          <button className='cursor-pointer' onClick={removeitem}>
            <img src={closebtn} alt="" className='md:w-5 md:h-5' />
          </button>
          
        </div>
     </>
    
  )
}

export default CartProductcard