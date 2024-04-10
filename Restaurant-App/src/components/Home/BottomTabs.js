import {StyleSheet, Text, Touchable, TouchableOpacity, View} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const BottomTabs = () => {
  return (
    
    <View
      style={{
        flexDirection: 'row',
        margin: 5,
        marginHorizontal: 20,
        justifyContent: 'space-between',
      }}>
      <Icon icon={'home'} text="Home" />
      <Icon icon={'search'} text="Browse" />
      <Icon icon={'shopping-bag'} text="Grocery" />
      <Icon icon={'receipt'} text="Order" />
      <Icon icon={'user'} text="Account" />
    </View>
  );
};

const Icon = props => (
    <TouchableOpacity>
  <View>
    <FontAwesome5
      name={props.icon}
      size={25}
      style={{marginBottom: 2, alignItems: 'center', alignSelf: 'center'}}
    />
    <Text>{props.text}</Text>
  </View>
  </TouchableOpacity>
);
export default BottomTabs;

const styles = StyleSheet.create({});
