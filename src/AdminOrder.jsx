
import { useEffect, useState, useCallback } from "react"
import { Link, useNavigate } from "react-router-dom"

function AdminOrders() {
  const navigate = useNavigate()

  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [filter, setFilter] = useState("All")

  const statusOptions = [
    "Pending",
    "Preparing",
    "Picked Up",
    "On the Way",
    "Out for Delivery",
    "Delivered"
  ]

  // Fetch Orders
  const getOrders = useCallback(async () => {
    try {
      const response = await fetch("https://craftcrave.onrender.com/api/orders")

      if (!response.ok) {
        throw new Error("Unable to fetch orders")
      }

      const data = await response.json()
      setOrders(data)

    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }, [])

  // Admin Login Check
  useEffect(() => {
    if (localStorage.getItem("adminLoggedIn") !== "true") {
      navigate("/adminlogin", { replace: true })
    } else {
      getOrders()
    }
  }, [navigate, getOrders])

  // Update Order Status
  const updateStatus = async (id, newStatus) => {
    try {
      const response = await fetch(
        `https://craftcrave.onrender.com/api/orders/${id}/status`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            orderStatus: newStatus
          })
        }
      )

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Status update failed")
      }

      setOrders((previous) =>
        previous.map((order) =>
          order._id === id ? data.order : order
        )
      )

    } catch (error) {
      alert(error.message)
    }
  }

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn")
    navigate("/adminlogin", { replace: true })
  }

  // Dashboard Calculations
  const totalRevenue = orders.reduce(
    (total, order) => total + (order.totalPrice || 0),
    0
  )

  const pendingOrders = orders.filter(
    (order) => order.orderStatus === "Pending"
  ).length

  const deliveredOrders = orders.filter(
    (order) => order.orderStatus === "Delivered"
  ).length

  const filteredOrders = orders.filter((order) => {
    if (filter === "All") return true
    return order.orderStatus === filter
  })

  if (localStorage.getItem("adminLoggedIn") !== "true") {
    return null
  }

  if (loading) {
    return (
      <h2 className="p-10 text-center text-green-900">
        Loading Admin Dashboard...
      </h2>
    )
  }

  if (error) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-red-600">{error}</h2>
        <button
          onClick={getOrders}
          className="mt-4 cursor-pointer rounded-lg bg-green-800 px-5 py-2 text-white"
        >
          Try Again
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F0FDF4] px-4 py-10">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">

          <div>
            <h1 className="text-3xl font-bold text-green-950">
              Admin Dashboard
            </h1>

            <p className="mt-1 text-gray-600">
              CraftCrave Order Management
            </p>
          </div>

          <div className="flex gap-3">

            <Link
              to="/"
              className="rounded-lg bg-green-700 px-5 py-2 font-semibold text-white hover:bg-green-800 cursor-pointer"
            >
              Home
            </Link>

            <button
              onClick={handleLogout}
              className="rounded-lg bg-red-600 px-5 py-2 font-semibold text-white hover:bg-red-700 cursor-pointer"
            >
              Logout
            </button>

          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="mb-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-xl bg-white p-6 shadow">
            <p className="text-gray-500">Total Orders</p>
            <h2 className="mt-2 text-3xl font-bold text-green-900">
              {orders.length}
            </h2>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <p className="text-gray-500">Total Revenue</p>
            <h2 className="mt-2 text-3xl font-bold text-green-900">
              ₹{totalRevenue}
            </h2>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <p className="text-gray-500">Pending Orders</p>
            <h2 className="mt-2 text-3xl font-bold text-orange-600">
              {pendingOrders}
            </h2>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <p className="text-gray-500">Delivered Orders</p>
            <h2 className="mt-2 text-3xl font-bold text-green-700">
              {deliveredOrders}
            </h2>
          </div>

        </div>

        {/* Orders Section */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">

          <h2 className="text-2xl font-bold text-green-950">
            Customer Orders
          </h2>

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="rounded-lg border border-green-700 bg-white px-4 py-2 font-semibold text-green-900 outline-none cursor-pointer"
          >
            <option value="All">All Orders</option>

            {statusOptions.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}

          </select>
        </div>

        {/* Orders List */}
        {filteredOrders.length === 0 ? (

          <p className="rounded-xl bg-white p-10 text-center text-gray-600 shadow">
            No Orders Found
          </p>

        ) : (

          <div className="space-y-6">

            {filteredOrders.map((order) => (

              <div
                key={order._id}
                className="rounded-xl border border-green-200 bg-white p-6 shadow-md"
              >

                {/* Customer and Status */}
                <div className="mb-5 flex flex-wrap items-center justify-between gap-4">

                  <div>
                    <h3 className="text-xl font-bold text-green-950">
                      {order.customerName}
                    </h3>

                    <p className="mt-1 break-all text-xs text-gray-500">
                      Order ID: {order._id}
                    </p>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold text-green-900">
                      Update Status
                    </label>

                    <select
                      value={order.orderStatus}
                      onChange={(e) =>
                        updateStatus(order._id, e.target.value)
                      }
                      className="w-48 rounded-lg border-2 border-green-700 bg-green-900 px-3 py-2 font-semibold text-white outline-none cursor-pointer"
                    >
                      {statusOptions.map((status) => (
                        <option
                          key={status}
                          value={status}
                          className="bg-white text-green-900"
                        >
                          {status}
                        </option>
                      ))}
                    </select>
                  </div>

                </div>

                {/* Customer Details */}
                <div className="grid gap-3 text-gray-700 sm:grid-cols-2">

                  <p>
                    <strong>Phone:</strong> {order.phone}
                  </p>

                  <p>
                    <strong>Pincode:</strong> {order.pincode}
                  </p>

                  <p className="sm:col-span-2">
                    <strong>Address:</strong> {order.address}
                  </p>

                  <p>
                    <strong>Payment:</strong> {order.paymentMethod}
                  </p>

                  <p>
                    <strong>Total Items:</strong> {order.totalItems}
                  </p>

                  <p className="sm:col-span-2">
                    <strong>Order Date:</strong>{" "}
                    {new Date(order.createdAt).toLocaleString()}
                  </p>

                </div>

                <hr className="my-5 border-green-200" />

                {/* Ordered Items */}
                <h3 className="mb-4 text-lg font-bold text-green-900">
                  Ordered Items
                </h3>

                <div className="space-y-3">

                  {order.items.map((item, index) => (

                    <div
                      key={index}
                      className="flex flex-wrap items-center justify-between gap-3 rounded-lg bg-green-50 p-4"
                    >

                      <div>
                        <p className="font-bold text-green-900">
                          {item.name}
                        </p>

                        <p className="text-sm text-gray-600">
                          Restaurant: {item.restaurant}
                        </p>

                        <p className="text-sm text-gray-600">
                          Quantity: {item.quantity}
                        </p>

                        <p className="text-sm text-gray-600">
                          Calories: {item.calories * item.quantity} kcal
                        </p>
                      </div>

                      <p className="font-bold text-green-800">
                        ₹{item.price * item.quantity}
                      </p>

                    </div>

                  ))}

                </div>

                {/* Total and Tracking */}
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-green-200 pt-4">

                  <Link
                    to={`/track-order/${order._id}`}
                    className="rounded-lg bg-green-800 px-5 py-2 font-semibold text-white hover:bg-green-900 cursor-pointer"
                  >
                    Track Order
                  </Link>

                  <p className="text-xl font-bold text-green-950">
                    Total: ₹{order.totalPrice}
                  </p>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>
    </div>
  )
}

export default AdminOrders
