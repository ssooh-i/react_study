import { atom } from "recoil";

//로그인 된 사용자
export const userId = atom({
	key: "userId",
	default: 1,
});

//로그인 된 사용자 닉네임
export const userEmail = atom({
	key: "userEmail",
	default: "",
});

//로그인 된 사용자 닉네임
export const userNickName = atom({
	key: "userNickName",
	default: "",
});

//로그인된 유저 토큰
export const accessToken = atom({
	key: "accessToken",
	default: "",
});

export const refreshToken = atom({
	key: "refreshToken",
	default: "",
});

export const ImageBit = atom({
	key: "ImageBit",
	default: "",
});

export const ImageFile = atom({
	key: "ImageFile",
	default: "",
});
//장르
export const genreAtom = atom({
	key: "genreAtom",
	default: "",
});
//로딩
export const loadingAtom = atom({
	key: "loadingAtom",
	default: false,
});
// 영어 이야기 생성 결과
export const storyEn = atom({
	key: "storyEn",
	default: "",
});
// 한글 이야기 생성 결과
export const storyKo = atom({
	key: "storyKo",
	default: "",
});
// 오디오 생성 결과
export const voiceAtom = atom<string>({
	key: "voiceAtom",
	default: "",
});
// 모달 상태
export const modalState = atom({
	key: "modalState",
	default: false,
});
// 메뉴 모달 상태
export const menuState = atom({
	key: "menuState",
	default: false,
});
// 언어 상태
export const language = atom({
	key: "language",
	default: true,
});

// 테마 색
export const colorAtom = atom({
	key: "colorAtom",
	default: "red",
});
