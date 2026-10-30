
import { Link } from 'react-router-dom'
import Logo from './nav-left/Logo.jsx'
import Cart from './navright/Cart.jsx'
function Navbar({ cartCount = 0 }) {
  return (
    <header className="border-b border-white/10 bg-[#00110d] text-white shadow-lg">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
        <Link to="/">
          <Logo />
        </Link>
        <div className="flex items-center gap-8">
          <Link to="/" className="hover:text-green-400">
            Home
          </Link>
          <Link to="/meals" className="hover:text-green-400">
            Dishes
          </Link>
          <Link to="/about" className="hover:text-green-400">
            About
          </Link>
        </div>
        <div className="flex items-center gap-5">
          <Cart count={cartCount} />

          <Link
            to="/login"
            className="rounded-lg bg-green-600 px-5 py-2 hover:bg-green-700"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  )
}
export default Navbar