import { StyleSheet, Text, TouchableOpacity, View, useColorScheme } from 'react-native'
import React, { useEffect, useState } from 'react'
import LottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';
import { useDispatch } from 'react-redux';
import { cartItems } from '../store/Index';

const OrderConfirm = ({navigation}) => {
    const colorScheme=useColorScheme();
    

    const [timeRemaining, setTimeRemaining] = useState(1800);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(prevTime => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []); // empty dependency array to run the effect once on mount

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  const dispatch=useDispatch()

  return (
    <View style={{flex:1,backgroundColor:colorScheme==='dark'?"black":'white',alignItems:'center',justifyContent:'center'}}>
          <LottieView style={{
            height:300,width:300
          }} source={require("./images/doe.json")} autoPlay loop />
          <Text style={{fontSize:24,fontWeight:'600'}}>Order Completed</Text>
          <Text style={{fontSize:20,fontWeight:'600',color:colorScheme==='dark'?"gray":"gray"}}>Your order has been placed successfully</Text>
          <Text style={{fontSize:20,fontWeight:'600',color:colorScheme==='dark'?"gray":"gray"}}>Get delivery by <Text style={{color:colorScheme==='dark'?"white":"black"}}>
          {timeRemaining >= 0 ? (
                <Text>{`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}</Text>
            ) : (
                <Text>Countdown expired!</Text>
            )}
            
            </Text> min</Text>

            <Animatable.View duration={4000} animation={"slideInUp"} style={{ display: "flex",position:'absolute',bottom:10,width:'100%',borderRadius:20,justifyContent:"center", flexDirection: 'row', alignItems: 'center',  marginTop: 10,
                    backgroundColor:colorScheme==='dark'?"white":"black",padding:10,height:80

                    }}>
                    <TouchableOpacity onPress={()=>{
                        dispatch(cartItems.clearCart())
                        navigation.push("Main")
                    }}>
                    <Text style={{fontSize:30,fontWeight:'600',color:colorScheme==='dark'?'black':"white"}}>
                    Go Home
                    </Text>
                    </TouchableOpacity>

            </Animatable.View>
    </View>
  )
}

export default OrderConfirm

const styles = StyleSheet.create({})