import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

export default function ErrorPage() {
	const error = useRouteError();

	return (
		<div className="error-page">
			<h1>Oops!</h1>
			<p>
				{isRouteErrorResponse(error)
					? `${error.status} — ${error.statusText}`
					: error?.message || "An unexpected error occurred."}
			</p>
			<Link to="/">Return to Home</Link>
		</div>
	);
}
