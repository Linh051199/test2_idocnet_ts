const CARTS_STORAGE_KEY = "CARTS";

export default {
  get() {
    return JSON.parse(localStorage.getItem(CARTS_STORAGE_KEY) || "[]") || [];
  },

  set(cartList: any) {
    localStorage.setItem(CARTS_STORAGE_KEY, JSON.stringify(cartList));
  },
};
