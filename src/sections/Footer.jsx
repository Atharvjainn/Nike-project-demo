import { footerLogo } from "../assets/images"

import { footerLinks,socialMedia } from "../constants"

const Footer = () => {
  return (
    <section className=' bg-black padding-x padding-t pb-8'>
    <footer id="contact-us" className="max-container text-white">
      <div className="flex flex-col gap-15 lg:flex-row lg:justify-between">

      
      <div className="flex flex-col gap-10">
        <a href="/">
        <img src={footerLogo} alt="nike-logo" width={150} height={46} /></a>
        <p className="max-w-xs font-montserrat text-white-400 font-semibold">Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>
        <div className="flex gap-5">
          {socialMedia.map((icons,index) => (
            <div key={icons.alt} className="w-12 h-12 rounded-full bg-white flex justify-center items-center">
            <a href="/" className="w-full h-full grid items-center justify-center">
            <img src={icons.src} alt={icons.alt} width={30}  height={30} /></a>
          </div>
          ))}
          
          
        </div>
      </div>

      <div className="flex flex-wrap gap-10">
        {footerLinks.map((footerlink) => (
            <div key={footerlink.title} className="flex flex-col gap-2 leading-normal">
              <h1 className="text-3xl font-palanquin font-bold ">{footerlink.title}</h1>
              {footerlink.links.map((listie,index) => (
                  <li  className="list-none text-white-400 font-montserrat font-semibold" key={index}>
                    <a href={listie.link}>{listie.name}</a>
                  </li>
              ))}
            </div>
              
        ))}
        
      </div>

      </div>

      <div className="flex flex-col items-center justify-center mt-24 sm:flex-row sm:justify-between">
        <a className="text-white-400 font-montserrat" href="/">Ⓒ Copyright. All rights reserved.</a>
        <a className="text-white-400 font-montserrat" href="/">Terms & Conditions</a>
      </div>
    </footer> 
    </section>
  )
}

export default Footer