
import { Link } from "react-router-dom"
import Footer from "./Footer"

function About() {
  return (
    <div className="min-h-screen w-full bg-white">

      {/* Hero Section */}
      <section className="bg-[#052E1B] px-6 py-20 text-center md:py-28">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
          Welcome to CraftCrave
        </p>

        <h1 className="text-4xl font-bold text-white md:text-6xl">
          Good Food. Better Choices.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-green-100 md:text-lg">
          Making healthy and delicious food accessible to everyone.
          Fresh ingredients, balanced meals and convenient ordering
          come together at CraftCrave.
        </p>

        <Link
          to="/meals"
          className="mt-8 inline-block rounded-lg bg-green-600 px-8 py-3 font-semibold text-white transition hover:bg-green-700 cursor-pointer"
        >
          Explore Our Menu
        </Link>
      </section>

      {/* Our Story */}
      <section className="px-6 py-16 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">

          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-green-700">
              Who We Are
            </p>

            <h2 className="text-3xl font-bold text-[#14532D] md:text-4xl">
              Our Story
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              CraftCrave is a healthy food ordering platform created
              to make nutritious eating simple, convenient and affordable.
              We believe that good food should not be difficult to find.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Our platform brings together a variety of food options,
              including protein-rich meals, rice bowls, fresh salads,
              breakfast items and refreshing drinks.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Our aim is to make everyday food choices easier by
              providing a convenient way to explore and order meals.
            </p>
          </div>

          <div className="rounded-2xl bg-[#F0FDF4] p-8 md:p-12">
            <h3 className="text-2xl font-bold text-[#14532D]">
              Eat Well. Live Well.
            </h3>

            <p className="mt-4 leading-7 text-[#365C43]">
              We focus on bringing together taste, variety and
              convenience to support better everyday food choices.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-white p-5 shadow-sm">
                <h4 className="text-2xl font-bold text-green-700">
                  Fresh
                </h4>
                <p className="mt-1 text-sm text-gray-600">
                  Food choices
                </p>
              </div>

              <div className="rounded-xl bg-white p-5 shadow-sm">
                <h4 className="text-2xl font-bold text-green-700">
                  Healthy
                </h4>
                <p className="mt-1 text-sm text-gray-600">
                  Meal options
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Mission and Vision */}
      <section className="bg-[#F0FDF4] px-6 py-16 md:px-16">
        <div className="mx-auto max-w-6xl text-center">

          <p className="text-sm font-bold uppercase tracking-widest text-green-700">
            Our Purpose
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#14532D]">
            Our Mission & Vision
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            <div className="rounded-xl bg-white p-8 text-left shadow-sm">
              <h3 className="text-xl font-bold text-[#166534]">
                Our Mission
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                To provide convenient access to delicious,
                nutritious and affordable meal options that make
                everyday food choices easier.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 text-left shadow-sm">
              <h3 className="text-xl font-bold text-[#166534]">
                Our Vision
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                To become a trusted food ordering platform that
                encourages people to explore balanced meals and
                build better everyday eating habits.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 py-16 md:px-16">
        <div className="mx-auto max-w-6xl text-center">

          <p className="text-sm font-bold uppercase tracking-widest text-green-700">
            The CraftCrave Difference
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#14532D]">
            Why Choose CraftCrave?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            We make discovering and choosing your everyday meals
            simple with variety, convenience and affordability.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-xl border border-green-100 p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="text-4xl">🥗</div>
              <h3 className="mt-4 text-lg font-bold text-[#166534]">
                Nutritious Choices
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                Explore protein-rich meals, salads and balanced
                food options.
              </p>
            </div>

            <div className="rounded-xl border border-green-100 p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="text-4xl">🍅</div>
              <h3 className="mt-4 text-lg font-bold text-[#166534]">
                Food Variety
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                Discover different meals, rice bowls, breakfast
                options and refreshing drinks.
              </p>
            </div>

            <div className="rounded-xl border border-green-100 p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="text-4xl">💚</div>
              <h3 className="mt-4 text-lg font-bold text-[#166534]">
                Affordable Options
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                Find meal options at different prices to suit
                your everyday needs.
              </p>
            </div>

            <div className="rounded-xl border border-green-100 p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="text-4xl">📱</div>
              <h3 className="mt-4 text-lg font-bold text-[#166534]">
                Easy Experience
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                Browse food categories and explore meals through
                a simple website.
              </p>
            </div>

            <div className="rounded-xl border border-green-100 p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="text-4xl">🍽️</div>
              <h3 className="mt-4 text-lg font-bold text-[#166534]">
                Multiple Categories
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                Choose from everyday meals, protein-rich dishes,
                salads and smoothies.
              </p>
            </div>

            <div className="rounded-xl border border-green-100 p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="text-4xl">🌱</div>
              <h3 className="mt-4 text-lg font-bold text-[#166534]">
                Better Food Choices
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                Discover food options that help you make informed
                everyday meal choices.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="bg-[#052E1B] px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-white">
          Our Promise
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-green-100">
          At CraftCrave, our goal is to bring taste, convenience
          and variety together. We want to make exploring better
          food choices a simple part of everyday life.
        </p>

        <Link
          to="/meals"
          className="mt-8 inline-block rounded-lg bg-green-600 px-8 py-3 font-semibold text-white transition hover:bg-green-700 cursor-pointer"
        >
          Discover Our Meals
        </Link>
      </section>

      <Footer />

    </div>
  )
}

export default About
