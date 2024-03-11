<<<<<<< HEAD
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Button = ({type, title, onPress}) => {
  return (
    // <TouchableOpacity
    //   className="px-[10px] py-[12px] border-[#3E86FA] rounded-3xl bg-[#3E86FA]"
    //   style={[type === 'secondary' && styles.secondaryContainer]}
    //   onPress={onPress}>
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        className="px-[10px] py-[12px] rounded-3xl"
        colors={
          type === 'main' ? ['#3E86FA', '#0454D6'] : ['#FFFFFF', '#FFFFFF']
        }>
        <Text
          style={[styles.text, type === 'secondary' && styles.secondaryText]}>
=======
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';


const Button = ({ type, title, onPress }) => {
  return (

    <TouchableOpacity onPress={onPress} >
      <LinearGradient
        className="py-2 rounded-full"
        style={styles.container}

        colors={type === "main" ? ['#3E86FA', '#0454D6'] : ['#FFFFFF', '#FFFFFF']}
      >
        <Text className="text-center" style={styles.text}>
>>>>>>> ghifari-dev
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
<<<<<<< HEAD
=======



>>>>>>> ghifari-dev
  );
};

export default Button;

const styles = StyleSheet.create({
<<<<<<< HEAD
  secondaryContainer: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#3E86FA',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 600,
  },
  secondaryText: {
    color: '#3E86FA',
  },
=======
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 55,
    width: 330
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'Telkomsel Batik Sans Bold'
  }
>>>>>>> ghifari-dev
});
