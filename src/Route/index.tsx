import { useCookies } from "react-cookie";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "../Components/Layout";

import Home from "../Pages/Home";
import Login from "../Pages/Login";
import NotFound from "../Pages/NotFound";

//import { AuthProvider } from "../components/GlobalStates";
import Register from "../Pages/Register";

const Router = () => {
	const [cookies] = useCookies(["user-token"]);

	return (
		<BrowserRouter>
			<Routes>
				<Route

					element={
							<Layout />
					}
				>
					<Route
						path="/register"
						element={
							cookies["user-token"] ? (
								<Navigate to="/" />
							) : (
								<Register />
							)
						}
					/>

					<Route
						path="/login"
						element={
							cookies["user-token"] ? (
								<Navigate to="/" />
							) : (
								<Login />
							)
						}
					/>

					<Route path="/" element={<Home />} />



				</Route>



				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
