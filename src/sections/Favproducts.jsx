import { products } from "../constants"
import PopularProductcard from "../components/PopularProductcard"
import { useCart } from "../context/CartContext"
import { useLocation } from "react-router"

const PopularProducts = () => {
  const {favitems,favindicator} = useCart();

  
  

  
  return (
    <section className="padding">
    <section id="" className="max-container max-sm:pt-12" >
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-montserrat font-bold ">
          Your <span className="text-coral-red"> Favourite </span> Products
        </h2>

      </div>

      <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">

        {favindicator > 0 ? (products.map((product) => {
          if(favitems[product.id] == 1 ){
            return <PopularProductcard key={product.name} {...product}/>
          }        
        })) : (<div className="text-2xl font-palanquin font-bold"> NO PRODUCTS TO SHOW</div>)}

        

      </div>
    </section>
    </section>
  )
}

export default PopularProducts  