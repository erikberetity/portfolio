import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
//import Projects from './components/Projects';
import Contact from './components/Contact';
//import Footer from './components/Footer';
import Skills from './components/Skills'

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Contact />
      
    </div>
  );
};

export default App;
