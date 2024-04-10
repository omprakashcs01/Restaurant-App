import React from 'react';
import {useSelector} from 'react-redux';
import {View, Text, TouchableOpacity} from 'react-native';

const ViewCart = ({navigation, restaurantName}) => {
  const items = useSelector(state => state.cartReducer.selectedItems.items);
  const total = items
    .map(item => Number(item.price.replace('$', '')))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString('en', {
    style: 'currency',
    currency: 'USD',
  });

  console.log('total USD', totalUSD);
  return (
    <>
      {total ? (
        <View
          style={{
            position: 'absolute',
            bottom: 50,
            left: 0,
            right: 0,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              padding: 13,
              marginTop: 20,
              backgroundColor: 'black',
              alignItems: 'center',
              borderRadius: 30,
              width: 250,
            }}>
            <Text style={{fontSize: 20, color: 'white'}}>
              View Cart {totalUSD}
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <></>
      )}
    </>
  );
};

export default ViewCart;
