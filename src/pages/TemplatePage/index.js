import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import {Fonts} from '../../assets';

const Template = ({title, children}) => {
  return (
    <SafeAreaView className="bg-whitebg flex-1">
      <View className="items-center mt-[72px]">
        <Text className="text-[24px] font-bold text-bluestandart font-poppins">
          {title}
        </Text>
      </View>
      {children}
    </SafeAreaView>
  );
};

export default Template;

const styles = StyleSheet.create({});
