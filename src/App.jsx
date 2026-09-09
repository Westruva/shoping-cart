import { Outlet, NavLink } from "react-router-dom";
import { CartProvider } from "./CartContext";
import { useCart } from "./useCart";

function Navigation() {
	const { totalItems } = useCart();

	return (
		<nav className="navbar">
			<h2 className="logo">MyStore</h2>
			<div className="nav-links">
				<NavLink
					to="/"
					end
					className={({ isActive }) => (isActive ? "active" : "")}>
					Home
				</NavLink>
				<NavLink
					to="/shop"
					className={({ isActive }) => (isActive ? "active" : "")}>
					Shop
				</NavLink>
				<NavLink
					to="/cart"
					className={({ isActive }) => (isActive ? "active" : "")}>
					Cart ({totalItems})
				</NavLink>
			</div>
		</nav>
	);
}

export default function AppLayout() {
	return (
		<CartProvider>
			<Navigation />
			<main className="page-container">
				<Outlet />
			</main>
		</CartProvider>
	);
}
