import { star } from "../assets/icons"
import { cart } from "../assets/icons"
import { useCart } from "../context/CartContext"
import { favblack,favred } from "../assets"
import { Link } from "react-router"
import { products} from "../constants"

const slugify = (namee) => {
    return namee.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
  }


const productswithslug = products.map((product) => (
    {
      ...product,slug:slugify(product.name),
    }

  ))


const PopularProductcard = ({imgURL,name,price,id,rating}) => {

  const {numberofitems,additems,removeitems,favitemshandle,favitems} = useCart();
  const amount = numberofitems[id];
  
  const onclickitemsadd = () => {
    additems(id);
  }

  const onclickitemsremove = () => {
    removeitems(id);
  }

  const slug = slugify(name);
  
  

  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full items-center
     shadow-[0_20px_50px_rgba(255,_111,_97,_0.3)]
 rounded-2xl pt-3 pb-4 ">
  <Link to={`/products/${slug}`}>
        <img src={imgURL} alt={name} width={350} height={300}
        className=" rounded-2xl " />
  </Link>
        <div className="mt-5 flex justify-start gap-2.5 items-center">
            <img src={star} alt="rating-icon" className="w-6 h-6" />
            <p className="font-montserrat text-xl leading-normal text-slate-gray">({rating})</p>
        </div>

        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin text-center">
        {name}
        </h3>

        <p className="mt-2 font-semibold text-coral-red text-2xl leading-normal">
        ₹{price.toLocaleString('en-IN')}
        </p>


          
        <div className="flex items-center justify-center gap-3 flex-col lg:flex-row lg:gap-5">
          {amount > 0 ? 
          <div className="bg-coral-red px-5 mt-3 flex gap-10 items-center justify-center rounded-2xl hover:scale-103 hover:transition-all">
            
              <button className="text-2xl rounded-full bg-white w-6 h-6 flex justify-center items-center font-mono cursor-pointer font-bold "
              onClick={onclickitemsadd}>+</button> 
            
            
           
            <span className="text-3xl text-white font-bold">{amount}</span>
            <button className="text-2xl rounded-full bg-white w-6 h-6 flex justify-center items-center font-mono cursor-pointer font-bold "
            onClick={onclickitemsremove}
            >-</button> 
          
          </div>  :
          <button
          onClick={onclickitemsadd}
          className="flex items-center bg-coral-red px-3 py-2 rounded-2xl gap-2 font-montserrat font-semibold hover:font-bold mt-3  cursor-pointer hover:scale-103  hover:transition-all" >Add To Cart
            <img src={cart} className="bg-none" alt="" />
          </button>
}
      <button
        onClick={() =>favitemshandle(id) }
        className="cursor-pointer"
      >{favitems[id]==0 ? (<img src={favblack} alt="" className="w-7 h-7 mt-3" />):(<img src={favred} alt="" className="w-7 h-7 mt-3" />)}
        
        </button>
      
</div>
        
        
    </div>
  )
}

export {productswithslug}
export default PopularProductcard
