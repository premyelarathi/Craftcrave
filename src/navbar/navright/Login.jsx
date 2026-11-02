
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(event) {
    event.preventDefault()
    setLoading(true)
    setError("")

    const form = event.target

    const user = {
      fullname: form.fullname.value,
      email: form.email.value,
      phone: form.phone.value,
      address: form.address.value,
      pincode: form.pincode.value
    }

    try {
      const response = await fetch("https://craftcrave.onrender.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Login failed")
      }

      localStorage.setItem("user", JSON.stringify(data.user))
      localStorage.setItem("userEmail", data.user.email)

      navigate("/")

    } catch (error) {
      setError(error.message || "Server connection failed")
    }

    setLoading(false)
  }

  return (
    <main className="grid min-h-screen place-items-center bg-[#F0FDF4] px-4 py-10 text-[#14532D]">
      <section className="w-full max-w-md rounded-2xl border border-[#DCFCE7] bg-white p-7 shadow-xl sm:p-9" aria-labelledby="login-title">

        <Link to="/" className="mb-8 inline-block text-sm font-medium text-[#166534] hover:text-[#14532D] cursor-pointer">
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

          <label className="mt-2 text-sm font-medium" htmlFor="login-fullname">Full name</label>
          <input className="h-11 rounded-lg border border-[#D1E7D7] bg-[#F0FDF4] px-3 text-sm outline-none focus:border-[#166534]" id="login-fullname" name="fullname" type="text" placeholder="Your full name" required />

          <label className="mt-2 text-sm font-medium" htmlFor="login-email">Email address</label>
          <input className="h-11 rounded-lg border border-[#D1E7D7] bg-[#F0FDF4] px-3 text-sm outline-none focus:border-[#166534]" id="login-email" name="email" type="email" placeholder="you@example.com" required />

          <label className="mt-2 text-sm font-medium" htmlFor="login-phone">Phone number</label>
          <input className="h-11 rounded-lg border border-[#D1E7D7] bg-[#F0FDF4] px-3 text-sm outline-none focus:border-[#166534]" id="login-phone" name="phone" type="tel" placeholder="Your phone number" required />

          <label className="mt-2 text-sm font-medium" htmlFor="login-address">Address</label>
          <input className="h-11 rounded-lg border border-[#D1E7D7] bg-[#F0FDF4] px-3 text-sm outline-none focus:border-[#166534]" id="login-address" name="address" type="text" placeholder="Your address" required />

          <label className="mt-2 text-sm font-medium" htmlFor="login-pincode">Pin code</label>
          <input className="h-11 rounded-lg border border-[#D1E7D7] bg-[#F0FDF4] px-3 text-sm outline-none focus:border-[#166534]" id="login-pincode" name="pincode" type="text" inputMode="numeric" placeholder="Your pin code" required />

          {error && (
            <p className="mt-2 text-sm text-red-600">{error}</p>
          )}

          <button className="mt-3 h-11 rounded-lg bg-[#166534] text-sm font-semibold text-white transition-colors hover:bg-[#14532D] disabled:opacity-60 cursor-pointer" type="submit" disabled={loading}>
            {loading ? "Please wait..." : "Continue"}
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
