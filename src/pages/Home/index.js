import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {Gap, Button} from '../../components';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCircleMinus, faCirclePlus} from '@fortawesome/free-solid-svg-icons';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Home = ({navigation}) => {
  const [Laptop, setLaptop] = useState(1);

  const decreaseLaptop = () => {
    if (Laptop > 1) {
      setLaptop(Laptop - 1);
    }
  };

  const increaseLaptop = () => {
    setLaptop(Laptop + 1);
  };

  useEffect(() => {
    console.log('Nilai Laptop berubah:', Laptop);
  }, [Laptop]);

  return (
    <View className="flex-1 p-8 justify-between">
      <Text className="font-bold text-lg text-black mb-2 text-center">
        Monitorku (berharap)
      </Text>
      <View className="flex-row items-center justify-center">
        <TouchableOpacity onPress={increaseLaptop}>
          <FontAwesomeIcon icon={faCirclePlus} size={30} />
        </TouchableOpacity>
        <Gap width={10} />
        <Text className="text-base">{Laptop}</Text>
        <Gap width={10} />
        <TouchableOpacity onPress={decreaseLaptop}>
          <FontAwesomeIcon icon={faCircleMinus} size={30} />
        </TouchableOpacity>
      </View>
      <View className="mb-10">
        <Button
          title="Lanjutkan"
          onPress={() => navigation.navigate('CallAPI')}
        />
      </View>
    </View>
  );
};

export default Home;

// Useeffect adalah fungsi efek yang akan dijalankan setiap kali komponen dirender
// tidak setiap elemen dalam komponen akan di-render ulang setiap kali efek dijalankan.
//Hanya komponen yang terpengaruh oleh perubahan dalam nilai dependensi yang akan di-render ulang.
