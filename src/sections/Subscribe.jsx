import Button from "../components/Button"

const Subscribe = () => {
  return (
    <section className="max-container flex flex-col items-center gap-10 lg:flex-row lg:justify-between">
      <h1 className="text-4xl font-palanquin font-bold lg:max-w-sm ">
        Sign Up from <span className="text-coral-red">Updates</span> & Newsletter
      </h1>

      <div className="flex border-1 w-full p-2 lg:max-w-xl max-sm:flex-col max-sm:border-0 gap-5 ">
      <input type="text"
      placeholder="subscribe@nike.com" className="input"/>
      <Button label="Sign Up" extra="rounded-xl max-sm:max-w-sm max-sm:mx-auto"   />
      </div>
    </section>
  )
}

export default Subscribe