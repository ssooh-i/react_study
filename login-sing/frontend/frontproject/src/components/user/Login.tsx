import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Login: React.FC = () => {
	const formRef = useRef<HTMLFormElement>(null);
	const [cookies, setCookie] = useCookies(["email"]); //쿠키 훅
	const navigate = useNavigate();

	const login = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		axios
			.post<{ token: string }>("/users/login", {
				//login요청
				id: formRef.current!.id,
				password: formRef.current!.passWord.value,
			})
			.then((res) => {
				setCookie("email", res.data.token); //쿠키에 저장
			});
	};

	return (
		<form ref={formRef} onSubmit={login}>
			<input type=" email" name="email" placeholder="email" required />
			<input type="password" name="passWord" placeholder="passWord" required />
			<input type="submit"></input>
		</form>
	);
};

export default Login;
