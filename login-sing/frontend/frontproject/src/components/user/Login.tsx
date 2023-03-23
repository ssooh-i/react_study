import axios from "axios";
import React, { useState, useCallback, ChangeEvent, useRef } from "react";
import { useNavigate, Route } from "react-router-dom";
import Main from "../main/main";
import { getTest, login } from "../../api/userAPI";
import { userEmail, userNickName } from "../../atoms";
import { useRecoilState } from "recoil";
import { useCookies } from "react-cookie";
import { setCookie, getCookie, removeCookie } from "../../assets/cookie";

const Login: React.FC = () => {
	const [cookies, setCookie] = useCookies(["cookie"]); //쿠키 훅
	const navigate = useNavigate();

	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
	// const isEmailValid = useRef(null);
	const [isPwdValid, setIsPwdValid] = useState<boolean>(false);

	//email 유효성 검사 양식
	const validateEmail = () => {
		console.log("useState email", email);
		console.log("validateEmail 호출됨");

		if (email === "") {
			alert("이메일 작성해주세요");
		} else {
			const checkEmail = (email: string) => {
				return email
					.toLowerCase()
					.match(
						/([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
					);
			};
			console.log("checkEmail=", checkEmail(email));
			if (checkEmail(email) === null) {
				alert("올바른 이메일 형식이 아닙니다.");
			} else {
				// isEmailValid.current.focus();
				setIsEmailValid(true);
				console.log("isEmailValid=", isEmailValid);
			}
		}
		return;
	};

	//password 유효성 검사 양식
	const validatePwd = () => {
		console.log("useState password", password);
		console.log("validatePwd 호출됨");

		if (email === "") {
			alert("password 작성해주세요");
		} else {
			const checkPassword = (password: string) => {
				return password
					.toLowerCase()
					.match(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/);
			};
			console.log("checkEmail=", checkPassword(password));
			console.log("password: ", password);
			if (checkPassword(password) === null) {
				alert("올바른 password 형식이 아닙니다.");
			} else {
				// isEmailValid.current.focus();
				setIsPwdValid(true);
				console.log("isPwdValid=", isPwdValid);
			}
		}
		return;
	};

	//위에 있는 유효성 검사 함수로 정리하기
	const isAllValid = isEmailValid && isPwdValid;

	//이메일 유효성 확인
	const onChangeEmail = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const currEmail: string = e.target.value;
			setEmail(currEmail);
		},
		[setEmail]
	);

	//비밀번호 유효성 확인
	const onChangePwd = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const currPwd: string = e.target.value;
			setPassword(currPwd);
		},
		[setPassword]
	);

	// function onLoginSuccess(token: any) {
	// 	const accessToken: string = token;
	// 	setCookie("accessToken", accessToken, {
	// 		path: "/",
	// 		secure: true,
	// 		sameSite: "none",
	// 	});
	// }

	//로그인 요청
	const onSubmit = async () => {
		// e.preventDefault();
		try {
			const res = await login(email, password);
			console.log("res", res);
			console.log("res.data", res.data);

			const result = res.data;
			console.log("result", result);
			if (res.status === 200) {
				//mainPage로 이동하기
				alert("로그인 완료!!");
				console.log(res);
				sessionStorage.setItem("userEmail", result.email);
				sessionStorage.setItem("userNick", result.nickname);
				// onLoginSuccess(res.headers.get("access_token"));
				navigate("/");
			}
		} catch (error) {
			alert("로그인 실패!!");
			console.log(error);
		}
	};

	const testFunc = async () => {
		const res = await getTest();
		console.log(res);
	};

	return (
		<>
			<div>
				<form method="POST">
					<input
						type="email"
						name="email"
						placeholder="email"
						required
						// ref={isEmailValid}
						onBlur={validateEmail}
						onChange={onChangeEmail}
					/>
					<input
						type="password"
						name="password"
						placeholder="password"
						required
						onBlur={validatePwd}
						onChange={onChangePwd}
					/>
				</form>
			</div>
			<button
				type="button"
				onClick={onSubmit}
				style={{ backgroundColor: "yellow" }}
			>
				LOGIN
			</button>
			<button onClick={testFunc}>test</button>
		</>
	);
};

export default Login;
