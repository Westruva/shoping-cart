import { Link } from "react-router-dom";

export default function HomePage() {
	return (
		<div className="space-y-16 py-8">
			{/* Hero Section */}
			<section className="text-center max-w-3xl mx-auto py-12 px-6 space-y-6 rounded-2xl bg-slate-900">
				<h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
					Next-Gen Tech Essentials for Daily Life
				</h1>
				<p className="text-lg text-slate-200 max-w-2xl mx-auto">
					Explore our curated catalog of high-performance keyboards, headphones,
					and workspace accessories.
				</p>
				<Link
					to="/shop"
					className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-indigo-600/20 transition-all hover:-translate-y-0.5">
					Shop Collection
				</Link>
			</section>

			{/* Feature Cards */}
			<section className="grid grid-cols-1 md:grid-cols-3 gap-6">
				<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
					<div className="text-2xl">🚀</div>
					<h3 className="font-bold text-slate-900">Fast Express Shipping</h3>
					<p className="text-sm text-slate-500">
						Delivered straight to your doorstep within 2–3 business days.
					</p>
				</div>

				<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
					<div className="text-2xl">🔒</div>
					<h3 className="font-bold text-slate-900">100% Secure Checkout</h3>
					<p className="text-sm text-slate-500">
						Encrypted payments with support for all major providers.
					</p>
				</div>

				<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
					<div className="text-2xl">⭐</div>
					<h3 className="font-bold text-slate-900">
						30-Day Money-Back Guarantee
					</h3>
					<p className="text-sm text-slate-500">
						Hassle-free returns if you are not fully satisfied with your order.
					</p>
				</div>
			</section>
		</div>
	);
}
