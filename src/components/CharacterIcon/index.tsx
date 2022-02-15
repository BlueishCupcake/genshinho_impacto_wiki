import React from 'react';

import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import * as Styled from './styles';

const CharacterIcon: React.FC = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>Genshinho</Text>
          <Text>Impacto</Text>

          <Styled.CharacterIconBtn onPress={() => console.log('Noelle <3')}>
            <Styled.CharacterIcon source={require('../../assets/noelle.png')} />
          </Styled.CharacterIconBtn>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CharacterIcon;
