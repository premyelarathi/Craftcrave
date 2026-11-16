
import { useState, useEffect } from "react"
import { useLocation, useSearchParams } from "react-router-dom"
import { foodItems, nutritionInfo, customizationOptions } from "./Meals"
import banner from "./assets/Images/banner.jpeg"
import Categories from "./Categories"
import Footer from "./Footer"

function Home({ cartItems, setCartItems }) {
  const [activeCategory, setActiveCategory] = useState("")
  const [selectedItem, setSelectedItem] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [selectedAddons, setSelectedAddons] = useState([])
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

  const paneerItems = [4, 11, 22, 29, 34]
  const chickenItems = [6, 12, 16, 18, 21, 31, 32]

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

  const availableCustomizations = selectedItem
    ? customizationOptions.filter(addon =>
        addon.id === "onion" ||
        (addon.id === "paneer" && paneerItems.includes(selectedItem[0])) ||
        (addon.id === "chicken" && chickenItems.includes(selectedItem[0]))
      )
    : []

  const addons = customizationOptions.filter(addon => selectedAddons.includes(addon.id))

  const addonPrice = addons.reduce(
    (total, addon) => total + (Number(addon.price) || 0), 0
  )

  const addonCalories = addons.reduce(
    (total, addon) => total + (Number(addon.calories) || 0), 0
  )

  const totalNutrition = selectedItem ? {
    protein: nutritionInfo[selectedItem[0]].protein + addons.reduce((total, addon) => total + addon.protein, 0),
    carbs: nutritionInfo[selectedItem[0]].carbs + addons.reduce((total, addon) => total + addon.carbs, 0),
    fat: nutritionInfo[selectedItem[0]].fat + addons.reduce((total, addon) => total + addon.fat, 0),
    fiber: nutritionInfo[selectedItem[0]].fiber + addons.reduce((total, addon) => total + addon.fiber, 0)
  } : null

  function openDetails(item) {
    setSelectedItem(item)
    setQuantity(1)
    setSelectedAddons([])
  }

  function toggleAddon(id) {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter(item => item !== id))
    } else {
      setSelectedAddons([...selectedAddons, id])
    }
  }

  function addToCart() {
    const newItem = {
      id: selectedItem[0],
      name: selectedItem[1],
      price: Number(selectedItem[2]) || 0,
      image: selectedItem[3],
      calories: selectedItem[6] + addonCalories,
      quantity: quantity,
      restaurant: restaurantNames[selectedItem[4][0]],
      customizations: addons.map(addon => ({
        name: addon.name,
        price: Number(addon.price) || 0
      }))
    }

    const exists = cartItems.find(item =>
      item.id === newItem.id &&
      JSON.stringify(item.customizations || []) === JSON.stringify(newItem.customizations)
    )

    if (exists) {
      setCartItems(cartItems.map(item =>
        item.id === newItem.id &&
        JSON.stringify(item.customizations || []) === JSON.stringify(newItem.customizations)
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ))
    } else {
      setCartItems([...cartItems, newItem])
    }

    setSelectedItem(null)
    setQuantity(1)
    setSelectedAddons([])
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
          <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl">
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

            <div className="mt-5 rounded-xl bg-green-50 p-4">
              <h3 className="mb-3 font-bold text-[#14532D]">
                Nutrition Information <span className="text-xs font-normal text-gray-500">(Approx. per serving)</span>
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
                {[
                  ["🔥", "Calories", `${selectedItem[6] + addonCalories} kcal`],
                  ["💪", "Protein", `${totalNutrition.protein} g`],
                  ["🌾", "Carbs", `${totalNutrition.carbs} g`],
                  ["🥑", "Fat", `${totalNutrition.fat} g`],
                  ["🍃", "Fiber", `${totalNutrition.fiber} g`]
                ].map(([icon, label, value]) => (
                  <div key={label} className="rounded-lg bg-white p-2 text-center">
                    <p className="text-xl">{icon}</p>
                    <p className="text-xs text-gray-600">{label}</p>
                    <p className="mt-1 text-sm font-bold text-[#14532D]">{value}</p>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-gray-500">
                Nutrition values are estimates and may vary by preparation.
              </p>
            </div>

            <div className="mt-4">
              <h3 className="font-bold text-[#14532D]">Ingredients</h3>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                {nutritionInfo[selectedItem[0]].ingredients}
              </p>
            </div>

            <div className="mt-5">
              <h3 className="font-bold text-[#14532D]">Customizations</h3>
              <p className="mb-3 mt-1 text-xs text-gray-500">
                Add extra ingredients to your meal.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {availableCustomizations.map(addon => (
                  <button key={addon.id} onClick={() => toggleAddon(addon.id)} className={`cursor-pointer rounded-xl border p-3 text-center transition ${selectedAddons.includes(addon.id) ? "border-green-600 bg-green-50 ring-2 ring-green-200" : "border-gray-200 bg-white hover:border-green-400"}`}>
                    <span className="block text-3xl">{addon.icon}</span>
                    <span className="mt-2 block text-sm font-semibold text-[#14532D]">{addon.name}</span>
                    <span className="mt-1 block text-sm font-bold text-green-700">+₹{addon.price}</span>
                    <span className="mt-2 block text-xs text-gray-500">
                      {selectedAddons.includes(addon.id) ? "✓ Added" : "Add +"}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <p className="font-bold text-[#14532D]">Quantity</p>
              <div className="flex items-center gap-3">
                <button disabled={quantity === 1} onClick={() => setQuantity(quantity - 1)} className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-[#DCFCE7] text-xl font-bold text-[#14532D] disabled:opacity-40">
                  -
                </button>
                <span className="min-w-8 text-center text-lg font-bold text-[#14532D]">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-[#DCFCE7] text-xl font-bold text-[#14532D]">
                  +
                </button>
              </div>
            </div>

            <div className="mt-5 space-y-3 rounded-xl bg-green-50 p-4">
              <div className="flex justify-between">
                <span className="text-gray-700">Food Price</span>
                <span className="font-bold text-green-800">₹{selectedItem[2]}</span>
              </div>
              {addons.map(addon => (
                <div key={addon.id} className="flex justify-between">
                  <span className="text-gray-700">{addon.name}</span>
                  <span className="font-bold text-green-800">+ ₹{addon.price}</span>
                </div>
              ))}
              <div className="flex justify-between">
                <span className="text-gray-700">Price per serving</span>
                <span className="font-bold text-green-800">₹{selectedItem[2] + addonPrice}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Total Price</span>
                <span className="font-bold text-green-800">₹{(selectedItem[2] + addonPrice) * quantity}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Total Calories</span>
                <span className="font-bold text-green-800">{(selectedItem[6] + addonCalories) * quantity} kcal</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Total Protein</span>
                <span className="font-bold text-green-800">{totalNutrition.protein * quantity} g</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Total Carbs</span>
                <span className="font-bold text-green-800">{totalNutrition.carbs * quantity} g</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Total Fat</span>
                <span className="font-bold text-green-800">{totalNutrition.fat * quantity} g</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Total Fiber</span>
                <span className="font-bold text-green-800">{totalNutrition.fiber * quantity} g</span>
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
