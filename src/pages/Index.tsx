import { LanguageProvider } from "@/context/LanguageContext";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import {
  NewTopSection,
  CategoriesSection,
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
          <NewTopSection />
          <CategoriesSection />
          <FeaturesSection />
          <FinalCtaSection />
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}
