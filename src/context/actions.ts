import { ADD_CART, DELETE_CART, UPDATE_CART } from "./constants";

export const addCart = (payload: any) => ({
  type: ADD_CART,
  payload,
});

export const deleteCart = (payload: any) => ({
  type: DELETE_CART,
  payload,
});

export const updateCart = (payload: any) => ({
  type: UPDATE_CART,
  payload,
});
