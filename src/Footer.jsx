
import logo from "./assets/Images/logo.png"
import { Link, useNavigate } from "react-router-dom"

function Footer() {
  const navigate = useNavigate()

  const categories = [
    "Protein-Rich",
    "Everyday",
    "Biryani & Rice Bowls",
    "Salads & Light",
    "Breakfast",
    "Smoothies & Drinks"
  ]

  function selectCategory(category) {
    navigate("/", { state: { category } })
    window.scrollTo(0, 0)
  }

  return (
    <footer className="bg-[#00110d] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">

        <div>
          <img
            src={logo}
            alt="CraftCrave Logo"
            className="h-16 w-auto object-contain"
          />
          <p className="mt-4 text-sm font-medium text-green-300">
            Eat Well. Live Better.
          </p>
          <p className="mt-3 max-w-xs text-sm leading-6 text-gray-400">
            Fresh, delicious and nutritious meals made for your everyday lifestyle.
            Enjoy good food and make every meal count.
          </p>
        </div>

        <div>
          <h3 className="mb-5 text-lg font-bold text-green-400">
            Quick Links
          </h3>
          <div className="flex flex-col gap-3 text-sm text-gray-300">
            <Link to="/" className="transition hover:translate-x-1 hover:text-green-400 cursor-pointer">
              Home
            </Link>
            <Link to="/meals" className="transition hover:translate-x-1 hover:text-green-400 cursor-pointer">
              Our Dishes
            </Link>
            <Link to="/about" className="transition hover:translate-x-1 hover:text-green-400 cursor-pointer">
              About Us
            </Link>
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-lg font-bold text-green-400">
            Explore Categories
          </h3>
          <div className="flex flex-col items-start gap-3 text-sm text-gray-300">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => selectCategory(category)}
                className="transition hover:translate-x-1 hover:text-green-400 cursor-pointer"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-lg font-bold text-green-400">
            Get In Touch
          </h3>
          <div className="space-y-4 text-sm text-gray-300">
            <p className="flex items-center gap-3">
              <span className="text-green-400">✉</span>
              Fresh food, happy life.
            </p>
            <p className="flex items-center gap-3">
              <span className="text-green-400">✓</span>
              Freshly prepared meals
            </p>
            <p className="flex items-center gap-3">
              <span className="text-green-400">♥</span>
              Made with care for you
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-green-900">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-center text-xs text-gray-400 sm:flex-row">
          <p>© 2026 CraftCrave. All rights reserved.</p>
          <p>Good Food. Good Mood. Better Living.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
