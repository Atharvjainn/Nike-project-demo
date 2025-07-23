import React from 'react'

const Checkout = () => {
  return (
    <section className='padding-x  w-full'>
        <div className='max-w-[1440px] w-full pt-30 pb-15 flex flex-col gap-2'>
            <h1 className='text-center text-3xl sm:text-4xl font-montserrat font-bold'>ORDER <span className='text-coral-red'>PLACED </span> SUCCESSFULLY!!</h1>
            <h1 className='text-center text-xl font-montserrat font-bold text-coral-red sm:text-2xl'>Your order has been sent to our warehouse, located on the Moon. Estimated delivery: 2077</h1>
        </div>
    </section>
  )
}

export default Checkout