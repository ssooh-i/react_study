import axios, { AxiosResponse } from "axios";
import customAxios from "./api";

// const BASE_URL = "http://192.168.100.166:8000/api"; // 테스트 서버
// const BASE_URL = "https://j8d103.p.ssafy.io/api";

// 이야기 생성
export async function createStory(text: string, genre: string) {
	const response: AxiosResponse = await customAxios.post(`/story/create/`, {
		text: text,
		genre: genre,
	});
	return response;
}
// 이야기 가져오기
export async function getStory(id: number) {
	const response: AxiosResponse = await customAxios.get(`/story/${id}/`);
	return response;
}

// 이야기 저장
// export async function postSaveStory(formData: object) {
//   try {
//     const response: AxiosResponse = await axios.post(
//       `/story/`,
//       formData,
//       {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       },
//     )
//     return response
//   } catch (error) {
//     console.log(error)
//     return
//   }
// }

// 음성 생성
export async function createVoice(content: string, genre: string) {
	const response: AxiosResponse = await customAxios.post(`/story/voice/`, {
		content: content,
		genre: genre,
	});
	return response;
}

// 단어 번역 검색
export async function translateWord(content: string) {
	const response: AxiosResponse = await customAxios.post(`/story/word/`, {
		content: content,
	});
	return response;
}

// 이야기 번역
export async function translateStory(content: string) {
	const response: AxiosResponse = await customAxios.post(`/story/translate/`, {
		content: content,
	});
	return response;
}

// 이야기 삭제
export async function deleteStory(id: number) {
	const response: AxiosResponse = await customAxios.delete(
		`/story/delete/${id}/`
	);
	return response;
}
