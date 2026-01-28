import Header from "@/components/Header";
import Hero from "@/components/Hero";

import Expertises from "@/components/Expertises";
import Sectors from "@/components/Sectors";
import Team from "@/components/Team";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      <Expertises />
      <Sectors />
      <Team />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
