import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {ILlogo} from '../../assets';
import {Input, Link, Button, Gap, Password} from '../../components';

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View className="p-8 flex-1 justify-between">
      <View>
        <View className="items-center">
          <ILlogo />
          <Text className="text-3xl text-black font-bold mt-12">Daftar</Text>
        </View>
        <Gap height={24} />
        <Input
          label="Masukkan Email"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <Gap height={16} />
        <Password
          label="Masukkan Password"
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <Gap height={16} />
        <Password
          label="Masukkan kembali Password"
          placeholder="Password"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <Text className="text-black font-semibold mt-2">Sudah punya akun?</Text>
        <Gap height={8} />
        <Link title="Masuk" />
      </View>
      <View className="mb-10">
        <Button title="Sign In" onPress={() => navigation.navigate('Login')} />
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});
