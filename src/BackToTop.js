import React from 'react';

const BackToTop = () => (
  <button className="btn btn-outline-dark rounded-circle back-to-top" id="backToTopBtn" title="Back to top" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
    <i className="fas fa-arrow-up"></i>
  </button>
);

export default BackToTop;