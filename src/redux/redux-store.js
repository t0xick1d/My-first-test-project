import { combineReducers, createStore } from "redux";
import comentReducer from './comentReducer'
import itemReducer from './itemReducer'


let reducer = combineReducers({
    coment: comentReducer,
    item: itemReducer,


});

let store = createStore(reducer);


export default store;