import { createSlice} from "@reduxjs/toolkit";
import bookData from "./bookData";

const initialState ={
    user: bookData,
    price: [0],
    priceDetails: [],
    codDetails:[],
    cardDetails:[],
    priceRemoved:0
}

const bookShop = createSlice({
    name: "book",
    initialState,
    reducers:{
        addPrice:(state,action)=>{
            state.price.push(Number(action.payload))
        },
        addPriceDetails:(state,{payload})=>{
            state.priceDetails.push(...payload)
        },
        addTotalPrice:(state,action)=>{
            state.totalPrice = action.payload
        },
        removeCartItemPrice:(state,action)=>{
            state.priceRemoved = action.payload
        },
        addCODetails:(state,action)=>{
            state.codDetails = action.payload
        },
        addCarDetails:(state,action)=>{
            state.cardDetails = action.payload
        },
        removeCartItems:(state,action)=>{
            const updateCartItems =  state.priceDetails.filter((item)=> item.cartId !== action.payload)
            state.priceDetails = updateCartItems
        },
        deleteAllCartItems:(state)=>{
            state.totalPrice = 0
        },
    }
})

export default bookShop
export const {addPrice,addPriceDetails,addTotalPrice,removeCartItemPrice,deleteAllCartItems,addCODetails, addCarDetails,removeCartItems} = bookShop.actions