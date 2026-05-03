import AboutSection from "../../components/AboutSection";
import CTASection from "../../components/CTASection";
import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import ServicesSection from "../../components/ServicesSection";
import TestimonialsSection from "../../components/TestimonialsSection";
import { Main, Page } from "./styles";

function Home() {
  return (
    <Page>
      <HeroSection />
      <Main>
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <CTASection />
      </Main>
      <Footer />
    </Page>
  );
}

export default Home;
