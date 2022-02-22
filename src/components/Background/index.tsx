import React, {FC} from 'react';

import * as Styled from './styles';

interface BackgroundProps {
  image: HTMLImageElement;
}

const Background: FC<BackgroundProps> = ({image}) => {
  return (
    <Styled.BackgroundDiv>
      <Styled.BackgroundImage source={image} />
    </Styled.BackgroundDiv>
  );
};

export default Background;
