import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Divider, Image} from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
const data = [
  {
    title: 'The Rustic Spoon',
    description: 'A cozy restaurant with a variety of dishes.',
    price: "$13.50",
    image:
      'https://img.freepik.com/free-photo/vertical-shot-traditional-indian-paneer-butter-masala-cheese-cottage-curry-black-surface_181624-32001.jpg?size=626&ext=jpg',
  },
  {
    title: 'Sizzling Grillhouse',
    description: 'A family-friendly restaurant serving delicious meals.',
    price: "$19.20",
    image:
      'https://img.freepik.com/premium-photo/cheese-pav-bhaji-recipe-is-street-food-bhajipav-recipe-with-addition-cheese_466689-86333.jpg?size=626&ext=jpg',
  },
  {
    title: 'Culinary Haven',
    description: 'An upscale dining experience with gourmet cuisine.',
    price: "$14.50",
    image:
      'https://img.freepik.com/premium-photo/dal-makhani-daal-makhni-is-popular-food-from-punjab-india-made-using-whole-black-lentil-red-kidney-beans-butter-cream-served-with-garlic-naan-indian-bread-roti_466689-22001.jpg?size=626&ext=jpg&ga=GA1.1.1833424741.1712160349&semt=sph',
  },
  {
    title: 'Taste of Italy',
    description: 'Authentic Italian cuisine in a charming setting.',
    price: "$21.50",
    image:
      'https://img.freepik.com/premium-photo/manchurian-hakka-schezwan-noodles-popular-indochinese-food-served-bowl_466689-46402.jpg?size=626&ext=jpg&ga=GA1.1.1833424741.1712160349&semt=sph',
  },
  {
    title: 'Spice Junction',
    description: 'A fusion of flavors from around the world.',
    price: "$13.50",
    image:
      'https://img.freepik.com/premium-photo/indian-hindu-veg-thali-food-platter-selective-focus_466689-35929.jpg?size=626&ext=jpg&ga=GA1.1.1833424741.1712160349&semt=sph',
  },
  {
    title: "Ocean's Edge",
    description: 'Seafood specialties with breathtaking ocean views.',
    price: "$20.50",
    image:
      'https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18813.jpg?size=626&ext=jpg&ga=GA1.1.1833424741.1712160349&semt=sph',
  },
  {
    title: 'Green Garden Cafe',
    description: 'Fresh and healthy options for mindful dining.',
    price: "$18.50",
    image:
      'https://img.freepik.com/premium-photo/indian-vegetarian-food-thali-platter-includes-paneer-butter-masala-dal-makhani-tarka-chole-papad-kofta-curry-gulab-jamun-aloo-gobi-sabji-chapati-rice-with-bengali-sweet-served_466689-4783.jpg?size=626&ext=jpg&ga=GA1.1.1833424741.1712160349&semt=sph',
  },
  {
    title: 'Fire & Ice Grill',
    description: 'A sizzling grill experience with fiery flavors.',
    price: "$3.50",
    image:
      'https://img.freepik.com/free-photo/burger-hamburger-cheeseburger_505751-3697.jpg?size=626&ext=jpg&ga=GA1.1.1833424741.1712160349&semt=sph',
  },
  {
    title: 'Mediterranean Oasis',
    description: 'Transport yourself to the Mediterranean with every bite.',
    price: "$25.50",
    image:
      'https://img.freepik.com/premium-photo/mix-vegetable-curry-indian-main-course-recipe-contains-carrots-cauliflower-green-peas-beans-baby-corn-capsicum-paneer-cottage-cheese-with-traditional-masala-curry_466689-35777.jpg?size=626&ext=jpg&ga=GA1.1.1833424741.1712160349&semt=sph',
  },
  {
    title: 'Asian Fusion Delight',
    description: 'A blend of Asian flavors for a delightful dining journey.',
    price: "$53.50",
    image:
      'https://img.freepik.com/free-photo/traditional-supreme-pizza-rustic-wooden-table_123827-20200.jpg?size=626&ext=jpg&ga=GA1.1.1833424741.1712160349&semt=sph',
  },
];

const MenuItems = ({ restaurantName}) => {
  const dispatch = useDispatch();

  const selectItem = (item, checkboxValue )=>{
  console.log('hello=>>', item);
    dispatch({
      type: 'ADD_TO_CART',
      payload: {...item, restaurantName: restaurantName ,checkboxValue: checkboxValue}
    });
  }

  const cartItems = useSelector(state => state.cartReducer.selectedItems.items);

 const isFoodCart =(food, cartItems) => (
  Boolean(cartItems.find((item)=> item.title === food.title))
 )


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {data.map((item, index) => (
      
        <View key={index}>
          <View style={styles.MenuItemsStyle}>
            <BouncyCheckbox
              iconStyle={{
                borderColor: '#d3d3d3',
                borderRadius: 0,
                fillColor: '#32cd32',
              }}
              onPress={(checkboxValue)=> selectItem(item ,checkboxValue)}
              isChecked ={isFoodCart(item, cartItems)}
            />
            <FoodInfo food={item} />
            <FoodImage food={item} />
          </View>
          <Divider width={1} style={{marginVertical: 20}} />
        </View>
      ))}
    </ScrollView>
  );
};

const FoodInfo = props => (
  <View style={{width: 240, justifyContent: 'space-evenly'}}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text style={styles.description}>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = props => (
  <View>
    <Image
      style={{width: 100, height: 100, borderRadius: 8}}
      source={{uri: props.food.image}}
    />
  </View>
);

export default MenuItems;

const styles = StyleSheet.create({
  MenuItemsStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },

  titleStyle: {
    fontSize: 19,
    fontWeight: '600',
  },
  description: {
    fontSize: 16,
    fontWeight: '600',
  },
});
