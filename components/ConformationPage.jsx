import { StyleSheet, Text, TextInput, TouchableOpacity, View, useColorScheme } from 'react-native'
import React, { useState } from 'react'
import Iconss from 'react-native-vector-icons/Ionicons'
import * as Animatable from 'react-native-animatable';
import CheckBox from 'react-native-check-box'



const ConformationPage = ({route, navigation}) => {
    const {totalPrice} = route.params;
    const colorScheme = useColorScheme();
    const [isClicked,setIsClicked]=useState(false);
    const [paypal,setPaypal]=useState(false);
    const [cards,setCards]=useState(false);

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
        <Text style={{ fontSize: 30, color: colorScheme === 'dark' ? "white" : "black", fontWeight: '700', marginLeft: 10 }}>Payment</Text>
      </Animatable.View>

      <TouchableOpacity style={{display:'flex',flexDirection:'row',alignItems:'center', backgroundColor:colorScheme==='dark'?"white":'#233d4d',padding:5,borderRadius:10}}>
      <CheckBox
            style={{flex: 1, padding: 10}}
            onClick={()=>{
                setPaypal(!paypal)
            }}
            isChecked={paypal}
            rightText="Payment with razorpay"
            rightTextStyle={{color:colorScheme==='light'?"white":"black",fontSize:20}}
        />
      </TouchableOpacity>
      <TouchableOpacity style={{display:'flex',flexDirection:'row',alignItems:'center',backgroundColor:colorScheme==='dark'?"white":'#233d4d',padding:5,borderRadius:10,marginTop:20}}>
      <CheckBox
            style={{flex: 1, padding: 10}}
            onClick={()=>{
                setCards(!cards)
            }}
            isChecked={cards}
            rightText="Credit & Debit card"
            rightTextStyle={{color:colorScheme==='light'?"white":"black",fontSize:20}}
        />
      
      </TouchableOpacity>

      {
        cards && (
           <Animatable.View>
                <Text style={{fontSize:18,fontWeight:'400',color:colorScheme==='dark'?'white':'black',marginTop:20}}>Cardholder Name</Text>
                <TextInput keyboardType="default" placeholder='Enter name' style={{
                    padding:10,borderRadius:10, borderWidth:3,borderColor:'gray',fontSize:20
                }}/>
                <Text style={{fontSize:18,fontWeight:'400',color:colorScheme==='dark'?'white':'black',marginTop:10}}>Card Number</Text>
                <TextInput secureTextEntry keyboardType="numeric" placeholder='Enter card number' style={{
                    padding:10,borderRadius:10, borderWidth:3,borderColor:'gray',fontSize:20
                }}/>
                <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <View>
                        <Text style={{fontSize:18,fontWeight:'400',color:colorScheme==='dark'?'white':'black',marginTop:10}}>MM/YY</Text>
                        <TextInput keyboardType="numeric"  placeholder='Enter Date' style={{
                            padding:10,borderRadius:10, borderWidth:3,borderColor:'gray',fontSize:20,width:150
                        }}/>
                    </View>
                    <View>
                        <Text style={{fontSize:18,fontWeight:'400',color:colorScheme==='dark'?'white':'black',marginTop:10}}>CVC</Text>
                        <TextInput keyboardType="number-pad" secureTextEntry  placeholder='Enter CVC' style={{
                            padding:10,borderRadius:10, borderWidth:3,borderColor:'gray',fontSize:20,width:150
                        }}/>
                    </View>
                </View>
           </Animatable.View>
        )
      }

      {
        cards   && (
            <>
                <View style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:10}}>
                 <CheckBox
                    style={{flex: 1, padding: 10}}
                    onClick={()=>{
                        setIsClicked(!isClicked)
                    }}
                    isChecked={isClicked}
                />
                <Text style={{marginLeft:20,fontSize:16,color:colorScheme==='light'?"black":"white"}}>
                    I have read and accept the terms of use, rules of flight and privacy policy.
                </Text>
                </View>

                

                <Animatable.View duration={4000} animation={"slideInUp"} style={{ display: "flex",position:'absolute',bottom:100,width:'100%',borderRadius:20,justifyContent:'space-between', flexDirection: 'row', alignItems: 'center',  marginTop: 10,
          backgroundColor:colorScheme==='dark'?"black":"#d3d3d3",padding:10,height:50
          
          }}>
            <Text style={{fontSize:22,fontWeight:'400',color:colorScheme==='dark'?'white':"black"}}>
            Total Amount
            </Text>
            <Text style={{fontSize:22,fontWeight:'400',color:colorScheme==='dark'?'white':"black"}}>$
            {totalPrice}
            </Text>
            </Animatable.View>

            <Animatable.View duration={4000} animation={"slideInUp"} style={{ display: "flex",position:'absolute',bottom:10,width:'100%',borderRadius:20,justifyContent:"center", flexDirection: 'row', alignItems: 'center',  marginTop: 10,
          backgroundColor:colorScheme==='dark'?"white":"black",padding:10,height:80
          
          }}>
           <TouchableOpacity>
            <Text style={{fontSize:30,fontWeight:'600',color:colorScheme==='dark'?'black':"white"}}>
            Place Order
            </Text>
           </TouchableOpacity>
            
            </Animatable.View>

            </>
        )
      }
      {
        paypal   && (
            <>
                <View style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:10}}>
                 <CheckBox
                    style={{flex: 1, padding: 10}}
                    onClick={()=>{
                        setIsClicked(!isClicked)
                    }}
                    isChecked={isClicked}
                />
                <Text style={{marginLeft:20,fontSize:16,color:colorScheme==='light'?"black":"white"}}>
                    I have read and accept the terms of use, rules of flight and privacy policy.
                </Text>
                </View>

                    <Animatable.View duration={4000} animation={"slideInUp"} style={{ display: "flex",position:'absolute',bottom:100,width:'100%',borderRadius:20,justifyContent:'space-between', flexDirection: 'row', alignItems: 'center',  marginTop: 10,
                    backgroundColor:colorScheme==='dark'?"black":"#d3d3d3",padding:10,height:50

                    }}>
                    <Text style={{fontSize:22,fontWeight:'400',color:colorScheme==='dark'?'white':"black"}}>
                    Total Amount
                    </Text>
                    <Text style={{fontSize:22,fontWeight:'400',color:colorScheme==='dark'?'white':"black"}}>$
                    {totalPrice}
                    </Text>
                    </Animatable.View>

                    <Animatable.View duration={4000} animation={"slideInUp"} style={{ display: "flex",position:'absolute',bottom:10,width:'100%',borderRadius:20,justifyContent:"center", flexDirection: 'row', alignItems: 'center',  marginTop: 10,
                    backgroundColor:colorScheme==='dark'?"white":"black",padding:10,height:80

                    }}>
                    <TouchableOpacity onPress={()=>{
                        navigation.push("orderDone")
                    }}>
                    <Text style={{fontSize:30,fontWeight:'600',color:colorScheme==='dark'?'black':"white"}}>
                    Place Order
                    </Text>
                    </TouchableOpacity>

                    </Animatable.View>
            </>
        )
      }

            

    </View>
  )
}

export default ConformationPage

const styles = StyleSheet.create({
    container: {
        padding: 5,
        flex: 1,
        backgroundColor: "white",
    },
      
  heading: {
    flexDirection: 'row',
    // justifyContent:'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  buttons: {
    backgroundColor: '#e9ecef',
    borderRadius: 50,
    width: 40,
    justifyContent: 'center',
    height: 40,
    alignItems: 'center'
  },
})