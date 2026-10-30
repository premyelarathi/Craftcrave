
import { Link } from "react-router-dom"
import Footer from "./Footer"

function About() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <section className="w-full flex-1 bg-[#F0FDF4] px-6 py-12 text-center">
        <h1 className="text-3xl font-bold text-[#166534]">
          About CraftCrave
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-[#365C43]">
          CraftCrave provides delicious and healthy meals for your everyday
          needs. Our goal is to make healthy eating simple and affordable.
        </p>

        <h2 className="mt-8 text-2xl font-bold text-[#14532D]">
          Why Choose Us?
        </h2>

        <div className="mt-6 flex flex-wrap justify-center gap-6">
          <div className="rounded-lg border border-[#DCFCE7] bg-white p-5 shadow-sm">
            <h3 className="font-bold text-[#166534]">
              🥗 Healthy Meals
            </h3>
            <p className="mt-2 text-[#365C43]">
              Nutritious food choices.
            </p>
          </div>

          <div className="rounded-lg border border-[#DCFCE7] bg-white p-5 shadow-sm">
            <h3 className="font-bold text-[#166534]">
              🍅 Fresh Ingredients
            </h3>
            <p className="mt-2 text-[#365C43]">
              Fresh and tasty food.
            </p>
          </div>

          <div className="rounded-lg border border-[#DCFCE7] bg-white p-5 shadow-sm">
            <h3 className="font-bold text-[#166534]">
              🚚 Easy Ordering
            </h3>
            <p className="mt-2 text-[#365C43]">
              Order your meals easily.
            </p>
          </div>
        </div>

        <Link
          to="/meals"
          className="mt-8 inline-block rounded-lg bg-[#166534] px-6 py-3 text-white transition hover:bg-[#14532D]"
        >
          Explore Meals
        </Link>
      </section>

      <Footer />
    </div>
  )
}

export default About
