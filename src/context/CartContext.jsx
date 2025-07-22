import React, { useContext, useState,useEffect } from 'react'
import { createContext } from 'react'
import { products } from '../constants';

const CartContext = createContext();

export const CartProvider = ({children}) => {

    const initialise = () => {
        const stored = localStorage.getItem('items');
        if(stored) {
            return JSON.parse(stored);
        }
        let cart = {};
        for(let i=1;i<products.length + 1;i++){
            cart[i] = 0;
        }
        return cart;
    }
    const initialisefav = () => {
        const stored = localStorage.getItem('favitems');
        if(stored) {
            return JSON.parse(stored);
        }
        let cart = {};
        for(let i=1;i<products.length + 1;i++){
            cart[i] = 0;
        }
        return cart;
    }

    

    const [numberofitems,setNumberofitems] = useState(initialise());
    const [favitems,setFavitems] = useState(initialisefav());

    

    useEffect(() => {
    localStorage.setItem("items", JSON.stringify(numberofitems));
}, [numberofitems]);

    useEffect(() => {
        localStorage.setItem('favitems',JSON.stringify(favitems));
    },[favitems])

    
   const favitemshandle = (itemid) => {
        setFavitems((prev) => ({...prev,[itemid] : prev[itemid] === 1 ? 0:1  }))
   }

    const additems = (itemid) => {
         setNumberofitems((prev) => ({...prev , [itemid] : prev[itemid] + 1}))
    }

    const removeitems = (itemid) => {
       setNumberofitems((prev) => ({...prev , [itemid] : prev[itemid] > 0 ? prev[itemid] - 1 : 0}))  
       //remove items 
    }

    const totalprice = products.reduce((sum,product) => {
        const quantity = numberofitems[product.id];
        return sum + quantity*product.price
},0);

    const cartindicator = products.reduce((sum,product) => {
        return sum + numberofitems[product.id];
    },0)

    const favindicator = products.reduce((sum,product) => {
        return sum + favitems[product.id];
    },0)



    const data = {
        numberofitems,additems,removeitems,totalprice,setNumberofitems,cartindicator,favitemshandle,favitems,favindicator
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

//custom hook
export const useCart = () => useContext(CartContext);

export default CartContext