
import { FiShoppingCart } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function Cart({ count = 0 }) {
  return (
    <Link
      to="/cart"
      className="relative grid size-10 place-items-center rounded-full text-xl text-[#14532D] transition-colors hover:bg-[#DCFCE7] cursor-pointer"
      aria-label={`Shopping cart, ${count} items`}
    >
      <FiShoppingCart aria-hidden="true" />

      <span className="absolute right-0 top-0 grid min-h-4 min-w-4 place-items-center rounded-full bg-red-600 px-1 text-[10px] font-bold leading-none text-white">
        {count}
      </span>
    </Link>
  )
}

export default Cart
