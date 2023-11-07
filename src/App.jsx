import React, { useEffect, useState } from 'react';
  
import Allroutes from './routes/Allroutes';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import HomePageCard from './components/HomePageCard';
import { AuthProvider } from './components/AuthContext';
import { Stack } from '@chakra-ui/react'; 
 
function App() {
  
 
  return (
    <Stack  style={{backgroundColor:'#FAFAFA'}}>
        <AuthProvider>

      <Navbar />
      
      <Allroutes />
        </AuthProvider>
      
    </Stack> 
  );
}

export default App;
