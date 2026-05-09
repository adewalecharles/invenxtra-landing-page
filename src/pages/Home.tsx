import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import Values from '../components/Values';
import FeaturesGrid from '../components/FeaturesGrid';
import Showcase from '../components/Showcase';
import HowItWorks from '../components/HowItWorks';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Values />
      <FeaturesGrid />
      <Showcase />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <CTA />
    </>
  );
}
