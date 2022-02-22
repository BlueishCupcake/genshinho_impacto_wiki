import React, {useState} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Background from 'components/Background';

const LoadingScreen: React.FC = () => {
  const [time, setTime] = useState(5);

  const navigation = useNavigation();

  setTimeout(() => {
    if (time > 0) {
      setTime(time - 1);
    } else {
      navigation.navigate('CharacterIcon');
    }
  }, 1000);

  return (
    <View>
      <Background image={require('assets/2.5lauchescreen.jpg')} />
    </View>
  );
};

export default LoadingScreen;
