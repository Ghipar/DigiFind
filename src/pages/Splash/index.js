import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {ILlogo} from '../../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted');
    }, 3000);
  }, []);
  return (
    <View className="flex-1 justify-center items-center">
      <ILlogo />
    </View>
  );
};

//ada 2 komponen gambar, dikasih animasi
//animasi -->

export default Splash;
const styles = StyleSheet.create({});
