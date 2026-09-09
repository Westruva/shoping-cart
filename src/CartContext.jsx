import { useCallback, useMemo, useState } from "react";
import { CartContext } from "./cart-context";

export function CartProvider({ children }) {
	const [cart, setCart] = useState([]);

	const addToCart = useCallback((product) => {
		setCart((prev) => {
			const existingIndex = prev.findIndex((item) => item.id === product.id);
			if (existingIndex > -1) {
				return prev.map((item, index) =>
					index === existingIndex
						? { ...item, quantity: item.quantity + 1 }
						: item,
				);
			}
			return [...prev, { ...product, quantity: 1 }];
		});
	}, []);

	const updateQuantity = useCallback((id, delta) => {
		setCart((prev) =>
			prev
				.map((item) => {
					if (item.id === id) {
						const nextQty = item.quantity + delta;
						return nextQty > 0 ? { ...item, quantity: nextQty } : null;
					}
					return item;
				})
				.filter(Boolean),
		);
	}, []);

	const removeFromCart = useCallback((id) => {
		setCart((prev) => prev.filter((item) => item.id !== id));
	}, []);

	const clearCart = useCallback(() => setCart([]), []);

	const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
	const subtotal = cart.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0,
	);

	const value = useMemo(
		() => ({
			cart,
			addToCart,
			updateQuantity,
			removeFromCart,
			clearCart,
			totalItems,
			subtotal,
		}),
		[
			cart,
			addToCart,
			updateQuantity,
			removeFromCart,
			clearCart,
			totalItems,
			subtotal,
		],
	);

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
