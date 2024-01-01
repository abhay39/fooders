import { StyleSheet, Text, TextInput, View, useColorScheme } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

const SearchBar = () => {
    const colorScheme=useColorScheme();

  return (
    <View style={styles.container}>
        <Icon name="search-outline" style={{marginLeft:10}} color="black"  size={25} />
        <TextInput placeholder='Search' placeholderTextColor={"black"}  style={styles.inputBox}/>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        marginTop:20,
        backgroundColor:'#e9ecef',
        alignItems:'center',
        borderRadius:20,
        marginBottom:20
    },
    inputBox:{
        marginLeft:10,
        color:'black',
        fontSize:18,
        fontWeight:'500'
    }
})