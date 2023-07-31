import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingDots from './LoadingDotsAnimation';
import { useFonts } from 'expo-font';
import { Button, Icon } from '@rneui/themed';
import { onUpdateOrders } from './subscriptions';
import { getOrders } from '../../src/graphql/queries';
import { Skeleton } from 'moti/skeleton';

function LoadingStates() {
  const [order, setOrder] = useState('');
  const [orderId, setOrderId] = useState('');
  const [orderData, setOrderData] = useState('');
  const [loading, setLoading] = useState(true);
  const [orderIdFetched, setOrderIdFetched] = useState(false);

  const getOrderStatusText = () => {
    switch (order?.status) {
      case 'New':
        return 'Creating Order...';
      case 'SOS_ACCEPTED':
        return 'Waiting Payment...';
      case 'USER_P':
        return 'SOS Accepted, Chat is Open!';
        case 'USER_T':
          return 'SOS Finished!';
      // Handle other states if needed
      default:
        return '';
    }
  };

  const getOrderStatusImage = () => {
  switch (order?.status) {
    case 'New':
      return {uri: 'https://sosjobzimagecenterddb05652-dev.s3.ca-central-1.amazonaws.com/LoadingStates/planefirsttt.png',
      width: 104,
      height: 200,
    }
    case 'SOS_ACCEPTED':
      return {uri: 'https://sosjobzimagecenterddb05652-dev.s3.ca-central-1.amazonaws.com/LoadingStates/payment.png',
      width: 65,
      height: 80,
    }
    case 'USER_P':
      return {uri: 'https://sosjobzimagecenterddb05652-dev.s3.ca-central-1.amazonaws.com/LoadingStates/planesecondd.png',
      width: 330,
      height: 153
    }
    // Handle other states if needed
    default:
      return null;
  }
  };

  const [fontsLoaded] = useFonts({
    'Epilogue-Bold': require('../resources/fonts/Epilogue-Bold.ttf'),
});


  useEffect(() => {
    const fetchUserOrder = async () => {
      try {
        const orderData = await AsyncStorage.getItem('@My-OrderObject');
        if (orderData) {
          setOrder(JSON.parse(orderData));
        }
      } catch (e) {
        console.log(e);
      }
    };

    const fetchUserOrderId = async () => {
      try {
        const orderDataId = await AsyncStorage.getItem('@My-OrderObject-Id');
        if (orderDataId) {
          setOrderId(JSON.parse(orderDataId));
          setOrderIdFetched(true); // Mark orderId as fetched
        }
      } catch (e) {
        console.log(e);
      }
    };

    // Call both functions in the same useEffect
    fetchUserOrderId();
    fetchUserOrder();
  }, []);

  useEffect(() => {
    const fetchStoreOrder = async () => {
      try {
        if (orderIdFetched) {
          console.log('orderId:', orderId);

          const orderDat = await API.graphql(graphqlOperation(getOrders, { id: orderId }));
          setOrderData(JSON.stringify(orderDat));
          setLoading(false); // Set loading to false when data is fetched
        }
      } catch (error) {
        console.log('Error fetching stored region data:', error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchStoreOrder();
  }, [orderIdFetched, orderId]); // Add dependencies to trigger useEffect when orderIdFetched or orderId changes

  useEffect(() => {
    const subscription = API.graphql(
      graphqlOperation(onUpdateOrders, { id: orderId })
    ).subscribe({
      next: ({ value }) => setOrder(value.data.onUpdateOrders),
      error: error => console.warn(error)
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <View style={styles.OrderView}>
      <View>
        {loading ? (
          <LoadingDots />
        ) : (
          <View style={styles.container}>
            {order?.status === 'New' && (
              <View style={styles.loadingContainer}>
                <Skeleton height={5} radius={'round'} width={50} colorMode='light' />
                <Skeleton height={5} radius={'round'} width={50} colorMode='dark' backgroundColor='#0500FF'/>
                <Skeleton height={5} radius={'round'} width={50} colorMode='dark' backgroundColor='#0500FF'/>
                <Skeleton height={5} radius={'round'} width={50} colorMode='dark' backgroundColor='#0500FF'/>
              </View>
            )}
            {order?.status === 'SOS_ACCEPTED' && (
              <View style={styles.loadingContainer}>
                <Skeleton height={5} radius={'round'} width={50} colorMode='light' />
                <Skeleton height={5} radius={'round'} width={50} colorMode='light' />
                <Skeleton height={5} radius={'round'} width={50} colorMode='dark' backgroundColor='#0500FF'/>
                <Skeleton height={5} radius={'round'} width={50} colorMode='dark' backgroundColor='#0500FF'/>
              </View>
            )}
            {order?.status === 'USER_P' && (
              <View style={styles.loadingContainer}>
                <Skeleton height={5} radius={'round'} width={50} colorMode='light' />
                <Skeleton height={5} radius={'round'} width={50} colorMode='light' />
                <Skeleton height={5} radius={'round'} width={50} colorMode='light' />
                <Skeleton height={5} radius={'round'} width={50} colorMode='dark' backgroundColor='#0500FF'/>
              </View>
            )}
            {order?.status === 'USER_T' && (
              <View style={styles.loadingContainer}>
                <Skeleton height={5} radius={'round'} width={50} colorMode='light' />
                <Skeleton height={5} radius={'round'} width={50} colorMode='light' />
                <Skeleton height={5} radius={'round'} width={50} colorMode='light' />
                <Skeleton height={5} radius={'round'} width={50} colorMode='light' />
              </View>
            )}

            <View style={styles.textContainer}>
              <Text style={styles.loadingText}>{getOrderStatusText()}</Text>
            </View>
            <View style={styles.middleCenterImg}>
              <View style={styles.imageContainer}>
              {getOrderStatusImage() && (
            <Image
              source={{uri: getOrderStatusImage().uri}}
              style={{
            width: getOrderStatusImage().width,
            height: getOrderStatusImage().height,
            }}
              />
                )}
              </View>
            {order?.status === 'SOS_ACCEPTED' && (
              <View style={styles.buttonContainer}>
                    <Button
                    children={'Pay Here!'}
                    buttonStyle={{
                        borderRadius: 14,
                        backgroundColor: '#0500FF',
                        height: 50,
                        width: 300,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    titleStyle={{ fontSize: 12, fontFamily: 'Epilogue-Regular' }}
                />
              </View>
            )}
            </View>
          </View>
        )}
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  buttonContainer:{
    height: 50,
    width: 300,
    paddingTop: 40,
  },
  middleCenterImg:{
    flex: 0,
    alignItems: 'center',
    justifyContent:'center',
    paddingBottom: 10
  },
  imageContainer:{
    // backgroundColor: 'red'
  },
  container:{
    paddingTop: 30,
    gap: 20
  },
  loadingContainer:{
    flexDirection: 'row',
    gap: 25,
    paddingLeft: 30
  },
  textContainer:{
    paddingLeft: 15
  },
  loadingText:{
    fontFamily: 'Epilogue-Bold',
    fontSize: 20
  },
  OrderView: {
    backgroundColor: 'white',
    width: 340,
    height: 310,
    borderRadius: 30,
    shadowColor: "#000000",
    shadowOffset: {
        width: 2,
        height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3
  },
  footer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    bottom: -500,
    position: 'absolute',
    width: '100%',
  },
  region: {
    color: '#fff',
    lineHeight: 20,
    margin: 20,
  },
});

export default LoadingStates;