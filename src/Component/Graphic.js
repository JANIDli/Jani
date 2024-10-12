import React, { Component } from 'react'
import Tab from './Tab';
import Nav from './Nav';
import Footer from './Footer';


export class Graphic extends Component {
  render() {
    return (
      <>
      <Nav/>
      <Tab/>
       <div className="web-container">
          <div className="img1">
            <img src="Career2.png" alt="Description of image 1" />
          </div>
          <div className="img1">
            <img src="career.png" alt="Description of image 1" />
          </div>
          <div className="img1">
            <img src="september.jpg" alt="Description of image 1" />
          </div>
          <div className="img1">
            <img src="Web.jpg" alt="Description of image 1" />
          </div>
          <div className="img1">
            <img src="sanju.png" alt="Description of image 1" />
          </div>
          <div className="img1">
            <img src="savi.jpg" alt="Description of image 1" />
          </div>
          <div className="img1">
            <img src="Caree141.png" alt="Description of image 1" />
          </div>
          <div className="img1">
            <img src="Sample.jpg" alt="Description of image 1" />
          </div>
          <div className="img1">
            <img src="orange.jpg" alt="Description of image 1" />
          </div>
          <div className="img1">
            <img src="JSEX.jpg" alt="Description of image 1" />
          </div>
          <div className="img1">
            <img src="crr copy.jpg" alt="Description of image 1" />
          </div>
          <div className="img1">
            <img src="job.jpg" alt="Description of image 1" />
          </div>
        </div>
      <Footer/>
      </>
    )
  }
}

export default Graphic