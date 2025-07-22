import React, { useState } from 'react'
import CartProductcard from '../components/CartProductcard'
import {cashon, creditcard,upi,left} from '../assets'
import {NavLink,Link} from 'react-router-dom'
import {products} from '../constants'
import { useCart } from '../context/CartContext'

const Cart = () => {
  const {numberofitems,totalprice} = useCart();
  const [formm,setFormm] = useState('card')
  const [name,setName] = useState('')
  const [cardno,setCardno] = useState('')
  const [cvv,setCvv] = useState('')
  const[address,setAddress] = useState('')
  const[upI,setUpI] = useState('');
  let isallfilled
  const [showMessage, setShowMessage] = useState(false);

  if(formm==="card"){
    isallfilled = name && cardno  && cvv && address;
  }

  if(formm==="upi"){
    isallfilled = upi && address;
  }

  if(formm==="cash"){
    isallfilled = address && true;
  }
  
  

  const isrequired = () => {
    let count = 0;
    for(let i=1;i<products.length+1;i++){
      if(numberofitems[i] !== 0) count++;
    }
    if(count > 4) return true;
      return false
  }
  
  
  return (
    <section className='w-full pb-8 pt-5  padding-x'>
      <div className='flex xl:flex-row flex-col pt-17 gap-5 max-w-[1470px] mx-auto my-0'>
        <div className='flex flex-col flex-[1.5]'>
          <h1 className='font-bold text-3xl '>Shopping Cart</h1>

          <div className='mt-5 relative font-montserrat'>
            <div className='border-b-1 absolute z-10 top-7.5 w-[98%] opacity-20'></div>
            <div className='border-b-1 absolute z-10 top w-[98%] opacity-20'></div>
            <div className='border-b-1 absolute z-10 bottom-21 w-[98%] opacity-20'></div>
          <div className='grid  grid-cols-5   pb-3 pr-2 pt-1 '>
            <div className='flex justify-center items-center text-md md:col-span-1 col-span-2 '>Product</div>
            <div className='flex justify-center items-center text-md'>Size</div>
            <div className='flex justify-center items-center text-md'>Quantity</div>
            <div className='flex justify-center items-center text-md'>Price</div>
             <div className='flex justify-center items-center text-md '></div>
            </div>
            
            {/* map items here */}
            <div className={`grid grid-cols-5  gap-y-1.5  ${isrequired() ? "overflow-y-scroll h-[420px]" : ""}   `}>

              {products.map((product) => {
                if(numberofitems[product.id] !== 0) {
                  return  <CartProductcard  key={product.id} data={product}/>
                }
              })}
            {/* <CartProductcard/> */}
            {/* <CartProductcard/> */}
            {/* <CartProductcard/> */}
            {/* <CartProductcard/> */}
            {/* <CartProductcard/> */}
            </div>
            
            <div className='flex justify-between xl:mt-0 mt-3 '>
              <div className='flex items-end'>
                <NavLink to="/" className='font-bold flex items-center text-lg cursor-pointer gap-2  '>
              
                    <img src={left} alt="" className='w-5 h-5' />
                  
                    Continue Shopping</NavLink>
              </div>

              <div className=' xl:flex
               font-montserrat hidden flex-col pr-20 pt-5'> 
                <div className='flex gap-10 justify-between   '>

                 
                  <h1 className='text-gray-500 font-semibold flex '>Subtotal</h1>
                  <h1 className='text-black text-md font-bold flex '>₹{totalprice.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h1>
                </div>

                <div className='flex gap-10 justify-between  '>
                  <h1 className='text-gray-500 font-semibold flex '>Shipping</h1>
                  <h1 className='text-black text-md font-bold flex '>Free</h1>
                </div>

                <div className='border-t-1  pb-0.5 opacity-20 '></div>

                <div className='flex gap-10 justify-between '>
                  <h1 className='text-black text-lg font-semibold flex'>Total :</h1>
                  <h1 className='text-black text-lg font-bold flex '>₹{totalprice.toLocaleString('en-IN')}</h1>
                </div>
              </div>


            </div>
            </div>
            
            

          
        </div>


        <div className='bg-gray-100 flex flex-[0.6] rounded-2xl flex-col mt-2  pt-6 px-6 pb-6 xl:pb-4 font-montserrat  '>
          <h1 className='font-bold text-3xl mb-10 '>Payment Info</h1>


          <div className='flex flex-col mb-5 '>
              <span>Payment Method</span>
              <div className='flex items-center font-semibold gap-2'>
                  <input type="radio" name="payment" id="" className='h-4 w-4'
                    defaultChecked
                    value="card"
                    checked={formm === "card"}
                    onChange={(e) => setFormm(e.target.value)}
                  />
                    <label className='flex items-center gap-1' >
                    <img src={creditcard} alt="" className='w-7 h-7' />
                     Credit Card
                  </label>
              </div>
              <div className='flex items-center font-semibold gap-2'>
                  <input type="radio" name="payment" id="" className='h-4 w-4'
                    value="upi"
                    checked={formm === "upi"}
                    onChange={(e) => setFormm(e.target.value)}
                  
                  />
                    <label className='flex items-center gap-1' >
                    <img src={upi} alt="" className='w-9 h-9' />
                     UPI
                  </label>
              </div>
              <div className='flex items-center font-semibold gap-2'>
                  <input type="radio" name="payment" id="" className='h-4 w-4'
                     value="cash"
                    checked={formm === "cash"}
                    onChange={(e) => setFormm(e.target.value)}
                  
                  />
                    <label className='flex items-center gap-1' >
                    <img src={cashon} alt="" className='w-8 h-8' />
                      Cash On Delivery (COD)
                  </label>
              </div>
          </div>

          <div>
           { formm==="card" && <form>

              <div className='flex flex-col mb-2'>
                <h1>Name On Card</h1>
                <input type="text" name="" id="" className='border-b-2 rounded-md text-gray-700 px-2 py-0.5' placeholder='NAME ON CARD'
                maxLength={50}
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className='flex flex-col '>
                <h1>Card Number</h1>
                <input type="text" name="" id="" className='border-b-2 rounded-md text-gray-700 px-1 py-0.5 ' placeholder='1234 1234 1234 1234'
                autoFocus
                maxLength={19}
                value={cardno}
                onChange={(e) => setCardno(e.target.value)}
                  onInput={(e) => {
                    let value = e.target.value.replace(/\D/g, '').slice(0, 16); // Keep digits only
                    value = value.match(/.{1,4}/g)?.join(' ') ?? '';
                    e.target.value = value;
                  }}
                />
              </div>

              <div className='flex justify-between mt-4 '>
                <div className='flex flex-col '>
                  <h1>Expiration Date</h1>
                  <div className='flex gap-2'>
                  <select name="month" className='border-1 border-gray-400 rounded-md py-0.5'
                   >
                    <option value="1">01</option>
                    <option value="2">02</option>
                    <option value="3">03</option>
                    <option value="4">04</option>
                    <option value="5">05</option>
                    <option value="6">06</option>
                    <option value="7">07</option>
                    <option value="8">08</option>
                    <option value="9">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                  <select name="year" className='border-1 border-gray-400 rounded-md py-0.5'
                   >
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
                    <option value="2031">2031</option>
                    <option value="2032">2032</option>
                    <option value="2033">2033</option>
                    <option value="2034">2034</option>
                    <option value="2035">2035</option>
                    <option value="2036">2036</option>
                    <option value="2037">2037</option>
                    <option value="2038">2038</option>
                    <option value="2039">2039</option>
                    <option value="2040">2040</option>

                  </select>

                  </div>
                  
                </div>

                <div className='flex flex-col  justify-center items-center'>
                  <h1 className='grid justify-self-start w-[30%]'>CVV:</h1>
                  <input type="password" placeholder='123' className='border-b-2 rounded-md text-gray-700 w-[30%] px-1 py-0.5' maxLength="3" 
                  value={cvv}
                onChange={(e) => setCvv(e.target.value)}/>
                </div>
                
              </div>

             
                <div className='flex flex-col mt-3'>
                <h1>Address</h1>
                <input type="text" name="" id="" className='border-b-2 rounded-md text-gray-700 px-2 py-0.5' placeholder='FULL ADDRESS' 
                maxLength={100}
                autoFocus
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                />
              

              </div>

            </form> }

            {formm==="upi" &&<> <div className='flex flex-col mb-2'>
                <h1>UPI ID</h1>
                <input type="text" name="" id="" className='border-b-2 rounded-md text-gray-700 px-2 py-0.5' placeholder='eg.abcd@okicici'
                maxLength={50}
                autoFocus
                value={upI}
                onChange={(e) => setUpI(e.target.value)}
                />
              </div>

              <div className='flex flex-col mt-3'>
                <h1>Address</h1>
                <input type="text" name="" id="" className='border-b-2 rounded-md text-gray-700 px-2 py-0.5' placeholder='FULL ADDRESS' 
                maxLength={100}
                autoFocus
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                />
              

              </div>

              
              </>

              

              
}


            {formm==="cash" && <>
            <div className='flex flex-col mt-3'>
                <h1>Address</h1>
                <input type="text" name="" id="" className='border-b-2 rounded-md text-gray-700 px-2 py-0.5' placeholder='FULL ADDRESS' 
                maxLength={100}
                autoFocus
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                />
              

              </div></>}
          </div>


                    <div className='pr-10 pl-10 pt-8 xl:hidden xl:pt-0  flex flex-col justify-center font-montserrat'>
                <div className='flex gap-9 pb-1 pl-2'>
                  <h1 className='text-gray-500 font-semibold flex flex-1'>Subtotal</h1>
                  <h1 className='text-black text-md font-bold flex flex-1'>₹{totalprice.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h1>
                </div>

                <div className='flex gap-10 pl-2  pb-2'>
                  <h1 className='text-gray-500 font-semibold flex flex-1'>Shipping</h1>
                  <h1 className='text-black text-md font-bold flex flex-1'>Free</h1>
                </div>

                <div className='border-t-1  pb-0.5 opacity-20 '></div>

                <div className='flex justify-between gap-12 pl-2 pr-2  '>
                  <h1 className='text-black text-lg font-semibold flex flex-1'>Total :</h1>
                  <h1 className='text-black text-lg font-bold flex flex-1'>₹{totalprice.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h1>
                </div>
              </div>



<div className='justify-center items-center flex xl:pt-10 pt-20'>
  {isallfilled ? (
    // ✅ If valid, allow navigation
    <Link to="/orderplaced" className="w-full">
      <button
        className='bg-coral-red font-montserrat text-white text-3xl w-full py-2 rounded-2xl font-semibold hover:scale-103 hover:font-bold transition-all cursor-pointer'
      >
        Check Out
      </button>
    </Link>
  ) : (
    // ❌ If invalid, show alert
    <button
      className='bg-gray-400 text-white text-3xl w-full py-2 rounded-2xl font-semibold cursor-not-allowed'
      onClick={() => {
        setShowMessage(true);
        setTimeout(() => {
          setShowMessage(false);
        }, 2000);
      }}
    >
      Check Out
    </button>
  )}

  {/* Message box below */}
  {showMessage && (
    <div className="text-red-600 text-lg font-semibold mt-2">
      ⚠️ Please enter all the details...
    </div>
  )}
</div>
        </div>

      </div>
      
    </section>
  )
}

export default Cart