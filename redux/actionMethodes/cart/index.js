import { types } from '../types';
export const addItemToCart = (payload) => {
   return { type: types.addtoCart, payload: payload };
};
export const removeItemFromCart = (payload) => {
  return { type: types.removeFromCart, payload:payload };
};
export const addItemToWishlist = (payload) => {
  return { type: types.addtowishlist, payload: payload };
};
export const removeItemFromWishlist = (payload) => {
 return { type: types.removeFromwishlist, payload:payload };
};
export const reduceQuantity = (payload) => {
  return { type: types.reduceQuantity, payload: payload };
};
export const increaseQuantity = (payload) => {
  return { type: types.increaseQuantity, payload: payload };
};
export const addCoupon = (payload) => {
  return { type: types.addCoupon, payload: payload };
};
export const removeCoupon = (payload) => {
  return { type: types.removeCoupon, payload: payload };
};
export const emptyCart = ( ) => {
  return { type: types.emptyCart, payload: undefined };
};