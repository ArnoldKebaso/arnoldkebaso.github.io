import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Achievements from './components/sections/Achievements';
import Contact from './components/sections/Contact';
import SmoothScroll from './components/ui/SmoothScroll';
import PageLoader from './components/ui/PageLoader';

export default function App(){
  return(
    <PageLoader>
      <SmoothScroll />
      <Header/>
      <main className="scroll-smooth">
        <Hero/>
        <About/>
        <Experience/>
        <Skills/>
        <Projects/>
        <Achievements/>
        <Contact/>
      </main>
      <Footer/>
    </PageLoader>
  );
}
