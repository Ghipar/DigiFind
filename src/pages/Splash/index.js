<<<<<<< HEAD
import {StyleSheet, View} from 'react-native';
=======
import {StyleSheet, Text, View} from 'react-native';
>>>>>>> ghifari-dev
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
<<<<<<< HEAD
=======
      <Text className="p-2">Gluby</Text>
>>>>>>> ghifari-dev
    </View>
  );
};

<<<<<<< HEAD
//ada 2 komponen gambar, dikasih animasi
//animasi -->

=======
>>>>>>> ghifari-dev
export default Splash;
const styles = StyleSheet.create({});
