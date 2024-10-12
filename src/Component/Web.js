import React, { Component } from 'react'
import Tab from './Tab';
import Nav from './Nav';

export class Web extends Component {
  render() {
    return (
      <>
      <Nav/>
      <Tab/>
      <div className="graphic-container">
          <div className="img1">
            <img src="beat.png" alt="Description of image 1" />
            <button className="view-site-btn" type="button">View Site</button>
          </div>
          <div className="img1">
            <img src="bloging.png" alt="Description of image 1" />
            <button className="view-site-btn" type="button">View Site</button>
          </div>
          <div className="img1">
            <img src="quize.png" alt="Description of image 1" />
            <button className="view-site-btn" type="button">View Site</button>
          </div>
          <div className="img1">
            <img src="web1.jpeg" alt="Description of image 1" />
            <button className="view-site-btn" type="button">View Site</button>
          </div>
          <div className="img1">
            <img src="web2.jpeg" alt="Description of image 1" />
            <button className="view-site-btn" type="button">View Site</button>
          </div><div className="img1">
            <img src="web3.jpeg" alt="Description of image 1" />
            <button className="view-site-btn" type="button">View Site</button>
          </div>
        </div>
      
      </>
    )
  }
}

export default Web