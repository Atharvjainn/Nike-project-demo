import Nav from './components/Nav'
import {Hero,PopularProducts,SuperQuality,Services,SpecialOffer,CustomerReviews,Subscribe,Footer} from './sections/index'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const App = () => {
    const location = useLocation();
    

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollY = window.scrollY;

      sections.forEach((sec) => {
        const offset = sec.offsetTop - 500;
        const height = sec.offsetHeight;

        if (scrollY >= offset && scrollY < offset + height) {
          sec.classList.add('show-animation');
        } else {
          // sec.classList.remove('show-animation');
        }
      });
    };

    // Run once on mount and also on scroll
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.state?.scrollToId) {
      const section = document.getElementById(location.state.scrollToId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  
  return (
   <main className='relative'>
      <section className='hero xl:pl-8 xl:sm:pl-16 wide:pr-8 wide:sm:pr-16 padding-b'>
        <Hero/>
      </section>
      <section className='popular padding'>
        <PopularProducts />
      </section>
      <section className='super padding'>
        <SuperQuality/>
      </section>
      <section className='animate padding-x py-10'>
        <Services/>
      </section>
      <section className='specialoffer padding'>
        <SpecialOffer/>
      </section>
      <section className='bg-pale-blue padding customer'>
        <CustomerReviews/> 
      </section>
      <section className='subscribe padding-x sm:py-32 py-16 w-full'>
       < Subscribe />
      </section>
    </main>
  );
};

export default App;