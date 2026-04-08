import { LanguageProvider } from "@/context/LanguageContext";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import {
  CategoriesSection,
  BestSellersSection,
  FeaturesSection,
  FinalCtaSection,
} from "@/components/Sections";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <LanguageProvider>
      <div className="min-h-screen w-full bg-[#FAFBFC]">
        <Header />
        <main>
          <Hero />
          <CategoriesSection />
          <BestSellersSection />
          <FeaturesSection />
          <FinalCtaSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}