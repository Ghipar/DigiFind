import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {IcPass, IcEye, IcEyeClosed} from '../../../assets';
import React, {useState, useEffect} from 'react';

const Password = ({
  label,
  placeholder,
  value,
  onChangeText,
  error,
  showIcon,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    validPassword(value);
  }, [value]);

  //Validasi password menggunakan regex
  const validPassword = text => {
    const passwordVar = text;
    let passwordVerify = false;
    if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(passwordVar)) {
      passwordVerify = true;
    }
    onChangeText(text, passwordVerify);
  };

  return (
    <View>
      <View className="flex-row items-center bg-white shadow-2xl rounded-3xl px-4 mt-2">
        {showIcon && <IcPass />}
        <TextInput
          secureTextEntry={!showPassword}
          value={value}
          onChangeText={text => validPassword(text)}
          className="flex-1 px-4 text-[16px]"
          placeholder={placeholder}
          placeholderTextColor="#aaa"
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          {showPassword ? <IcEye /> : <IcEyeClosed />}
        </TouchableOpacity>
      </View>
      {error && <Text className="text-[14px] text-red-600">{error}</Text>}
    </View>
  );
};

export default Password;

const styles = StyleSheet.create({});
