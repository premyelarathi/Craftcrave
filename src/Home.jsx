
import { useState, useEffect } from "react"
import { useLocation, useSearchParams } from "react-router-dom"
import { foodItems } from "./Meals"
import banner from "./assets/Images/banner.jpeg"
import Categories from "./Categories"
import Footer from "./Footer"

function Home({ cartItems, setCartItems }) {
  const [activeCategory, setActiveCategory] = useState("")
  const [selectedItem, setSelectedItem] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const location = useLocation()
  const [searchParams] = useSearchParams()
  const searchQuery = searchParams.get("search")?.toLowerCase().trim() || ""

  const restaurantNames = {
    "Protein-Rich": "Fit Kitchen",
    "Everyday": "Daily Meals",
    "Biryani & Rice Bowls": "Spice Hub",
    "Salads & Light": "Green Bowl",
    "Breakfast": "Morning Kitchen",
    "Smoothies & Drinks": "Fresh Sip"
  }

  useEffect(() => {
    if (location.state && location.state.category) {
      setActiveCategory(location.state.category)
      document.getElementById("meals")?.scrollIntoView({ behavior: "smooth" })
    }
  }, [location.state])

  const recommendedItems = [
    foodItems[0],
    foodItems[1],
    foodItems[2],
    foodItems[6],
    foodItems[9],
    foodItems[11],
    foodItems[15],
    foodItems[18],
    foodItems[23],
    foodItems[33],
    foodItems[41],
    foodItems[44]
  ]

  const displayItems = activeCategory === "" && !searchQuery
    ? recommendedItems
    : foodItems

  const filteredItems = displayItems.filter(item => {
    const matchesCategory = activeCategory === "" || item[4].includes(activeCategory)
    const matchesSearch =
      item[1].toLowerCase().includes(searchQuery) ||
      restaurantNames[item[4][0]].toLowerCase().includes(searchQuery) ||
      item[4].some(category => category.toLowerCase().includes(searchQuery))
    return matchesCategory && matchesSearch
  })

  function openDetails(item) {
    setSelectedItem(item)
    setQuantity(1)
  }

  function addToCart() {
    const newItem = {
      id: selectedItem[0],
      name: selectedItem[1],
      price: selectedItem[2],
      image: selectedItem[3],
      calories: selectedItem[6],
      quantity: quantity,
      restaurant: restaurantNames[selectedItem[4][0]]
    }

    const exists = cartItems.find(item => item.id === newItem.id)

    if (exists) {
      setCartItems(cartItems.map(item =>
        item.id === newItem.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ))
    } else {
      setCartItems([...cartItems, newItem])
    }

    setSelectedItem(null)
    setQuantity(1)
  }

  return (
    <div className="min-h-screen bg-white">
      {!searchQuery && (
        <section className="w-full">
          <img src={banner} alt="CraftCrave Healthy Meals" className="block h-auto w-full" />
        </section>
      )}

      {!searchQuery && (
        <Categories
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      )}

      <section id="meals" className="px-5 py-10 md:px-10 md:py-12">
        <div className="mb-8 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-[#166534]">
            Fresh food, fitness first
          </p>
          <h2 className="text-3xl font-bold text-[#14532D]">
            {searchQuery
              ? "Search Results"
              : activeCategory === ""
                ? "Recommended for You"
                : activeCategory}
          </h2>
          <p className="mt-3 text-sm text-[#365C43]">
            {searchQuery
              ? `Results for "${searchQuery}"`
              : activeCategory === ""
                ? "12 delicious meals selected from all categories."
                : "Delicious meals selected for you."}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredItems.map(item => (
            <div key={item[0]} className="overflow-hidden rounded-xl border border-[#DCFCE7] bg-white shadow-md transition hover:-translate-y-1 hover:shadow-lg">
              <div className="relative">
                <img src={item[3]} alt={item[1]} className="h-48 w-full object-cover" />
                <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-md ${item[5] === "veg" ? "bg-green-600" : "bg-red-600"}`}>
                  {item[5] === "veg" ? "Veg" : "Non-Veg"}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-[#14532D]">{item[1]}</h3>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-lg font-bold text-[#166534]">₹{item[2]}</p>
                  <button onClick={() => openDetails(item)} className="cursor-pointer rounded-lg bg-[#166534] px-4 py-2 text-sm text-white transition hover:bg-[#14532D]">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <p className="py-10 text-center text-lg font-semibold text-[#166534]">
            No food items found.
          </p>
        )}
      </section>

      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/60 p-4">
          <div className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-green-800">Food Details</h2>
              <button onClick={() => setSelectedItem(null)} className="cursor-pointer text-2xl font-bold text-red-600">
                ×
              </button>
            </div>
            <img src={selectedItem[3]} alt={selectedItem[1]} className="mt-4 h-48 w-full rounded-xl object-cover" />
            <h3 className="mt-4 text-lg font-bold text-green-900">{selectedItem[1]}</h3>
            <p className="mt-1 text-sm text-gray-600">
              Restaurant: {restaurantNames[selectedItem[4][0]]}
            </p>
            <div className="mt-5 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Price per serving</span>
                <span className="font-semibold text-gray-800">₹{selectedItem[2]}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Calories per serving</span>
                <span className="font-semibold text-gray-800">{selectedItem[6]} kcal</span>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="font-bold text-[#14532D]">Quantity</p>
              <div className="flex items-center gap-3">
                <button disabled={quantity === 1} onClick={() => setQuantity(quantity - 1)} className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-lg bg-[#DCFCE7] text-xl font-bold text-[#14532D] hover:bg-[#BBF7D0] disabled:cursor-not-allowed disabled:opacity-40">
                  -
                </button>
                <span className="min-w-8 text-center text-lg font-bold text-[#14532D]">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-lg bg-[#DCFCE7] text-xl font-bold text-[#14532D] hover:bg-[#BBF7D0]">
                  +
                </button>
              </div>
            </div>
            <div className="mt-5 space-y-3 rounded-xl bg-green-50 p-4">
              <div className="flex justify-between">
                <span className="text-gray-700">Total Price</span>
                <span className="font-bold text-green-800">₹{selectedItem[2] * quantity}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Total Calories</span>
                <span className="font-bold text-green-800">{selectedItem[6] * quantity} kcal</span>
              </div>
            </div>
            <button onClick={addToCart} className="mt-5 w-full cursor-pointer rounded-lg bg-green-700 py-3 font-semibold text-white transition hover:bg-green-800">
              Add to Cart
            </button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  )
}

export default Home
