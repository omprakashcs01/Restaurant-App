import {Alert, PlatformColor, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
const SearchBarInput = (props) => {
  return (
    <View style={{marginTop: 15, flexDirection: 'row'}}>
      <GooglePlacesAutocomplete
      query={{key : 'AIzaSyCHP-QXGDHxdEs7Q9YFrk_FzYhBO_9cdNk'}}
     onPress={(data) => {
  console.log('data description =>>>>', data.description);
  const city = data.description.split(',')[0].trim();
  console.log('city =>>>>', city);
  
}}

        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: '#eee',
            borderRadius: 20,
            fontWeight: '700',
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: '#eee',
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 10,
          },
        }}
        renderLeftButton={() => {
          return (
            <View style={{marginLeft: 10}}>
              <Ionicons name="location-sharp" size={24} />
            </View>
          );
        }}

        renderRightButton={()=>{
            return(
                <View style = {{marginRight: 10 , flexDirection: 'row',
                backgroundColor: 'white',
                padding: 10,
                borderRadius: 30,
              
                }}>
                   <AntDesign name = 'clockcircle' size ={20} style = {{ marginRight: 6}}/>
                    <Text>Search</Text>
                </View>
            )
        }}
 
      />
    </View>
  );
};

export default SearchBarInput;

const styles = StyleSheet.create({});
