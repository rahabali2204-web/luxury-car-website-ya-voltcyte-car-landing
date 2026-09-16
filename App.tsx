import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SpecsBar from '@/components/SpecsBar';
import ColorSelector from '@/components/ColorSelector';
import FeaturesGrid from '@/components/FeaturesGrid';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-[#05060a]">
      <Navbar />
      <main>
        <Hero />
        <SpecsBar />
        <ColorSelector />
        <FeaturesGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
