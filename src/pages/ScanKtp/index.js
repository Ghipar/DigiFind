import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {Button, Gap, Input} from '../../components';
import {AuthContext} from '../../components/context/AuthContext';

const Scan = () => {
  const [errors, setErrors] = React.useState({});
  const [password, setPassword] = useState('');
  const {ressPass} = useContext(AuthContext);
  const [confirmPassword, setConPassword] = useState('');
  const handleOnChange = (text, input) => {
    switch (input) {
      case 'password':
        if (text.length < 6) {
          handleError(
            'Password harus memiliki setidaknya 6 karakter',
            'password',
          );
        } else {
          handleError(null, 'password');
        }
        break;
      case 'confirmPassword':
        if (text !== password) {
          handleError('Konfirmasi password tidak cocok', 'confirmPassword');
        } else {
          handleError(null, 'confirmPassword');
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
    <View>
      <Input
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={text => {
          handleOnChange(text, 'password'), setPassword(text);
        }}
        value={password}
        error={errors.password}
        onFocus={() => {
          handleError(null, 'password');
        }}
        password={true}
      />
      <Gap height={10} />
      <Input
        placeholder="Konfirmasi Password"
        secureTextEntry={true}
        onChangeText={text => {
          handleOnChange(text, 'confirmPassword'), setConPassword(text);
        }}
        error={errors.confirmPassword}
        value={confirmPassword}
        onFocus={() => {
          handleError(null, 'confirmPassword');
        }}
        password
      />
      <Button
        type={'main'}
        title="kirim"
        onPress={() => {
          ressPass(password, confirmPassword);
        }}
      />
    </View>
  );
};

export default Scan;

const styles = StyleSheet.create({});
