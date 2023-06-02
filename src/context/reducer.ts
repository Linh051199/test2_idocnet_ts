import storage from "../util/storage";

import { ADD_CART, DELETE_CART, UPDATE_CART } from "./constants";
let initState: any = {
  cartList: storage.get(),
};
// console.log("🚀 ~ cartList:", initState.cartList);
// console.log("dataStorage", storage.get());

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case ADD_CART:
      // const newArr = action.payload;

      // state.cartList.filter((cart) => {
      //   if (cart.color === newArr.color) {
      //     cart.number += newArr.number;
      //   }
      // });

      // newArr.filter((arr) => {
      //   if (cart.color === action.payload.color) {
      //     cart.number += action.payload.number;
      //   }
      // });

      // console.log("🚀 ~ newArr:", newArr);
      // console.log("payload: ", action.payload);
      // console.log("cartList: ", state.cartList);

      // const newArrAdd = [...state.cartList];

      // newArrAdd.map((arr) => {
      //   if (arr.color === action.payload.color) {
      //     arr.number += action.payload.number;
      //   }
      //   return arr;
      // });
      // console.log("NewArrAdd: ", newArrAdd);
      // console.log("first");

      // newArrAdd.find((arr) => {
      //   if (arr.color === action.payload.color) {
      //     arr.number += action.payload.number;
      //   }
      // });
      // console.log("prevArr", state.cartList);

      let cartListLocal = storage.get();

      if (cartListLocal.length == 0) {
      } else {
      }

      cartListLocal.push(action.payload);
      storage.set(cartListLocal);

      const newArrAdd = storage.get();
      console.log(newArrAdd);

      return {
        ...state,
        cartList: [...state.cartList, action.payload],
      };

    case DELETE_CART:
      let newArr = [...state.cartList];
      newArr.splice(action.payload, 1);
      storage.set(newArr);
      return {
        ...state,
        cartList: newArr,
      };

    case UPDATE_CART:
      let newArrUpdate = [...state.cartList];

      newArrUpdate.map((arr) => {
        if (arr.name === action.payload.name) {
          arr.number = action.payload.number;
        }
      });
      return {
        ...state,
        cartList: newArrUpdate,
      };
    default:
      throw new Error(`Invalid action ${action.type}`);
  }
};

export { initState };
export default reducer;
