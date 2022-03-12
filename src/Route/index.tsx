import { useCookies } from "react-cookie";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "../Components/Layout";

import Home from "../Pages/Home";
import Login from "../Pages/Login";
import NotFound from "../Pages/NotFound";

//import { AuthProvider } from "../components/GlobalStates";
const data = {
	"data": [
		{
			"title": "Revenue",
			"icon": "receipt",
			"value": "13,456",
			"diff": 34
		},
		{
			"title": "Profit",
			"icon": "coin",
			"value": "4,145",
			"diff": -13
		},
		{
			"title": "Coupons usage",
			"icon": "discount",
			"value": "745",
			"diff": 18
		},
		{
			"title": "New customers",
			"icon": "user",
			"value": "188",
			"diff": -30
		}
	]
}

const Router = () => {
	const [cookies] = useCookies(["user-token"]);

	return (
		<BrowserRouter>
			<Routes>
				<Route

					element={
						cookies["user-token"] ? (
							<Navigate to="/home" />
						) : (
								<Layout />
							)
					}
				>
					<Route path="/home" element={
						<Home  data={data.data} />
					} />
				</Route>
				<Route
					path="/"
					element={
						cookies["user-token"] ? (
							<Navigate to="/home" />
						) : (
							<Login />
						)
					}
				/>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
