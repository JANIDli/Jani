import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

// Class-based Tab component
class Tab extends Component {
  // This method handles button click and navigates to /web-development route
  goToWebDevelopment = () => {
    this.props.navigate('/web-development'); // Navigate to Web Development page
  };

  // This method handles button click and navigates to /graphic-design route
  goToGraphicDesign = () => {
    this.props.navigate('/Graphic'); // Navigate to Graphic Design page
  };

  render() {
    return (
      <>
        <div className="about-header">
          <h1 className="text-5xl font-bold text-center">PORTFOLIO</h1>
        </div>
        <div className="Tab-container">
          <div className="web">
            {/* Web Development button navigates to the Web Development portfolio */}
            <button
              className="glow-on-hover text-3xl"
              type="button"
              onClick={this.goToWebDevelopment} // Navigate to Web Development
            >
              WEB DEVELOPMENT
            </button>
          </div>
          <div className="graphic">
            {/* Graphic Design button navigates to the Graphic Design portfolio */}
            <button
              className="glow-on-hover text-3xl"
              type="button"
              onClick={this.goToGraphicDesign} // Navigate to Graphic Design
            >
              GRAPHIC DESIGN
            </button>
          </div>
        </div>
      </>
    );
  }
}

// Create a functional component to wrap the useNavigate hook around the class component
function TabWithNavigate(props) {
  const navigate = useNavigate(); // Access the navigate hook
  return <Tab {...props} navigate={navigate} />; // Pass navigate as a prop to Tab component
}

export default TabWithNavigate;
