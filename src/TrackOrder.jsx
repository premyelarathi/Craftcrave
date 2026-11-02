
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

const restaurantIcon = L.divIcon({
  html: "🍽️",
  className: "text-3xl",
  iconSize: [35, 35],
  iconAnchor: [17, 17]
})

const deliveryIcon = L.divIcon({
  html: "🛵",
  className: "text-3xl",
  iconSize: [35, 35],
  iconAnchor: [17, 17]
})

const customerIcon = L.divIcon({
  html: "🏠",
  className: "text-3xl",
  iconSize: [35, 35],
  iconAnchor: [17, 17]
})

function TrackOrder() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [order, setOrder] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [status, setStatus] = useState("Preparing")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    async function getOrder() {
      try {
        const response = await fetch(
          `https://craftcrave.onrender.com/api/orders/${id}`
        )

        if (!response.ok) {
          throw new Error("Order not found")
        }

        const data = await response.json()
        setOrder(data)
        setStatus("Preparing")

      } catch (error) {
        setError(error.message)
      }

      setLoading(false)
    }

    getOrder()
  }, [id])

  const route = order?.tracking?.route || []

  useEffect(() => {
    if (!order || route.length < 2) return

    async function updateStatus(nextStatus) {
      try {
        await fetch(`https://craftcrave.onrender.com/api/orders/${id}/status`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ orderStatus: nextStatus })
        })
      } catch (error) {
        console.log(error.message)
      }
    }

    async function updateLocation(index) {
      try {
        await fetch(`https://craftcrave.onrender.com/api/orders/${id}/tracking`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            lat: route[index].lat,
            lng: route[index].lng,
            estimatedMinutes: (route.length - 1 - index) * 3
          })
        })
      } catch (error) {
        console.log(error.message)
      }
    }

    updateStatus("Preparing")

    const timer = setInterval(() => {
      setCurrentIndex((previous) => {
        const next = Math.min(previous + 1, route.length - 1)

        if (next !== previous) {
          let nextStatus = "On the Way"

          if (next === 1) {
            nextStatus = "Picked Up"
          }

          if (next === route.length - 1) {
            nextStatus = "Delivered"
          }

          setStatus(nextStatus)
          updateStatus(nextStatus)
          updateLocation(next)
        }

        return next
      })
    }, 5000)

    return () => clearInterval(timer)
  }, [order, id])

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-green-50">
        Loading Order Tracking...
      </div>
    )
  }

  if (error || !order) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-green-50">
        <h2 className="text-2xl font-bold text-red-600">
          {error || "Order Not Found"}
        </h2>
        <button
          onClick={() => navigate("/myorders")}
          className="rounded-lg bg-green-700 px-6 py-3 text-white cursor-pointer"
        >
          Back to My Orders
        </button>
      </div>
    )
  }

  if (route.length < 2) {
    return (
      <div className="p-10 text-center">
        Tracking route is not available for this order.
      </div>
    )
  }

  const currentLocation = route[currentIndex]
  const estimatedMinutes = Math.max(
    0,
    (route.length - 1 - currentIndex) * 3
  )

  const steps = [
    "Pending",
    "Preparing",
    "Picked Up",
    "On the Way",
    "Delivered"
  ]

  const statusIndex = steps.indexOf(status)

  return (
    <div className="min-h-screen bg-green-50 px-5 py-10">
      <div className="mx-auto max-w-6xl">

        <h1 className="mb-2 text-center text-3xl font-bold text-green-800">
          Track Your Order
        </h1>

        <p className="mb-8 text-center text-gray-500">
          CraftCrave Delivery Tracking
        </p>

        <div className="mb-6 grid gap-5 md:grid-cols-2">

          <div className="rounded-xl bg-white p-6 shadow">
            <p className="text-sm text-gray-500">Order ID</p>
            <p className="mt-1 break-all font-semibold text-gray-800">
              {order._id}
            </p>

            <p className="mt-4 text-sm text-gray-500">Customer</p>
            <p className="font-semibold text-gray-800">
              {order.customerName}
            </p>

            <p className="mt-4 text-sm text-gray-500">Delivery Address</p>
            <p className="font-semibold text-gray-800">
              {order.address}, {order.pincode}
            </p>
          </div>

          <div className="flex flex-col justify-center rounded-xl bg-green-800 p-6 text-white shadow">
            <p className="text-sm text-green-200">
              Current Order Status
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              {status}
            </h2>

            <p className="mt-4 text-sm text-green-200">
              Estimated Delivery
            </p>

            <h2 className="mt-1 text-3xl font-bold">
              {estimatedMinutes === 0
                ? "Delivered"
                : `${estimatedMinutes} Minutes`}
            </h2>
          </div>

        </div>

        {/* Map */}
        <div className="mb-8 overflow-hidden rounded-xl bg-white p-3 shadow">
          <h2 className="mb-4 px-2 text-xl font-bold text-green-800">
            Live Order Route
          </h2>

          <MapContainer
            key={order._id}
            center={route[0]}
            zoom={15}
            scrollWheelZoom={true}
            style={{ height: "400px", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a class="cursor-pointer" href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Polyline
              positions={route}
              pathOptions={{
                color: "green",
                weight: 5
              }}
            />

            <Marker position={route[0]} icon={restaurantIcon}>
              <Popup>Restaurant</Popup>
            </Marker>

            <Marker position={route[route.length - 1]} icon={customerIcon}>
              <Popup>Customer Location</Popup>
            </Marker>

            <Marker position={currentLocation} icon={deliveryIcon}>
              <Popup>Delivery Partner</Popup>
            </Marker>
          </MapContainer>

          <p className="mt-3 text-center text-xs text-gray-500">
            Demo tracking: delivery marker moves automatically every 5 seconds.
          </p>
        </div>

        {/* Order Progress */}
        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="mb-6 text-xl font-bold text-green-800">
            Order Progress
          </h2>

          <div className="space-y-5">
            {steps.map((step, index) => (
              <div key={step} className="flex items-center gap-4">
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-full font-bold ${
                    index <= statusIndex
                      ? "bg-green-700 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {index <= statusIndex ? "✓" : index + 1}
                </div>

                <p
                  className={`font-semibold ${
                    index <= statusIndex
                      ? "text-green-800"
                      : "text-gray-400"
                  }`}
                >
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={() => navigate("/myorders")}
            className="rounded-lg bg-green-700 px-7 py-3 font-semibold text-white hover:bg-green-800 cursor-pointer"
          >
            Back to My Orders
          </button>
        </div>

      </div>
    </div>
  )
}

export default TrackOrder
