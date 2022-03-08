import { ADDED_ITEMS, ADD_TO_CART } from "./actionTypes"


const init = {cart:[], counter:0}
export const reducer = (state = init, {type,payload})=>{
console.log(state.cart)
switch(type){
    case ADD_TO_CART:
        return{
        ...state,
        cart:[...state.cart,payload]
    };
    case ADDED_ITEMS:
        return{
            ...state
        }
default: return state
}}