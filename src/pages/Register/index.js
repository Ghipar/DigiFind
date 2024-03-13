
import { Keyboard, StyleSheet, Text, View } from 'react-native';
import React, { useContext, useState } from 'react';
import { Input, Link, Button, Gap, Password } from '../../components';
import { ScrollView } from 'react-native-gesture-handler';
import { AuthContext } from '../../components/context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay';
import { Coba, ILlogo, icNIK } from '../../assets';
import LinearGradient from 'react-native-linear-gradient';

const Register = ({ navigation }) => {
  const [errors, setErrors] = React.useState({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConPassword] = useState('');
  const [NIK, setNIK] = useState('');
  const [phone, setPhone] = useState('');
  const [fullname, setFullname] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const { register, isLoading } = useContext(AuthContext);
  const [isValid, SetIsValid] = useState(true);
  const gradient = require('gradient-string');

  const validate = () => {
    Keyboard.dismiss();

    if (!email) {
      handleError('Mohon masukkan email', 'email');
    }
    if (!NIK) {
      handleError('Mohon masukkan NIK', 'NIK');
    }
    if (!fullname) {
      handleError('Mohon masukkan nama langkap', 'fullname');
    }
    if (!gender) {
      handleError('Mohon masukkan gender', 'gender');
    }
    if (!address) {
      handleError('Mohon masukkan alamat', 'address');
    }
    if (!password) {
      handleError('Mohon masukkan password', 'password');
    }
    if (!confirmPassword) {
      handleError('Mohon masukkan konfirmasi password', 'confirmPassword');
    }
    if (!phone) {
      handleError('Mohon masukkan no telp', 'phone');
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
      case 'password':
        if (text.length < 6) {
          handleError('Password harus memiliki setidaknya 6 karakter', 'password');
          SetIsValid(false);

        } else {
          handleError(null, 'password');
          SetIsValid(true);
        }
        break;
      case 'confirmPassword':
        if (text !== password) {
          handleError('Konfirmasi password tidak cocok', 'confirmPassword');
          SetIsValid(false);
        } else {
          handleError(null, 'confirmPassword');
          SetIsValid(true);
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

    <ScrollView className="bg-[#FDFDFD] flex-1">
      <View className="p-8 flex-1 items-center h-screen justify-between">
        <Text style={{ fontFamily: 'Telkomsel Batik Sans Bold', fontSize: 36, color: '#3E86FA', }}>Daftar</Text>
        <View >
          <Spinner visible={isLoading} />
          <Input
            icon={"NIK"}
            keyboardType='numeric'
            placeholder="NIK"
            onChangeText={(text) => {
              handleOnChange(text, "NIK"),
                setNIK(text)
            }}
            value={NIK}
            error={errors.NIK}
            onFocus={() => {

              handleError(null, 'NIK');
            }}
          />
          <Gap height={10} />
          <Input

            placeholder="Nama Lengkap"
            onChangeText={(text) => setFullname(text)}
            value={fullname}
            error={errors.fullname}
            onFocus={() => {
              handleError(null, 'fullname');
            }}
          />
          <Gap height={10} />
          <Input
            placeholder="Jenis Kelamin"
            onChangeText={(text) => setGender(text)}
            error={errors.gender}
            onFocus={() => {
              handleError(null, "gender");
            }}
          />
          <Gap height={10} />
          <Input
            placeholder="Alamat"
            onChangeText={(text) => setAddress(text)}
            error={errors.address}
            onFocus={() => {
              handleError(null, "address");
            }}
          />
          <Gap height={10} />
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
          <Gap height={10} />
          <Input
            keyboardType="numeric"
            placeholder="Nomor HP"
            onChangeText={(text) => setPhone(text)}
            value={phone}
            error={errors.phone}
            onFocus={() => {
              handleError(null, "phone");
            }}
          />
          <Gap height={10} />
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
        </View>

        <View >
          <Button type={"main"} title="Daftar" onPress={() => {
            if (!NIK || !fullname || !gender || !address || !email || !phone || !password || !confirmPassword || !isValid) {
              validate();
            } else {
              console.log(NIK, '\n', fullname, '\n', gender, '\n', address, '\n', email, '\n', phone, '\n', password, '\n', confirmPassword);
              // console.log(NIK, '\n', fullname, '\n', gender, '\n', address, '\n', email, '\n', phone, '\n', password, '\n', confirmPassword);
              register(NIK, fullname, gender, address, email, password, phone);
            }
            // register(NIK, fullname, email, password, phone);
          }} />
          <Gap height={14} />
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontFamily: 'Poppins-SemiBold', color: '#3E86FA' }}>Sudah memiliki akun?</Text>
            <Gap width={5} />
            <Link color={'#3E86FA'} title="Login" onPress={() => {
              navigation.navigate('Login');
            }} />
          </View>
        </View>

      </View>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({});
