import {StyleSheet, Alert, View, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Button, Gap, Password, PopUp} from '../../components';
import {Template} from '..';

const NewPassword = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [showIcon, setShowIcon] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const isButtonDisabled =
    !password || !confirmPassword || !!passwordError || !!confirmPasswordError;

  //cek syarat password sesuai atau tidak
  const handlePasswordChange = (text, isValid) => {
    setPassword(text);
    if (text.trim() === '') {
      setPasswordError('');
    } else if (!isValid) {
      setPasswordError('Password is invalid');
    } else {
      setPasswordError('');
    }
  };

  const handleConfirmPasswordChange = text => {
    setConfirmPassword(text);
  };

  //UsEffect digunakan agar ketika ada perubahan pada nilai password, maka akan langsung berpengaruh pada confrimPassword
  useEffect(() => {
    if (confirmPassword !== '' && confirmPassword !== password) {
      setConfirmPasswordError('Passwords do not match');
    } else {
      setConfirmPasswordError('');
    }
  }, [password, confirmPassword]);

  const handleButton = () => {
    if (!isButtonDisabled) {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        navigation.replace('Login');
      }, 1200);
    }
  };

  return (
    <Template title={' Perbarui Password'}>
      <View className="p-8">
        <View className="items-center">
          <Image
            source={require('../../assets/ilusstration/newPassword.gif')}
            className="w-[200px] h-[200px]"
          />
        </View>
        <Gap height={22} />
        <View>
          <Password
            placeholder="Kata sandi lama"
            value={password}
            error={passwordError}
            onChangeText={handlePasswordChange}
            showIcon={showIcon}
          />
          <Password
            placeholder="Kata sandi baru"
            value={confirmPassword}
            onChangeText={handleConfirmPasswordChange}
            error={confirmPasswordError}
            showIcon={false}
          />
          <Gap height={22} />
          <Button
            title="Perbarui"
            onPress={handleButton}
            disabled={isButtonDisabled}
          />
        </View>
      </View>
      <PopUp
        isVisible={showPopup}
        keterangan="Kata sandi berhasil diperbarui"
      />
    </Template>
  );
};

export default NewPassword;

const styles = StyleSheet.create({});
