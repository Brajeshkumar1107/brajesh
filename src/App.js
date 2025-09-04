import React, { useState, useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';
import Footer from './Footer';
import BackToTop from './BackToTop';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [downloadState, setDownloadState] = useState('idle');
  const [currentExperience, setCurrentExperience] = useState(0);

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle', 'sending', 'success', 'error'

  const fullText = "Hi, I'm Brajesh Kumar";

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  // Add scroll detection for navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownload = () => {
    setDownloadState('downloading');
    // Download the existing PDF file from public folder
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + '/Brajesh Resume.pdf';
    link.download = 'Brajesh Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => {
      setDownloadState('success');
      setTimeout(() => {
        setDownloadState('idle');
      }, 2000);
    }, 500);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert('Please fill in all fields');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus('sending');
    try {
      const response = await fetch('https://formspree.io/f/mpwreozq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Contact from ${formData.name}`,
          _replyto: formData.email
        })
      });
      if (response.ok) {
        setSubmitStatus('success');
        setIsSubmitting(false);
        setFormData({ name: '', email: '', message: '' });
        scrollToSection('home');
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 3000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Approximate navbar height
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  // Function to close mobile navbar menu
  const closeMobileMenu = () => {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
      const togglerButton = document.querySelector('.navbar-toggler');
      if (togglerButton) {
        togglerButton.setAttribute('aria-expanded', 'false');
      }
    }
  };

  // Enhanced scroll function that also closes mobile menu
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
    closeMobileMenu();
  };

  // Experience carousel functions
  const nextExperience = () => {
    setCurrentExperience((prev) => (prev + 1) % 2);
  };
  const prevExperience = () => {
    setCurrentExperience((prev) => (prev - 1 + 2) % 2);
  };

  return (
    <>
      {/* Floating Bubbles Background */}
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <Navbar isScrolled={isScrolled} handleNavClick={handleNavClick} scrollToSection={scrollToSection} />
      <Hero displayText={displayText} />
      <div className="divider"></div>
      <About downloadState={downloadState} handleDownload={handleDownload} />
      <div className="divider"></div>
      <Skills />
      <div className="divider"></div>
      <Projects />
      <div className="divider"></div>
      <Experience currentExperience={currentExperience} nextExperience={nextExperience} prevExperience={prevExperience} setCurrentExperience={setCurrentExperience} />
      <div className="divider"></div>
      <Contact formData={formData} handleFormChange={handleFormChange} handleSubmit={handleSubmit} isSubmitting={isSubmitting} submitStatus={submitStatus} />
      <BackToTop />
      <Footer />
    </>
  );
}

export default App;
