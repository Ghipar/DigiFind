import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Link = ({ title, onPress = () => {}, color }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Text style={{color: color, fontFamily: 'Poppins-Bold'}} className="underline">{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({});
