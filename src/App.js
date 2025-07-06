import React, { useState, useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
    link.href = '/Brajesh Resume.pdf';
    link.download = 'Brajesh Resume.pdf';
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Update state
    setTimeout(() => {
      setDownloadState('success');
      
      // Reset after showing success
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
    
    // Validate form
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert('Please fill in all fields');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('sending');

    try {
      // Using Formspree service to send email in background
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
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        
        // Scroll to home section
        scrollToSection('home');
        
        // Reset status after showing success
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
      
      // Reset status after showing error
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
      // Remove the 'show' class to close the menu
      navbarCollapse.classList.remove('show');
      // Also update the aria-expanded attribute on the toggler button
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

      {/* Navbar */}
      <nav className={`navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <a className="navbar-brand fw-bold" href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Brajesh</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link" href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a></li>
              <li className="nav-item"><a className="nav-link" href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>Skills</a></li>
              <li className="nav-item"><a className="nav-link" href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a></li>
              <li className="nav-item"><a className="nav-link" href="#experience" onClick={(e) => handleNavClick(e, 'experience')}>Experience</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-5" data-aos="fade-up">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <h1 className="display-4 fw-bold mb-2 selectable-text typewriter-text">
                {displayText}
                <span className="cursor">|</span>
              </h1>
              <h3 className="mb-3 selectable-text typewriter-text">Java Developer | Spring Boot Enthusiast</h3>
              <p className="lead mb-4 selectable-text typewriter-text">
                Passionate about building robust backend systems and modern web applications. I love solving real-world problems with clean code and scalable solutions.
              </p>
              <div className="chevron-social-btns mb-4">
                <button className="chevron-btn leetcode" aria-label="LeetCode" onClick={() => window.open('https://leetcode.com/u/Brajesh-Kumar/', '_blank', 'noopener noreferrer')}>
                  <span className="chevron-icon">
                    <svg width="22" height="22" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight: 0}}>
                      <g>
                        <path d="M19.5 25L34 39.5" stroke="#f9a825" strokeWidth="4" strokeLinecap="round"/>
                        <path d="M19.5 25L34 10.5" stroke="#f9a825" strokeWidth="4" strokeLinecap="round"/>
                        <circle cx="25" cy="25" r="22" stroke="#f9a825" strokeWidth="4"/>
                      </g>
                    </svg>
                  </span>
                  <span className="chevron-label">Leetcode</span>
                </button>
                <button className="chevron-btn github" aria-label="GitHub" onClick={() => window.open('https://github.com/Brajeshkumar1107', '_blank', 'noopener noreferrer')}>
                  <span className="chevron-icon">
                    <i className="fab fa-github"></i>
                  </span>
                  <span className="chevron-label">Github</span>
                </button>
                <button className="chevron-btn linkedin" aria-label="LinkedIn" onClick={() => window.open('https://www.linkedin.com/in/brajesh-kumar-a008b2250/', '_blank', 'noopener noreferrer')}>
                  <span className="chevron-icon">
                    <i className="fab fa-linkedin-in"></i>
                  </span>
                  <span className="chevron-label">LinkedIn</span>
                </button>
              </div>
            </div>
            <div className="col-md-5 text-center d-flex justify-content-center align-items-center">
              <div className="profile-photo-wrapper mx-auto">
                <img src={process.env.PUBLIC_URL + '/profile.jpg'} alt="Brajesh Kumar" className="img-fluid rounded-circle shadow profile-photo" width="320" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="divider"></div>

      {/* About Me */}
      <section id="about" className="py-5" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="about-image-container">
                <div className="about-image-wrapper">
                  <img src={process.env.PUBLIC_URL + '/profile.jpg'} alt="Brajesh Kumar" className="about-image" />
                  <div className="about-image-overlay">
                    <div className="about-stats">
                      <div className="stat-item">
                        <span className="stat-number">2+</span>
                        <span className="stat-label">Years Experience</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-number">15+</span>
                        <span className="stat-label">Projects Completed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <div className="about-header">
                  <h3 className="about-subtitle">Java Developer & Spring Boot Enthusiast</h3>
                  <div className="about-badge">
                    <i className="fas fa-code"></i>
                    <span>Full Stack Developer</span>
                  </div>
                </div>
                
                <div className="about-text-container">
                  <p className="about-text">
                    I am a passionate Computer Science student with a strong foundation in Java and backend development. 
                    My journey in software development began with a curiosity to understand how applications work, 
                    and it has evolved into a deep passion for creating robust, scalable solutions.
                  </p>
                </div>

                <div className="about-features">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <i className="fas fa-rocket"></i>
                    </div>
                    <div className="feature-content">
                      <h5>Fast & Efficient</h5>
                      <p>Optimized code for better performance</p>
                    </div>
                  </div>
                  
                  <div className="feature-item">
                    <div className="feature-icon">
                      <i className="fas fa-shield-alt"></i>
                    </div>
                    <div className="feature-content">
                      <h5>Secure & Reliable</h5>
                      <p>Implementing best security practices</p>
                    </div>
                  </div>
                  
                  <div className="feature-item">
                    <div className="feature-icon">
                      <i className="fas fa-users"></i>
                    </div>
                    <div className="feature-content">
                      <h5>Team Player</h5>
                      <p>Excellent collaboration skills</p>
                    </div>
                  </div>
                </div>

                <div className="about-cta">
                  <button 
                    className={`btn btn-primary me-3 ${downloadState}`}
                    onClick={handleDownload}
                    disabled={downloadState === 'downloading'}
                  >
                    {downloadState === 'idle' && (
                      <>
                        <i className="fas fa-download me-2"></i>
                        Download Resume
                      </>
                    )}
                    {downloadState === 'downloading' && (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Downloading...
                      </>
                    )}
                    {downloadState === 'success' && (
                      <>
                        <i className="fas fa-check me-2"></i>
                        Downloaded!
                      </>
                    )}
                  </button>
                  <button 
                    className="btn btn-outline-primary"
                    onClick={() => window.open('mailto:brajeshku1107@gmail.com')}
                  >
                    <i className="fas fa-envelope me-2"></i>
                    Get In Touch
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="divider"></div>

      {/* Skills */}
      <section id="skills" className="py-5" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="skills-container">
                <h5 className="skills-title mb-3">Backend Development</h5>
                <div className="skill-items">
                  <div className="skill-item">
                    <span className="skill-name">Java</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">Spring Boot</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">REST API</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '80%'}}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">JWT</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '75%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="skills-container">
                <h5 className="skills-title mb-3">Database & Tools</h5>
                <div className="skill-items">
                  <div className="skill-item">
                    <span className="skill-name">MySQL</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">Git</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '80%'}}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">Maven</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">Postman</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '85%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="skills-container">
                <h5 className="skills-title mb-3">Frontend Development</h5>
                <div className="skill-items">
                  <div className="skill-item">
                    <span className="skill-name">Angular</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '70%'}}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">HTML/CSS</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">Bootstrap</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '80%'}}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">JavaScript</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '75%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="divider"></div>

      {/* Projects */}
      <section id="projects" className="py-5" data-aos="fade-up">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">Explore my latest work and technical implementations</p>
          </div>
          
          <div className="row g-4">
            {/* Project Card 1 */}
            <div className="col-lg-4 col-md-6">
              <div className="project-card" data-aos="fade-up" data-aos-delay="100">
                <div className="card-glow"></div>
                <div className="corner-particle"></div>
                <div className="corner-particle"></div>
                <div className="corner-particle"></div>
                <div className="corner-particle"></div>
                <div className="project-image">
                  <div className="project-overlay">
                    <div className="project-links">
                      <button className="project-link" title="View on GitHub" aria-label="View Task Manager App on GitHub">
                        <i className="fab fa-github"></i>
                      </button>
                      <button className="project-link" title="Live Demo" aria-label="View Task Manager App Live Demo">
                        <i className="fas fa-external-link-alt"></i>
                      </button>
                    </div>
                  </div>
                  <div className="project-icon">
                    <i className="fas fa-tasks"></i>
                  </div>
                </div>
                
                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">Task Manager App</h3>
                    <div className="project-category">Web Application</div>
                  </div>
                  
                  <p className="project-description">
                    A comprehensive web application for managing daily tasks with user authentication, 
                    RESTful APIs, and real-time updates. Features include task categorization, 
                    priority management, and progress tracking.
                  </p>
                  
                  <div className="project-tech">
                    <span className="tech-tag">Java</span>
                    <span className="tech-tag">Spring Boot</span>
                    <span className="tech-tag">MySQL</span>
                    <span className="tech-tag">REST API</span>
                  </div>
                  
                  <div className="project-footer">
                    <div className="project-stats">
                      <span className="stat-item">
                        <i className="fas fa-code"></i>
                        <span>Backend</span>
                      </span>
                      <span className="stat-item">
                        <i className="fas fa-database"></i>
                        <span>Database</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project Card 2 */}
            <div className="col-lg-4 col-md-6">
              <div className="project-card" data-aos="fade-up" data-aos-delay="200">
                <div className="card-glow"></div>
                <div className="corner-particle"></div>
                <div className="corner-particle"></div>
                <div className="corner-particle"></div>
                <div className="corner-particle"></div>
                <div className="project-image">
                  <div className="project-overlay">
                    <div className="project-links">
                      <button className="project-link" title="View on GitHub" aria-label="View Portfolio Website on GitHub">
                        <i className="fab fa-github"></i>
                      </button>
                      <button className="project-link" title="Live Demo" aria-label="View Portfolio Website Live Demo">
                        <i className="fas fa-external-link-alt"></i>
                      </button>
                    </div>
                  </div>
                  <div className="project-icon">
                    <i className="fas fa-user-tie"></i>
                  </div>
                </div>
                
                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">Portfolio Website</h3>
                    <div className="project-category">Personal Portfolio</div>
                  </div>
                  
                  <p className="project-description">
                    A modern, responsive portfolio website showcasing projects, skills, and experience. 
                    Features smooth animations, interactive elements, and optimized performance 
                    for the best user experience.
                  </p>
                  
                  <div className="project-tech">
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">Bootstrap</span>
                    <span className="tech-tag">CSS3</span>
                    <span className="tech-tag">JavaScript</span>
                  </div>
                  
                  <div className="project-footer">
                    <div className="project-stats">
                      <span className="stat-item">
                        <i className="fas fa-mobile-alt"></i>
                        <span>Responsive</span>
                      </span>
                      <span className="stat-item">
                        <i className="fas fa-palette"></i>
                        <span>Modern UI</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project Card 3 */}
            <div className="col-lg-4 col-md-6">
              <div className="project-card" data-aos="fade-up" data-aos-delay="300">
                <div className="card-glow"></div>
                <div className="corner-particle"></div>
                <div className="corner-particle"></div>
                <div className="corner-particle"></div>
                <div className="corner-particle"></div>
                <div className="project-image">
                  <div className="project-overlay">
                    <div className="project-links">
                      <button className="project-link" title="View on GitHub" aria-label="View E-Commerce API on GitHub">
                        <i className="fab fa-github"></i>
                      </button>
                      <button className="project-link" title="Live Demo" aria-label="View E-Commerce API Live Demo">
                        <i className="fas fa-external-link-alt"></i>
                      </button>
                    </div>
                  </div>
                  <div className="project-icon">
                    <i className="fas fa-shopping-cart"></i>
                  </div>
                </div>
                
                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">E-Commerce API</h3>
                    <div className="project-category">Backend API</div>
                  </div>
                  
                  <p className="project-description">
                    A secure and scalable REST API for e-commerce platforms featuring JWT authentication, 
                    product management, order processing, and payment integration with comprehensive 
                    documentation and testing.
                  </p>
                  
                  <div className="project-tech">
                    <span className="tech-tag">Java</span>
                    <span className="tech-tag">Spring Boot</span>
                    <span className="tech-tag">JWT</span>
                    <span className="tech-tag">PostgreSQL</span>
                  </div>
                  
                  <div className="project-footer">
                    <div className="project-stats">
                      <span className="stat-item">
                        <i className="fas fa-shield-alt"></i>
                        <span>Secure</span>
                      </span>
                      <span className="stat-item">
                        <i className="fas fa-rocket"></i>
                        <span>Scalable</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-5">
            <a 
              href="https://github.com/Brajeshkumar1107" 
              className="btn btn-outline-primary btn-lg view-more-btn" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="View more projects on GitHub"
            >
              <i className="fab fa-github me-2"></i>
              View More Projects
            </a>
          </div>
        </div>
      </section>
      <div className="divider"></div>

      {/* Experience */}
      <section id="experience" className="py-5" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className="experience-carousel">
            {/* Left Navigation Button */}
            <button 
              className="carousel-btn side-btn prev-btn" 
              onClick={prevExperience}
              aria-label="Previous experience"
            >
              <i className="fas fa-chevron-left"></i>
            </button>

            {/* Right Navigation Button */}
            <button 
              className="carousel-btn side-btn next-btn" 
              onClick={nextExperience}
              aria-label="Next experience"
            >
              <i className="fas fa-chevron-right"></i>
            </button>

            <div className="carousel-container">
              {/* Background Blurred Cards */}
              <div className="background-cards">
                <div className="bg-card bg-card-1"></div>
                <div className="bg-card bg-card-2"></div>
                <div className="bg-card bg-card-3"></div>
              </div>

              <div className="carousel-track" style={{ transform: `translateX(-${currentExperience * 100}%)` }}>
                <div className="timeline-item" data-aos="fade-right">
                  <div className="timeline-content">
                    <div className="experience-card">
                      <div className="experience-header">
                        <div className="experience-company">
                          <div className="company-logo">
                            <i className="fas fa-building"></i>
                          </div>
                          <div className="company-info">
                            <h4 className="company-name">Netlink</h4>
                            <p className="company-location">
                              <i className="fas fa-map-marker-alt"></i>
                              Bhopal, Madhya Pradesh
                            </p>
                          </div>
                        </div>
                        <div className="experience-badge">
                          <span className="badge-text">Intern</span>
                        </div>
                      </div>
                      
                      <div className="experience-duration">
                        <i className="fas fa-calendar-alt"></i>
                        <span>June 2023 - August 2023</span>
                      </div>
                      
                      <div className="experience-description">
                        <p>Worked as a Backend Development Intern, focusing on building robust and scalable web applications using modern technologies.</p>
                      </div>
                      
                      <div className="experience-responsibilities">
                        <h5>Key Responsibilities:</h5>
                        <ul className="responsibility-list">
                          <li>
                            <i className="fas fa-check-circle"></i>
                            Developed RESTful APIs using Spring Boot for internal tools and applications
                          </li>
                        </ul>
                      </div>
                      
                      <div className="experience-skills">
                        <h5>Technologies Used:</h5>
                        <div className="skill-tags">
                          <span className="skill-tag">Java</span>
                          <span className="skill-tag">Spring Boot</span>
                          <span className="skill-tag">REST API</span>
                          <span className="skill-tag">MySQL</span>
                          <span className="skill-tag">Angular</span>
                          <span className="skill-tag">Git</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-marker">
                    <div className="timeline-dot"></div>
                    <div className="timeline-line"></div>
                  </div>
                </div>

                <div className="timeline-item" data-aos="fade-left">
                  <div className="timeline-content">
                    <div className="experience-card">
                      <div className="experience-header">
                        <div className="experience-company">
                          <div className="company-logo">
                            <i className="fas fa-laptop-code"></i>
                          </div>
                          <div className="company-info">
                            <h4 className="company-name">CodeAlpha</h4>
                            <p className="company-location">
                              <i className="fas fa-globe"></i>
                              Remote
                            </p>
                          </div>
                        </div>
                        <div className="experience-badge">
                          <span className="badge-text">Intern</span>
                        </div>
                      </div>
                      
                      <div className="experience-duration">
                        <i className="fas fa-calendar-alt"></i>
                        <span>October 2024 - November 2024</span>
                      </div>
                      
                      <div className="experience-description">
                        <p>Worked as a Full Stack Developer, focusing on building robust and scalable web applications using modern technologies.</p>
                      </div>
                      
                      <div className="experience-responsibilities">
                        <h5>Key Achievements:</h5>
                        <ul className="responsibility-list">
                          <li>
                            <i className="fas fa-check-circle"></i>
                            Developed a full-stack web application during the internship using Advanced Java.
                          </li>
                        </ul>
                      </div>
                      
                      <div className="experience-skills">
                        <h5>Technologies Used:</h5>
                        <div className="skill-tags">
                          <span className="skill-tag">Advance Java</span>
                          <span className="skill-tag">JSP/Servlet</span>
                          <span className="skill-tag">MySQL</span>
                          <span className="skill-tag">HTML/CSS</span>
                          <span className="skill-tag">Bootstrap</span>
                          <span className="skill-tag">JavaScript</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-marker">
                    <div className="timeline-dot"></div>
                    <div className="timeline-line"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom Indicators */}
            <div className="carousel-indicators">
              {[0, 1].map((index) => (
                <button
                  key={index}
                  className={`indicator-dot ${currentExperience === index ? 'active' : ''}`}
                  onClick={() => setCurrentExperience(index)}
                  aria-label={`Go to experience ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Contact Me */}
      <section id="contact" className="py-5" data-aos="fade-up">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-lg-5 mb-4 mb-lg-0">
              <h2 className="section-title">Contact Me</h2>
              <div id="contact-info-card">
                <span className="accent-bar"></span>
                <p className="lead">I'd love to hear from you! Feel free to reach out for collaborations, opportunities, or just to say hello.</p>
                <ul className="contact-info-list">
                  <li>
                    <span className="contact-icon"><i className="fas fa-envelope"></i></span>
                    <div>
                      <div className="contact-info-label">Email:</div>
                      <a href="mailto:brajeshku1107@gmail.com">brajeshku1107@gmail.com</a>
                    </div>
                  </li>
                  <li>
                    <span className="contact-icon"><i className="fab fa-linkedin"></i></span>
                    <div>
                      <div className="contact-info-label">LinkedIn:</div>
                      <a href="https://www.linkedin.com/in/brajesh-kumar-a008b2250/" target="_blank" rel="noopener noreferrer">Brajesh Kumar</a>
                    </div>
                  </li>
                  <li>
                    <span className="contact-icon"><i className="fab fa-github"></i></span>
                    <div>
                      <div className="contact-info-label">GitHub:</div>
                      <a href="https://github.com/Brajeshkumar1107" target="_blank" rel="noopener noreferrer">Brajeshkumar1107</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="col-lg-7">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleFormChange} 
                    placeholder="Your Name" 
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea 
                    className="form-control" 
                    id="message" 
                    name="message" 
                    rows="4" 
                    value={formData.message} 
                    onChange={handleFormChange} 
                    placeholder="Your Message" 
                    required
                  ></textarea>
                </div>
                <div className="text-end">
                  <button 
                    type="submit" 
                    className="btn btn-primary" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane me-2"></i>
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
              {submitStatus === 'success' && (
                <div className="alert alert-success mt-3" role="alert">
                  <i className="fas fa-check-circle me-2"></i>
                  Message sent successfully! I will get back to you as soon as possible.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="alert alert-danger mt-3" role="alert">
                  <i className="fas fa-exclamation-triangle me-2"></i>
                  Failed to send message. Please try again later or contact me directly.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <button className="btn btn-outline-dark rounded-circle back-to-top" id="backToTopBtn" title="Back to top" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
        <i className="fas fa-arrow-up"></i>
      </button>

      {/* Footer */}
      <footer className="footer mt-5">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 text-center">
              <span>&copy; 2025 Brajesh Kumar. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
