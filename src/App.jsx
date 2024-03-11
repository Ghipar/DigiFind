import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';

import { AuthProvider } from './components/context/AuthContext';



const App = ()=> {
  return (
    
    <AuthProvider>
      <NavigationContainer>
          <Router />
      </NavigationContainer>
    </AuthProvider>

  );
};

export default App;
