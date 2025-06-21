import { Footer } from "@/components/footer";
import { CTA } from "@/components/home/cta";
import EmailSubscribe from "@/components/home/emailSubs";
import HeroComp from "@/components/home/heroComp";
import EmailProblemsSection from "@/components/home/problemSect";
import TrustFeatures from "@/components/home/whyUsComp";
import { Navbar } from "@/components/navbar";
import { FAQ } from "@/components/pricing/faq";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroComp />
      <EmailProblemsSection />
      <TrustFeatures />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  );
}
