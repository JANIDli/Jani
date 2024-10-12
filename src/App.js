// import Hero from './Component/Hero';
import Web from './Component/Web';
import Graphic from './Component/Graphic';

import React from 'react';
import './Style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Home from './Component/Home';
// import About from './Component/About';
// import Service from './Component/Service';
// import Tab from './Component/Tab';
// import Web from './Component/Web';
// import Graphic from './Component/Graphic';

function App() {
  return (
   <>
   {/* <Nav/>
   <Hero/>
   <Image/>
   <About/>
   <br />
   <Service/>
   <br />
   <Tab/>
   <Web/>
   <Graphic/>
    */}

<Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Main Portfolio Tab */}
        <Route path="/web-development" element={<Web />} /> {/* Web Dev Portfolio */}
        <Route path="/Graphic" element={<Graphic />} /> {/* Add the Graphic Design route */}

      </Routes>
    </Router>
   </>
  );
}

export default App;
