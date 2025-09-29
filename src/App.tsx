import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Navbar, Home, About, Products, Consulting} from './presentation'
import { ROUTES } from './shared'
function App() {
  return (
    <BrowserRouter>
      <div className="bg-linear-145 from-[#006666] via-[#006666]/80 to-green-100 min-h-screen">
        <Navbar />
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.PRODUCTS} element={<Products />} />
          <Route path={ROUTES.BLOG} element={<div>Blog Page</div>} />
          <Route path={ROUTES.CAREERS} element={<div>Careers Page</div>} />
          <Route path={ROUTES.SERVICES.CONSULTING} element={<Consulting />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
