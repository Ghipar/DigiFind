import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  Splash,
  GetStarted,
  Register,
  Login,
  Home,
  Profil,
  NewPassword,
  Otp,
  Fpass,
  Scan
} from '../pages';



const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">


      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
     
      <Stack.Screen

        name="Profil"
        component={Profil}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NewPassword"
        component={NewPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Otp"
        component={Otp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Fpass"
        component={Fpass}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Scan"
        component={Scan}

        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Router;
