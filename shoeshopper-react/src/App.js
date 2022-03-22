import React from "react";
import { Header, Footer } from "components";
import { Cart, Landingpage, Login, Products, Signup, Wishlist } from "./pages/index.js";
import { Route, Routes } from "react-router-dom";

const App = () => {
 return  (
   <>
    <Header/>     
      <Routes>
         <Route path="/" element={<Landingpage/>} />
         <Route path="/Products" element={<Products/>} />  
         <Route path="/Login" element={<Login/>} />  
         <Route path="/Signup" element={<Signup/>} />  
         <Route path="/Signup" element={<Signup/>} />  
         <Route path="/Wishlist" element={<Wishlist/>} />  
         <Route path="/Cart" element={<Cart/>} />  
      </Routes>
      <Footer/>
   </>
 );
}
export default App;