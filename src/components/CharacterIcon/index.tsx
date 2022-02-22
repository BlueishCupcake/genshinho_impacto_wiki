import React from 'react';

import Background from '../Background';

import {SafeAreaView, ScrollView, StatusBar} from 'react-native';

import * as Styled from './styles';

const CharacterIcon: React.FC = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Background image={require('../../assets/dashboard_aether_bg.jpg')} />
        <Styled.CharacterIconBtn onPress={() => console.log('Noelle <3')}>
          <Styled.CharacterIcon source={require('../../assets/noelle.png')} />
        </Styled.CharacterIconBtn>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CharacterIcon;
