
import { useState } from "react"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import Navbar from "./navbar/navbar"
import Home from "./Home"
import Meals from "./Meals"
import About from "./About"
import Login from "./navbar/navright/Login"
import CartPage from "./CartPage"
import Checkout from "./Checkout"
import MyOrders from "./MyOrders"
import AdminOrders from "./AdminOrder"
import AdminLogin from "./AdminLogin"
import Profile from "./Profile"
import TrackOrder from "./TrackOrder"

function AppContent() {
  const { pathname } = useLocation()
  const [cartItems, setCartItems] = useState([])

  const cartCount = cartItems.reduce((total, item) => {
    return total + item.quantity
  }, 0)

  return (
    <div>
      {pathname !== "/login" &&
       pathname !== "/adminlogin" &&
       <Navbar cartCount={cartCount} />}

      <Routes>
        <Route
          path="/"
          element={
            <Home
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        />

        <Route
          path="/meals"
          element={
            <Meals
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/myorders" element={<MyOrders />} />
        <Route path="/adminorders" element={<AdminOrders />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/track-order/:id" element={<TrackOrder />} />

        <Route
          path="/cart"
          element={
            <CartPage
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        />

        <Route
          path="/Checkout"
          element={
            <Checkout
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        />
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
