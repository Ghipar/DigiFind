import { StyleSheet, Alert, View, Image } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import { Button, Gap, Input, Password, PopUp } from '../../components';
import { Template } from '..';
import { AuthContext } from '../../components/context/AuthContext';

const NewPassword = ({ navigation }) => {
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPassword, setConPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [showIcon, setShowIcon] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [errors, setErrors] = React.useState({});
  const { ressPass } = useContext(AuthContext);

  // const isButtonDisabled =
  //   !password || !confirmPassword || !!passwordError || !!confirmPasswordError;

  const handleOnChange = (text, input) => {
    switch (input) {
      case 'password':
        if (text.length < 6) {
          handleError('Password harus memiliki setidaknya 6 karakter', 'password');


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
    setErrors((prevState) => ({ ...prevState, [input]: errorMessage }))
  }
  //cek syarat password sesuai atau tidak
  // const handlePasswordChange = (text, isValid) => {
  //   setPassword(text);
  //   if (text.trim() === '') {
  //     setPasswordError('');
  //   } else if (!isValid) {
  //     setPasswordError('Password is invalid');
  //   } else {
  //     setPasswordError('');
  //   }
  // };

  // const handleConfirmPasswordChange = text => {
  //   setConfirmPassword(text);
  // };

  //UsEffect digunakan agar ketika ada perubahan pada nilai password, maka akan langsung berpengaruh pada confrimPassword
  // useEffect(() => {
  //   if (confirmPassword !== '' && confirmPassword !== password) {
  //     setConfirmPasswordError('Passwords do not match');
  //   } else {
  //     setConfirmPasswordError('');
  //   }
  // }, [password, confirmPassword]);

  const handleButton = () => {
    // if (!isButtonDisabled) {
    //   setShowPopup(true);
    //   setTimeout(() => {
    //     setShowPopup(false);
    //     navigation.replace('Login');
    //   }, 1200);
    // }
    console.log(password, confirmPassword)
  };

  return (
    <Template title={' Perbarui Password'}>
      <View className="p-8 flex-1 items-center justify-between">
        <View className="items-center">
          <Image
            source={require('../../assets/ilusstration/newPassword.gif')}
            className="w-[200px] h-[200px]"
          />
        </View>
        <Gap height={22} />
        <View>
          {/* <Password
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
          /> */}
          <Input
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) => {
              handleOnChange(text, "password"),
                setPassword(text);
            }}
            value={password}
            error={errors.password}
            onFocus={() => {
              handleError(null, "password");
            }}
            password={true}
          />
          <Gap height={10} />
          <Input
            placeholder="Konfirmasi Password"
            secureTextEntry={true}
            onChangeText={(text) => {
              handleOnChange(text, "confirmPassword"),
                setConPassword(text);
            }}
            error={errors.confirmPassword}
            value={confirmPassword}
            onFocus={() => {
              handleError(null, "confirmPassword");
            }}
            password
          />
          <Gap height={22} />
          <Button
          type={'main'}
            title="Perbarui"
            onPress={handleButton}
            // disabled={isButtonDisabled}
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
