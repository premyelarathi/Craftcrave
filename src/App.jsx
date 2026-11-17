import { useState, useEffect } from "react"
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
  const [notification, setNotification] = useState(null)

  useEffect(() => {
    if (!notification) return

    const timer = setTimeout(() => {
      setNotification(null)
    }, 3000)

    return () => clearTimeout(timer)
  }, [notification])

  const cartCount = cartItems.reduce((total, item) => {
    return total + item.quantity
  }, 0)

  return (
    <div>
      <style>{`
        @keyframes cartToast {
          0% {
            opacity: 0;
            transform: translateY(-12px);
          }
          10% {
            opacity: 1;
            transform: translateY(0);
          }
          80% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-8px);
          }
        }
      `}</style>

      {notification && (
        <div
          key={notification.id}
          className="fixed right-5 top-20 z-[100] flex items-center gap-2 rounded-xl bg-[#14532D] px-5 py-3 text-sm font-semibold text-white shadow-lg"
          style={{ animation: "cartToast 3s ease-in-out forwards" }}
        >
          <span className="text-lg text-green-300">✓</span>
          {notification.message}
        </div>
      )}

      {pathname !== "/login" &&
       pathname !== "/admin" &&
       <Navbar cartCount={cartCount} />}

      <Routes>
        <Route path="/" element={<Home cartItems={cartItems} setCartItems={setCartItems} setNotification={setNotification} />} />
        <Route path="/meals" element={<Meals cartItems={cartItems} setCartItems={setCartItems} setNotification={setNotification} />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/myorders" element={<MyOrders />} />
        <Route path="/aorders" element={<AdminOrders />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/track-order/:id" element={<TrackOrder />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/Checkout" element={<Checkout cartItems={cartItems} setCartItems={setCartItems} />} />
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