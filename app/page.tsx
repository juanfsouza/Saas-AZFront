import Header from '@/app/components/Header';
import Hero from '@/app/components/Hero';
import AboutUs from '@/app/components/AboutUs';
import Services from '@/app/components/Services';
import Testimonials from '@/app/components/Testimonials';
import Footer from '@/app/components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
}