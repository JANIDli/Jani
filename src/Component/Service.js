import React, { Component } from 'react'

export class Service extends Component {
  render() {
    return (
      <>
      <div className="about-header">
            <h1 className='text-5xl font-bold text-center'>TECHNOLOGY</h1>
        </div>
        <br />
      <div className='service-container'>
          <div className="img">
            <img src="html.png" alt="" />
        </div>
         <div className="img">
             <img src="css.png" alt="" />
        </div>
         <div className="img">
             <img src="jss.png" alt="" />
        </div>
        <div className="img">
            <img src="php.png" alt="" />
        </div>
        <div className="img">
            <img src="react.png" alt="" />
        </div>
        <div className="img">
            <img src="wp.png" alt="" />
        </div>
        <div className="img">
            <img src="ps.png" alt="" />
        </div>
        <div className="img">
            <img src="canva.png" alt="" />
        </div>
         
      </div>
      </>
    )
  }
}

export default Service