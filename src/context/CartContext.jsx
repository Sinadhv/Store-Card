import { Children } from "react";
import { useReducer } from "react";
import { createContext } from "react";


const cartContext = createContext();
const initialState = {};
const reducer = () => {};

function CartProvider({Children}) {

 const [state , dispatch] = useReducer(reducer , initialState);
  return (
    <cartContext.Provider value={state}>
     {Children}
    </cartContext.Provider>
  )
}

export default CartProvider;
