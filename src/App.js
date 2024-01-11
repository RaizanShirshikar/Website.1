
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,

} from "react-router-dom";

import Navbar from './Component/Navbar';
import { Header } from './Component/Header';
import { Body } from './Component/Body';
import { Footer } from './Component/Footer';
import { Contact } from './Component/Contact';

import { About } from './Component/About';


function App() {
  return (<>
<Router>

<Navbar/>


 
 <Routes>
 <Route exect path='/' element={ <Header/>} />
 
      <Route exect path='/contact' element={<Contact/>} />
    
      <Route exect path='/about' element={<About/>} />
      </Routes>
</Router>
 <Footer/>
</>
  )
}

export default App