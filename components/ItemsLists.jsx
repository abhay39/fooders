import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View, useColorScheme } from 'react-native'
import React, { useState } from 'react'
import { foodItems, foodLists } from '../dummyData'
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { cartItems } from '../store/Index'

const ItemsLists = () => {
    const navigation=useNavigation()
    const colorScheme=useColorScheme();
    const [isSelected,setIsSelected]=useState("All")
    const dispatch = useDispatch();



    const handleAddCart=(item)=>{
      dispatch(cartItems.addToCart({item,qty:1,totalPrice:item.price*1}))
    }

  return (
    <View >
      <FlatList 
        style={{}}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={foodLists}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={()=>setIsSelected(item.name)} style={{
            backgroundColor:isSelected===item.name?"gray":"transparent",
            margin:10,
            padding:10,
            borderRadius:10,
            borderWidth:2,
            borderColor:'#9c9b9b',
          }}>
            <Text style={{
                fontSize:20,
                fontWeight:'bold',
                color:colorScheme=='dark'?"white":"black",
            }}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      {
        foodItems.map((item,index)=>{
            return(
                <TouchableOpacity onPress={()=>navigation.push("selected",{
                  item:item
                })} key={index+1} style={styles.itemss}>
                <Image source={{uri:item.image}} style={styles.productImage}/>
                <View style={{padding:10}}>
                    <Text style={{fontSize:23,color:"black",fontWeight:'700'}}>{item.name} {item.id}</Text>
                    <Text style={{fontSize:16,color:"black",fontWeight:'400'}}>{item.category}</Text>
                    <Text style={{fontSize:18,color:"green",fontWeight:'600'}}>${item.price}</Text>
                    <Text style={{fontSize:18,color:colorScheme=='dark'?"white":"black",fontWeight:'600',alignItems:'center',color:'red'}}>{item.rating}⭐ <Text style={{fontWeight:'400'}}>{item.ratingCount} Reviews</Text></Text>
                    <TouchableOpacity onPress={()=>handleAddCart(item)} style={{backgroundColor:'green',padding:5,borderRadius:50,width:50,alignItems:'center',position:'absolute', right:10,top:60}}>
                        <Icon name="pluscircleo" size={40} color="white"/>
                    </TouchableOpacity>
                </View>
                </TouchableOpacity>
            )
        })
      }

      
      
      
    </View>
  )
}

export default ItemsLists

const styles = StyleSheet.create({
    item:{
        
    },
    itemss:{
        // height:300,
        width:'100%',
        marginBottom:10,
        backgroundColor:'#d8e2dc',
        borderRadius:10,
        marginTop:20
    },

    productImage:
    {
        height:230,
        width:'100%',
        borderRadius:10,
        resizeMode:"cover",
    }
   
})