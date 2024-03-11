import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import React from 'react';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ILlogo, Coba, IcNIK, Cc, IcFullname, IcGender, IcAddress, IcEmail, IcPhone, IcPass, IcCheckpass, IcEye, IcEyeClosed } from '../../../assets';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Input = ({ label, icon, placeholder, bg, secureTextEntry, error, password, onFocus = () => { }, ...props }) => {
  const [hidePassword, setHidePassword] = React.useState(password);
  const [isFocused, setIsFocused] = React.useState(false);

  const Icon = () => {

    if (placeholder === "NIK") return <IcNIK />
    if (placeholder === "Nama Lengkap") return <IcFullname />
    if (placeholder === "Jenis Kelamin") return <IcGender />
    if (placeholder === "Alamat") return <IcAddress />
    if (placeholder === "Email") return <IcEmail />
    if (placeholder === "Nomor HP") return <IcPhone />
    if (placeholder === "Password") return <IcPass />
    if (placeholder === "Konfirmasi Password") return <IcCheckpass />


    return <ILlogo />
  }


  return (
    // <View   className="border-2 rounded-md border-gray-300 border-current px-4" >
    <View>
      <View style={styles.container} >
        <Text className="text-base mb-1 font-semibold text-black">{label}</Text>
        <Icon />
        <TextInput
          style={styles.Input}
          placeholder={placeholder}
          secureTextEntry={hidePassword}
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          {...props}
        />
        {password && (
          <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
            {hidePassword ? <IcEye /> : <IcEyeClosed />}
          </TouchableOpacity>
        )}
      </View>
      {error && (
        <Text style={{ color: 'red', fontSize: 12, marginTop: 7 }}>
          {error}
        </Text>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    height: 56,
    width: 330,
    borderWidth: 0.6,
    backgroundColor: '#FFFFFF',
    borderColor: '#D9D6D6',
    borderRadius: 50,
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',

  },
  Input: {
    marginLeft: 20,
    fontFamily: 'Poppins-Regular',
    flex: 1,
    fontSize: 16
  }
});
