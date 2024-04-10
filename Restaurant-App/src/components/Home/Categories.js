import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const item = [
  {
    image: require('../../../assets/images/shopping-bag.png'),
    text: 'Pick-up',
  },
  {
    image: require('../../../assets/images/soft-drink.png'),
    text: 'Soft Drink',
  },
  {
    image: require('../../../assets/images/bread.png'),
    text: 'Bakery Items',
  },
  {
    image: require('../../../assets/images/fast-food.png'),
    text: 'Fast Food',
  },
  {
    image: require('../../../assets/images/deals.png'),
    text: 'Deals',
  },
  {
    image: require('../../../assets/images/coffee.png'),
    text: 'Coffee & tea',
  },
  {
    image: require('../../../assets/images/desserts.png'),
    text: 'Desserts',
  },
];

const Categories = () => {
  return (
    <View
      style={{
        marginTop: 10,
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingLeft: 10,
      }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {item.map((item, index) => (
          <View key={index} style={{alignItems: 'center', marginRight: 10}}>
            <Image
              style={{
                width: 50,
                height: 40,
                resizeMode: 'contain',
              }}
              source={item.image}
            />
            <Text style={{fontSize: 15, fontWeight: '900'}}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({});
