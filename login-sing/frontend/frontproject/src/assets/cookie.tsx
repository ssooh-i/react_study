import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookie = (email: string, nickname: string, options: object) => {
	return cookies.set(email, nickname, { ...options });
};

export const getCookie = (email: string) => {
	return cookies.get(email);
};

export const removeCookie = (email: string, option: object) => {
	return cookies.remove(email, { ...option });
};
