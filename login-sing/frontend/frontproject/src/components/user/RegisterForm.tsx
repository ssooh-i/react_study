// import React, { useCallback, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import styles from "../../assets/css/RegisterForm.module.css";
// // import * as ResisterStyled from "../StyledComponents/SignStyled";
// // import CheckModal from "./CheckModal"; //약관동의

// // import * as Api from "../../utils/Api";

// function RegisterForm() {
// 	//로그인 성공하면 내비게이트로 메인페이지 보내기
// 	const navigate = useNavigate();

// 	const [email, setEmail] = useState("");
// 	const [password, setPassword] = useState("");
// 	const [confirmPwd, setConfirmPwd] = useState("");
// 	const [nickname, setNickname] = useState("");

// 	//각 항목 조건이 맞지 않을 때 띄우는 메시지
// 	const [emailMsg, setEmailMsg] = useState("");
// 	const [pwdMsg, setPwdMsg] = useState("");
// 	const [confirmPwdMsg, setConfirmPwdMsg] = useState("");
// 	const [nicknameMsg, setNicknameMsg] = useState("");

// 	// 이메일, 닉네임 중복 확인
// 	const [checkMail, setCheckMail] = useState(false);
// 	const [checkNickname, setCheckNickname] = useState(false);

// 	// 이메일, 비밀번호, 닉네임 유효성 검사
// 	const validateEmail = (email) => {
// 		return email
// 			.toLowerCase()
// 			.match(
// 				/([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
// 			);
// 	};

// 	const validatePwd = (password) => {
// 		return password
// 			.toLowerCase()
// 			.match(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{10,25}$/);
// 	};

// 	const validateNickname = (nickname) => {
// 		return nickname.toLowerCase().match(/^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|].{1,8}$/);
// 	};

// 	const onSubmit = async (e) => {
// 		e.preventDefault();

// 		try {
// 			const apiResult = await Api.post("user/register", {
// 				email,
// 				password,
// 				nickname,
// 			});
// 			console.log(apiResult.data);

// 			const { result } = apiResult.data;

// 			if (result) {
// 				navigate("/login");
// 			}
// 		} catch (err) {
// 			console.log(err);
// 		}
// 	};

// 	const onCheckEmail = async (e) => {
// 		e.preventDefault();

// 		try {
// 			const res = await Api.post("user/register/email", { email });

// 			const { result } = res.data;

// 			if (!result) {
// 				setEmailMsg("이미 등록된 메일입니다. 다시 입력해주세요.");
// 				setCheckMail(false);
// 			} else {
// 				setEmailMsg("사용 가능한 메일입니다.😊");
// 				setCheckMail(true);
// 			}
// 		} catch (err) {
// 			console.log(err);
// 		}
// 	};

// 	const onCheckNickname = async (e) => {
// 		e.preventDefault();

// 		try {
// 			const res = await Api.post("user/register/nickname", { nickname });

// 			const { result } = res.data;

// 			if (!result) {
// 				setNicknameMsg("이미 등록된 닉네임입니다. 다시 입력해주세요.");
// 				setCheckNickname(false);
// 			} else {
// 				setNicknameMsg("사용 가능한 닉네임입니다.😊");
// 				setCheckNickname(true);
// 			}
// 		} catch (err) {
// 			console.log(err);
// 		}
// 	};

// 	const isEmailValid = validateEmail(email);
// 	const isPwdValid = validatePwd(password);
// 	const isConfirmPwd = password === confirmPwd;
// 	const isNicknameValid = validateNickname(nickname);

// 	const isAllValid =
// 		isEmailValid &&
// 		isPwdValid &&
// 		isConfirmPwd &&
// 		isNicknameValid &&
// 		checkMail &&
// 		checkNickname;

// 	//이메일
// 	// const onChangeEmail = useCallback(async (e) => {
// 	// 	const currEmail = e.target.value;
// 	// 	setEmail(currEmail);

// 	// 	if (!validateEmail(currEmail)) {
// 	// 		setEmailMsg("이메일 형식이 올바르지 않습니다.");
// 	// 	} else {
// 	// 		setEmailMsg("올바른 이메일 형식입니다.");
// 	// 	}
// 	// });

// 	//비밀번호
// 	const onChangePwd = useCallback((e) => {
// 		const currPwd = e.target.value;
// 		setPassword(currPwd);

// 		if (!validatePwd(currPwd)) {
// 			setPwdMsg("영문, 숫자, 특수기호 조합으로 10자리 이상 입력해주세요.");
// 		} else {
// 			setPwdMsg("안전한 비밀번호입니다.");
// 		}
// 	}, []);

// 	//비밀번호 확인
// 	const onChangeConfirmPwd = useCallback(
// 		(e) => {
// 			const currConfirmPwd = e.target.value;
// 			setConfirmPwd(currConfirmPwd);

// 			if (currConfirmPwd !== password) {
// 				setConfirmPwdMsg("비밀번호가 일치하지 않습니다.");
// 			} else {
// 				setConfirmPwdMsg("올바른 비밀번호 형식입니다.");
// 			}
// 		},
// 		[password]
// 	);

// 	//닉네임
// 	const onChangeNickname = useCallback((e) => {
// 		const currNickname = e.target.value;
// 		setNickname(currNickname);

// 		if (!validateNickname(currNickname)) {
// 			setNicknameMsg("1글자 이상 9글자 미만으로 입력해주세요.");
// 		} else {
// 			setNicknameMsg("올바른 닉네임 형식입니다.");
// 		}
// 	}, []);

// 	const handleCheckAccept = useCallback(() => {
// 		setIsAccpted(true);
// 	}, []);

// 	return (
// 		<div className={styles.FormBox}>
// 			<div className={styles.InputBox}>
// 				<div className={styles.FormTitle}>회원가입</div>

// 				<button
// 					className={styles.checkBtn}
// 					// className={checkMail ? "checked" : "not-checked"}
// 					onClick={onCheckEmail}
// 				>
// 					중복 확인*
// 				</button>

// 				<div className={styles.InputTitle}>이메일 주소 *</div>
// 				<input
// 					className={styles.InputText}
// 					name="email"
// 					type="text"
// 					placeholder="ex) ssafy@ssafy.com"
// 					// onChange={onChangeEmail}
// 				/>

// 				<div
// 					className={styles.OutputText}
// 					// className={isEmailValid ? "success" : "error"}
// 				>
// 					{emailMsg}
// 				</div>

// 				<div className={styles.InputTitle}>비밀번호 *</div>
// 				<input
// 					className={styles.InputText}
// 					name="password"
// 					type="password"
// 					placeholder="**********"
// 					onChange={onChangePwd}
// 				/>
// 				<div
// 					className={styles.OutputText}
// 					// className={isPwdValid ? "success" : "error"}
// 				>
// 					{pwdMsg}
// 				</div>

// 				<div className={styles.InputTitle}>비밀번호 확인 *</div>
// 				<input
// 					className={styles.InputText}
// 					name="confirmPassword"
// 					type="password"
// 					placeholder="**********"
// 					onChange={onChangeConfirmPwd}
// 				/>
// 				<div
// 					className={styles.OutputText}
// 					// className={isConfirmPwd ? "success" : "error"}
// 				>
// 					{confirmPwdMsg}
// 				</div>

// 				<button
// 					className={styles.checkBtn}
// 					onClick={onCheckNickname}
// 					// className={checkNickname ? "checked" : "not-checked"}
// 				>
// 					중복 확인*
// 				</button>

// 				<div className={styles.InputTitle}>닉네임 *</div>
// 				<input
// 					className={styles.InputText}
// 					name="nickname"
// 					type="text"
// 					placeholder="김싸피"
// 					onChange={onChangeNickname}
// 				/>
// 				<div
// 					className={styles.OutputText}
// 					// className={isNicknameValid ? "success" : "error"}
// 				>
// 					{nicknameMsg}
// 				</div>

// 				<div className={styles.FootBtnBox}>
// 					<button
// 						className={styles.FootButton}
// 						onClick={onSubmit}
// 						type="submit"
// 						disabled={!isAllValid}
// 					>
// 						가입하기
// 					</button>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }
function RegisterForm() {}
export default RegisterForm;
