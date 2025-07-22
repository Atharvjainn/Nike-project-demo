import {shoe8} from '../assets/images'
import Button from '../components/Button'
const SuperQuality = () => {
  return (
    
    <section id="about-us"className='max-container lg:flex lg:flex-row  lg:gap-10 flex-col'>
      <div className='flex flex-col  justify-center flex-1'>

        <h1 className='text-4xl font-palanquin font-bold lg:max-w-lg '>
          We Provide You <span className='text-coral-red'>Super Quality</span> Shoes
        </h1>

        <p className=' text-xl font-montserrat text-slate-gray mt-4 mb-8 lg:max-w-lg '>Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
        <br />
        <br />
        Our dedication to detail and excellence ensures your satisfaction</p>

        <div className='lg:max-w-lg' >
          <Button label="View details"
        />
        </div>
        



      </div>

      <div className='flex flex-1 justify-center items-start mt-10 lg:mt-0'>
        <img src={shoe8} alt="image"
        width={570}
        height={522}
        className='object-contain' />
      </div>
    </section>
  )
}

export default SuperQuality