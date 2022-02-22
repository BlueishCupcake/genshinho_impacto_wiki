import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const dim = Dimensions.get('screen');

export const BackgroundImage = styled.Image`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export const BackgroundDiv = styled.View`
  overflow: hidden;
  height: ${dim.height - 10}px;
`;
