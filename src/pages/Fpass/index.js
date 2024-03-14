import {Keyboard, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {ILlogo} from '../../assets';
import {Button, Gap, Input} from '../../components';
import {AuthContext} from '../../components/context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay';

const Fpass = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = React.useState({});
  const [isValid, SetIsValid] = useState(true);
  const {sendOTP, isLoading} = useContext(AuthContext);

  const validate = () => {
    Keyboard.dismiss();
    if (!email) {
      handleError('Mohon masukkan email', 'email');
    }
  };
  const handleOnChange = (text, input) => {
    switch (input) {
      case 'email':
        if (!/\S+@\S+\.\S+/.test(text)) {
          handleError('Email tidak valid', 'email');
          SetIsValid(false);
        } else {
          handleError(null, 'email');
          SetIsValid(true);
        }
        break;

      default:
        break;
    }
  };

  const handleError = (errorMessage, input) => {
    setErrors(prevState => ({...prevState, [input]: errorMessage}));
  };
  return (
    <View
      className="p-10 flex-1 items-center"
      style={{backgroundColor: '#FDFDFD'}}>
      <Spinner visible={isLoading} />
      <Text
        style={{
          fontFamily: 'Telkomsel Batik Sans Bold',
          fontSize: 24,
          color: '#3E86FA',
        }}>
        Lupa Kata Sandi
      </Text>
      <View className="justify-center flex-1">
        <Input
          placeholder="Email"
          onChangeText={text => {
            handleOnChange(text, 'email'), setEmail(text);
          }}
          value={email}
          error={errors.email}
          onFocus={() => {
            handleError(null, 'email');
          }}
        />
        <Gap height={12} />
        <Button
          type={'main'}
          onPress={() => {
            if (!email || !isValid) {
              validate();
            } else {
              sendOTP(email);
              navigation.navigate('Otp');
            }
            // navigation.navigate('Otp')
          }}
          title={'Kirim'}
        />
      </View>
    </View>
  );
};

export default Fpass;

const styles = StyleSheet.create({});
