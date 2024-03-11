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
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>



  );
};

export default Button;

const styles = StyleSheet.create({
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
});
