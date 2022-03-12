import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { useCookies } from "react-cookie";

const Login = () => {
	// // Cookies
	// const [, setCookie] = useCookies(["user-token"]);
	//
	// const [user, setUser] = useState<LoginUserState>({
	// 	email: "",
	// 	password: "",
	// });
	//
	// const [loading, setLoading] = useState(false);
	//
	// const navigate = useNavigate();
	//
	// const toast = useToast();
	//
	// const handleOnSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
	// 	e.preventDefault();
	// 	setLoading(true);
	// 	const token = await login(user);
	// 	setLoading(false);
	// 	if (token) {
	// 		setCookie("user-token", token);
	// 		navigate("/profile");
	// 	} else {
	// 		toast({
	// 			title: "Algo ha salido mal",
	// 			description: "Usuario y/o contraseña incorrectos",
	// 			status: "error",
	// 			duration: 9000,
	// 			isClosable: true,
	// 		});
	// 	}
	// };
	//
	// const handleOnChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
	// 	setUser({
	// 		...user,
	// 		[e.target.name]: e.target.value,
	// 	});
	// };

	return (
		<p>Login</p>
	);
};

export default Login;
