import React, { Component } from 'react';
import Nav from './Nav';  // Correct the folder name
import Hero from './Hero'; 
import Image from './Image'; 
import About from './About'; 
import Service from './Service'; 
import Tab from './Tab'; 
import Footer from './Footer';





export class Home extends Component {
  render() {
    return (
      <>
      <Nav/>
      <Hero/>
      <Image/>
      <About/>
      <Service/>
      <Tab/>
      <Footer/>
      </>
    )
  }
}

export default Home