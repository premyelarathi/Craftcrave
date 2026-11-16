
import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import Footer from "./Footer"

import item1 from "./assets/Images/Item1.png"
import item2 from "./assets/Images/item2.png"
import item3 from "./assets/Images/item3.jpeg"
import item4 from "./assets/Images/item4.jpg"
import item6 from "./assets/Images/item6.jpeg"
import item7 from "./assets/Images/item7.jpeg"
import item8 from "./assets/Images/item8.jpeg"
import item9 from "./assets/Images/item9.png"
import item11 from "./assets/Images/item11.jpeg"
import item12 from "./assets/Images/item12.jpeg"
import item13 from "./assets/Images/item13.jpeg"
import item14 from "./assets/Images/item14.jpeg"
import Mangsmo from "./assets/Images/Mangsmo.jpeg"
import Strawmilsh from "./assets/Images/Strawmilsh.jpg"
import Chickkemm from "./assets/Images/Chickkemm.jpeg"
import sprouts from "./assets/Images/sprouts.jpeg"
import Appepper from "./assets/Images/Appepper.jpeg"
import Tomato from "./assets/Images/Tomato.jpeg"
import Lemon from "./assets/Images/Lemon.jpeg"
import Chapathichick from "./assets/Images/Chapathichick.jpeg"
import Curd from "./assets/Images/Curd.jpeg"
import Sambar from "./assets/Images/Sambar.jpeg"
import Vegpulao from "./assets/Images/Vegpulao.jpeg"
import Chapathipann from "./assets/Images/Chapathipann.jpeg"
import Mushbir from "./assets/Images/Mushbir.jpeg"
import Pannbir from "./assets/Images/Pannbir.jpeg"
import Soybir from "./assets/Images/Soybir.jpeg"
import Gobirice from "./assets/Images/Gobirice.jpeg"
import SpicyApchibir from "./assets/Images/SpicyApchibir.jpeg"
import Chickbir from "./assets/Images/Chickbir.jpeg"
import Boileggsal from "./assets/Images/Boileggsal.jpeg"
import Chsal from "./assets/Images/Chsal.jpeg"
import Cucucorsal from "./assets/Images/Cucucorsal.jpeg"
import pannersal from "./assets/Images/pannersal.jpeg"
import Peanutsal from "./assets/Images/Peanutsal.jpeg"
import Sprsal from "./assets/Images/Sprsal.jpeg"
import Masdosa from "./assets/Images/Masdosa.jpeg"
import Ragidosa from "./assets/Images/Ragidosa.jpeg"
import Dosachut from "./assets/Images/Dosachut.jpeg"
import Vegbr from "./assets/Images/Vegbr.jpeg"
import Vegpoha from "./assets/Images/Vegpoha.jpeg"
import Idlisam from "./assets/Images/Idlisam.jpeg"
import Apcin from "./assets/Images/Apcin.jpeg"
import Dryfrmil from "./assets/Images/Dryfrmil.jpeg"
import Butmil from "./assets/Images/Butmil.jpeg"
import Datesmil from "./assets/Images/Datesmil.jpeg"

export const foodItems = [
  [1, "Egg and Rice Power Bowl", 119, item1, ["Protein-Rich", "Biryani & Rice Bowls"], "non-veg", 450],
  [2, "Dal Rice with Vegetables", 89, item2, ["Everyday"], "veg", 380],
  [3, "Chickpea Power Bowl", 109, item3, ["Protein-Rich"], "veg", 420],
  [4, "Paneer Protein Bowl", 149, item4, ["Protein-Rich"], "veg", 480],
  [6, "Chicken Breast with Brown Rice", 169, item6, ["Protein-Rich", "Biryani & Rice Bowls"], "non-veg", 520],
  [7, "Banana Peanut Butter Smoothie", 99, item7, ["Smoothies & Drinks"], "veg", 320],
  [8, "Masala Oats Power Bowl", 89, item8, ["Breakfast"], "veg", 350],
  [9, "Soya Chunk Protein Bowl", 119, item9, ["Protein-Rich"], "veg", 400],
  [10, "Gobi Manchurian Rice", 129, Gobirice, ["Biryani & Rice Bowls"], "veg", 550],
  [11, "Grilled Paneer Salad Bowl", 149, item11, ["Salads & Light"], "veg", 420],
  [12, "Grilled Chicken Salad", 169, item12, ["Salads & Light"], "non-veg", 380],
  [13, "Egg and Sweet Potato Bowl", 119, item13, ["Breakfast"], "non-veg", 430],
  [14, "Chocolate Banana Oats Smoothie", 109, item14, ["Smoothies & Drinks"], "veg", 390],
  [16, "Chicken Keema Rice Bowl", 159, Chickkemm, ["Protein-Rich"], "non-veg", 580],
  [17, "Mixed Sprouts Protein Bowl", 89, sprouts, ["Protein-Rich"], "veg", 350],
  [18, "Andhra Pepper Chicken Bowl", 169, Appepper, ["Protein-Rich"], "non-veg", 520],
  [19, "Tomato Rice", 79, Tomato, ["Everyday"], "veg", 400],
  [20, "Lemon Rice", 79, Lemon, ["Everyday"], "veg", 380],
  [21, "Chapathi With Chicken", 139, Chapathichick, ["Everyday"], "non-veg", 480],
  [22, "Chapathi With Paneer", 129, Chapathipann, ["Everyday"], "veg", 460],
  [23, "Curd Rice", 69, Curd, ["Everyday"], "veg", 300],
  [24, "Veg Pulao", 99, Vegpulao, ["Everyday"], "veg", 420],
  [26, "Sambar Rice", 69, Sambar, ["Everyday"], "veg", 350],
  [28, "Mushroom Biryani", 139, Mushbir, ["Biryani & Rice Bowls"], "veg", 480],
  [29, "Paneer Biryani", 159, Pannbir, ["Biryani & Rice Bowls"], "veg", 550],
  [30, "Soya Biryani", 129, Soybir, ["Biryani & Rice Bowls"], "veg", 490],
  [31, "Spicy Andhra Chicken Biryani", 179, SpicyApchibir, ["Biryani & Rice Bowls"], "non-veg", 650],
  [32, "Chicken Biryani", 169, Chickbir, ["Biryani & Rice Bowls"], "non-veg", 620],
  [34, "Panner Tikka Salad", 149, pannersal, ["Salads & Light"], "veg", 350],
  [35, "Peanut Veggie Salad", 99, Peanutsal, ["Salads & Light"], "veg", 380],
  [36, "Sprouts Salad", 89, Sprsal, ["Salads & Light"], "veg", 280],
  [37, "Chickpea Salad", 109, Chsal, ["Salads & Light"], "veg", 320],
  [38, "Cucumber Corn Salad", 89, Cucucorsal, ["Salads & Light"], "veg", 250],
  [39, "Boil Egg Salad", 99, Boileggsal, ["Salads & Light"], "non-veg", 300],
  [40, "Masala Dosa", 79, Masdosa, ["Breakfast"], "veg", 350],
  [41, "Ragi Dosa", 69, Ragidosa, ["Breakfast"], "veg", 250],
  [43, "Vegetables Upma", 59, Vegbr, ["Breakfast"], "veg", 280],
  [44, "Vegetable Poha", 69, Vegpoha, ["Breakfast"], "veg", 300],
  [45, "Dosa with Chutney", 59, Dosachut, ["Breakfast"], "veg", 320],
  [46, "Idli with Sambar", 59, Idlisam, ["Breakfast"], "veg", 300],
  [47, "Mango Smoothie", 89, Mangsmo, ["Smoothies & Drinks"], "veg", 220],
  [48, "Strawberry Milkshake", 99, Strawmilsh, ["Smoothies & Drinks"], "veg", 280],
  [49, "Apple Cinnamon Smoothie", 109, Apcin, ["Smoothies & Drinks"], "veg", 240],
  [50, "Dry Fruit Milkshake", 129, Dryfrmil, ["Smoothies & Drinks"], "veg", 350],
  [52, "Butter Milk", 30, Butmil, ["Smoothies & Drinks"], "veg", 80],
  [54, "Dates and Milk Smoothie", 119, Datesmil, ["Smoothies & Drinks"], "veg", 300]
]

export const nutritionInfo = {
  1: { protein: 28, carbs: 52, fat: 12, fiber: 5, ingredients: "Egg, Rice, Vegetables, Pepper, Spices" },
  2: { protein: 11, carbs: 62, fat: 8, fiber: 7, ingredients: "Rice, Dal, Carrot, Beans, Spices" },
  3: { protein: 24, carbs: 48, fat: 10, fiber: 12, ingredients: "Chickpeas, Rice, Onion, Tomato, Herbs" },
  4: { protein: 32, carbs: 48, fat: 12, fiber: 8, ingredients: "Paneer, Brown Rice, Broccoli, Bell Peppers, Spices" },
  6: { protein: 42, carbs: 48, fat: 12, fiber: 7, ingredients: "Chicken Breast, Brown Rice, Broccoli, Herbs, Spices" },
  7: { protein: 12, carbs: 42, fat: 12, fiber: 5, ingredients: "Banana, Milk, Peanut Butter, Honey" },
  8: { protein: 13, carbs: 48, fat: 9, fiber: 7, ingredients: "Oats, Onion, Carrot, Peas, Spices" },
  9: { protein: 34, carbs: 38, fat: 10, fiber: 9, ingredients: "Soya Chunks, Rice, Onion, Tomato, Spices" },
  10: { protein: 9, carbs: 75, fat: 16, fiber: 5, ingredients: "Cauliflower, Rice, Onion, Capsicum, Sauce" },
  11: { protein: 18, carbs: 25, fat: 17, fiber: 7, ingredients: "Paneer, Lettuce, Cucumber, Tomato, Herbs" },
  12: { protein: 28, carbs: 20, fat: 12, fiber: 6, ingredients: "Chicken, Lettuce, Cucumber, Tomato, Dressing" },
  13: { protein: 17, carbs: 48, fat: 12, fiber: 7, ingredients: "Egg, Sweet Potato, Onion, Pepper, Herbs" },
  14: { protein: 11, carbs: 58, fat: 10, fiber: 7, ingredients: "Banana, Oats, Milk, Cocoa Powder" },
  16: { protein: 36, carbs: 50, fat: 15, fiber: 4, ingredients: "Chicken Keema, Rice, Onion, Tomato, Spices" },
  17: { protein: 22, carbs: 42, fat: 8, fiber: 13, ingredients: "Mixed Sprouts, Onion, Tomato, Lemon, Herbs" },
  18: { protein: 38, carbs: 35, fat: 14, fiber: 4, ingredients: "Chicken, Pepper, Onion, Curry Leaves, Spices" },
  19: { protein: 7, carbs: 68, fat: 10, fiber: 3, ingredients: "Rice, Tomato, Onion, Curry Leaves, Spices" },
  20: { protein: 6, carbs: 65, fat: 9, fiber: 2, ingredients: "Rice, Lemon, Peanuts, Curry Leaves, Spices" },
  21: { protein: 24, carbs: 52, fat: 13, fiber: 5, ingredients: "Chapathi, Chicken, Onion, Tomato, Spices" },
  22: { protein: 18, carbs: 48, fat: 14, fiber: 5, ingredients: "Chapathi, Paneer, Onion, Tomato, Spices" },
  23: { protein: 8, carbs: 52, fat: 8, fiber: 1, ingredients: "Rice, Curd, Milk, Coriander" },
  24: { protein: 9, carbs: 65, fat: 10, fiber: 5, ingredients: "Rice, Carrot, Beans, Peas, Spices" },
  26: { protein: 10, carbs: 58, fat: 7, fiber: 6, ingredients: "Rice, Toor Dal, Vegetables, Tamarind, Spices" },
  28: { protein: 10, carbs: 65, fat: 13, fiber: 5, ingredients: "Rice, Mushroom, Onion, Mint, Spices" },
  29: { protein: 18, carbs: 65, fat: 18, fiber: 4, ingredients: "Rice, Paneer, Onion, Tomato, Mint, Spices" },
  30: { protein: 22, carbs: 62, fat: 13, fiber: 8, ingredients: "Rice, Soya Chunks, Onion, Mint, Spices" },
  31: { protein: 25, carbs: 75, fat: 22, fiber: 4, ingredients: "Chicken, Basmati Rice, Onion, Tomato, Spices" },
  32: { protein: 24, carbs: 72, fat: 20, fiber: 4, ingredients: "Chicken, Basmati Rice, Onion, Mint, Spices" },
  34: { protein: 17, carbs: 20, fat: 15, fiber: 6, ingredients: "Paneer, Lettuce, Tomato, Cucumber, Tikka Spices" },
  35: { protein: 12, carbs: 24, fat: 17, fiber: 8, ingredients: "Peanuts, Cucumber, Carrot, Tomato, Lettuce" },
  36: { protein: 14, carbs: 32, fat: 7, fiber: 10, ingredients: "Mixed Sprouts, Onion, Tomato, Lemon, Coriander" },
  37: { protein: 15, carbs: 38, fat: 8, fiber: 11, ingredients: "Chickpeas, Cucumber, Tomato, Onion, Lemon" },
  38: { protein: 7, carbs: 28, fat: 6, fiber: 5, ingredients: "Cucumber, Sweet Corn, Carrot, Lemon, Herbs" },
  39: { protein: 18, carbs: 18, fat: 12, fiber: 4, ingredients: "Boiled Egg, Lettuce, Cucumber, Tomato, Pepper" },
  40: { protein: 8, carbs: 48, fat: 13, fiber: 4, ingredients: "Dosa Batter, Potato, Onion, Spices, Chutney" },
  41: { protein: 7, carbs: 42, fat: 6, fiber: 6, ingredients: "Ragi Flour, Rice Batter, Onion, Spices" },
  43: { protein: 7, carbs: 42, fat: 9, fiber: 5, ingredients: "Rava, Carrot, Beans, Onion, Curry Leaves" },
  44: { protein: 6, carbs: 52, fat: 8, fiber: 4, ingredients: "Poha, Onion, Peas, Peanuts, Curry Leaves" },
  45: { protein: 7, carbs: 48, fat: 9, fiber: 3, ingredients: "Dosa Batter, Coconut Chutney, Spices" },
  46: { protein: 9, carbs: 52, fat: 4, fiber: 5, ingredients: "Idli Batter, Sambar, Toor Dal, Vegetables" },
  47: { protein: 6, carbs: 42, fat: 4, fiber: 3, ingredients: "Mango, Milk, Honey" },
  48: { protein: 8, carbs: 38, fat: 9, fiber: 1, ingredients: "Strawberry, Milk, Sugar" },
  49: { protein: 6, carbs: 40, fat: 4, fiber: 4, ingredients: "Apple, Milk, Cinnamon, Honey" },
  50: { protein: 10, carbs: 48, fat: 14, fiber: 4, ingredients: "Milk, Almonds, Cashews, Dates" },
  52: { protein: 4, carbs: 6, fat: 3, fiber: 0, ingredients: "Curd, Water, Ginger, Curry Leaves, Salt" },
  54: { protein: 9, carbs: 48, fat: 5, fiber: 4, ingredients: "Dates, Milk, Almonds" }
}

export const customizationOptions = [
  { id: "onion", name: "Onion", icon: "🧅", price: 15, calories: 10, protein: 0, carbs: 2, fat: 0, fiber: 1 },
  { id: "paneer", name: "Extra Paneer", icon: "🧊", price: 30, calories: 100, protein: 8, carbs: 2, fat: 7, fiber: 0 },
  { id: "chicken", name: "Extra Chicken", icon: "🍗", price: 40, calories: 120, protein: 20, carbs: 0, fat: 4, fiber: 0 }
]

const restaurantNames = {
  "Protein-Rich": "Fit Kitchen",
  "Everyday": "Daily Meals",
  "Biryani & Rice Bowls": "Spice Hub",
  "Salads & Light": "Green Bowl",
  "Breakfast": "Morning Kitchen",
  "Smoothies & Drinks": "Fresh Sip"
}

function Meals({ cartItems, setCartItems }) {
  const [selected, setSelected] = useState(null)
  const [qty, setQty] = useState(1)
  const [selectedAddons, setSelectedAddons] = useState([])
  const [searchParams] = useSearchParams()
  const searchQuery = searchParams.get("search")?.toLowerCase().trim() || ""

  const paneerItems = [4, 11, 22, 29, 34]
  const chickenItems = [6, 12, 16, 18, 21, 31, 32]

  const dishes = foodItems.map(item => ({
    id: item[0],
    name: item[1],
    price: item[2],
    image: item[3],
    category: item[4],
    type: item[5],
    calories: item[6],
    nutrition: nutritionInfo[item[0]],
    restaurant: restaurantNames[item[4][0]]
  }))

  const filteredDishes = dishes.filter(dish =>
    dish.name.toLowerCase().includes(searchQuery) ||
    dish.restaurant.toLowerCase().includes(searchQuery) ||
    dish.category.some(category => category.toLowerCase().includes(searchQuery))
  )

  const availableCustomizations = selected
    ? customizationOptions.filter(addon =>
        addon.id === "onion" ||
        (addon.id === "paneer" && paneerItems.includes(selected.id)) ||
        (addon.id === "chicken" && chickenItems.includes(selected.id))
      )
    : []

  const addons = customizationOptions.filter(addon => selectedAddons.includes(addon.id))
  const addonPrice = addons.reduce((total, addon) => total + addon.price, 0)
  const addonCalories = addons.reduce((total, addon) => total + addon.calories, 0)

  const totalNutrition = selected ? {
    protein: selected.nutrition.protein + addons.reduce((total, addon) => total + addon.protein, 0),
    carbs: selected.nutrition.carbs + addons.reduce((total, addon) => total + addon.carbs, 0),
    fat: selected.nutrition.fat + addons.reduce((total, addon) => total + addon.fat, 0),
    fiber: selected.nutrition.fiber + addons.reduce((total, addon) => total + addon.fiber, 0)
  } : null

  function openDetails(dish) {
    setSelected(dish)
    setQty(1)
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
    const item = {
      id: selected.id,
      name: selected.name,
      price: selected.price + addonPrice,
      basePrice: selected.price,
      image: selected.image,
      calories: selected.calories + addonCalories,
      quantity: qty,
      restaurant: selected.restaurant,
      customizations: addons.map(addon => addon.name)
    }

    const exists = cartItems.find(x =>
      x.id === selected.id &&
      JSON.stringify(x.customizations || []) === JSON.stringify(item.customizations)
    )

    if (exists) {
      setCartItems(cartItems.map(x =>
        x.id === selected.id &&
        JSON.stringify(x.customizations || []) === JSON.stringify(item.customizations)
          ? { ...x, quantity: x.quantity + qty }
          : x
      ))
    } else {
      setCartItems([...cartItems, item])
    }

    setSelected(null)
    setQty(1)
    setSelectedAddons([])
  }

  return (
    <div className="flex min-h-screen w-full flex-col">
      <section className="flex-1 bg-[#F0FDF4] px-5 py-12 sm:px-8 lg:px-12 xl:px-16">
        <div className="mb-10 text-center">
          <p className="font-semibold uppercase tracking-widest text-[#166534]">
            Fresh • Healthy • Delicious
          </p>
          <h1 className="mt-2 text-3xl font-bold text-[#14532D] md:text-4xl">
            Our Dishes
          </h1>
          <p className="mt-3 text-[#365C43]">
            Discover delicious meals made for your healthy lifestyle.
          </p>
          {searchQuery && (
            <p className="mt-3 text-sm font-semibold text-[#166534]">
              Search results for: {searchQuery}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredDishes.map(dish => (
            <div key={dish.id} className="overflow-hidden rounded-2xl border border-[#DCFCE7] bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
              <div className="relative">
                <img src={dish.image} alt={dish.name} className="h-52 w-full object-cover" />
                <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs text-white ${dish.type === "veg" ? "bg-green-600" : "bg-red-600"}`}>
                  {dish.type === "veg" ? "Veg" : "Non-Veg"}
                </span>
              </div>

              <div className="p-5">
                <h2 className="text-lg font-bold text-[#14532D]">{dish.name}</h2>
                <p className="mt-2 text-sm text-[#365C43]">{dish.restaurant}</p>
                <p className="mt-1 text-sm text-gray-500">{dish.calories} kcal per serving</p>

                <div className="mt-4 flex items-center justify-between border-t border-[#DCFCE7] pt-4">
                  <p className="text-xl font-bold text-[#166534]">₹{dish.price}</p>
                  <button onClick={() => openDetails(dish)} className="cursor-pointer rounded-lg bg-[#166534] px-4 py-2 text-sm font-semibold text-white hover:bg-[#14532D]">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredDishes.length === 0 && (
          <p className="py-10 text-center text-lg font-semibold text-[#166534]">
            No food items found.
          </p>
        )}
      </section>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/60 p-4">
          <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl">
            <button onClick={() => setSelected(null)} className="absolute right-4 top-3 cursor-pointer text-2xl font-bold text-red-600">
              ×
            </button>

            <img src={selected.image} alt={selected.name} className="mt-4 h-48 w-full rounded-xl object-cover" />

            <h2 className="mt-4 text-2xl font-bold text-[#14532D]">{selected.name}</h2>
            <p className="mt-2 text-sm text-gray-600">Restaurant: {selected.restaurant}</p>

            <div className="mt-5 rounded-xl bg-green-50 p-4">
              <h3 className="mb-3 font-bold text-[#14532D]">
                Nutrition Information <span className="text-xs font-normal text-gray-500">(Approx. per serving)</span>
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
                {[
                  ["🔥", "Calories", `${selected.calories + addonCalories} kcal`],
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
              <p className="mt-1 text-sm text-gray-600">{selected.nutrition.ingredients}</p>
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
                <button disabled={qty === 1} onClick={() => setQty(qty - 1)} className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-[#DCFCE7] text-xl font-bold text-[#14532D] disabled:opacity-40">
                  -
                </button>
                <span className="min-w-8 text-center text-lg font-bold text-[#14532D]">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-[#DCFCE7] text-xl font-bold text-[#14532D]">
                  +
                </button>
              </div>
            </div>

            <div className="mt-5 space-y-3 rounded-xl bg-green-50 p-4 font-semibold text-[#166534]">
              <p className="flex justify-between">
                <span>Price per serving</span>
                <span>₹{selected.price + addonPrice}</span>
              </p>
              <p className="flex justify-between">
                <span>Total Price</span>
                <span>₹{(selected.price + addonPrice) * qty}</span>
              </p>
              <p className="flex justify-between">
                <span>Total Calories</span>
                <span>{(selected.calories + addonCalories) * qty} kcal</span>
              </p>
              <p className="flex justify-between">
                <span>Total Protein</span>
                <span>{totalNutrition.protein * qty} g</span>
              </p>
              <p className="flex justify-between">
                <span>Total Carbs</span>
                <span>{totalNutrition.carbs * qty} g</span>
              </p>
              <p className="flex justify-between">
                <span>Total Fat</span>
                <span>{totalNutrition.fat * qty} g</span>
              </p>
              <p className="flex justify-between">
                <span>Total Fiber</span>
                <span>{totalNutrition.fiber * qty} g</span>
              </p>
            </div>

            <button onClick={addToCart} className="mt-5 w-full cursor-pointer rounded-lg bg-[#166534] py-3 font-semibold text-white hover:bg-[#14532D]">
              Add to Cart
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

export default Meals
