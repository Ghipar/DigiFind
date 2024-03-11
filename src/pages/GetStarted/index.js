import {Text, View} from 'react-native';
import React from 'react';
import {ILlogo} from '../../assets';
import {Button, Gap} from '../../components';

const GetStarted = ({navigation}) => {
  return (
    <View className="p-8 space-y-2 flex-1 flex justify-between bg-pink-500">
      <View className>
        <ILlogo />
        <Text className="text-lg mt-20 text-white">
          Mari bergabung bersama kami!
        </Text>
      </View>
      <View>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('Register')}
        />
        <Gap height={16} />
        <Button
          type="secondary"
          title="Sign In"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </View>
  );
};

export default GetStarted;
