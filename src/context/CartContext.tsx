import { createContext, useReducer } from "react";
import reducer, { initState } from "./reducer";

// import { initState } from "./cart";

type CartContextProviderProps = {
  children: React.ReactNode;
};

export const CartContext = createContext(initState);

export const CartContextProviderProps = ({
  children,
}: CartContextProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <CartContext.Provider value={[state, dispatch]}>
      {children}
    </CartContext.Provider>
  );
};
