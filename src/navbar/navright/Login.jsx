import { Link } from 'react-router-dom'

function Login() {
  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <main className="grid min-h-screen place-items-center bg-[#F0FDF4] px-4 py-10 text-[#14532D]">
      <section className="w-full max-w-md rounded-2xl border border-[#DCFCE7] bg-white p-7 shadow-xl sm:p-9" aria-labelledby="login-title">

        <Link to="/" className="mb-8 inline-block text-sm font-medium text-[#166534] hover:text-[#14532D]">
          Back to home
        </Link>

        <p className="mb-1 text-xs font-bold uppercase tracking-[0.14em] text-[#166534]">
          Welcome to CraftCrave
        </p>

        <h1 id="login-title" className="mt-2 text-2xl font-bold text-[#14532D]">
          Good food starts here.
        </h1>

        <p className="mt-2 text-sm text-[#365C43]">
          Sign in to keep your healthy favorites close.
        </p>

        <form className="mt-6 grid gap-2" onSubmit={handleSubmit}>

          <label className="mt-2 text-sm font-medium" htmlFor="login-fullname">
            Full name
          </label>
          <input
            className="h-11 rounded-lg border border-[#D1E7D7] bg-[#F0FDF4] px-3 text-sm text-[#14532D] outline-none placeholder:text-[#6B8A73] focus:border-[#166534] focus:ring-1 focus:ring-[#166534]"
            id="login-fullname"
            name="fullname"
            type="text"
            placeholder="Your full name"
            required
          />

          <label className="mt-2 text-sm font-medium" htmlFor="login-email">
            Email address
          </label>
          <input
            className="h-11 rounded-lg border border-[#D1E7D7] bg-[#F0FDF4] px-3 text-sm text-[#14532D] outline-none placeholder:text-[#6B8A73] focus:border-[#166534] focus:ring-1 focus:ring-[#166534]"
            id="login-email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
          />

          <label className="mt-2 text-sm font-medium" htmlFor="login-phone">
            Phone number
          </label>
          <input
            className="h-11 rounded-lg border border-[#D1E7D7] bg-[#F0FDF4] px-3 text-sm text-[#14532D] outline-none placeholder:text-[#6B8A73] focus:border-[#166534] focus:ring-1 focus:ring-[#166534]"
            id="login-phone"
            name="phone"
            type="tel"
            placeholder="Your phone number"
            required
          />

          <label className="mt-2 text-sm font-medium" htmlFor="login-address">
            Address
          </label>
          <input
            className="h-11 rounded-lg border border-[#D1E7D7] bg-[#F0FDF4] px-3 text-sm text-[#14532D] outline-none placeholder:text-[#6B8A73] focus:border-[#166534] focus:ring-1 focus:ring-[#166534]"
            id="login-address"
            name="address"
            type="text"
            placeholder="Your address"
            required
          />

          <label className="mt-2 text-sm font-medium" htmlFor="login-pincode">
            Pin code
          </label>
          <input
            className="h-11 rounded-lg border border-[#D1E7D7] bg-[#F0FDF4] px-3 text-sm text-[#14532D] outline-none placeholder:text-[#6B8A73] focus:border-[#166534] focus:ring-1 focus:ring-[#166534]"
            id="login-pincode"
            name="pincode"
            type="text"
            inputMode="numeric"
            placeholder="Your pin code"
            required
          />

          <button
            className="mt-3 h-11 rounded-lg bg-[#166534] text-sm font-semibold text-white transition-colors hover:bg-[#14532D]"
            type="submit"
          >
            Continue
          </button>
        </form>
        <p className="mt-5 text-center text-xs text-[#365C43]">
          Fresh food. Fitness first.
        </p>
      </section>
    </main>
  )
}
export default Login