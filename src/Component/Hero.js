import React, { Component } from 'react';

export class Hero extends Component {
  render() {
    return (
      <div className='hero-container grid grid-cols-1 gap-4 md:grid-cols-3 p-4'>
        <div className="header col-span-1 md:col-span-3">
          <h1 className='text-white text-4xl md:text-9xl text-center font-extrabold'>I'M JANITHA</h1>
        </div>
        <div className="position col-span-1 md:col-span-3">
          <h2 className='text-white text-2xl md:text-6xl text-center font-bold'>WEB DEVELOPER || GRAPHIC DESIGNER</h2>
        </div>
        <div className="CV col-span-1 md:col-span-3 flex justify-center">
          <a href="/pdf/Janitha Dilshan Wanasinghe Resume N.pdf" download className='cv-btn pt-3 pb-3 pl-9 pr-9 text-white hover:bg-black hover: text-white'>
            Download CV
          </a>
        </div>
      </div>
    );
  }
}

export default Hero;
