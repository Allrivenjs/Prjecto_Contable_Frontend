import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";





//import { register, RegisterUserState } from "../services/authService";

import { useCookies } from "react-cookie";

const Register = () => {
	// Cookies
	const [, setCookie] = useCookies(["user-token"]);

	const [showPassword, setShowPassword] = useState(false);

	// const [newUser, setNewUser] = useState<RegisterUserState>({
	// 	name: "",
	// 	lastname: "",
	// 	email: "",
	// 	phone: 0,
	// 	birthday: "",
	// 	password: "",
	// });

	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();

	const handleOnSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		// const token = await register(newUser);
		// setLoading(false);
		// if (token) {
		// 	setCookie("user-token", token);
		// 	navigate("/profile");
		// }
	};

	// const handleOnChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
	// 	setNewUser({
	// 		...newUser,
	// 		[e.target.name]: e.target.value,
	// 	});
	// };

	return (
		<p>Register</p>
	);
};

export default Register;
