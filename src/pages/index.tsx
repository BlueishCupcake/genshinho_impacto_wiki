import React from 'react';
import CharacterIcon from '../components/CharacterIcon';
import LoadingScreen from '../components/LoadingScreen';

const Pages: React.FC = () => {
  return (
    <>
      <LoadingScreen />
      <CharacterIcon />
    </>
  );
};

export default Pages;
