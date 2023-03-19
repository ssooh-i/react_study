import axios, { AxiosResponse } from "axios";

const BASE_URL = "http://192.168.100.166:8000/api"; // 연결할 서버 ip주소로 바꾸기

// 회원가입 요청
export async function signup(
	email: string,
	password: string,
	nickname: string
) {
	const response: AxiosResponse = await axios.post(
		`${BASE_URL}/accounts/signup/`,
		{
			email: String,
			password: String,
			nickname: String,
		}
	);
	return response;
}

// 로그인 요청
export async function login(email: string, password: string) {
	const response: AxiosResponse = await axios.post(
		`${BASE_URL}/accounts/login/`,
		{
			email: String,
			password: String,
		}
	);
	return response;
}

// email 인증코드 재전송 요청
export async function resendCode(email: string, password: string) {
	const response: AxiosResponse = await axios.post(
		`${BASE_URL}/accounts/resend/code/`,
		{
			email: String,
			password: String,
		}
	);
	return response;
}

// 계정 활성화 요청
export async function userVerify(email: string, code: string) {
	const response: AxiosResponse = await axios.post(
		`${BASE_URL}/accounts/verify/email/`,
		{
			email: String,
			code: String,
		}
	);
	return response;
}

// 새로고침 토큰 요청
//cookie는 npm install해야함
//https://jrepository.tistory.com/m/65 참고하셈
export async function refreshToken(email: string, code: string) {
	const response: AxiosResponse = await axios.post(
		`${BASE_URL}/accounts/token/refresh/`,
		{
			email: String,
			code: String,
		}
	);
	return response;
}

//닉네임 중복 체크
export async function nicknameCheck(nickname: string) {
	const response: AxiosResponse = await axios.post(`/api/user/${nickname}`);
	return response;
}

//닉네임 중복 체크
export async function emailCheck(email: string) {
	const response: AxiosResponse = await axios.post(`/api/user/${email}`);
	return response;
}

// 유저 삭제
export async function deleteUser(id: number) {
	const response: AxiosResponse = await axios.delete(`/api/user/${id}`);
	return response;
}
