import React from 'react';

const About = ({ downloadState, handleDownload }) => (
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
                  <h5>Team Leader</h5>
                  <p>Excellent leadership and collaboration skills</p>
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
                onClick={() => window.open('mailto:brajeshsharma112004@gmail.com')}
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
);

export default About;