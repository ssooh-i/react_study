import axios, { AxiosResponse } from "axios";
import customAxios from "./api";

// const BASE_URL = 'http://192.168.100.166:8000/api' // 연결할 서버 ip주소로 바꾸기

// 내 서재 이야기 목록
export async function getStoryList(user_pk: number) {
	const response: AxiosResponse = await customAxios.get(
		`/story/list/${user_pk}`
	);
	return response;
}