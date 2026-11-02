import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Checkout({ cartItems = [], setCartItems }) {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [pincode, setPincode] = useState("")
  const [payment, setPayment] = useState("COD")
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [orderId, setOrderId] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)

  async function placeOrder(e) {
    e.preventDefault()
    if (cartItems.length === 0) return

    const user = JSON.parse(localStorage.getItem("user") || "null")

    if (!user || !user.email) {
      setError("Please login before placing an order.")
      return
    }

    setLoading(true)
    setError("")

    const orderData = {
      customerName: name,
      customerEmail: user.email.toLowerCase().trim(),
      phone,
      address,
      pincode,
      items: cartItems.map(item => ({
        id: Number(item.id),
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        calories: item.calories,
        restaurant: item.restaurant || "CraftCrave"
      })),
      totalItems,
      totalPrice,
      paymentMethod: payment
    }

    try {
      const response = await fetch("https://craftcrave.onrender.com/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData)
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Order Failed")
      }

      setOrderId(data.order._id)
      setOrderPlaced(true)
      setCartItems([])
    } catch (error) {
      setError(error.message)
    }

    setLoading(false)
  }

  if (orderPlaced) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-green-50 px-5">
        <div className="w-full max-w-lg rounded-2xl bg-white p-10 text-center shadow-lg">
          <div className="mb-5 text-6xl text-green-600">✓</div>
          <h1 className="mb-4 text-3xl font-bold text-green-700">Order Placed Successfully!</h1>
          <p className="mb-3 text-gray-600">Thank you for ordering with CraftCrave.</p>
          <p className="mb-7 text-sm text-gray-500">Order ID: {orderId}</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <button onClick={() => navigate(`/track-order/${orderId}`)} className="cursor-pointer rounded-lg bg-green-700 px-6 py-3 font-semibold text-white hover:bg-green-800">Track Your Order</button>
            <button onClick={() => navigate("/")} className="cursor-pointer rounded-lg border border-green-700 px-6 py-3 text-green-800 hover:bg-green-50">Back to Home</button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-green-50 px-5 py-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-center text-3xl font-bold text-green-800">Checkout</h1>

        {cartItems.length === 0 ? (
          <div className="rounded-xl bg-white p-8 text-center">
            <p className="text-lg text-gray-600">Your cart is empty.</p>
            <button onClick={() => navigate("/")} className="mt-5 cursor-pointer rounded-lg bg-green-700 px-6 py-3 text-white">Explore Meals</button>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2">
            <form onSubmit={placeOrder} className="rounded-xl border border-green-700 bg-white p-7 shadow">
              <h2 className="mb-6 text-xl font-bold text-green-800">Delivery Details</h2>

              <label className="mb-2 block font-medium text-gray-800">Full Name</label>
              <input type="text" value={name} onChange={e => setName(e.target.value)} required className="mb-4 w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-900" placeholder="Enter your name" />

              <label className="mb-2 block font-medium text-gray-800">Phone Number</label>
              <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} pattern="[0-9]{10}" required className="mb-4 w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-900" placeholder="Enter 10 digit phone number" />

              <label className="mb-2 block font-medium text-gray-800">Delivery Address</label>
              <textarea value={address} onChange={e => setAddress(e.target.value)} required className="mb-4 w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-900" placeholder="Enter your delivery address" rows="3" />

              <label className="mb-2 block font-medium text-gray-800">Pincode</label>
              <input type="text" value={pincode} onChange={e => setPincode(e.target.value)} pattern="[0-9]{6}" required className="mb-6 w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-900" placeholder="Enter 6 digit pincode" />

              <h2 className="mb-4 text-xl font-bold text-green-800">Payment Method</h2>

              <label className="mb-3 flex items-center gap-3 rounded-lg border border-gray-300 bg-white p-4 text-gray-800">
                <input type="radio" className="cursor-pointer" name="payment" value="PhonePe" checked={payment === "PhonePe"} onChange={e => setPayment(e.target.value)} />
                PhonePe (UPI)
              </label>

              <label className="mb-6 flex items-center gap-3 rounded-lg border border-gray-300 bg-white p-4 text-gray-800">
                <input type="radio" className="cursor-pointer" name="payment" value="COD" checked={payment === "COD"} onChange={e => setPayment(e.target.value)} />
                Cash on Delivery
              </label>

              {error && <p className="mb-4 rounded-lg bg-red-100 p-3 text-red-700">{error}</p>}

              <button type="submit" disabled={loading} className="w-full cursor-pointer rounded-lg bg-green-700 py-3 font-semibold text-white hover:bg-green-800 disabled:opacity-50">
                {loading ? "Placing Order..." : "Place Order"}
              </button>
            </form>

            <div className="h-fit rounded-xl border border-green-700 bg-white p-7 shadow">
              <h2 className="mb-6 text-xl font-bold text-green-800">Order Summary</h2>
              {cartItems.map(item => (
                <div key={item.id} className="mb-4 flex justify-between gap-4 border-b border-gray-200 pb-4">
                  <div>
                    <p className="font-semibold text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                    <p className="text-sm text-gray-600">Calories: {item.calories * item.quantity} kcal</p>
                  </div>
                  <p className="font-semibold text-gray-900">₹{item.price * item.quantity}</p>
                </div>
              ))}
              <div className="mt-6 space-y-3 text-gray-700">
                <div className="flex justify-between"><span>Total Items</span><span>{totalItems}</span></div>
                <div className="flex justify-between text-xl font-bold text-green-800"><span>Total Price</span><span>₹{totalPrice}</span></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Checkout