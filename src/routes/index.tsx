import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoadingScreen from 'pages/LoadingScreen';
import CharacterIcon from 'components/CharacterIcon';
import HomeButton from 'components/Header/HomeButton';

import {RootStackParamList} from './routes.types';

const Stack = createStackNavigator<RootStackParamList>();

const Routes = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoadingScreen"
      screenOptions={{
        headerTitle: 'My home',
        headerStyle: {
          backgroundColor: '#000',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerRight: () => (
          <HomeButton onPress={() => console.log('This is a button!')} />
        ),
      }}>
      <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
      <Stack.Screen name="CharacterIcon" component={CharacterIcon} />
    </Stack.Navigator>
  );
};

export default Routes;
