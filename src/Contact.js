import React from 'react';

const Contact = ({ formData, handleFormChange, handleSubmit, isSubmitting, submitStatus }) => (
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
);

export default Contact;