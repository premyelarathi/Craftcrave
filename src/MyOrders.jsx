import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function MyOrders() {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    async function getOrders() {
      const user = JSON.parse(localStorage.getItem("user") || "null")

      if (!user || !user.email) {
        setLoading(false)
        navigate("/login")
        return
      }

      try {
        const response = await fetch(`http://localhost:5000/api/orders?email=${encodeURIComponent(user.email)}`)

        if (!response.ok) {
          throw new Error("Unable to fetch orders")
        }

        const data = await response.json()
        setOrders(data)
      } catch (error) {
        setError(error.message)
      }

      setLoading(false)
    }

    getOrders()
  }, [navigate])

  if (loading) {
    return (
      <div className="min-h-screen bg-green-50 p-10 text-center">
        Loading Orders...
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-green-50 px-5 py-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-center text-3xl font-bold text-green-800">My Orders</h1>

        {error && <p className="text-center text-red-600">{error}</p>}

        {orders.length === 0 && !error ? (
          <div className="rounded-xl bg-white p-10 text-center shadow">
            <h2 className="text-xl font-semibold text-gray-800">No Orders Found</h2>
            <p className="mt-2 text-gray-500">You haven't placed any orders yet.</p>
            <Link to="/" className="mt-5 inline-block cursor-pointer rounded-lg bg-green-700 px-6 py-3 text-white">Explore Meals</Link>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map(order => (
              <div key={order._id} className="rounded-xl border border-green-700 bg-white p-6 shadow">
                <div className="mb-5 flex flex-wrap justify-between gap-3">
                  <div>
                    <h2 className="text-xl font-bold text-green-800">Order Details</h2>
                    <p className="mt-1 text-sm text-gray-500">Order ID: {order._id}</p>
                  </div>
                  <span className="h-fit rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-800">{order.orderStatus}</span>
                </div>

                <div className="mb-5 grid gap-3 text-gray-700 md:grid-cols-2">
                  <p><b>Customer:</b> {order.customerName}</p>
                  <p><b>Phone:</b> {order.phone}</p>
                  <p><b>Address:</b> {order.address}</p>
                  <p><b>Pincode:</b> {order.pincode}</p>
                  <p><b>Payment:</b> {order.paymentMethod}</p>
                  <p><b>Date:</b> {new Date(order.createdAt).toLocaleString()}</p>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <h3 className="mb-4 font-bold text-green-800">Ordered Meals</h3>
                  {order.items.map((item, index) => (
                    <div key={index} className="mb-3 flex flex-wrap justify-between gap-3 rounded-lg bg-green-50 p-4">
                      <div>
                        <p className="font-semibold text-gray-900">{item.name}</p>
                        <p className="text-sm text-gray-600">Restaurant: {item.restaurant}</p>
                        <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                        <p className="text-sm text-gray-600">Calories: {item.calories * item.quantity} kcal</p>
                      </div>
                      <p className="font-bold text-green-800">₹{item.price * item.quantity}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap justify-between gap-3 border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-700">Total Items: {order.totalItems}</p>
                  <p className="text-xl font-bold text-green-800">Total: ₹{order.totalPrice}</p>
                </div>

                <div className="mt-5 border-t border-gray-200 pt-4">
                  <Link to={`/track-order/${order._id}`} className="inline-block cursor-pointer rounded-lg bg-green-700 px-6 py-3 font-semibold text-white hover:bg-green-800">Track Order</Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default MyOrders