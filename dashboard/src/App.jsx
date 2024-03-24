import { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import './App.css'

import Header from './components/Header.jsx'
import Navbar from './components/navbar/Navbar.jsx';
import Status from './pages/status/Status.jsx';
import Products from './pages/products/Products';
import Users from './pages/users/Users'


function App() {


  return (
    <>
    <Header />
    <Navbar />
      <Routes>
        <Route path="/" element={<Status />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<Users />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Products />} />
      </Routes>
  
    </>
  )
}

export default App
