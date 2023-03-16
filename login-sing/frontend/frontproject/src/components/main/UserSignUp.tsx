import { LockClosedIcon } from "@heroicons/react/20/solid";
import style from "../../assets/css/UserSignUp.module.css";
import { useState } from "react";

const validateEmail = (email) => {
	return email
		.toLowerCase()
		.match(
			/([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
		);
};

const validatePwd = (password) => {
	return password
		.toLowerCase()
		.match(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{10,25}$/);
};

const validateNickname = (nickname) => {
	return nickname.toLowerCase().match(/^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|].{1,8}$/);
};

const UserSignUp = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPwd, setConfirmPwd] = useState("");
	const [nickname, setNickname] = useState("");

	const [emailMsg, setEmailMsg] = useState("");
	const [pwdMsg, setPwdMsg] = useState("");
	const [confirmPwdMsg, setConfirmPwdMsg] = useState("");
	const [nicknameMsg, setNicknameMsg] = useState("");

	// 1-1에 잡아뒀던 유효성 검사 함수로 정리하기
	const isEmailValid = validateEmail(email);
	const isPwdValid = validatePwd(password);
	const isConfirmPwd = password === confirmPwd;
	const isNicknameValid = validateNickname(nickname);
	return (
		<>
			<div
				className="flex items-center justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8"
				style={{
					paddingTop: "80px",
					height: "100vh",
				}}
			>
				<div className="w-full max-w-md space-y-8">
					<div>
						<h2 className="mt-6 text-3xl font-bold tracking-tight text-center text-gray-900">
							Picstory
						</h2>
						<div className={style.hrSign}>Sign UP</div>
					</div>
					<form className="mt-8 space-y-6" action="#" method="POST">
						<input type="hidden" name="remember" defaultValue="true" />
						<div className="-space-y-px rounded-md shadow-sm">
							<div>
								<label htmlFor="email-address" className="sr-only">
									Email address
								</label>
								<input
									id="email-address"
									name="email"
									type="email"
									autoComplete="email"
									required
									className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									placeholder="Email address"
								/>
							</div>
							<div>
								<label htmlFor="password" className="sr-only">
									Password
								</label>
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									required
									className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									placeholder="Password"
								/>
							</div>
							<div>
								<label htmlFor="password" className="sr-only">
									Confirm Password
								</label>
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									required
									className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									placeholder="Confirm Password"
								/>
							</div>
						</div>

						<div>
							<button
								type="submit"
								className="relative flex justify-center w-full px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md group hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								<span className="absolute inset-y-0 left-0 flex items-center pl-3">
									<LockClosedIcon
										className="w-5 h-5 text-indigo-500 group-hover:text-indigo-400"
										aria-hidden="true"
									/>
								</span>
								Sign Up
							</button>
						</div>

						<div className={style.hrSect}>or</div>

						<div>
							<button
								type="submit"
								className="relative flex justify-center w-full px-3 py-2 text-sm font-semibold text-white bg-yellow-600 rounded-md group hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
							>
								<span className="absolute inset-y-0 left-0 flex items-center pl-3">
									<LockClosedIcon
										className="w-5 h-5 text-yellow-500 group-hover:text-yellow-400"
										aria-hidden="true"
									/>
								</span>
								Kakao Sign In
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default UserSignUp;
