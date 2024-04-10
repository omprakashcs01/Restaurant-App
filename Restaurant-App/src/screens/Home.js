import React, {useEffect, useState} from 'react';
import {Button, ScrollView, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Divider} from 'react-native-elements';
import BottomTabs from '../components/Home/BottomTabs';
import HeaderTabs from '../components/Home/HeaderTabs';
import SearchBarInput from '../components/Home/SearchBarInput';
import RestaurantItem from '../components/Home/RestaurantItem';
import Categories from '../components/Home/Categories';

// Make sure to replace this with your actual Yelp API key
const YELP_API_KEY =
  '0VDGS8CXHUJH-TINwHNWvXsxsbnucwSwr8ahxiZEtrTtd9mXuTCjrt8CH2KvrGioBqbRTL9GAXqVGVRxFjGIoS1NyWSflo6iZt793H4PtgU0yVwwmA5R6g5stEYaYnYx';

const Home = ({navigation}) => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [city, setCity] = useState('Hollywood');
  const [activeTab, setActiveTab] = useState('Delivery');

  // console.log("active tab =>>>",activeTab);

  const getRestaurantFromYelp = () => {
    const yelpApi = `https://api.yelp.com/v3/businesses/search?term=restaurant&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    return fetch(yelpApi, apiOptions)
      .then(res => res.json())
      .then(json =>
        setRestaurantData(
          json.businesses.filter(business =>
            business.transactions.includes(activeTab.toLowerCase()),
          ),
        ),
      );
  };

  useEffect(() => {
    getRestaurantFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{backgroundColor: 'white', padding: 15, flex: 1}}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBarInput cityHandler={setCity} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Categories />
          <RestaurantItem restaurantData={restaurantData} 
          navigation={navigation}
          />
        </ScrollView>
        <Divider width={2} />
      </View>
      <View>
        <BottomTabs />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
