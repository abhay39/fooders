import { Image, StyleSheet, Text, TouchableOpacity, View, useColorScheme } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Carts from "./Carts";
import Profile from "./Profile";
import { useNavigation } from "@react-navigation/native";



const Heading=()=>{
    const colorScheme = useColorScheme();
    const navigation=useNavigation();

    return(
        <>
        <View style={[style.container,{

        }]}>
            <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <Image style={style.images} source={require("./images/user.jpg")} alt="user" height={50} width={50}/>
                <Icon name="location-outline" style={{marginLeft:10}} color={colorScheme==='dark'?"black":"black"} size={25} />
                <Text style={{fontSize:20,fontWeight:'300',color:colorScheme==='dark'?"black":"black"}}>Jeetpur,Bara</Text>
            </View>
            <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <TouchableOpacity style={style.buttons}>
                    <Icon name="notifications-outline" color="black"  size={25} />
                </TouchableOpacity>
                
            </View>
        </View>
        
      </>
    )
}

export default Heading;

const style=StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:"center",
        width:'100%'
    },
    images:{
        height:50,
        width:50,
        resizeMode:'center',
        objectFit:'cover',
        borderRadius:50
    },
    buttons:{
        padding:5,
        marginLeft:20,
        backgroundColor:'#e9ecef',
        borderRadius:50,
        width:40,
        height:40,
        alignItems:'center'
    }
})