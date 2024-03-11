import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';

// const Home = ({navigation}) => {
//   const [Laptop, setLaptop] = useState(1);

//   const decreaseLaptop = () => {
//     if (Laptop > 1) {
//       setLaptop(Laptop - 1);
//     }
//   };

//   const increaseLaptop = () => {
//     setLaptop(Laptop + 1);
//   };

//   useEffect(() => {
//     console.log('Nilai Laptop berubah:', Laptop);
//   }, [Laptop]);

//   return (
//     <View className="flex-1 p-8 justify-between">
//       <Text className="font-bold text-lg text-black mb-2 text-center">
//         Monitorku (berharap)
//       </Text>
//       <View className="flex-row items-center justify-center">
//         <TouchableOpacity onPress={increaseLaptop}>
//           <FontAwesomeIcon icon={faCirclePlus} size={30} />
//         </TouchableOpacity>
//         <Gap width={10} />
//         <Text className="text-base">{Laptop}</Text>
//         <Gap width={10} />
//         <TouchableOpacity onPress={decreaseLaptop}>
//           <FontAwesomeIcon icon={faCircleMinus} size={30} />
//         </TouchableOpacity>
//       </View>
//       <View className="mb-10">
//         <Button
//           title="Lanjutkan"
//           onPress={() => navigation.navigate('CallAPI')}
//         />
//       </View>
//     </View>
//   );
// };

const Home = ({navigation}) => {
  const [modal, setModal] = useState(false);

  return (
    <View className="flex-1">
      <View className="bg-white rounded border-[1px] p-4 mx-2 flex-row">
        <View></View>
        <View>
          <Text>Gambar</Text>
        </View>
      </View>
      <TouchableOpacity>
        {/* <Text onPress={() => navigation.navigate('Profil')}>Profil</Text> */}
      </TouchableOpacity>

      {/* <TouchableOpacity
        className="justify-center items-center"
        onPress={() => setModal(true)}>
        <Text>Coba PopUp</Text>
      </TouchableOpacity> */}
      {/* 
      <Modal isVisible={modal}>
        <View className="bg-whitebg rounded-[30px] justify-center items-center py-[45px] mx-10">
          <Image
            source={require('../../assets/ilusstration/alertnewPassword.gif')}
            className="w-[200px] h-[200px] justify-center items-center"
          />
          <View className="justify-center items-center">
            <Text className="text-bluestandart text-3xl font-bold mt-2">
              Berhasil
            </Text>
            <Text className="mt-4 text-bluestandart font-medium">
              Kata sandi berhasil diperbarui
            </Text>
          </View>
        </View>
      </Modal> */}
    </View>
  );
};

export default Home;

// Useeffect adalah fungsi efek yang akan dijalankan setiap kali komponen dirender
// tidak setiap elemen dalam komponen akan di-render ulang setiap kali efek dijalankan.
//Hanya komponen yang terpengaruh oleh perubahan dalam nilai dependensi yang akan di-render ulang.
