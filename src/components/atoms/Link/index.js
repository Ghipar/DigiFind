import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Link = ({title, onPress, style}) => {
  return (
    <View>
      <Text
        className="underline text-bluestandart text-[15px]"
        style={style}
        onPress={onPress}>
        {title}
      </Text>
    </View>
  );
};

export default Link;

const styles = StyleSheet.create({});
