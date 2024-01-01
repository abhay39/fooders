
import Carts from './Carts';
import Heading from './Heading';
import HomePage from './HomePage';
import Profile from './Profile';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SelectedProduct from './SelectedProduct';

const DrawerNav = createDrawerNavigator();


const Drawer = () => {
  return (
    <DrawerNav.Navigator >
        <DrawerNav.Screen name="Home" component={HomePage} options={{
          headerTitle:"",
          headerRight:(()=>{
            return(
              <Heading />
            )
          })
        }}/>
        <DrawerNav.Screen name="Cart" component={Carts} options={{
        headerShown:false,
        }}/>
        {/* <DrawerNav.Screen name="selected" component={SelectedProduct} /> */}
    </DrawerNav.Navigator>
  )
}

export default Drawer

