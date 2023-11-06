import React, { useState } from 'react';
  
import Allroutes from './routes/Allroutes';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import HomePageCard from './components/HomePageCard';
 
function App() {
  
  return (
    <div  style={{backgroundColor:'#FAFAFA'}}>
      
      <Navbar />
      
      <Allroutes />
      
    </div>
    
  );
}

export default App;
