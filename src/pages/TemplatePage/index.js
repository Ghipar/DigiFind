import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

const Template = ({title, children}) => {
  return (
    <SafeAreaView className="bg-whitebg flex-1">
      <View className="items-center mt-[72px]">
      <Text style={{ fontFamily: 'Telkomsel Batik Sans Bold', fontSize: 36, color: '#3E86FA', }}>{title}</Text>
        
      </View>
      {children}
    </SafeAreaView>
  );
};

export default Template;

const styles = StyleSheet.create({});
