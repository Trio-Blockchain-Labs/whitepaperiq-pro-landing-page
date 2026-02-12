import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import TrustLogos from "@/components/sections/TrustLogos";
import RiskDetection from "@/components/sections/RiskDetection";
import InstitutionalFeatures from "@/components/sections/InstitutionalFeatures";
import Interlude from "@/components/sections/Interlude";
import DueDiligenceSuite from "@/components/sections/DueDiligenceSuite";
import Criterias from "@/components/sections/Criterias";
import PDFReport from "@/components/sections/PDFReport";
import PricingSection from "@/components/sections/PricingSection";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      <Navbar />
      <main>
        <HeroSection />
        <TrustLogos />
        <RiskDetection />
        <InstitutionalFeatures />
        <Interlude />
        <DueDiligenceSuite />
        <Criterias />
        <PDFReport />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
