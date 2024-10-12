import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <>
      <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Janitha. All Rights Reserved.</p>
        <div className="social-links">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i> {/* Facebook icon */}
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i> {/* Twitter icon */}
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i> {/* Instagram icon */}
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i> {/* LinkedIn icon */}
          </a>
        </div>
      </div>
    </footer>
      </>
    )
  }
}

export default Footer