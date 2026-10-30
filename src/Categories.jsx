
import { Link } from "react-router-dom"

function Categories({ activeCategory, onCategoryChange }) {
  const categories = [
    "Protein-Rich",
    "Everyday",
    "Biryani & Rice Bowls",
    "Salads & Light",
    "Breakfast",
    "Smoothies & Drinks"
  ]

  return (
    <section className="w-full bg-white px-6 py-8 text-emerald-950">
      <div className="mx-auto max-w-7xl">

        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-[#14532D]">
              Categories
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Find meals for your daily needs
            </p>
          </div>

          <Link
            to="/meals"
            className="font-semibold text-[#166534] transition hover:text-[#14532D]"
          >
            View All
          </Link>
        </div>

        <div className="flex flex-wrap gap-3">
          {categories.map((category) => {
            let color = "border-emerald-200 bg-emerald-50 text-emerald-900 hover:border-teal-600 hover:bg-teal-700 hover:text-white"

            if (activeCategory === category) {
              color = "border-[#166534] bg-[#166534] text-white"
            }

            return (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`rounded-full border px-5 py-3 text-sm font-medium transition ${color}`}
              >
                {category}
              </button>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Categories
