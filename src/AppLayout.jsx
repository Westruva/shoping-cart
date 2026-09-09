import { Outlet, NavLink } from "react-router-dom";
import { CartProvider } from "./CartContext";
import { useCart } from "./useCart";

function Navigation() {
	const { totalItems } = useCart();

	const linkClass = ({ isActive }) =>
		`text-sm font-medium transition-colors ${
			isActive
				? "text-indigo-600 font-semibold"
				: "text-slate-600 hover:text-slate-900"
		}`;

	return (
		<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
				<NavLink
					to="/"
					className="text-xl font-bold tracking-tight text-slate-900">
					My<span className="text-indigo-600">Store</span>
				</NavLink>

				<div className="flex items-center gap-6">
					<NavLink to="/" end className={linkClass}>
						Home
					</NavLink>
					<NavLink to="/shop" className={linkClass}>
						Shop
					</NavLink>
					<NavLink
						to="/cart"
						className={`${linkClass} flex items-center gap-1.5`}>
						<span>Cart</span>
						<span className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full text-xs font-bold">
							{totalItems}
						</span>
					</NavLink>
				</div>
			</div>
		</nav>
	);
}

export default function AppLayout() {
	return (
		<CartProvider>
			<div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
				<Navigation />
				<main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-8">
					<Outlet />
				</main>
			</div>
		</CartProvider>
	);
}
