
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
    navigate("/", { state: { category: category } })
  }
  return (
    <footer className="bg-[#00110d] px-6 py-10 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">

        <div>
          <h2 className="text-2xl font-bold text-green-400">
            CraftCrave
          </h2>
          <p className="mt-3 text-sm text-gray-300">
            Eat well. Live better.
          </p>
          <p className="mt-2 text-sm text-gray-400">
            Fresh and delicious meals for your everyday lifestyle.
          </p>
        </div>
        <div>
          <h3 className="mb-3 font-semibold text-green-400">
            Quick Links
          </h3>
          <div className="flex flex-col gap-2 text-sm text-gray-300">
            <Link to="/">Home</Link>
            <Link to="/meals">Dishes</Link>
            <Link to="/about">About Us</Link>
          </div>
        </div>
        <div>
          <h3 className="mb-3 font-semibold text-green-400">
            Our Categories
          </h3>

          <div className="flex flex-col gap-2 text-sm text-gray-300">
            {categories.map((category) => {
              return (
                <button
                  key={category}
                  onClick={() => selectCategory(category)}
                  className="text-left hover:text-green-400"
                >
                  {category}
                </button>
              )
            })}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl border-t border-green-900 pt-5 text-center text-sm text-gray-400">
        © 2026 CraftCrave. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
