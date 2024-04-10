import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native-elements';



const restaurantYelpInfo ={
  name: 'Farmhouse kitchen',
  image: 'https://static.toiimg.com/thumb/msid-101282760,imgsize-252432,width-400,resizemode-4/101282760.jpg',
  price: '$$',
  reviews: '1500',
  rating:  4.5,
  categories:[{ title: 'chai'} , { title: 'Comfort Food'},
]
};

// const {name, image, price, reviews, rating, categories} = restaurantYelpInfo 

// const formattedCategories =categories.map((cat)=> cat.title).join('.')

// const description = `${formattedCategories} ${price? '.'+ price: " "} . 🎫 ${rating} ⭐( ${reviews})`

const AboutDetails = (props) => {
  
  const {name, image, price, reviews, rating, categories} = props.route.params
  const formattedCategories =categories.map((cat)=> cat.title).join('.')
  const description = `${formattedCategories} ${price? '.'+ price: " "} . 🎫 ${rating} ⭐( ${reviews})`

  return (
    <View>
      <RestaurantImage image = {image} />
      <RestaurantName  name= {name}/>
      <RestaurantDescription  description = {description}/>
    </View>
  );
};

const RestaurantImage = props => (
  <Image style={{width: '100%', height: 180}} source={{uri: props.image}} />
);

const RestaurantName=(props)=> (
  <Text style = {{fontSize: 29,
  fontWeight: 'bold',
  marginTop: 10,
  marginHorizontal: 15,
  
  
  }}>{props.name}</Text>
)

const RestaurantDescription=(props)=> (
  <Text style = {{fontSize: 20,
  fontWeight: '400',
  marginTop: 10,
  marginHorizontal: 15,
  fontSize: 16
  }}>{props.description}</Text>
)


export default AboutDetails;

const styles = StyleSheet.create({});
