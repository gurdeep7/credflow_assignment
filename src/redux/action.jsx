import { ADDED_ITEMS, ADD_TO_CART } from "./actionTypes"



export const addtoCart = (data)=>({
    type:ADD_TO_CART,
    payload:data
})

export const cartItems = ()=>({
    type:ADDED_ITEMS
})