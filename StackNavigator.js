import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./components/HomePage";
import SelectedProduct from "./components/SelectedProduct";
import Drawer from "./components/Drawer";
import MainPage from "./components/MainPage";
import Carts from "./components/Carts";
import ConformationPage from "./components/ConformationPage";
import OrderConfirm from "./components/OrderConfirm";
const Stack=createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown:false
    }}>
        <Stack.Screen name="Main" component={MainPage} />
        <Stack.Screen name="selected" component={SelectedProduct} />
        <Stack.Screen name="cart" component={Carts} />
        <Stack.Screen name="confirm" component={ConformationPage} />
        <Stack.Screen name="orderDone" component={OrderConfirm} />
    </Stack.Navigator>
  )
}

export default StackNavigator
