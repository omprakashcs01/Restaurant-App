import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {Button, Divider} from 'react-native-elements';
import MenuItems from '../components/restutantsDetails/MenuItems';
import ViewCart from '../components/restutantsDetails/ViewCart';
import AboutDetails from '../components/restutantsDetails/AboutDetails';

const RestaurantsDetails = ({route, navigation}) => {
  return (
    <View style= {{flex: 1}} >
      <AboutDetails route={route}/>
     <MenuItems/>
      <ViewCart />
    </View>
  );
};

export default RestaurantsDetails;

const styles = StyleSheet.create({});
