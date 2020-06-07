import {createStore , combineReducers, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {productListReducer , productDetailsReducer, productSaveReducer, productDeleteReducer} from "./reducer/productReducer";
import {cartReducer} from "./reducer/cartReducer"
import Cookie from "js-cookie";
import { userSigninReducer, userRegisterReducer } from "./reducer/userReducers";

const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("userInfo") || null;
const initialState = {cart: {cartItems , shipping: {} , payment: {}} , userSignin:{userInfo }};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    productSave: productSaveReducer,
    productDelete: productDeleteReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer , initialState , composeEnhancer(applyMiddleware(thunk)));

export default store;