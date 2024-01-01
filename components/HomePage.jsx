import React from "react"
import { ScrollView, Text, View, useColorScheme } from "react-native"
import Heading from "./Heading";
import SearchBar from "./SearchBar";
import Promotions from "./Promotions";
import ItemsLists from "./ItemsLists";
import Drawer from "./Drawer";

const HomePage=()=>{
  const colorScheme = useColorScheme();
  
  return(
    <View style={{flex:1, backgroundColor:colorScheme=='dark'?"black":"white"}}>
      {/* <Heading /> */}
      <SearchBar />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* promotions */}
        <Promotions />

      {/* lists */}
      <ItemsLists />

      {/* sample products */}
      </ScrollView>
      {/* navbars */}
    </View>
  )
}
export default HomePage;