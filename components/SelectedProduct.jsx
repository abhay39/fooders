import { StyleSheet,Image,useColorScheme, Text, View,TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import Iconss from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import { foodItems, foodLists } from '../dummyData'
import * as Animatable from 'react-native-animatable';
import Toast from 'react-native-toast-message';


const SelectedProduct = ({route,navigation}) => {
    const item=  route.params.item
    const colorScheme=useColorScheme();
    const [qty,setQty]=useState(1);


  return (
    <ScrollView showsVerticalScrollIndicator={false} style={[styles.container,{
      backgroundColor:colorScheme=='dark'?"black":"white",
    }]}>
      <Animatable.View duration={2000} animation="slideInUp" style={styles.heading}>
        <TouchableOpacity style={[styles.buttons,{
          backgroundColor:colorScheme=='dark'?"white":"#e9ecef",
        }]} onPress={()=>navigation.goBack()}>
          <Iconss name="arrow-back-outline" size={30} color={colorScheme==='dark'?"black":"black"}/>
        </TouchableOpacity>
        <Text style={{fontSize:30,color:colorScheme==='dark'?"white":"black",fontWeight:'700'}}>{item.name}</Text>
        
        <TouchableOpacity style={[styles.buttons,{
          backgroundColor:colorScheme=='dark'?"white":"#e9ecef",}]}>
          <Iconss name="heart-outline" size={30} color={colorScheme==='dark'?"black":"black"}/>
        </TouchableOpacity>
      </Animatable.View>

      <Animatable.View duration={4000} animation="rubberBand">
        <Image  source={{uri:item.image}} style={styles.productImage}/>
        <View style={{padding:10}}>
        <Text style={{fontSize:26,color:colorScheme==='dark'?"red":"red",fontWeight:'700'}}>${item.price}</Text>
        <Text style={{fontSize:24,color:colorScheme==='dark'?"white":"black",fontWeight:'700'}}>{item.category}</Text>
      </View>
      </Animatable.View>
          
          
        <Animatable.View duration={2000} animation="fadeInRight" style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={{fontSize:14,color:colorScheme=='dark'?"white":"black",fontWeight:'600',alignItems:'center',color:'red'}}>{item.rating}⭐ <Text style={{fontWeight:'400'}}>({item.ratingCount}+) Reviews</Text></Text>
          
          <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <Iconss name="stopwatch-outline" size={30} color={colorScheme==='dark'?"green":"green"}/>

            <Text style={{fontSize:14,color:colorScheme=='dark'?"green":"green",fontWeight:'600',alignItems:'center',}}>Delivery in 30 M</Text>
          </View>
        </Animatable.View>

          <Text style={{color:colorScheme=='dark'?"white":"gray",fontSize:16}}>{item.description.slice(0,170)}</Text>

          <Text style={{color:colorScheme=='dark'?"white":"black",fontSize:25,marginTop:20,fontWeight:'700'}}>Related Products</Text>


          <Animatable.View duration={4000} animation={"fadeInRightBig"}>
          <FlatList 
          horizontal
          showsHorizontalScrollIndicator={false}
          data={foodItems}
          renderItem={({ item }) => (
            <TouchableOpacity  style={{
              margin:10,
              // borderColor:'#9c9b9b',
            }}>
              <View style={styles.samples}>
                <Image source={{uri:item.image}} style={styles.productImage1}/>
                <Text style={{fontSize:18,color:colorScheme==='dark'?"#bb3e03":"#bb3e03",fontWeight:'700'}}>{item.name}</Text>
                <Text style={{fontSize:18,color:colorScheme==='dark'?"#bb3e03":"#bb3e03",fontWeight:'700'}}>${item.price}</Text>
              </View>
            </TouchableOpacity>
          )}
          />
          </Animatable.View>

            <Toast />
      <Animatable.View duration={4000} animation={"slideInUp"} style={{display:"flex",flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:10}}>
        <View style={{display:'flex',flexDirection:'row',alignItems:'center',width:'38%',justifyContent:'space-between',backgroundColor:colorScheme==='light'?"black":"white",borderRadius:20,padding:3,}}>
            <TouchableOpacity onPress={()=>{
              if(qty<0){
                Toast.show({
                  type:"error",
                  text1:"",
                  text2:"Qty Can't be less than 0",
                  text2Style:{
                    fontSize:20,
                    color:"red",
                    fontWeight:"bold",
                  }
                })
                setQty(0);
              }else{
                setQty((prev)=>prev-1);
                
              }
            }} style={{
              backgroundColor:colorScheme==='light'?"white":"black",borderRadius:50,opacity:0.8,alignItems:'center',justifyContent:"center",width:40,height:40,opacity:0.9
            }}>
              <Feather name="minus" size={24} color={colorScheme==='dark'?"red":"red"} />
            </TouchableOpacity>
            <Text style={{fontSize:20,color:colorScheme==='dark'?"black":"white",fontWeight:'600'}}>{qty}</Text>
            <TouchableOpacity onPress={()=>{
              setQty((prev)=>prev+1);
            }} style={{
              backgroundColor:colorScheme==='light'?"white":"black",borderRadius:50,opacity:0.8,alignItems:'center',justifyContent:"center",width:40,height:40,opacity:0.9
            }}>
              <Feather name="plus" size={24} color={colorScheme==='dark'?"green":"green"} />
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={{
          backgroundColor:colorScheme==='light'?"black":"white",height:60,padding:3,borderRadius:20,width:'50%',alignItems:'center',justifyContent:'center',
        }} onPress={()=>{
          Toast.show({
            type:"success",
            text1:"Added to cart",
            text2:`${qty} ${item.name} added successfully`,
            text2Style:{
              fontSize:16,
              color:"#1b263b",
              fontWeight:"bold",
            },
            text1Style:{
              fontSize:20,
              color:"red",
              fontWeight:"bold",
            }
          })
          setTimeout(()=>{
            navigation.goBack()
          },3000)
          setQty(0);
        }}>
          <Text style={{fontSize:20,color:colorScheme==='dark'?"black":"white",fontWeight:'600'}}>Add To Cart</Text>
        </TouchableOpacity>
      </Animatable.View>
    </ScrollView>
  )
}

export default SelectedProduct

const styles = StyleSheet.create({
  container:{
    padding:5,
    flex: 1,
    backgroundColor:"white",
  },  
  title: {
    fontSize: 40,
    fontWeight:'600',
    margin: 10,
    color:'black',
    letterSpacing:1.4
  },
  buttons:{
    backgroundColor:'#e9ecef',
    borderRadius:50,
    width:40,
    justifyContent:'center',
    height:40,
    alignItems:'center'
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
      height:240,
      width:'100%',
      borderRadius:20,
      resizeMode:"cover",
  },
  productImage1:
  {
      height:140,
      width:140,
      borderRadius:20,
      resizeMode:"cover",
  },
  samples:{
    backgroundColor:'#cce3de',
    padding:5,
    borderRadius:20,
    width:"100%",

    alignItems:'center',
    justifyContent:'center',
    marginRight:10
  },

  heading:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:20
  }
})