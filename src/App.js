import React, {useState} from "react";
import {Provider} from 'react-redux';
import Header from "./Header";
import Number from "./Number";
import Products from "./Products";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Cart from "./Cart";
const initialState = {
  fname: 'Harshit',
  lname: 'Singh'
};
export const GlobalContext = React.createContext();
function App() {
  return (
    <GlobalContext.Provider value={initialState}>
    <Router>
      <Header />
      <Routes>
          <Route path = '/' element={<Products />} exaxt />
          <Route path="/cart" element= {<Cart />} /> 
      </Routes>
    </Router>
    </GlobalContext.Provider>
    
  );
}

export default App;
