import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { PricingCardSection } from "@/components/PricingCard";
import { Problem } from "@/components/Problem";
import { WhatChanges } from "@/components/WhatChanges";
import { Introducing } from "@/components/Introducing";
import { WhatYouGet } from "@/components/WhatYouGet";
import { Pricing } from "@/components/Pricing";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { CREAM } from "@/lib/theme";

export default function App() {
  return (
    <div style={{ backgroundColor: CREAM }}>
      <Navbar />
      <HeroSection />
      <PricingCardSection />
      <AnnouncementBar />
      <Problem />
      <WhatChanges />
      <Introducing />
      <WhatYouGet />
      <Pricing />
      <About />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
