import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const dim = Dimensions.get('screen');

export const CharacterName = styled.Text``;

export const CharacterIconBtn = styled.TouchableOpacity`
  height: 150px;
  width: 150px;
  margin: 10px auto;
  overflow: hidden;
`;

export const CharacterIcon = styled.Image`
  height: 100%;
  width: 100%;
`;
