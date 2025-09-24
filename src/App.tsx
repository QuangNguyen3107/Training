import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './App/components/Navbar'
import Home from './pages/home'
function App() {
  return (
    <div className="bg-linear-145 from-[#006666] via-[#006666]/80 to-green-100 min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/pages/home" element={<Home />} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/products" element={<div>Products Page</div>} />
        <Route path="/blog" element={<div>Blog Page</div>} />
        <Route path="/careers" element={<div>Careers Page</div>} />
      </Routes>
    </div>
  )
}

export default App
