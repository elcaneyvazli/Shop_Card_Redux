import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./features/counter/counterslice";
import { cardSlice } from "./features/card/cartslice";

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        card: cardSlice.reducer,
    },
})
