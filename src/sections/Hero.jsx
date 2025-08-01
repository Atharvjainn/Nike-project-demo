import { useState } from 'react'
import Button from '../components/Button'
import {shoes,statistics} from '../constants/index'
import { arrowRight } from '../assets/icons'
import { bigShoe1 } from '../assets/images'
import ShoeCard from '../components/ShoeCard'

const Hero = () => {
  const [shoee,setShoee] = useState(bigShoe1)
  return (
    <section
    id="home"
    className="w-full flex flex-col justify-center min-h-screen gap-10 max-container xl:flex-row">
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:px-8 max-xl:sm:px-16
      pt-28'>
        <p
        className='text-xl font-montserrat text-coral-red'>
           Our Summer collections
        </p>

        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
            The New Arrival
          </span>
          <br/>
          <span className='text-coral-red inline-block mt-3 mr-4'>
            Nike
          </span>
          Shoes
        </h1>

        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm '>
           Discover stylish Nike arrivals, quality comfort, and innovation for
           your active life.
        </p>

        <a href="#products">
          <Button label='Shop now' iconURL={arrowRight} />
        </a>
        

        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16 '>
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p
              className='text-4xl font-palanquin font-bold'
              >{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'
              >{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center
      xl:min-h-screen max-xl:py-40 bg-primary bg-[url(assets/images/collection-background.svg)]'>
        <img 
         src={shoee}
         alt="shoe"
         width={610}
         height={502}
         className='object-contain relative z-10' 
         />

         <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%]
         max-sm:px-6'>
          {shoes.map((shoeobj) => (
              <div key={shoeobj.bigShoe}>
                <ShoeCard
                shoe={shoeobj}
                changeshoe={(shoee) => setShoee(shoee)}
                bigshoeimg={shoee}/>
              </div>
          ))}
         </div>
      </div>

    </section>
  )
}

export default Hero