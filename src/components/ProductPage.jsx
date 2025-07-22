import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router'
import { productImages } from '../constants';
import { favblack,favred} from '../assets';
import { cart } from '../assets/icons';
import { useCart } from '../context/CartContext';
import { productswithslug } from '../components/PopularProductcard';
import { useLocation } from 'react-router';

const ProductPage = () => {
    const { slug } = useParams();

    const product = productswithslug.find((product) => (product.slug === slug))
    const images = productImages.find((productimage) => (productimage.id) === product.id)
    const {numberofitems,additems,removeitems,favitemshandle,favitems} = useCart();
    const amount = numberofitems[product.id];

    const [currentimage,setCurrentimage] = useState(images.image1)
    useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // or just window.scrollTo(0, 0)
  }, []);
    

    if(!product) return (
        <div> PRODUCT NOT FOUND </div>
    )


  return (
    
    <section className='w-full px-8  3xl:px-16'>
        <div className=' max-w-[1440px] mx-auto my-0 pt-22 flex flex-col  gap-8 3xl:flex-row pb-20 3xl:pl-0 xl:pl-25 '>
            <div className='left flex  gap-1'>
              <div className='hidden flex-col gap-1 3xl:flex '>
                  {[images.image1, images.image2, images.image3, images.image4, images.image5].map((img, idx) => (
                    <div key={idx} className=" overflow-hidden w-22 h-22  rounded-lg ">
  <img
    src={img}
    onClick={() => setCurrentimage(img)}
    className={`w-full h-full object-cover cursor-pointer transition-transform duration-300 ease-in-out rounded-lg
     hover:scale-[1.2] ${currentimage === img ? 'border-3 border-coral-red' : ''}`}
  />
</div>

                  ))}
                

              </div>
                <img src={currentimage} alt="" className='w-full object-contain h-auto rounded-3xl 3xl:max-w-[480px] ' />
                </div>
            <div className='right flex flex-1 flex-col pt-10 '>

                <h1 className='text-4xl font-montserrat font-bold'>{product.name}</h1>
                

                <h1 className='text-2xl font-montserrat font-semibold pt-2 pb-1'>MRP:₹{product.price.toLocaleString('en-IN')}</h1>

                <h1 className='text-xl font-montserrat leading-4 pb-8 '>(Inclusive of all taxes)</h1>

                <div className="flex  gap-3 xl:flex-row xl:items-center flex-col">
                          {amount > 0 ? 
                          <div className="bg-coral-red px-5  flex gap-10 items-center justify-center rounded-2xl hover:scale-103 hover:transition-all">
                            
                              <button className="text-2xl rounded-full bg-white w-6 h-6 flex justify-center items-center font-mono cursor-pointer font-bold "
                              onClick={() => additems(product.id)}>+</button> 
                            
                            
                           
                            <span className="text-3xl text-white font-bold">{amount}</span>
                            <button className="text-2xl rounded-full bg-white w-6 h-6 flex justify-center items-center font-mono cursor-pointer font-bold "
                            onClick={() => removeitems(product.id)}
                            >-</button> 
                          
                          </div>  :
                          <button
                          onClick={() => additems(product.id)}
                          className="flex items-center bg-coral-red px-3 py-2 rounded-2xl gap-2 font-montserrat font-semibold hover:font-bold cursor-pointer hover:scale-103  hover:transition-all text-2xl justify-center" >Add To Cart
                            <img src={cart} className="bg-none w-10 h-10" alt="" />
                          </button>
                }
                      <button
                        onClick={() =>favitemshandle(product.id) }
                        className="cursor-pointer"
                      >{favitems[product.id]==0 ? (<div className='flex items-center text-2xl justify-center border-1 rounded-xl gap-2 px-3 py-2 font-montserrat font-semibold hover:font-bold cursor-pointer hover:scale-103  hover:transition-all'> Favourite<img src={favblack} alt="" className="w-9 h-9" /> </div>):(<div className='flex items-center text-2xl justify-center border-1 rounded-xl gap-2 px-3 py-2 font-montserrat font-semibold hover:font-bold cursor-pointer hover:scale-103  hover:transition-all'> Favourite<img src={favred} alt="" className="w-9 h-9" /> </div>)}
                        
                        </button>
                      
                </div>

                <p className='text-lg font-palanquin max-w-120 pt-5'>{product.description}</p>

                <ul className='list-disc text-lg font-palanquin flex flex-col pt-8 max-w-120 pl-6'>
                  <li>Colour Shown : {product.colorShown}</li>
                  <li>Style : {product.style}</li>
                  <li>Country/Region of Origin : {product.origin}</li>
                </ul>
                
            </div>
        </div>
    </section>
  )
}

export default ProductPage