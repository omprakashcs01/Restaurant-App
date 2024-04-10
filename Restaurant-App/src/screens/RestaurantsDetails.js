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
     <MenuItems restaurantName={route.params.name}  />
      <ViewCart navigation ={navigation} restaurantName={route.params.name} />
    </View>
  );
};

export default RestaurantsDetails;

const styles = StyleSheet.create({});
