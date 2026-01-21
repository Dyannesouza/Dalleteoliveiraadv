import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { Specialties } from '@/app/components/Specialties';
import { About } from '@/app/components/About';
import { Contact } from '@/app/components/Contact';
import { Footer } from '@/app/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Specialties />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
