
import Footer from './Footer'
import item1 from './assets/Images/Item1.png'
import item2 from './assets/Images/item2.png'
import item3 from './assets/Images/item3.jpeg'
import item4 from './assets/Images/item4.jpg'
import item5 from './assets/Images/item5.jpeg'
import item6 from './assets/Images/item6.jpeg'
import item7 from './assets/Images/item7.jpeg'
import item8 from './assets/Images/item8.jpeg'
import item9 from './assets/Images/item9.png'
import item10 from './assets/Images/item10.jpg'
import item11 from './assets/Images/item11.jpeg'
import item12 from './assets/Images/item12.jpeg'
import item13 from './assets/Images/item13.jpeg'
import item14 from './assets/Images/item14.jpeg'

function Meals() {
  const dishes = [
    {
      id: 1,
      name: 'Egg and Rice Power Bowl',
      price: 99,
      image: item1,
      description: 'Egg • Rice • Vegetables • Herbs',
      type: 'non-veg'
    },
    {
      id: 2,
      name: 'Dal Rice with Vegetables',
      price: 89,
      image: item2,
      description: 'Dal • Rice • Carrot • Beans',
      type: 'veg'
    },
    {
      id: 3,
      name: 'Chickpea Power Bowl',
      price: 109,
      image: item3,
      description: 'Chickpeas • Lettuce • Cucumber • Tomato',
      type: 'veg'
    },
    {
      id: 4,
      name: 'Paneer Protein Bowl',
      price: 139,
      image: item4,
      description: 'Paneer • Brown Rice • Broccoli • Peppers',
      type: 'veg'
    },
    {
      id: 5,
      name: 'Grilled Chicken Rice Bowl',
      price: 159,
      image: item5,
      description: 'Chicken • Rice • Carrot • Green Beans',
      type: 'non-veg'
    },
    {
      id: 6,
      name: 'Chicken Breast with Brown Rice',
      price: 179,
      image: item6,
      description: 'Chicken Breast • Brown Rice • Broccoli',
      type: 'non-veg'
    },
    {
      id: 7,
      name: 'Banana Peanut Butter Smoothie',
      price: 90,
      image: item7,
      description: 'Banana • Peanut Butter • Milk • Oats',
      type: 'veg'
    },
    {
      id: 8,
      name: 'Masala Oats Power Bowl',
      price: 140,
      image: item8,
      description: 'Oats • Onion • Tomato • Indian Spices',
      type: 'veg'
    },
    {
      id: 9,
      name: 'Soya Chunk Protein Bowl',
      price: 160,
      image: item9,
      description: 'Soya Chunks • Rice • Peppers • Onion',
      type: 'veg'
    },
    {
      id: 10,
      name: 'Rajma Rice Power Bowl',
      price: 250,
      image: item10,
      description: 'Rajma • Rice • Tomato • Coriander',
      type: 'veg'
    },
    {
      id: 11,
      name: 'Grilled Paneer Salad Bowl',
      price: 350,
      image: item11,
      description: 'Grilled Paneer • Lettuce • Cucumber • Tomato',
      type: 'veg'
    },
    {
      id: 12,
      name: 'Grilled Chicken Salad',
      price: 400,
      image: item12,
      description: 'Chicken • Lettuce • Cucumber • Tomato',
      type: 'non-veg'
    },
    {
      id: 13,
      name: 'Egg and Sweet Potato Bowl',
      price: 550,
      image: item13,
      description: 'Egg • Sweet Potato • Spinach • Pepper',
      type: 'non-veg'
    },
    {
      id: 14,
      name: 'Chocolate Banana Oats Smoothie',
      price: 450,
      image: item14,
      description: 'Banana • Oats • Cocoa • Milk',
      type: 'veg'
    }
  ]

  return (
    <div className="flex min-h-screen w-full flex-col">
      <section
        id="meals"
        className="w-full flex-1 bg-[#F0FDF4] px-5 py-12 md:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="mb-2 font-semibold uppercase tracking-widest text-[#166534]">
              Fresh • Healthy • Delicious
            </p>

            <h1 className="text-3xl font-bold text-[#14532D] md:text-4xl">
              Our Dishes
            </h1>

            <p className="mt-3 text-[#365C43]">
              Discover delicious meals made for your healthy lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {dishes.map((dish) => (
              <div
                key={dish.id}
                className="overflow-hidden rounded-2xl border border-[#DCFCE7] bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="h-52 w-full object-cover"
                  />

                  <span
                    className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-md ${
                      dish.type === 'veg'
                        ? 'bg-green-600'
                        : 'bg-red-600'
                    }`}
                  >
                    {dish.type === 'veg' ? 'Veg' : 'Non-Veg'}
                  </span>
                </div>

                <div className="p-5">
                  <h2 className="text-lg font-bold text-[#14532D]">
                    {dish.name}
                  </h2>

                  <p className="mt-3 min-h-12 text-sm leading-6 text-[#365C43]">
                    {dish.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between border-t border-[#DCFCE7] pt-4">
                    <p className="text-xl font-bold text-[#166534]">
                      ₹{dish.price}
                    </p>

                    <span className="rounded-full bg-[#DCFCE7] px-3 py-1 text-xs font-medium text-[#166534]">
                      Healthy Choice
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Meals
