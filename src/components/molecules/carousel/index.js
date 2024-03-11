import {StyleSheet, Text, View, Image, useWindowDimensions} from 'react-native';
import React from 'react';

const Onboarding = ({item}) => {
  const {width} = useWindowDimensions();

  return (
    <View
      key={item.id}
      style={[{width}]}
      className="justify-center items-center">
      <Image source={item.image} className="w-[250px] h-[250px] mt-28" />
      <View className="bg-black py-2 mt-4">
        <Text className="text-[24px] font-bold text-center text-bluestandart">
          {item.title}
        </Text>
        <Text className="font-extralight-2 text-gray-950 text-center px-[60px] text-[14px] mb-10">
          {item.description}
        </Text>
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({});

// font telkom + popins, gradient
