import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {Input, Link, Button, Gap, Password} from '../../components';
// import CheckBox from '@react-native-community/checkbox';
import {ScrollView} from 'react-native-gesture-handler';
import {Template} from '..';
import {IcGoogle} from '../../assets';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {AuthContext} from '../../components/context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay';

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
  const [errors, setErrors] = React.useState({});
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const {login, isLoading, profile} = useContext(AuthContext);
  const [showIcon, setShowIcon] = useState(true);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const isButtonDisabled =
    !email || !password || !emailValid || !!passwordError;

  const validate = () => {
    Keyboard.dismiss();
    if (!email) {
      handleError('Mohon masukkan email', 'email');
    }
    if (!password) {
      handleError('Mohon masukkan password', 'password');
    }
  };
  const handleOnChange = (text, input) => {
    switch (input) {
      case 'email':
        if (!/\S+@\S+\.\S+/.test(text)) {
          handleError('Email tidak valid', 'email');
        } else {
          handleError(null, 'email');
        }
        break;
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
      default:
        break;
    }
  };

  const handleError = (errorMessage, input) => {
    setErrors(prevState => ({...prevState, [input]: errorMessage}));
  };

  const handleButton = () => {
    if (!isButtonDisabled) {
      if (!email || !password) {
        validate();
      } else {
        // console.log(email, '\n', password);        // console.log(NIK, '\n', fullname, '\n', gender, '\n', address, '\n', email, '\n', phone, '\n', password, '\n', confirmPassword);
        login(email, password);
      }
      // register(NIK, fullname, email, password, phone);
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
        <View className="m-8 mb-[94px]">
          <Spinner visible={isLoading} />
          <View>
            <View className="items-center mt-2">
              <Image
                source={require('../../assets/ilusstration/login.gif')}
                className="w-[200px] h-[200px]"
              />
            </View>
            <View>
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
              <Gap height={10} />
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
                  color={'#3E86FA'}
                  title="Lupa Kata Sandi"
                  style={{fontWeight: '500'}}
                  onPress={() => navigation.navigate('Fpass')}
                />
              </View>
              <Gap height={10} />
            </View>
            <Button
              title="Masuk"
              onPress={handleButton}
              disabled={isButtonDisabled}
              type="main"
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

const styles = StyleSheet.create({});
