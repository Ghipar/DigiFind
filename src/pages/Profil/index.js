import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Gap, Button, ButtonProfil} from '../../components';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faGear,
  faPenToSquare,
  faLock,
  faCircleInfo,
  faArrowRightFromBracket,
  faCirclePlus,
} from '@fortawesome/free-solid-svg-icons';
import {ILPhoto} from '../../assets';
import ImageCropPicker from 'react-native-image-crop-picker';

const Profil = ({userName, Email, bantuan1, bantuan2}) => {
  //   const [avatar, setAvatar] = useState(null);
  // };
  // const handleUploadPhoto = () => {
  //   ImageCropPicker.openPicker({
  //     width: 300,
  //     height: 400,
  //     cropping: true,
  //   })
  //     .then(image => {
  //       setAvatar(image.path);
  //     })
  //     .catch(error => {
  //       console.log('Error selecting image:', error);
  //     });

  return (
    <View>
      <TouchableOpacity className="relative items-center mt-4">
        <View className="bg-gray-300 p-1 rounded-full relative">
          <ILPhoto />
        </View>
        <FontAwesomeIcon
          icon={faCirclePlus}
          size={20}
          color="#BA7E80"
          style={styles.addPhoto}
        />
      </TouchableOpacity>

      <View className="items-center mt-2">
        <Text className="font-semibold text-white bg-black rounded-xl w-auto text-center p-1 mt-2">
          {userName}Username
        </Text>
        <Text className="text-black text-sm mt-2">{Email}email</Text>

        <View className=" w-full mt-2">
          <View className="bg-white border flex-row mx-10 p-2 rounded-lg justify-between">
            <View className=" w-1/2">
              <Text className="text-center text-lg text-red-800 font-semibold">
                {bantuan1}50
              </Text>
              <Text className="text-center text-sm text-red-800 font-semibold">
                bantuan
              </Text>
            </View>
            <View className="h-full w-[2px] bg-gray-600"></View>

            <View className="w-1/2">
              <Text className="text-center text-lg text-red-800 font-semibold">
                {bantuan2}50
              </Text>
              <Text className="text-center text-sm text-red-800 font-semibold">
                bantuan
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View className="mt-3">
        <ButtonProfil buttonText="Edit Profil" icon={faPenToSquare} />
        <ButtonProfil buttonText="Setting" icon={faGear} />
        <ButtonProfil buttonText="Lupa Password" icon={faLock} />
        <ButtonProfil buttonText="About" icon={faCircleInfo} />
        <ButtonProfil buttonText="Logout" icon={faArrowRightFromBracket} />
      </View>
    </View>
  );
};

export default Profil;

const styles = StyleSheet.create({
  addPhoto: {
    position: 'absolute',
    bottom: 12,
    left: 230,
    backgroundColor: 'white',
    borderRadius: 100,
  },
});
