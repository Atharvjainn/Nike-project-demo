import CustomerCard from "../components/CustomerCard"
import { reviews } from "../constants"
const CustomerReviews = () => {
  return (
    <section className="max-container flex flex-col items-center">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-4xl font-palanquin font-bold text-center">What Our <span className="text-coral-red">Customer</span> Say?</h1>
        <p className="text-xl font-montserrat text-slate-gray max-w-lg text-center">Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
      </div>

      <div className="mt-24 flex flex-1 items-center flex-col gap-14 w-full lg:flex-row justify-evenly ">
        {reviews.map((review) => (
          <CustomerCard key={review.customerName} {...review}/>
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews