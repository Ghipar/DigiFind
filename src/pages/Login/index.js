import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Input, Link, Button, Gap, Password} from '../../components';
// import CheckBox from '@react-native-community/checkbox';
import {ScrollView} from 'react-native-gesture-handler';
import {Template} from '..';
import {IcGoogle} from '../../assets';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '497313868348-lto8bkjo34tekuipbugltj444ohaj2dd.apps.googleusercontent.com',
});

async function onGoogleButtonPress() {
  try {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    const {idToken} = await GoogleSignin.signIn();
    console.log({idToken});

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    return auth().signInWithGoogleCredential(googleCredential);
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      console.log(statusCodes.SIGN_IN_CANCELLED);
    } else if (error.code === statusCodes.IN_PROGRESS) {
      console.log(statusCodes.IN_PROGRESS);
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      console.log(statusCodes.PLAY_SERVICES_NOT_AVAILABLE);
    } else {
      console.log(error.message);
    }
  }
}

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showIcon, setShowIcon] = useState(true);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const isButtonDisabled =
    !email || !password || !emailValid || !!passwordError;

  const handleEmail = text => {
    setEmail(text);
    if (text.trim() === '') {
      setEmailValid(false);
    } else if (!/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(text)) {
      setEmailValid(false);
    } else {
      setEmailValid(true);
    }
  };

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

  const handleButton = () => {
    if (!isButtonDisabled) {
      navigation.replace('Home');
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      const userInfo = await GoogleSignin.signIn();
      setEmail(userInfo.user.email);
      console.log('Signed in with Google:', userInfo);
    } catch (error) {
      console.log('Google sign in error:', error);
    }
  };

  useEffect(() => {
    // Check if the user is already signed in with Google
    const checkGoogleSignIn = async () => {
      try {
        await GoogleSignin.hasPlayServices({
          showPlayServicesUpdateDialog: true,
        });
        const userInfo = await GoogleSignin.signInSilently();
        setEmail(userInfo.user.email);
        console.log('Signed in silently with Google:', userInfo);
      } catch (error) {
        console.log('Google silent sign in error:', error);
      }
    };

    if (Platform.OS === 'android') {
      checkGoogleSignIn();
    }

    return () => {}; // Cleanup function
  }, []);

  return (
    <Template title="Masuk">
      <ScrollView>
        <View className="m-8 mb-[100px]">
          <View>
            <View className="items-center mt-2">
              <Image
                source={require('../../assets/ilusstration/login.gif')}
                className="w-[200px] h-[200px]"
              />
            </View>
            <View>
              <Input
                placeholder="e-mail"
                onChangeText={text => handleEmail(text)}
                value={email}
                error={!emailValid}
              />
              {!emailValid && (
                <Text className="text-[14px] text-red-600">
                  Format email tidak valid
                </Text>
              )}
              <Password
                placeholder="Kata Sandi"
                value={password}
                onChangeText={handlePasswordChange}
                error={passwordError}
                showIcon={showIcon}
              />
              <Gap height={12} />
              <View className="flex-row justify-between items-center">
                <View className="flex flex-row items-center">
                  {/* <CheckBox
                    className="flex-1"
                    disabled={false}
                    tintColors={{true: 'red', false: 'gray'}}
                    value={toggleCheckBox}
                    onValueChange={newValue => setToggleCheckBox(newValue)}
                  />
                  <Text>Remember me</Text> */}
                </View>
                <Link
                  title="Lupa Kata Sandi"
                  style={{fontWeight: '500'}}
                  onPress={() => navigation.navigate('NewPassword')}
                />
              </View>
              <Gap height={12} />
            </View>
            <Button
              title="Masuk"
              onPress={handleButton}
              disabled={isButtonDisabled}
            />
            <Gap height={16} />
            <TouchableOpacity onPress={handleGoogleSignIn}>
              <View className="justify-center items-center flex-row">
                <IcGoogle />
                <Text className="text-bluestandart font-medium ml-6 text-[15px]">
                  Masuk dengan google
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View className="items-center justify-center flex-row">
          <Text className="text-bluestandart font-semibold mr-1 text-[15px]">
            Belum memiliki akun?
          </Text>
          <Link
            title="Daftar"
            style={{fontWeight: '800'}}
            onPress={() => navigation.navigate('Register')}
          />
        </View>
      </ScrollView>
    </Template>
  );
};

export default Login;

const styles = StyleSheet.create({
  // checkbox: {
  //   color: 'blue-500', // Warna awal ketika checkbox belum dicentang
  // },
  // checkedCheckbox: {
  //   color: 'red-500', // Warna setelah checkbox dicentang (misal: merah)
  // },
});
