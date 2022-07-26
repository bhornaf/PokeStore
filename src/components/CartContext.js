import React, { createContext, useState } from "react";

export const context = createContext();
const Provider = context.Provider;

export const CartContext = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(0);

    const addItem = (item, quantiy) => {
        const newCart = [...cart];
        const newItem = { ...item, quantity: quantiy };
        const index = newCart.findIndex((i) => i.id === item.id);
        if (index >= 0) {
            newCart[index].quantity += quantiy;
        } else {
            newCart.push(newItem);
        }
        setCart(newCart);
        setCount(count + quantiy);
        setTotal(total + item.id * quantiy);
    };

    const removeItem = (itemId) => {
        const newCart = cart.filter((item) => item.id !== itemId);
        setCart(newCart);
        setCount(count - 1);
    };

    const clearCart = () => {
        setCart([]);
        setCount(0);
        setTotal(0);
    };

    const isInCart = (itemId) => {
        return cart.findIndex((item) => item.id === itemId) >= 0;
    };

    const valueProvider = {
        cart: cart,
        count: count,
        total: total,
        addItem: addItem,
        removeItem: removeItem,
        clearCart: clearCart,
        isInCart: isInCart,
    };
    return <Provider value={valueProvider}>{children}</Provider>;
};
