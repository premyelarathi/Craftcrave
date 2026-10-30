
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

import banner from "./assets/Images/banner.jpeg"
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
import MushBir from "./assets/Images/MushBir.jpeg"
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
import 
import Categories from "./Categories"
import Footer from "./Footer"

function Home() {
  const [activeCategory, setActiveCategory] = useState("")
  const location = useLocation()

  useEffect(() => {
    if (location.state && location.state.category) {
      setActiveCategory(location.state.category)

      const mealsSection = document.getElementById("meals")

      if (mealsSection) {
        mealsSection.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [location.state])

  const items = [
    [1, "Egg and Rice Power Bowl", 99, item1, ["Protein-Rich", "Biryani & Rice Bowls"], "non-veg"],
    [2, "Dal Rice with Vegetables", 89, item2, ["Everyday"], "veg"],
    [3, "Chickpea Power Bowl", 109, item3, ["Protein-Rich"], "veg"],
    [4, "Paneer Protein Bowl", 139, item4, ["Protein-Rich"], "veg"],
    [6, "Chicken Breast with Brown Rice", 179, item6, ["Protein-Rich", "Biryani & Rice Bowls"], "non-veg"],
    [7, "Banana Peanut Butter Smoothie", 90, item7, ["Smoothies & Drinks"], "veg"],
    [8, "Masala Oats Power Bowl", 140, item8, ["Breakfast"], "veg"],
    [9, "Soya Chunk Protein Bowl", 160, item9, ["Protein-Rich"], "veg"],
   [10, "Gobi Manchurian Rice", 190, Gobirice, ["Biryani & Rice Bowls"], "veg"],
    [11, "Grilled Paneer Salad Bowl", 350, item11, ["Salads & Light"], "veg"],
    [12, "Grilled Chicken Salad", 400, item12, ["Salads & Light"], "non-veg"],
    [13, "Egg and Sweet Potato Bowl", 550, item13, ["Breakfast"], "non-veg"],
    [14, "Chocolate Banana Oats Smoothie", 450, item14, ["Smoothies & Drinks"], "veg"],
    [16, "Chicken Keema Rice Bowl", 450, Chickkemm, ["Protein-Rich"], "non-veg"],
    [17, "Mixed Sprouts Protein Bowl", 450, sprouts, ["Protein-Rich"], "veg"],
    [18, "Andhra Pepper Chicken Bowl", 450, Appepper, ["Protein-Rich"], "non-veg"],
    [19, "Tomato Rice", 450, Tomato, ["Everyday"], "veg"],
    [20, "Lemon Rice", 450, Lemon, ["Everyday"], "veg"],
    [21, "Chapathi With Chicken", 450, Chapathichick, ["Everyday"], "non-veg"],
    [22, "Chapathi With Paneer", 450, Chapathipann, ["Everyday"], "veg"],
    [23, "Curd Rice", 150, Curd, ["Everyday"], "veg"],
    [24, "Veg Pulao", 350, Vegpulao, ["Everyday"], "veg"],
    [26, "Sambar Rice", 150, Sambar, ["Everyday"], "veg"],
    [28, "Mushroom Biryani", 150, MushBir, ["Biryani & Rice Bowls"], "veg"],
    [29, "Paneer Biryani", 180, Pannbir, ["Biryani & Rice Bowls"], "veg"],
    [30, "Soya Biryani", 160, Soybir, ["Biryani & Rice Bowls"], "veg"],
    [31, "Spicy Andhra Chicken Biryani", 200, SpicyApchibir, ["Biryani & Rice Bowls"], "non-veg"],
    [32, "Chicken Biryani", 190, Chickbir, ["Biryani & Rice Bowls"], "non-veg"],
    [34, "Panner Tikka Salad", 199, pannersal, ["Salads & Light"], "veg"],
    [35, "Peanut Veggie Salad", 199, Peanutsal, ["Salads & Light"], "veg"],
    [36, "Sprouts Salad", 199, Sprsal, ["Salads & Light"], "veg"],
    [37, "Chickpea Salad", 199, Chsal, ["Salads & Light"], "veg"],
    [38, "Cucumber Corn Salad", 399, Cucucorsal, ["Salads & Light"], "veg"],
    [39, "Boil Egg Salad", 299,Boileggsal, ["Salads & Light"], "non-veg"],
    [40, "Masala dosa", 199, Masdosa, ["Breakfast"], "veg"],
    [41, "Ragi Dosa", 99, Ragidosa, ["Breakfast"], "veg"],
    [43, "Vegetables Upma", 99, Vegbr, ["Breakfast"], "veg"],
    [44, "Vegetable Poha", 199, Vegpoha, ["Breakfast"], "veg"],
    [45, "Dosa with Chutney", 99, Dosachut, ["Breakfast"], "veg"],
    [46, "Idli with Sambar ", 199, Idlisam, ["Breakfast"], "veg"],
  ] 

  const filteredItems = items.filter((item) => {
    if (activeCategory === "") {
      return true
    }

    return item[4].includes(activeCategory)
  })

  return (
    <div className="min-h-screen bg-white">

      <section className="w-full">
        <img
          src={banner}
          alt="CraftCrave Healthy Meals"
          className="block h-auto w-full"
        />
      </section>

      <Categories
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <section
        id="meals"
        className="px-5 py-10 md:px-10 md:py-12"
      >
        <div className="mb-8 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-[#166534]">
            Fresh food, fitness first
          </p>

          <h2 className="text-3xl font-bold text-[#14532D]">
            {activeCategory === ""
              ? "Recommended for You"
              : activeCategory}
          </h2>

          <p className="mt-3 text-sm text-[#365C43]">
            Delicious meals selected for you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredItems.map((item) => {
            return (
              <div
                key={item[0]}
                className="overflow-hidden rounded-xl border border-[#DCFCE7] bg-white shadow-md transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative">
                  <img
                    src={item[3]}
                    alt={item[1]}
                    className="h-48 w-full object-cover"
                  />

                  <span
                    className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-md ${
                      item[5] === "veg"
                        ? "bg-green-600"
                        : "bg-red-600"
                    }`}
                  >
                    {item[5] === "veg" ? "Veg" : "Non-Veg"}
                  </span>
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-[#14532D]">
                    {item[1]}
                  </h3>

                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-lg font-bold text-[#166534]">
                      ₹{item[2]}
                    </p>

                    <button
                      onClick={() => alert(item[1] + " added to cart!")}
                      className="rounded-lg bg-[#166534] px-4 py-2 text-sm text-white transition hover:bg-[#14532D]"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <Footer />

    </div>
  )
}

export default Home
