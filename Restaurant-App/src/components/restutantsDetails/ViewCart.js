import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {View, Text, TouchableOpacity, Modal, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import OrderItem from './OrderItem';

const ViewCart = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const {items, restaurantName} = useSelector(
    state => state.cartReducer.selectedItems,
  );

  const total = items
    .map(item => Number(item.price.replace('$', '')))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString('en', {
    style: 'currency',
    currency: 'USD',
  });

  const closeModel = ()=> {
    setModalVisible(false)
  }

  const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(0,0,0,0.7)',
    },
    modalCheckout: {
      backgroundColor: 'white',
      padding: 16,
      height: 500,
      borderWidth: 1,
    },
    restaurantName: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 18,
      marginBottom: 10,
    },
    subTotalContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 15,
    },

    subTotalText: {
      textAlign: 'center',
      fontSize: 18,
      marginBottom: 15,
    },
  });

  const checkOutModelContent = () => {
    return (
      <>
      <TouchableWithoutFeedback onPress={closeModel}>
        
        <View style={styles.modalContainer}>
        <TouchableWithoutFeedback>
          <View style={styles.modalCheckout}>
            <Text style={styles.restaurantName}>{restaurantName}</Text>

            {items.map((item, index) => {
              return <OrderItem key={index} item={item} />;
            })}
            <View style={styles.subTotalContainer}>
              <Text style={styles.subTotalText}>SubTotal</Text>
              <Text style={styles.subTotalText}>{totalUSD}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <TouchableOpacity
                style={{
                  marginTop: 20,
                  backgroundColor: 'black',
                  alignItems: 'center',
                  padding: 15,
                  borderRadius: 30,
                  width: 300,
                  position: 'relative',
                }}
                onPress={() => setModalVisible(false)}>
                <Text style={{color: 'white', fontSize: 20}}>
                
                  CheckOut 
                </Text>
                <Text style={{ position: 'absolute', right: 20 , color: 'white', fontSize: 20 , top: 15}}>
                
                 {total? totalUSD: ""}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          </TouchableWithoutFeedback>
        </View>
        </TouchableWithoutFeedback>
      </>
    );
  };

  console.log('total USD', totalUSD);
  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}>
        {checkOutModelContent()}
      </Modal>
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
            }}
            onPress={() => setModalVisible(true)}>
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

