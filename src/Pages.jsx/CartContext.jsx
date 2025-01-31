import { createContext, useReducer } from 'react'


let CartContext=createContext()
let CartReducer=(state, action)=>{
    switch(action.type)
    {
        case 'addtocart': return{ ...state, cartItems:[...state.cartItems,action.payload]}
        case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter((cartItems) => cartItems.id !== action.payload),
      };
       
    }
}
export const CartProvider=({children})=>{
    const [state, dispatch]=useReducer(CartReducer, {cartItems: []});

    return(
    <CartContext.Provider value={{state, dispatch}}>
        {children}
    </CartContext.Provider>
    );
}

export default CartContext