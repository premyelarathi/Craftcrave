
import { useNavigate } from "react-router-dom"

function CartPage({ cartItems = [], setCartItems }) {
  const navigate = useNavigate()

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity, 0
  )

  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity, 0
  )

  function removeItem(id) {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-white px-4 py-8 md:px-8">
        <h1 className="mb-8 text-center text-[2.2rem] font-bold text-[#111827]">
          Your Cart
        </h1>
        <div className="mx-auto max-w-xl rounded-[20px] bg-white p-10 text-center shadow-md">
          <h2 className="text-xl font-semibold text-[#111827]">
            Your Cart is Empty!
          </h2>
          <p className="mt-2 text-gray-500">
            Add your favourite meals to continue.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white px-4 py-8 md:px-8">
      <h1 className="mb-8 text-center text-[2.2rem] font-bold text-[#111827]">
        Your Cart
      </h1>
      <div className="mx-auto max-w-[860px] space-y-8">
        {cartItems.map(item => (
          <div key={item.id} className="mx-auto flex max-w-[820px] items-start justify-center gap-8">
            <div className="flex h-[300px] w-[320px] shrink-0 items-center justify-center overflow-hidden rounded-[18px] border-[3px] border-[#166534] bg-[#f7f7f7] shadow-sm">
              <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
            </div>
            <div className="w-[420px] rounded-[18px] border-[3px] border-[#166534] bg-[#f7f7f7] px-7 py-6 shadow-sm">
              <div className="space-y-3 text-[1.05rem] text-[#1f2937]">
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-[#111827]">Order name:</span>
                  <span>{item.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-[#111827]">Restaurant:</span>
                  <span>{item.restaurant}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-[#111827]">Price:</span>
                  <span>₹{item.price}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-[#111827]">Serves:</span>
                  <span>{item.quantity}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-[#111827]">Calories:</span>
                  <span>{item.calories * item.quantity} kcal</span>
                </div>
              </div>
              <div className="my-5 border-t border-dashed border-[#166534]" />
              <div className="space-y-3">
                <h2 className="text-[1.1rem] font-bold text-[#111827]">
                  Order Summary
                </h2>
                <p className="text-[1.05rem] text-[#111827]">
                  {item.quantity} x {item.name} — ₹{item.price * item.quantity}
                </p>
                <p className="text-[1.05rem] font-semibold text-[#166534]">
                  Total: ₹{item.price * item.quantity}
                </p>
              </div>
              <div className="mt-5 flex gap-3">
                <button
                  type="button"
                  onClick={() => removeItem(item.id)}
                  className="w-full cursor-pointer rounded-[10px] border border-red-600 px-4 py-3 text-base font-semibold text-red-600 transition hover:bg-red-50"
                >
                  Remove
                </button>
                <button
                  type="button"
                  onClick={() => navigate("/Checkout")}
                  className="w-full cursor-pointer rounded-[10px] bg-[#166534] px-4 py-3 text-base font-semibold text-white shadow-md transition hover:bg-[#14532D]"
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="mx-auto max-w-[820px] rounded-[18px] border-[3px] border-[#166534] bg-[#f7f7f7] px-7 py-6 shadow-sm">
          <h2 className="mb-4 text-[1.4rem] font-bold text-[#14532D]">
            Order Summary
          </h2>
          <div className="space-y-3 text-[1.05rem] text-[#1f2937]">
            {cartItems.map(item => (
              <div key={item.id} className="flex justify-between gap-4">
                <span>{item.quantity} x {item.name}</span>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 border-t border-dashed border-[#166534] pt-4">
            <div className="flex items-center justify-between text-[1.05rem]">
              <span className="font-semibold text-[#111827]">Total Items</span>
              <span>{totalItems}</span>
            </div>
            <div className="mt-2 flex items-center justify-between text-[1.05rem]">
              <span className="font-semibold text-[#111827]">Total</span>
              <span className="text-[1.4rem] font-bold text-[#166534]">₹{totalPrice}</span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => navigate("/Checkout")}
            className="mt-5 w-full cursor-pointer rounded-[10px] bg-[#166534] px-4 py-3 text-base font-semibold text-white shadow-md transition hover:bg-[#14532D]"
          >
            Order all
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartPage
