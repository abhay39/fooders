import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./components/HomePage";
import SelectedProduct from "./components/SelectedProduct";
import Drawer from "./components/Drawer";
import MainPage from "./components/MainPage";
import Carts from "./components/Carts";
const Stack=createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown:false
    }}>
        <Stack.Screen name="Main" component={MainPage} />
        <Stack.Screen name="selected" component={SelectedProduct} />
        <Stack.Screen name="cart" component={Carts} />
    </Stack.Navigator>
  )
}

export default StackNavigator
