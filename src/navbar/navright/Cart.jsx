import { FiShoppingCart } from 'react-icons/fi'

function Cart({ count = 0 }) {
  return (
    <button
      className="relative grid size-10 place-items-center rounded-full text-xl text-white transition-colors hover:bg-white/10"
      type="button"
      aria-label={`Shopping cart, ${count} items`}
    >
      <FiShoppingCart aria-hidden="true" />
      <span className="absolute right-0 top-0 grid min-h-4 min-w-4 place-items-center rounded-full bg-red-600 px-1 text-[10px] font-bold leading-none text-white" aria-live="polite">
        {count}
      </span>
    </button>
  )
}

export default Cart
