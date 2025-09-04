import React from 'react';

const Skills = () => (
  <section id="skills" className="py-5" data-aos="fade-up">
    <div className="container">
      <div className="text-center mb-5">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">Technologies and tools I work with</p>
      </div>
      
      {/* Main Skills Grid */}
      <div className="row g-4">
        {/* Frontend Skills */}
        <div className="col-lg-4 col-md-6">
          <div className="skill-category-card">
            <div className="skill-category-header">
              <div className="skill-category-icon">
                <i className="fas fa-laptop-code"></i>
              </div>
              <h4 className="skill-category-title">Frontend</h4>
            </div>
            <div className="skill-tags">
              <span className="skill-tag" data-level="85">Angular</span>
              <span className="skill-tag" data-level="80">AngularJS</span>
              <span className="skill-tag" data-level="90">React.js</span>
              <span className="skill-tag" data-level="92">HTML5</span>
              <span className="skill-tag" data-level="90">CSS3</span>
              <span className="skill-tag" data-level="88">JavaScript</span>
            </div>
          </div>
        </div>

        {/* Backend Skills */}
        <div className="col-lg-4 col-md-6">
          <div className="skill-category-card">
            <div className="skill-category-header">
              <div className="skill-category-icon">
                <i className="fas fa-server"></i>
              </div>
              <h4 className="skill-category-title">Backend</h4>
            </div>
            <div className="skill-tags">
              <span className="skill-tag" data-level="95">Java</span>
              <span className="skill-tag" data-level="90">Spring Boot</span>
              <span className="skill-tag" data-level="88">Spring Data JPA</span>
              <span className="skill-tag" data-level="87">Spring Security</span>
              <span className="skill-tag" data-level="90">RESTful Web Services</span>
              <span className="skill-tag" data-level="85">Microservices</span>
              <span className="skill-tag" data-level="75">R2DBC</span>
              <span className="skill-tag" data-level="85">WebFlux</span>
              <span className="skill-tag" data-level="85">Reactive Programming</span>
              <span className="skill-tag" data-level="88">JUnit</span>
              <span className="skill-tag" data-level="82">Mockito</span>
            </div>
          </div>
        </div>

        {/* Database Skills */}
        <div className="col-lg-4 col-md-6">
          <div className="skill-category-card">
            <div className="skill-category-header">
              <div className="skill-category-icon">
                <i className="fas fa-database"></i>
              </div>
              <h4 className="skill-category-title">Database</h4>
            </div>
            <div className="skill-tags">
              <span className="skill-tag" data-level="90">MySQL</span>
              <span className="skill-tag" data-level="85">MongoDB</span>
              <span className="skill-tag" data-level="88">SQL Server</span>
              <span className="skill-tag" data-level="87">Oracle Database</span>
              <span className="skill-tag" data-level="90">DBMS Concepts</span>
            </div>
          </div>
        </div>

        {/* Developer Tools */}
        <div className="col-lg-4 col-md-6">
          <div className="skill-category-card">
            <div className="skill-category-header">
              <div className="skill-category-icon">
                <i className="fas fa-tools"></i>
              </div>
              <h4 className="skill-category-title">Developer Tools</h4>
            </div>
            <div className="skill-tags">
              <span className="skill-tag" data-level="90">Git</span>
              <span className="skill-tag" data-level="90">GitHub</span>
              <span className="skill-tag" data-level="85">Postman</span>
              <span className="skill-tag" data-level="92">VS Code</span>
              <span className="skill-tag" data-level="88">Eclipse</span>
              <span className="skill-tag" data-level="90">IntelliJ IDEA</span>
              <span className="skill-tag" data-level="88">Maven</span>
            </div>
          </div>
        </div>

        {/* Core Computer Science */}
        <div className="col-lg-4 col-md-6">
          <div className="skill-category-card">
            <div className="skill-category-header">
              <div className="skill-category-icon">
                <i className="fas fa-brain"></i>
              </div>
              <h4 className="skill-category-title">Core Computer Science</h4>
            </div>
            <div className="skill-tags">
              <span className="skill-tag" data-level="90">Data Structures</span>
              <span className="skill-tag" data-level="88">Algorithms</span>
              <span className="skill-tag" data-level="92">Object-Oriented Design (OOP)</span>
              <span className="skill-tag" data-level="95">Problem Solving</span>
              <span className="skill-tag" data-level="85">Complexity Analysis</span>
            </div>
          </div>
        </div>

        {/* Android Development */}
        <div className="col-lg-4 col-md-6">
          <div className="skill-category-card">
            <div className="skill-category-header">
              <div className="skill-category-icon">
                <i className="fab fa-android"></i>
              </div>
              <h4 className="skill-category-title">Android Development</h4>
            </div>
            <div className="skill-tags">
              <span className="skill-tag" data-level="80">Android Development</span>
              <span className="skill-tag" data-level="90">Java</span>
              <span className="skill-tag" data-level="85">Kotlin</span>
              <span className="skill-tag" data-level="85">Android Studio</span>
              <span className="skill-tag" data-level="85">XML</span>
              <span className="skill-tag" data-level="80">Firebase</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;