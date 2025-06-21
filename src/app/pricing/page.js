import { Footer } from "@/components/footer";
import { FAQ } from "@/components/pricing/faq";
import { PricingComponent } from "@/components/pricingComponent";
import { AnyQuestion } from "@/components/pricing/anyQuestion";
import { Navbar2 } from "@/components/navbar2";

export default function Pricing() {
  return (
    <div>
      <Navbar2 />
      <PricingComponent />
      <FAQ />
      <AnyQuestion />
      <Footer />
    </div>
  );
}
