import React from 'react';

const Hero = ({ displayText }) => (
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
);

export default Hero;