
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import Navbar from "./navbar/navbar"
import Home from "./Home"
import Meals from "./Meals"
import About from "./About"
import Login from "./navbar/navright/Login"

function AppContent() {
  const { pathname } = useLocation()

  return (
    <div>
      {pathname !== "/login" && <Navbar />}{/*Login page lo Navbar kanipinchakunda undataniki use chestham*/}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meals" element={<Meals />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
