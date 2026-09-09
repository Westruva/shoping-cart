import { Link } from "react-router-dom";
import { useCart } from "../useCart";

export default function CartPage() {
	const { cart, updateQuantity, removeFromCart, subtotal, clearCart } =
		useCart();

	if (cart.length === 0) {
		return (
			<div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-md mx-auto space-y-4">
				<div className="text-4xl">🛒</div>
				<h2 className="text-xl font-bold text-black">Your Cart is Empty</h2>
				<p className="text-slate-500 text-sm">
					Looks like you haven't added any products yet.
				</p>
				<Link
					to="/shop"
					className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-6 py-2.5 rounded-xl transition-colors">
					Explore Shop
				</Link>
			</div>
		);
	}

	return (
		<div className="space-y-6">
			<h2 className="text-2xl font-bold text-slate-900">Shopping Cart</h2>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
				{/* Cart Item List */}
				<div className="lg:col-span-2 space-y-4">
					{cart.map((item) => (
						<div
							key={item.id}
							className="bg-white rounded-xl border border-slate-200 p-4 flex items-center justify-between shadow-sm gap-4">
							{/* Product Image Thumbnail */}
							{item.image && (
								<img
									src={item.image}
									alt={item.name}
									className="w-12 h-12 object-contain bg-white rounded p-1 border border-slate-100"
								/>
							)}
							<div className="flex-1">
								<h4 className="font-semibold text-slate-900">{item.name}</h4>
								<p className="text-slate-500 text-sm">
									${item.price.toFixed(2)} each
								</p>
							</div>

							{/* Quantity Selector */}
							<div className="flex items-center gap-2 bg-slate-100 rounded-lg p-1">
								<button
									type="button"
									onClick={() => updateQuantity(item.id, -1)}
									className="w-7 h-7 flex items-center justify-center bg-white rounded shadow-sm hover:bg-slate-200 text-slate-700 font-bold text-sm">
									-
								</button>
								<span className="w-6 text-center text-sm font-semibold text-slate-800">
									{item.quantity}
								</span>
								<button
									type="button"
									onClick={() => updateQuantity(item.id, 1)}
									className="w-7 h-7 flex items-center justify-center bg-white rounded shadow-sm hover:bg-slate-200 text-slate-700 font-bold text-sm">
									+
								</button>
							</div>

							<div className="text-right min-w-[70px]">
								<p className="font-bold text-slate-900">
									${(item.price * item.quantity).toFixed(2)}
								</p>
							</div>

							<button
								type="button"
								onClick={() => removeFromCart(item.id)}
								className="text-slate-400 hover:text-red-500 text-xl px-1 transition-colors"
								aria-label="Remove item">
								&times;
							</button>
						</div>
					))}

					<button
						type="button"
						onClick={clearCart}
						className="text-xs font-semibold text-slate-500 hover:text-red-600 transition-colors">
						Clear Entire Cart
					</button>
				</div>

				{/* Summary Card */}
				<div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm h-fit space-y-6">
					<h3 className="font-bold text-slate-900 text-lg border-b border-slate-100 pb-3">
						Order Summary
					</h3>

					<div className="space-y-2 text-sm">
						<div className="flex justify-between text-slate-600">
							<span>Subtotal</span>
							<span className="font-semibold text-slate-900">
								${subtotal.toFixed(2)}
							</span>
						</div>
						<div className="flex justify-between text-slate-600">
							<span>Estimated Shipping</span>
							<span className="text-emerald-600 font-semibold">Free</span>
						</div>
					</div>

					<div className="border-t border-slate-100 pt-4 flex justify-between font-bold text-slate-900 text-base">
						<span>Total</span>
						<span className="text-indigo-600">${subtotal.toFixed(2)}</span>
					</div>

					<button
						type="button"
						onClick={() => alert("Proceeding to checkout!")}
						className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition-colors shadow-md shadow-indigo-600/20 text-sm">
						Checkout Now
					</button>
				</div>
			</div>
		</div>
	);
}
