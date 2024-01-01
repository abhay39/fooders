import React from "react"
import { StatusBar, Text, View, useColorScheme, } from "react-native"

import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";
import Drawer from "./components/Drawer";
import { Provider } from "react-redux";
import store from "./store/Index";

const App=()=>{
  const colorScheme = useColorScheme();

  return(
    <View style={{padding:10,flex:1, backgroundColor:colorScheme=='dark'?"black":"white"}}>
      <Provider store={store}>
        <NavigationContainer>
        <StatusBar backgroundColor={colorScheme=='dark'?"black":"white"} barStyle={colorScheme=='light'?'dark-content':'light-content'}/>
          <StackNavigator />
        </NavigationContainer>
      </Provider>
      
    </View>
  )
}
export default App;