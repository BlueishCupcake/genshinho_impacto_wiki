import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoadingScreen from './src/components/LoadingScreen';
import CharacterIcon from './src/components/CharacterIcon';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoadingScreen">
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
        <Stack.Screen name="CharacterIcon" component={CharacterIcon} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
