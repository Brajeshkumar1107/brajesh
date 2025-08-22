import React from 'react';

const Experience = ({ currentExperience, nextExperience, prevExperience, setCurrentExperience }) => (
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
            {/* Experience 1 */}
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
            {/* Experience 2 */}
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
    </div>
  </section>
);

export default Experience;