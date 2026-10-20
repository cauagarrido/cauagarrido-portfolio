import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import Hero from './components/sections/Hero.jsx';
import Projects from './components/sections/Projects.jsx';
import Technologies from './components/sections/Technologies.jsx';
import Experience from './components/sections/Experience.jsx';
import Contact from './components/sections/Contact.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <Projects />
        <Technologies />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
