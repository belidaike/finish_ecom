import { createContext, useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
};


export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [countCart, setCountCart] = useState(0)

    //filter
    const [search, setSearch] = useState('')
    const filteredProducts = PRODUCTS.filter(item => {
        return (
            item.productName.toLowerCase().includes(search.toLowerCase()) ||
            item.productCategory.toLowerCase().includes(search.toLowerCase())
        )
    })

    const handleChange = e => {
        setSearch(e.target.value)
    }

    //end filter

    //total amount of carts
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount;
    };
    //end total amount of carts

    const addToCart = (itemId, e) => {

        setCartItems((prev) => (
            {
                ...prev,
                [itemId]: prev[itemId] + 1,

            }
        ))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => (
            {
                ...prev,
                [itemId]: prev[itemId] - 1
            }
        ))
    }
    const removeAll = (itemId) => {
        setCartItems((prev) => (
            {
                ...prev,
                [itemId]: prev[itemId] = 0
            }
        ))
    }

    //update cart in input
    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
    };
    //end update cart in input

    const checkout = () => {
        setCartItems(getDefaultCart());
    };

    const contextValue = {
        cartItems,
        addToCart,
        updateCartItemCount,
        removeFromCart,
        getTotalCartAmount,
        checkout,
        removeAll,
        search,
        filteredProducts,
        setSearch,
        handleChange,
        setCountCart,
        countCart,
    };
    // console.log(countCart)
    // console.log(cartItems)
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};