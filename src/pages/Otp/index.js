import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Gap, Input, Link } from '../../components'
import { ILlogo } from '../../assets'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Clipboard from '@react-native-community/clipboard';
import { OtpInput } from "react-native-otp-entry";
import AsyncStorage from '@react-native-async-storage/async-storage'




const Otp = ({ navigation }) => {
  const [seconds, setSeconds] = useState(60); // Initial value for countdown timer
  const [otp, setOtp] = useState(''); // Initial value for countdown timer
  const initialSeconds = 60;

 
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1); // Decrease seconds by 1 every second
      } else {
        setSeconds(initialSeconds);
        console.log("OTP Send again!!"); // Reset the timer to initial value when it reaches zero
      }
    }, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, [seconds]); // Re-run effect whenever seconds state changes
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  return (
    <View className="p-10 flex-1 justify-center bg-[#FDFDFD]">
      <Gap height={100} />
      <View className="items-center">
        <Text style={styles.header}>Masukkan Kode OTP</Text>
        <Gap height={20} />
      </View>
      <Gap height={20} />

      <OtpInput numberOfDigits={6} onTextChange={(text) => setOtp(text)} />
      <Gap height={21} />
      <View className="items-center">
        <Text style={{ color: '#3E86FA' }}>{formatTime(seconds)}</Text>
      </View>

      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "center",
          paddingTop: 10,
        }}
      >
        <Link title={'Kirim ulang kode OTP'} color={'#3E86FA'} onPress={() => console.log('OTP Send again!!')} />
      </View>
      <Gap height={11} />
      <Button type={'main'} onPress={ async () => {
        const getOtp = await AsyncStorage.getItem('otp');
        console.log(getOtp);
        otp === getOtp? navigation.navigate('NewPassword'):console.log('OTP SALAHH!!!');
        // navigation.navigate('NewPassword')
        }} title={'Kirim'} />
    </View>
  )
}

export default Otp

const styles = StyleSheet.create({
  header: {
    fontSize: 34,
    fontFamily: 'Telkomsel Batik Sans Bold',
    color: '#3E86FA'
  }
})