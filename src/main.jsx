import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import AppLayout from "./AppLayout";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import CartPage from "./pages/CartPage";
import NotFoundPage from "./pages/NotFoundPage";
import ErrorPage from "./pages/ErrorPage";

const routes = [
	{
		path: "/",
		element: <AppLayout />,
		errorElement: <ErrorPage />, // Catches unexpected runtime crashes & boundary errors
		children: [
			{ index: true, element: <HomePage /> },
			{ path: "shop", element: <ShopPage /> },
			{ path: "cart", element: <CartPage /> },
			{ path: "*", element: <NotFoundPage /> }, // Catches all unmatched URLs inside AppLayout
		],
	},
];

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
