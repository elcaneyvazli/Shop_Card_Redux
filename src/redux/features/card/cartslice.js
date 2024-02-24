import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    cards: [],
    items: [
        {
            id: 1,
            label: "Main Meals",
            value: "mainmeals",
            img: "https://images.unsplash.com/photo-1520218508822-998633d997e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
            price: 95,
            description:
                "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
        },
        {
            id: 2,
            label: "Main Meals",
            value: "mainmeals",
            img: "https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80",
            price: 95,
            description:
                "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
        },
        {
            id: 3,
            label: "Main Meals",
            value: "mainmeals",
            img: "https://images.unsplash.com/photo-1601823281975-75d81b28c373?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
            price: 95,
            description:
                "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
        },
        {
            id: 4,
            label: "Main Meals",
            value: "mainmeals",
            img: "https://images.unsplash.com/photo-1559847844-1ff4d5bcd3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80",
            price: 95,
            description:
                "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
        },
        {
            id: 5,
            label: "Main Meals",
            value: "mainmeals",
            img: "https://images.unsplash.com/photo-1557499305-0af888c3d8ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            price: 95,
            description:
                "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
        },
        {
            id: 6,
            label: "Main Meals",
            value: "mainmeals",
            img: "https://images.unsplash.com/photo-1582391123232-6130296f1fcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            price: 95,
            description:
                "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
        },
        {
            id: 7,
            label: "Appetizers",
            value: "appetizers",
            img: "https://images.unsplash.com/photo-1577906096429-f73c2c312435?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            price: 95,
            description:
                "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
        },
        {
            id: 8,
            label: "Appetizers",
            value: "appetizers",
            img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            price: 95,
            description:
                "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
        },
        {
            id: 9,
            label: "Appetizers",
            value: "appetizers",
            img: "https://images.unsplash.com/photo-1527751171053-6ac5ec50000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            price: 95,
            description:
                "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
        },
        {
            id: 10,
            label: "Appetizers",
            value: "appetizers",
            img: "https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80",
            price: 95,
            description:
                "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
        },
    ],

    totalQuantity: 0,
    totalPrice: 0,
    changed: false,

}
export const cardSlice = createSlice({
    name: "card",
    initialState: initialState,
    reducers: {
        addToCard: (state, action) => {
            const newItem = action.payload
            const existingItem = state.cards.find(item => item.id === newItem.id);
            state.totalQuantity++;
            if (!existingItem) {
                state.cards.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    description: newItem.description,
                    img: newItem.image,
                    totalPrice: newItem.price,
                    name: newItem.name,
                });
            }
            else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        increment: (state, action) => {
            const id = action.payload;
            const existingItem = state.cards.find(item => item.id === id);
            state.totalQuantity++;
            existingItem.quantity++;
            existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
        },
        decrement: (state, action) => {
            const id = action.payload;
            const existingItem = state.cards.find(item => item.id === id);
            state.totalQuantity--;
            existingItem.quantity--;
            existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            if (existingItem.quantity === 0) {
                state.cards = state.cards.filter(item => item.id !== id);
            }
        },
        remove: (state, action) => {
            const id = action.payload;
            const existingItem = state.cards.find(item => item.id === id);
            state.totalQuantity = state.totalQuantity - existingItem.quantity;
            state.cards = state.cards.filter(item => item.id !== id);
        },
        complete: (state) => {
            state.cards = [];
            state.totalQuantity = 0;
        }
    }
});

export const { addToCard, increment, decrement, remove, complete } = cardSlice.actions;


export default cardSlice.reducer;