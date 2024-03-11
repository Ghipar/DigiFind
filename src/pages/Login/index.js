import { StyleSheet, Text, View, Image, Keyboard } from 'react-native';
import React, { useContext, useState } from 'react';
import { ILlogo, coba, BackLogo } from '../../assets';
import { Input, Link, Button, Gap, Password } from '../../components';
import { AuthContext } from '../../components/context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay';
import { Profile } from '../../components/context/profile';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = React.useState({});
  const { login, isLoading, profile } = useContext(AuthContext);

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
          handleError('Password harus memiliki setidaknya 6 karakter', 'password');

        } else {
          handleError(null, 'password');
        }
        break;
      default:
        break;
    }
  };

  const handleError = (errorMessage, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: errorMessage }))
  }
  return (
    <View className="p-8 flex-1 justify-between">
      <Spinner visible={isLoading} />
      <View>
        <View className="items-center">
          <ILlogo />
          {/* <BackLogo /> */}
          <Text className="text-3xl text-black font-bold mt-12">Masuk</Text>
        </View>
        <Gap height={24} />
        <Input
          placeholder="Email"
          onChangeText={(text) => {
            handleOnChange(text, "email"),
              setEmail(text);
          }}
          value={email}
          error={errors.email}
          onFocus={() => {
            handleError(null, "email");
          }}
        />
        <Gap height={24} />
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
        <View className="flex flex-row justify-between mt-2">
          <Text className="text-black font-semibold">Belum punya akun?</Text>
          <Link onPress={() => navigation.navigate('Fpass')} title="Lupa password?" />
        </View>
        <Gap height={8} />
        <Link title="Daftar" />
      </View>
      <View className="mb-10">
        <Button title="Sign In" onPress={() => {
          // if (!email || !password) {
          //   validate();
          // } else {
          //   console.log(email, '\n', password);
          // }
          login(email, password);
          // profile();
        }} />
      </View>
    </View>
  );
};


export default Login;

const styles = StyleSheet.create({});
// import React, { useState, useEffect } from 'react';
// import { View, StyleSheet, Button, Animated, Dimensions } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const ZoomInAnimation = () => {
//   const [animatedValue] = useState(new Animated.Value(1));
//   const windowWidth = Dimensions.get('window').width;
//   const navigation = useNavigation();

//   useEffect(() => {
//     zoomIn();
//   }, []);

//   const zoomIn = () => {
//     Animated.timing(animatedValue, {
//       toValue: 20, // Zoom in sebanyak dua kali ukuran asli
//       duration: 800,
//       useNativeDriver: true,
//     }).start(() => {
//       // Pindah ke halaman lain setelah animasi selesai
//       navigation.navigate('Fpass');
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <Animated.View
//         style={[
//           styles.box,
//           {
//             transform: [{ scale: animatedValue }],
//           },
//         ]}
//       />
//       {/*
//           Tombol di bawah ini hanya untuk demonstrasi.
//           Anda bisa menggantinya dengan elemen lain yang sesuai dengan kebutuhan Anda.
//       */}
//       {/* <Button title="Zoom In" onPress={zoomIn} /> */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   box: {
//     width: 100,
//     height: 100,
//     backgroundColor: 'blue',
//     borderRadius: 100
//   },
// });

// export default ZoomInAnimation;

