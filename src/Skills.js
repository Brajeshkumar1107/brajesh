import React from 'react';

const Skills = () => (
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
);

export default Skills;