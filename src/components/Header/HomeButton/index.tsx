import React, {FC} from 'react';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface HomeButtonProps {
  onPress: Function;
}

const HomeButton: FC<HomeButtonProps> = ({onPress}) => {
  return (
    <TouchableOpacity onPress={() => onPress}>
      <Image source={require('assets/Home_Btn.svg')} />
    </TouchableOpacity>
  );
};

export default HomeButton;
