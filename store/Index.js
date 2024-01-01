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
            state.push(action.payload)
            console.log(action.payload)
        },
        increaseItemCount:(state,action)=>{
            state[action.payload].count++
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