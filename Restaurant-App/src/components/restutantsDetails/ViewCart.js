import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const ViewCart = () => {
 return (
    <View style={{ position: 'absolute', bottom: 50, left: 0, right: 0, alignItems: 'center' }}>
      <TouchableOpacity style={{
        padding: 13,
        marginTop: 20,
        backgroundColor: 'black',
        alignItems: 'center',
        borderRadius: 30,
        width: 300,
      }}>
        <Text style={{ fontSize: 20, color: 'white' }}>View Cart</Text>
      </TouchableOpacity>
    </View>
 );
};

export default ViewCart;