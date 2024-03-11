import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';

const PopUp = ({isVisible, keterangan}) => {
  return (
    <View className="flex-1">
      <Modal isVisible={isVisible}>
        <View className="bg-whitebg rounded-[30px] justify-center items-center py-[45px] mx-10">
          <Image
            source={require('../../../assets/ilusstration/alertnewPassword.gif')}
            className="w-[200px] h-[200px] justify-center items-center"
          />
          <View className="justify-center items-center">
            <Text className="text-bluestandart text-3xl font-bold mt-2">
              Berhasil
            </Text>
            <Text className="mt-4 text-bluestandart font-medium">
              {keterangan}
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default PopUp;

const styles = StyleSheet.create({});
