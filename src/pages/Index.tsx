import Header from "@/components/layout/Header";
import HeroSection from "@/components/layout/HeroSection";
import FeatureGrid from "@/components/dashboard/FeatureGrid";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      <main>
        <HeroSection />
        <FeatureGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
