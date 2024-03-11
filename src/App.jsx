import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';
<<<<<<< HEAD
=======
import { AuthProvider } from './components/context/AuthContext';
>>>>>>> ghifari-dev


const App = ()=> {
  return (
<<<<<<< HEAD
    <NavigationContainer>
  <Router />
    </NavigationContainer>
=======
    
    <AuthProvider>
      <NavigationContainer>
          <Router />
      </NavigationContainer>
    </AuthProvider>

>>>>>>> ghifari-dev

);
};

export default App;
