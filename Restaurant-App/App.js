import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/screens/Home';
import RestaurantsDetails from './src/screens/RestaurantsDetails';
import {Provider as ReduxProvider} from 'react-redux';

import configureStore from './reudx/reducers/store';


const store = configureStore();
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="RestaurantsDetails"
            component={RestaurantsDetails}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
};

export default App;
