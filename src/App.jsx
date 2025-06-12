import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  // Set default theme based on user preference
  useEffect(() => {
    if (localStorage.theme === 'dark' || 
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
          <Header />          <main>
            <Home />
            <About />
            <Skills />
            <Experience />
            <Portfolio />
            <Contact />
          </main>
          
          <Footer />
          <ScrollToTop />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
