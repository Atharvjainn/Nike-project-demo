import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './context/CartContext.jsx'

import { createBrowserRouter, createRoutesFromChildren,Route,RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Cart from './sections/Cart.jsx'
import Signin from './sections/Signin.jsx'
import Login from './sections/Login.jsx'
import Favproducts from './sections/Favproducts.jsx'
import Checkout from './sections/Checkout.jsx'

import LoggedOutScreen from './sections/Loggedoutscreen.jsx'
import ProductPage from './components/ProductPage.jsx'


const router = createBrowserRouter(
    createRoutesFromChildren(
        <Route path="/" element={<Layout/>}>
            <Route path="" element={<App/>}/>
            <Route path="cart" element={<Cart/>}/>
            <Route path="signin" element={<Signin/>}/>
            <Route path="Login" element={<Login/>}/>
            <Route path="loggedout" element={<LoggedOutScreen/>}/>
            <Route path="Favproducts" element={<Favproducts/>}/>
            <Route path="products/:slug" element={<ProductPage/>}/>
            <Route path="orderplaced" element={<Checkout/>}/>
        </Route>  
    ),

)
createRoot(document.getElementById('root')).render(
   
    <CartProvider>
    <RouterProvider router={router} />
    </CartProvider>
    
    
   
  
)
