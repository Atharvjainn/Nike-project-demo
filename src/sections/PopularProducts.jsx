import { products } from "../constants"
import PopularProductcard from "../components/PopularProductcard"

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:pt-12" >
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-montserrat font-bold ">
          Our <span className="text-coral-red"> Popular </span> Products
        </h2>

        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value.
        </p>

      </div>

      <div className="mt-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 sm:gap-6 gap-14  ">
        {products.map((product) => (
          <PopularProductcard key={product.name} {...product}/>
        ))}
      </div>
    </section>
  )
}

export default PopularProducts  