import { configureStore } from "@reduxjs/toolkit";
import bookShop from "./bookShop";

const store = configureStore({
    reducer:{
        book: bookShop.reducer
    }
})

export default store