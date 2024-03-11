import React from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';
import {IcEmail} from '../../../assets';
import AnimatedInput from 'react-native-animated-input';

const Input = ({placeholder, onChangeText, value, secureTextEntry, error}) => {
  return (
    <View>
      <View className="flex-row items-center bg-white shadow-2xl rounded-3xl px-4 mt-2">
        <IcEmail />
        <TextInput
          className="px-4 text-[16px]"
          style={[error && styles.errorInput]}
          placeholder={placeholder}
          placeholderTextColor="#aaa"
          onChangeText={onChangeText}
          value={value}
          secureTextEntry={secureTextEntry}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  errorInput: {
    borderColor: '#3E86FA',
  },
});

export default Input;
