import Brand from "@/components/brand/Brand";
import ContactUs from "@/components/ContactUs";
import Coverage from "@/components/Coverage";
import Disclaimer from "@/components/Disclaimer";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhatsappButton from "@/components/WhatsappButton";
import WhyChooseFixMaster from "@/components/WhyChooseFixMaster";

export default function Home() {
  return (
    <>
    <Header/>
    <Hero />    
    <Brand />
    <Services />
    <WhyChooseFixMaster />
    <Coverage />  
    <ContactUs />
    <Disclaimer />
    <Footer />
    <WhatsappButton />
    </>
  );
}
