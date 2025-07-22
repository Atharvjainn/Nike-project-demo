import React from 'react'

const ServiceCard = ({imgURL,label,subtext}) => {
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16'>

        <div className='flex justify-center items-center rounded-full bg-coral-red w-11 h-11'>
            <img src={imgURL} alt="image" width={24} height={24} />
        </div>

        <h1 className='text-3xl font-palanquin font-bold leading-normal mt-4'>
            {label}
        </h1>

        <p className='font-montserrat text-slate-gray mt-3'>
            {subtext}
        </p>


    </div>
  )
}

export default ServiceCard