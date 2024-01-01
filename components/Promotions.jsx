import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Promotions = () => {
  return (
    <View>
      <Image source={{uri:'https://mooyah-cdn.preproduction.io/globals/MOOYAH-2023-Holiday-Gift-Card-Promotion-News-Post.jpg?mtime=20231113150203&focal=none'}} style={styles.prImages}/>
    </View>
  )
}

export default Promotions

const styles = StyleSheet.create({
    prImages:{
        height:270,
        width:'100%',
        resizeMode:'center',
        borderRadius:30
    }
})