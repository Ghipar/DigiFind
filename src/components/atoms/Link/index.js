// <<<<<<< HEAD
// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';

// const Link = ({title, onPress, style}) => {
//   return (
//     <View>
//       <Text
//         className="underline text-bluestandart text-[15px]"
//         style={style}
//         onPress={onPress}>
//         {title}
//       </Text>
//     </View>
// =======
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
// >>>>>>> ghifari-dev
  );
};

export default Link;

const styles = StyleSheet.create({});
