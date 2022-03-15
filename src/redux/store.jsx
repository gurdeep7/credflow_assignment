import {combineReducers, createStore} from "redux"
import { reducer } from "./reducer"
const rootReducer = combineReducers({cartState:reducer})


export const store = createStore(rootReducer)

console.log("entire State", store.getState())