import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import TrustLogos from "@/components/sections/TrustLogos";
import RiskDetection from "@/components/sections/RiskDetection";
import WalletResearch from "@/components/sections/WalletResearch";
import LiveFeatures from "@/components/sections/LiveFeatures";
import Interlude from "@/components/sections/Interlude";
import DueDiligenceSuite from "@/components/sections/DueDiligenceSuite";
import WalletInspectionSuite from "@/components/sections/WalletInspectionSuite";
import Criterias from "@/components/sections/Criterias";
import PDFReport from "@/components/sections/PDFReport";
import PricingSection from "@/components/sections/PricingSection";
import AboutUs from "@/components/sections/AboutUs";
import OurTeam from "@/components/sections/OurTeam";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      <Navbar />
      <main>
        <HeroSection />
        <TrustLogos />
        <RiskDetection />
        <WalletResearch />
        <Interlude />
        <DueDiligenceSuite />
        <WalletInspectionSuite />
        <Criterias />
        <PDFReport />
        <LiveFeatures />
        <PricingSection />
        <AboutUs />
        <OurTeam />
      </main>
      <Footer />
    </div>
  );
}

export default App;
