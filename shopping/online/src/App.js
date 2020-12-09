import React, { useState } from 'react';
import './App.css';
import Navbar from'./components/Navbar';

import {BrowserRouter as Router ,Switch,Route, NavLink} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';



function App() {
  
  return (
    <>
      <Router>
        <Navbar />
          
        <Switch>
     <Route path='/About' component={About}/>
     <Route path='/Home'  component={Home}/>
     <Route path='/Shop'  component={Shop}/>
   

     </Switch>
      </Router>
   
    </>
   
  );
}


export default App;
