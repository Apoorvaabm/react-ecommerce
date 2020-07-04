import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import { productList, productDetails, productSave, productDelete } from './reducers/products';
import { cart } from './reducers/cart'
import { userSignin, userRegister, userUpdate } from './reducers/users';
import { orderCreate, orderDetails, orderPay, myOrderList, orderList, orderDelete } from './reducers/orders';

const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("userInfo") || null;

const initialState = { cart: { cartItems, shipping: {}, payment: {} }, userSignin: { userInfo } };
const reducer = combineReducers({
  productList: productList,
  productDetails: productDetails,
  cart: cart,
  userSignin: userSignin,
  userRegister: userRegister,
  productSave: productSave,
  productDelete: productDelete,
  orderCreate: orderCreate,
  orderDetails: orderDetails,
  orderPay: orderPay,
  userUpdate: userUpdate,
  myOrderList: myOrderList,
  orderList: orderList,
  orderDelete: orderDelete

})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;