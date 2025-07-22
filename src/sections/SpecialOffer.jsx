import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    
    <section className="max-container flex flex-col-reverse items-center lg:flex-row gap-10">
      <div className="flex translate-x-7 lg:translate-x-0  flex-1">
        <img src={offer} alt="imagee" width={773} height={687} className="object-contain w-full"
         />
      </div>
      <div className="flex-1 max-w-xl flex flex-col gap-4 mb-10 lg:mb-0 lg:max-w-full">

        <h1 className="text-4xl font-palanquin font-bold lg:max-w-lg">
          <span className="text-coral-red">Special</span> Offer
           
        </h1>

        <p className="text-slate-gray text-xl mb-5 lg:max-w-lg max-sm:text-lg">Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.
          <br /><br />

         Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>

         <div className="flex gap-10 max-sm:gap-4 lg:max-w-lg ">
          <Button label="View details"/>
          <Button label="Learn more" backgroundColor="bg-white" textColor="text-black"/>
         </div>
      </div>
    </section>
  )
}

export default SpecialOffer