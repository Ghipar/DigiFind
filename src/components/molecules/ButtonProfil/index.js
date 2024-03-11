import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const ButtonProfil = ({buttonText, icon, onPress}) => {
  return (
    <TouchableOpacity className="mx-12" onPress={onPress}>
      <View className="w-full p-3 mt-3 bg-white rounded-lg shadow-md flex-row items-center border">
        {icon && (
          <FontAwesomeIcon
            icon={icon}
            size={20}
            color="black"
            style={{marginRight: 8}}
          />
        )}
        <Text className="text-black">{buttonText}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonProfil;
