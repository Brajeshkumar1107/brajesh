import React from 'react';

const Projects = () => (
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
);

export default Projects;