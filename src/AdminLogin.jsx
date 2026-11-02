
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"

function AdminLogin() {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const adminEmail = "prem@gmail.com"
  const adminPassword = "prem123"

  const handleLogin = (e) => {
    e.preventDefault()

    if (email === adminEmail && password === adminPassword) {
      localStorage.setItem("adminLoggedIn", "true")
      setError("")
      navigate("/adminorders")
    } else {
      setError("Invalid Email or Password")
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#00110d] px-4">
      <div className="w-full max-w-md rounded-2xl bg-[#0B241B] p-8 shadow-xl">

        <h1 className="mb-2 text-center text-3xl font-bold text-white">
          CraftCrave
        </h1>

        <h2 className="mb-2 text-center text-xl font-semibold text-green-400">
          Admin Login
        </h2>

        <p className="mb-8 text-center text-gray-400">
          Login to manage customer orders
        </p>

        <form onSubmit={handleLogin}>

          <label className="mb-2 block font-medium text-white">
            Email
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter admin email"
            className="mb-5 w-full rounded-lg border border-green-700 bg-[#123528] px-4 py-3 text-white outline-none focus:ring-2 focus:ring-green-500"
            required
          />

          <label className="mb-2 block font-medium text-white">
            Password
          </label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="mb-4 w-full rounded-lg border border-green-700 bg-[#123528] px-4 py-3 text-white outline-none focus:ring-2 focus:ring-green-500"
            required
          />

          {error && (
            <p className="mb-4 text-center text-red-400">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full cursor-pointer rounded-lg bg-red-600 py-3 font-bold text-white hover:bg-red-700"
          >
            Login
          </button>

        </form>

        <Link
          to="/"
          className="mt-6 block cursor-pointer text-center text-green-400 hover:text-green-300"
        >
          Back to Home
        </Link>

      </div>
    </div>
  )
}

export default AdminLogin
