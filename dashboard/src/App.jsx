import { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom';

import Header from './components/Header.jsx'
import Navbar from './components/Navbar.jsx';
import Home from './pages/home/Home.jsx';
import Products from './pages/products/Products';
import Users from './pages/users/Users'


function App() {


  return (
    <>
    <Header />
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<Users />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Products />} />
      </Routes>
  
    </>
  )
}

export default App
