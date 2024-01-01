import { configureStore, createSlice } from "@reduxjs/toolkit";

const TotalProducts=createSlice({
    name:"products",
    initialState:[],
    reducers:{
        addProduct:(state,action)=>{
            state.push(action.payload)
        },
        
    }
})

const Cart=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            const existingItem = state.find((item) => item.item.id === action.payload.item.id);

            if (existingItem) {
              // Item already exists in the cart, update the quantity
              existingItem.qty++;
            } else {
              // Item does not exist in the cart, add it
              state.push(action.payload);
            }
      
        },
        increaseItemCount:(state,action)=>{

            const selectedItem = state.find((item) => item.item.id == action.payload.id);
            // console.log(selectedItem)
            if (selectedItem) {
                selectedItem.qty++;
                selectedItem.totalPrice += selectedItem.item.price * 1;
                return state;
            }
              
        },
        decreaseItemCount:(state,action)=>{
            const selectedItem = state.find((item) => item.item.id == action.payload.id);
            if (selectedItem) {
                selectedItem.qty--;
                selectedItem.totalPrice -= selectedItem.item.price * 1;
                return state;
            } 
            // console.log(state);
        },
        clearCart:(state)=>{
            state=[];
            return state;
        }
        
    }
})

export const allProducts=TotalProducts.actions

export const cartItems=Cart.actions

const store=configureStore({
    reducer:{
        products:TotalProducts.reducer,
        cart:Cart.reducer
    }
})

export default store