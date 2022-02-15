import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const dim = Dimensions.get('window');

export const BackgroundImage = styled.Image`
  height: 100%;
  width: 100%;
`;

export const LoadingScreenDiv = styled.View`
  overflow: hidden;
  height: ${dim.height - 10}px;
`;
