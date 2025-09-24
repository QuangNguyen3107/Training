import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './App/components/Navbar'
import MainHero from './App/components/Mainhero'
function App() {
  return (
    <div className="bg-linear-145 from-[#006666] via-[#006666]/80 to-green-100 min-h-screen">
      <Navbar />
      <MainHero />
    </div>
  )
}

export default App
