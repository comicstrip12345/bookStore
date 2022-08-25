import { createSlice} from "@reduxjs/toolkit";
import bookData from "./bookData";

const initialState ={
    user: bookData,
    price: [0],
    priceDetails: [],
    codDetails:[]
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
        addCODetails:(state,action)=>{
            state.codDetails = action.payload
        },
        deleteCartItems:(state)=>{
            state.totalPrice = 0
        },
    }
})

export default bookShop
export const {addPrice,addPriceDetails,addTotalPrice,deleteCartItems,addCODetails} = bookShop.actions