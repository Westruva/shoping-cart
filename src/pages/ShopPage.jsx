import { useState, useEffect } from "react";
import { useCart } from "../useCart";

export default function ShopPage() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const { addToCart } = useCart();

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((res) => {
				if (!res.ok) throw new Error("Failed to fetch products");
				return res.json();
			})
			.then((data) => {
				setProducts(data);
				setLoading(false);
			})
			.catch((err) => {
				setError(err.message);
				setLoading(false);
			});
	}, []);

	if (loading) {
		return (
			<div className="flex justify-center items-center py-20 text-slate-600 font-semibold">
				Loading products...
			</div>
		);
	}

	if (error) {
		return (
			<div className="bg-red-50 text-red-600 p-6 rounded-2xl text-center max-w-md mx-auto my-12 border border-red-200 font-medium">
				Error: {error}
			</div>
		);
	}

	return (
		<div className="space-y-6">
			<div>
				<h2 className="text-2xl font-bold text-slate-900">Shop Catalog</h2>
				<p className="text-slate-500 text-sm">
					Real products fetched directly from FakeStore API.
				</p>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{products.map((product) => (
					<div
						key={product.id}
						className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
						<div>
							{/* Product Image */}
							<div className="w-full h-48 bg-white rounded-xl mb-4 flex items-center justify-center p-4 border border-slate-100">
								<img
									src={product.image}
									alt={product.title}
									className="max-h-full object-contain"
								/>
							</div>

							{/* Category Tag */}
							<span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">
								{product.category}
							</span>

							{/* Title & Price */}
							<h3
								className="font-semibold text-slate-900 mt-2 line-clamp-2 text-sm h-10"
								title={product.title}>
								{product.title}
							</h3>
							<p className="text-indigo-600 font-black text-xl mt-1">
								${product.price.toFixed(2)}
							</p>
						</div>

						<button
							type="button"
							onClick={() =>
								addToCart({
									id: product.id,
									name: product.title, // Maps 'title' to 'name' so CartPage remains compatible
									price: product.price,
									image: product.image,
								})
							}
							className="mt-4 w-full bg-slate-900 hover:bg-indigo-600 text-white font-medium py-2.5 rounded-xl transition-colors text-sm">
							Add to Cart
						</button>
					</div>
				))}
			</div>
		</div>
	);
}
