import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const LoginCheck: React.FC = () => {
	const [cookies, setCookie, removeCookie] = useCookies(["email"]);
	const [userID, setUserId] = useState<string | null>(null);
	const navigate = useNavigate();

	const authCheck = () => {
		//페이지 들어올 때, 쿠키로 사용자 체크
		const token = cookies.email; //쿠키에서 이메일 꺼내기
		axios
			.post<{ email: string }>("/users/loginCheck", { token: token }) //토큰으로 서버에 인증요청
			.then((res) => {
				setUserId(res.data.email); //유저아이디 표시를 위해 작성
			})
			.catch(() => {
				logOut(); //에러 발생시 실행
			});
	};

	useEffect(() => {
		authCheck(); //로그인 체크 함수
	}, []);

	const logOut = () => {
		removeCookie("email"); //쿠키를 삭제
		navigate("/"); //메인페이지로 이동
	};

	return (
		<>
			{/* 로그인 되어있으면 아이디 표시하기 */}
			{userID && <h1>{userID}</h1>}
			{/* 로그아웃 */}
			<button onClick={logOut}>로그아웃</button>
		</>
	);
};

export default LoginCheck;
