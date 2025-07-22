import { star } from "../assets/icons"

const CustomerCard = ({imgURL,customerName,rating,feedback}) => {
  return (
    <div className="rounded-[20px] p-10 justify-center flex flex-col items-center gap-6 shadow-3xl bg-white">
        <img src={imgURL} alt="image" width={120} height={120} className="rounded-full border-4 border-coral-red p-1"/>
        <p className="text-lg font-montserrat text-black max-w-sm text-center">{feedback}</p>

        <div className="flex gap-2.5">
            <img src={star} alt="star" />
            <p className="text-xl text-black">({rating})</p>
        </div>

        <h1 className="text-3xl font-montserrat text-coral-red font-semibold">
        {customerName}
        </h1>
    </div>
  )
}

export default CustomerCard