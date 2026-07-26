import { Navbar } from "~/components/landing/navbar/navbar";
import {Hero} from "~/components/landing/hero/hero";
import { SocialProof } from "~/components/landing/social-proof/social-proof";
import { Features } from "~/components/landing/features/features";
import {HowItWorks} from "~/components/landing/how-it-works/how-it-works";
import {ProductShowcase}  from "~/components/landing/product-showcase/product-showcase"
import {BuiltForEveryone} from "~/components/landing/built-for-everyone/built-for-everyone"
import {FAQ} from "~/components/landing/faq/faq";
import {CTA} from "~/components/landing/cta/cta";
import {Footer} from "~/components/landing/footer/footer"
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <SocialProof />
      <Features />
      <HowItWorks />
      <ProductShowcase />
      <BuiltForEveryone />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}