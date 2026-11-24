import ScrollBackgroundVideo from './components/ScrollBackgroundVideo';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PracticeAreas from './components/PracticeAreas';
import AboutOffice from './components/AboutOffice';
import TeamSection from './components/TeamSection';
import LocationHours from './components/LocationHours';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { useScrollMotion } from './hooks/useScrollMotion';

export default function App() {
  useScrollMotion();

  return (
    <>
      <ScrollBackgroundVideo />
      <div className="app-shell">
        <Navbar />
        <main>
          <Hero />
          <PracticeAreas />
          <AboutOffice />
          <TeamSection />
          <LocationHours />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
