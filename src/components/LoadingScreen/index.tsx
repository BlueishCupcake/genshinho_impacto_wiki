import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import * as Styled from './style';

const LoadingScreen: React.FC = () => {
  const [time, setTime] = useState(5);

  const navigation = useNavigation();

  setTimeout(() => {
    if (time > 0) {
      setTime(time - 1);
    } else {
      navigation.navigate({key: 'CharacterIcon'});
    }
    console.log(time);
  }, 1000);

  return (
    <ScrollView>
      <Styled.LoadingScreenDiv>
        <Styled.BackgroundImage
          source={require('../../assets/2.5lauchescreen.jpg')}
        />
      </Styled.LoadingScreenDiv>
    </ScrollView>
  );
};

export default LoadingScreen;
