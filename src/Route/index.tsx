import { useCookies } from "react-cookie";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "../Components/Layout";

import Home from "../Pages/Home";
import Login from "../Pages/Login";
import NotFound from "../Pages/NotFound";

//import { AuthProvider } from "../components/GlobalStates";


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
						<Home />
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
