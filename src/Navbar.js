import React from 'react';

const Navbar = ({ isScrolled, handleNavClick, scrollToSection }) => (
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
);

export default Navbar;