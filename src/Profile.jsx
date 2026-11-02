
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Profile() {
  const [user, setUser] = useState(null)
  const [error, setError] = useState("")

  useEffect(() => {
    const email = localStorage.getItem("userEmail")

    if (!email) {
      setError("Please login first")
      return
    }

    fetch(`http://localhost:5000/api/users/${encodeURIComponent(email)}`)
      .then(res => {
        if (!res.ok) throw new Error("Unable to fetch profile")
        return res.json()
      })
      .then(data => setUser(data))
      .catch(err => setError(err.message))
  }, [])

  return (
    <main className="min-h-screen bg-[#F0FDF4] px-5 py-12 text-[#14532D]">
      <div className="mx-auto max-w-3xl">

        <Link to="/" className="text-sm font-semibold text-green-700 cursor-pointer">
          ← Back to Home
        </Link>

        {error && <p className="mt-10 text-center text-red-600">{error}</p>}

        {!user && !error && <p className="mt-10 text-center">Loading...</p>}

        {user && (
          <>
            <section className="mt-8 flex items-center gap-5 rounded-2xl bg-[#123D2B] p-7 text-white">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-green-100 text-4xl font-bold text-green-800">
                {user.fullname.charAt(0).toUpperCase()}
              </div>

              <div>
                <p className="text-sm text-green-300">CraftCrave Member</p>
                <h1 className="mt-1 text-2xl font-bold">{user.fullname}</h1>
                <p className="mt-1 text-sm text-green-100">{user.email}</p>
              </div>
            </section>

            <section className="mt-8 rounded-2xl bg-white p-7 shadow-sm">
              <h2 className="mb-5 text-xl font-bold">Personal Details</h2>

              <div className="grid gap-5 sm:grid-cols-2">
                {[
                  ["Full Name", user.fullname],
                  ["Email", user.email],
                  ["Phone", user.phone],
                  ["Address", user.address],
                  ["Pin Code", user.pincode]
                ].map(([label, value]) => (
                  <div key={label}>
                    <p className="text-sm text-gray-400">{label}</p>
                    <p className="mt-1 font-semibold">{value}</p>
                  </div>
                ))}
              </div>
            </section>

            <Link
              to="/meals"
              className="mt-6 block rounded-xl bg-[#166534] py-3 text-center font-semibold text-white hover:bg-[#14532D] cursor-pointer"
            >
              Explore Dishes →
            </Link>
          </>
        )}
      </div>
    </main>
  )
}

export default Profile
