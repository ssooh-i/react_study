// import { LockClosedIcon } from "@heroicons/react/20/solid";
// import styles from "../../assets/css/UserSignIn.module.css";
// import { useState, ChangeEvent, useCallback } from "react";
// import { login } from "../../api/userAPI";
// import { userId, userNickName } from "../../atoms";
// import { atom, useRecoilCallback, useRecoilState } from "recoil";
// import * as http from "http";

// function UserLogin() {
// 	//email(ID) 유효성 검사
// 	const validateEmail = (email: string) => {
// 		//email주소 안에 . - _만 사용가능한 기본적인 이메일 유효성 양식
// 		return email
// 			.toLowerCase()
// 			.match(/[a-zA-Z0-9._-]+@[a-zA-Z0-9_-]+\.[a-zA-Z0-9-.]+$/);
// 	};

// 	//password 유효성 검사
// 	const validatePwd = (password: string) => {
// 		//특수문자, 숫자, 영어 포함해서 8자 이상 25자 이하 password 유효성 양식
// 		return password
// 			.toLowerCase()
// 			.match(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/);
// 	};

// 	//email, password 저장
// 	const [email, setEmail] = useState<string>("");
// 	const [password, setPassword] = useState<string>("");

// 	//recoil에 저장
// 	const [userIdValue, setUserIdValue] = useRecoilState<number>(userId);
// 	const [userNickNameValue, setuserNickName] =
// 		useRecoilState<string>(userNickName);

// 	//유효성 검사 결과 저장
// 	const isEmailValid = validateEmail(email);
// 	const isPwdValid = validatePwd(password);
// 	const isAllValid = isEmailValid && isPwdValid;

// 	//login 쿠키 해더에 넣기 위한 변수
// 	const cookieName = "cookie_name";
// 	const cookieValue = "cookie_value";

// 	const option: http.RequestOptions = {
// 		//host: `${BASEURL}`,
// 		path: "/",
// 		headers: {
// 			Cookie: `${cookieName} = ${cookieValue}`,
// 		},
// 	};

// 	//password 데이터 받아서 set하기
// 	const onChangePwd = useRecoilCallback(e: any) => {
// 		const currPwd: string = e.target.value;
// 	}

// 	//로그인 요청
// 	const onSubmit = async () => {
// 		try {
// 			const res = await login(email, password);
// 			console.log(res);
// 			const userEmail = res.data.email;

// 			// email 저장
// 			sessionStorage.setItem("userEmail", userEmail);
// 			console.log("로그인 성공");
// 		} catch (error) {
// 			console.log("로그인 실패\n", error);
// 		}
// 	};
// }

// const UserSignIn = () => {
// 	//login 아이디 데이터 받아서 set하기
// 	const onChangeEmail = useRecoilCallback((currEmail: string) => {
// 		setEmail(currEmail);
// 	}, );

// 		const handleEmailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
// 		const currEmail: string = e.target.value;
// 		onChangeEmail(currEmail);
// 	}, [onChangeEmail]);

// 	return (
// 		<>
// 			<div
// 				className="flex items-center justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8"
// 				style={{
// 					paddingTop: "80px",
// 					height: "100vh",
// 				}}
// 			>
// 				<div className="w-full max-w-md space-y-8">
// 					<div>
// 						<h2 className="mt-6 text-3xl font-bold tracking-tight text-center text-gray-900">
// 							Picstory
// 						</h2>
// 					</div>
// 					{/* <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={onSubmit}> */}
// 					<form className="mt-8 space-y-6" action="#" method="POST">
// 						<input type="hidden" name="remember" defaultValue="true" />
// 						<div className="-space-y-px rounded-md shadow-sm">
// 							<div>
// 								<label htmlFor="email-address" className="sr-only">
// 									Email address
// 								</label>
// 								<input
// 									id="email-address"
// 									name="email"
// 									type="email"
// 									autoComplete="email"
// 									required
// 									className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
// 									placeholder="Email address"
// 									onChange={ handleEmailChange }
// 								/>
// 							</div>
// 							<div>
// 								<label htmlFor="password" className="sr-only">
// 									Password
// 								</label>
// 								<input
// 									id="password"
// 									name="password"
// 									type="password"
// 									autoComplete="current-password"
// 									required
// 									className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
// 									placeholder="Password"
// 									onChange={onChangePwd}
// 								/>
// 							</div>
// 						</div>
// 						<button onClick={onSubmit} type="submit" disabled={!isAllValid}>
// 							로그인
// 						</button>
// 						<button
// 							// type="submit"
// 							className="relative flex justify-center w-full px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md group hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
// 							// onClick={onSubmit}
// 							// disabled={!isAllValid}
// 							onClick={onSubmit}
// 						>
// 							<span className="absolute inset-y-0 left-0 flex items-center">
// 								<LockClosedIcon
// 									className="w-5 h-5 text-indigo-500 group-hover:text-indigo-400"
// 									aria-hidden="true"
// 								/>
// 							</span>
// 							Sign In
// 						</button>

// 						<div className={styles.hrSect}>or</div>

// 						<div>
// 							<button
// 								type="submit"
// 								className="relative flex justify-center w-full px-3 py-2 text-sm font-semibold text-white bg-yellow-600 rounded-md group hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
// 							>
// 								<span className="absolute inset-y-0 left-0 flex items-center">
// 									<LockClosedIcon
// 										className="w-5 h-5 text-yellow-500 group-hover:text-yellow-400"
// 										aria-hidden="true"
// 									/>
// 								</span>
// 								kakao login
// 							</button>
// 						</div>
// 					</form>
// 				</div>
// 			</div>
// 		</>
// 	);
// };
function UserSignIn() {}
export default UserSignIn;
