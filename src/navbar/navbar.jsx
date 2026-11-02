
import { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate, useSearchParams } from 'react-router-dom'
import { FiSearch, FiX } from 'react-icons/fi'
import Logo from './nav-left/Logo.jsx'
import Cart from './navright/Cart.jsx'

function Navbar({ cartCount = 0 }) {
  const [user, setUser] = useState(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const searchQuery = searchParams.get("search") || ""

  useEffect(() => {
    const savedUser = localStorage.getItem("user")
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
  }, [])

  function handleLogout() {
    localStorage.removeItem("user")
    localStorage.removeItem("userEmail")
    setUser(null)
    navigate("/login")
  }

  function handleSearch(value) {
    const params = new URLSearchParams(searchParams)
    if (value.trim()) {
      params.set("search", value)
    } else {
      params.delete("search")
    }
    setSearchParams(params, { replace: true })
  }

  const navStyle = ({ isActive }) =>
    `rounded-full px-4 py-2 transition cursor-pointer ${
      isActive
        ? "bg-[#DCFCE7] text-[#166534] font-semibold"
        : "text-[#14532D] hover:bg-[#E8F5E9]"
    }`

  return (
    <header className="border-b border-[#DCFCE7] bg-[#F0FDF4] text-[#14532D] shadow-sm">
      <nav className="mx-auto flex min-h-20 max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-3 lg:flex-nowrap lg:px-8">
        <Link to="/" className="shrink-0 cursor-pointer">
          <Logo />
        </Link>

        <div className="flex items-center gap-2 lg:gap-3">
          <NavLink to="/" end className={navStyle}>Home</NavLink>
          <NavLink to="/meals" className={navStyle}>Dishes</NavLink>
          <NavLink to="/about" className={navStyle}>About</NavLink>
          <NavLink to="/myorders" className={navStyle}>My Orders</NavLink>
        </div>

        <div className="relative order-3 w-full lg:order-none lg:mx-3 lg:w-64 lg:shrink-0">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-lg text-[#166534]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            onFocus={() => {
              if (!["/", "/meals"].includes(window.location.pathname)) {
                navigate("/")
              }
            }}
            placeholder="Search food items..."
            className="w-full rounded-full border border-[#BBF7D0] bg-white py-2.5 pl-10 pr-10 text-sm text-[#14532D] outline-none transition focus:border-[#166534] focus:ring-2 focus:ring-[#DCFCE7]"
          />
          {searchQuery && (
            <button
              onClick={() => handleSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-lg text-gray-500 hover:text-red-600"
            >
              <FiX />
            </button>
          )}
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <Cart count={cartCount} />

          {user ? (
            <>
              <NavLink to="/profile" className={({ isActive }) =>
                `rounded-full border px-4 py-2 transition cursor-pointer ${
                  isActive
                    ? "border-[#86EFAC] bg-[#DCFCE7] text-[#166534]"
                    : "border-[#BBF7D0] text-[#14532D] hover:bg-[#E8F5E9]"
                }`
              }>
                {user.fullname}
              </NavLink>

              <button onClick={handleLogout} className="cursor-pointer rounded-full bg-red-600 px-4 py-2 text-white transition hover:bg-red-700">
                Logout
              </button>
            </>
          ) : (
            <NavLink to="/login" className={({ isActive }) =>
              `rounded-full px-5 py-2 font-semibold transition cursor-pointer ${
                isActive
                  ? "bg-[#166534] text-white"
                  : "bg-[#15803D] text-white hover:bg-[#166534]"
              }`
            }>
              Login
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
