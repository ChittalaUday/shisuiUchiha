import HeroSection from '../components/HeroSection/HeroSection';
import Testimonials from '../components/Testimonials/Testimonials';
import Stats from '../components/Stats/Stats';
import AboutUs from '../components/AboutUs/AboutUs';
import Services from '../components/Services/Services';
import Pricing from '../components/Pricing/Pricing';
import Resources from '../components/Resources/Resources';
import ContactUs from '../components/ContactUs/ContactUs';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import Clients from '../components/Clients/ClientLogoScroll';

const Homepage = () => {
    const handleSearch = (query) => {
        console.log('Search query:', query); 
      };

  return (
    <div>
       <HeroSection />
      <Clients />
      <AboutUs />
      <WhyChooseUs />
      <Services />
      <Stats />
      <Testimonials />
      <Resources />
      <ContactUs />
       </div>
  );
};

export default Homepage;
