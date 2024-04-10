import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function RestaurantItem({navigation, ...props}) {
  const {restaurantData} = props;

  return (
    <>
      {restaurantData.map((restaurant, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          style={{padding: 10, backgroundColor: '#eee'}}
          onPress={() =>
            navigation.navigate('RestaurantsDetails', {
              name: restaurant.name,
              image: restaurant.image_url,
              price: restaurant.price,
              reviews: restaurant.review_count,
              rating: restaurant.rating,
              categories: restaurant.categories,
            })
          }>
          <View>
            <RestaurantImage image={restaurant.image_url} />
            <RestaurantText name={restaurant.name} rating={restaurant.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

const RestaurantImage = props => (
  <View>
    <Image source={{uri: props.image}} style={{width: '100%', height: 180}} />
  </View>
);

const RestaurantText = props => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 5,
      backgroundColor: '#eee',
    }}>
    <View>
      <Text style={{fontSize: 15, fontWeight: 'bold'}}>{props.name}</Text>
      <Text style={{fontSize: 15, fontWeight: 'bold'}}>30-40 wait</Text>
    </View>
    <View>
      <Text style={{}}>{props.rating}</Text>
    </View>
  </View>
);
