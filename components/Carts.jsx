import { StyleSheet, Image, useColorScheme, Text, View, TouchableOpacity, ScrollView, FlatList, Alert, Dimensions } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import Iconss from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import { foodItems, foodLists } from '../dummyData'
import * as Animatable from 'react-native-animatable';
import Toast from 'react-native-toast-message';
import { useDispatch, useSelector } from 'react-redux'
import { cartItems } from '../store/Index'


const Carts = ({  navigation }) => {
  // const item=  route.params.item
  const colorScheme = useColorScheme();



  const dispatch=useDispatch();
  const itemsOnCart=useSelector((store)=>store.cart);

  const increaseItemCount=(item,qty)=>{
    
    dispatch(cartItems.increaseItemCount(item));
  }
  const decreaseItemCount=(item)=>{
    dispatch(cartItems.decreaseItemCount(item));
    
  }

  let totalPrice=itemsOnCart.reduce((sum,current)=>sum+current.totalPrice,0);

  let delivery=4/100 * totalPrice;
  let finalAmount=totalPrice+delivery;

  // console.log(totalPrice)

  return (
    <View showsVerticalScrollIndicator={false} style={[styles.container, {
      backgroundColor: colorScheme == 'dark' ? "black" : "white",
    }]}>
      <Animatable.View duration={2000} animation="slideInUp" style={styles.heading}>
        <TouchableOpacity style={[styles.buttons, {
          backgroundColor: colorScheme == 'dark' ? "white" : "#e9ecef",
        }]} onPress={() => navigation.goBack()}>
          <Iconss name="arrow-back-outline" size={30} color={colorScheme === 'dark' ? "black" : "black"} />
        </TouchableOpacity>
        <Text style={{ fontSize: 30, color: colorScheme === 'dark' ? "white" : "black", fontWeight: '700', marginLeft: 10 }}>My Carts</Text>
      </Animatable.View>

      {
        itemsOnCart.length>0?(<>
          <ScrollView showsVerticalScrollIndicator={false}>
        {
          itemsOnCart.length>0 && (itemsOnCart.map(({item,qty,totalPrice},index)=>{
            return(
              <Animatable.View key={index} duration={4000} animation="rubberBand" style={{
                display: 'flex',
                flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, backgroundColor: '#cce3de', padding: 10, borderRadius: 20
              }}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                  <Image source={{ uri: item.image }} style={styles.productImage} />
                  <View style={{ padding: 10 }}>
                    <Text style={{ fontSize: 20, color: colorScheme === 'dark' ? "#233d4d" : "#233d4d", fontWeight: '600' }}>${item.name}</Text>
                    <Text style={{ fontSize: 16, color: colorScheme === 'dark' ? "#233d4d" : "#233d4d", fontWeight: '500' }}>({qty}pcs)</Text>
                    <Text style={{ fontSize: 18, color: colorScheme === 'dark' ? "black" : "black", fontWeight: '500' }}>${totalPrice}</Text>
                  </View>
                </View>
      
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '38%', justifyContent: 'space-between', backgroundColor: colorScheme === 'light' ? "black" : "white", borderRadius: 20, padding: 3, }}>
                  <TouchableOpacity onPress={() => {
                    
                    if(qty>1){
                      decreaseItemCount(item)
                    }
                    else{
                      Alert.alert(`${qty} cannot be  0`)
                    }
                    
                  }} style={{
                    backgroundColor: colorScheme === 'light' ? "white" : "black", borderRadius: 50, opacity: 0.8, alignItems: 'center', justifyContent: "center", width: 40, height: 40, opacity: 0.9
                  }}>
                    <Feather name="minus" size={24} color={colorScheme === 'dark' ? "red" : "red"} />
                  </TouchableOpacity>
                  <Text style={{ fontSize: 20, color: colorScheme === 'dark' ? "black" : "white", fontWeight: '600' }}>{qty}</Text>
                  <TouchableOpacity onPress={() => {
                    increaseItemCount(item,qty);
                  }} style={{
                    backgroundColor: colorScheme === 'light' ? "white" : "black", borderRadius: 50, opacity: 0.8, alignItems: 'center', justifyContent: "center", width: 40, height: 40, opacity: 0.9
                  }}>
                    <Feather name="plus" size={24} color={colorScheme === 'dark' ? "green" : "green"} />
                  </TouchableOpacity>
                </View>
              </Animatable.View>
            )
          }))
        }
      </ScrollView>

      <Toast />

      {
        itemsOnCart.length>0 && (
          <>
            <Animatable.View duration={4000} animation={"fadeInRightBig"} style={{
        backgroundColor: '#eaf4f4', padding: 10, borderRadius: 10
      }}>
        <Text style={{ fontSize: 20, color: 'black', fontWeight: '500' }}>Bill Details</Text>

        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 10, justifyContent: 'space-between', marginTop: 10 }}>
          <Text style={{ fontSize: 20, color: '#a0afb8', fontWeight: '300' }}>Product Price</Text>
          <Text style={{ fontSize: 20, color: '#000', fontWeight: '500' }}>${totalPrice}</Text>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 10, justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 20, color: '#a0afb8', fontWeight: '300' }}>Delivery Charge</Text>
          <Text style={{ fontSize: 20, color: '#000', fontWeight: '500' }}>${delivery}</Text>
        </View>

        <View style={{ borderBottomWidth: 2, borderBottomColor: 'gray', marginBottom: 2 }} />

        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 10, justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 20, color: '#a0afb8', fontWeight: '300' }}>Total Amount</Text>
          <Text style={{ fontSize: 20, color: '#000', fontWeight: '500' }}>${finalAmount}</Text>
        </View>

      </Animatable.View>
      <Animatable.View duration={4000} animation={"slideInUp"} style={{ display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>



        <TouchableOpacity style={{
          backgroundColor: colorScheme === 'light' ? "black" : "white", height: 60, padding: 3, borderRadius: 20, width: '100%', alignItems: 'center', justifyContent: 'center',
        }} onPress={() => {
          navigation.push("confirm",{
            totalPrice:finalAmount
          })
        }}>
          <Text style={{ fontSize: 20, color: colorScheme === 'dark' ? "black" : "white", fontWeight: '500' }}>Continue Order</Text>
        </TouchableOpacity>
      </Animatable.View>
          </>
        )
      }
        </>):(
          <Animatable.View duration={4000} animation={"slideInUp"} style={{ display: "flex",flex:1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10,
          backgroundColor:colorScheme==='dark'?"black":"white",
          
          }}>
            <Text style={{fontSize:30,fontWeight:'600',color:colorScheme==='dark'?'white':"black"}}>
              No Items in cart...
            </Text>
          </Animatable.View>
        )
      }
    </View>
  )
}

export default Carts

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    fontSize: 40,
    fontWeight: '600',
    margin: 10,
    color: 'black',
    letterSpacing: 1.4
  },
  buttons: {
    backgroundColor: '#e9ecef',
    borderRadius: 50,
    width: 40,
    justifyContent: 'center',
    height: 40,
    alignItems: 'center'
  },
  itemss: {
    // height:300,
    width: '100%',
    marginBottom: 10,
    backgroundColor: '#d8e2dc',
    borderRadius: 10,
    marginTop: 20
  },

  productImage:
  {
    height: 100,
    width: 100,
    borderRadius: 20,
    resizeMode: "cover",
  },

  samples: {
    backgroundColor: '#cce3de',
    padding: 5,
    borderRadius: 20,
    width: "100%",

    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10
  },

  heading: {
    flexDirection: 'row',
    // justifyContent:'space-between',
    alignItems: 'center',
    marginBottom: 20
  }
})