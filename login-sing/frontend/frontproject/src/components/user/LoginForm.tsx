import React, { useContext, useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as LoginStyled from "../StyledComponents/SignStyled";
import { KaKaoButton } from "./OAuth";
// import NaverLogin from "./NaverLogin";
import * as Api from "../../utils/Api";
import { DispatchContext } from "../../App";
//-------------------------------------------------------
import { LockClosedIcon } from "@heroicons/react/20/solid";
import styles from "../../assets/css/UserSignIn.module.css";
import { login } from "../../api/userAPI";
import { userId, userNickName } from "../../atoms";
import { atom, useRecoilState  } from "recoil";
import * as http from 'http';

import {useCookies} from 'react-cookie';

function LoginForm () {
    const navigate = useNavigate();
    const dispatch = useContext(DispatchContext);

    //email, password 저장
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    //recoil에 저장
    const [userIdValue, setUserIdValue] = useRecoilState<number>(userId);
    const [userNickNameValue, setuserNickName] = useRecoilState<string>(userNickName);

    //email(ID) 유효성 검사
    const validateEmail = (email:string) => {
      //email주소 안에 . - _만 사용가능한 기본적인 이메일 유효성 양식
      return email
      .toLowerCase()
      .match(/[a-zA-Z0-9._-]+@[a-zA-Z0-9_-]+\.[a-zA-Z0-9-.]+$/);
    }

    //password 유효성 검사
    const validatePwd = (password: string) => {
      //특수문자, 숫자, 영어 포함해서 8자 이상 25자 이하 password 유효성 양식
      return password
        .toLowerCase()
        .match(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/);
    };

    //유효성 검사 결과 저장
    const isEmailValid = validateEmail(email);
    const isPwdValid = validatePwd(password);
    const isAllValid = isEmailValid && isPwdValid ;

    //login 쿠키 해더에 넣기 위한 변수
    const cookieName = 'cookie_name';
    const cookieValue = 'cookie_value';

    const option:http.RequestOptions = {
      //host: `${BASEURL}`,
      path: '/',
      headers: {
        Cookie: `${cookieName} = ${cookieValue}`,
      }
    }
      //로그인 요청
      const onSubmit = async (e:any) => {
        e.preventDefault();

      try {
        const res = await login(email, password);
        console.log("login res.data=", res.data);

        const [cookies, setCookie, removeCookie] = useCookies(['쿠키 이름']);

        document.cookie = "cookieName=cookieValue";

        const user = res.data;
        const jwtToken = user.token;
        const { result, errorCause } = res.data;

        // 토큰 저장
        sessionStorage.setItem("userToken", jwtToken);

        dispatch({
          type: "LOGIN",
          payload: user,
        });

        if (!result) {
          if (errorCause === "email") {
            setEmailMsg("입력하신 이메일이 존재하지 않습니다. 다시 입력해주세요.")
            setCheckEmail(false);
          } else if (errorCause === "password") {
            setPwdMsg("입력하신 비밀번호가 존재하지 않습니다. 다시 입력해주세요.")
            setCheckPwd(false);
          }
        } else {
          setCheckEmail(true);
          setCheckPwd(true);
          navigate("/", { replace: true });
        }
      } catch (err) {
        setLogin(false);
        console.log("로그인 실패\n" , err)
      }
      }

      const onChangeEmail = useCallback((e) => {
        const currEmail = e.target.value;
        setEmail(currEmail);
    
        if (!validateEmail(currEmail)) {
          setEmailMsg("이메일 형식이 올바르지 않습니다.")} else {
            setEmailMsg("")
          }
        })
    
        const onChangePwd = useCallback((e) =>{
          const currPwd = e.target.value;
          setPassword(currPwd);
    
          if (!validatePwd(currPwd)) {
            setPwdMsg("영문, 숫자, 특수기호 조합으로 10자리 이상 입력해주세요.")
          } else {
            setPwdMsg("")
          }
        }, [])


    return (
        <LoginStyled.FormBox>
            <LoginStyled.LoginInputBox>
                <LoginStyled.FormTitle>로그인</LoginStyled.FormTitle>

                <LoginStyled.InputTitle>이메일 주소 *</LoginStyled.InputTitle>
            <LoginStyled.InputText 
                name="email"
                type="text"
                placeholder="ex) zeroland@zeroland.com"
                onChange={onChangeEmail}/>
                <LoginStyled.OutputText className={checkEamil ? 'success' : 'error'}>{emailMsg}</LoginStyled.OutputText>

        <LoginStyled.InputTitle>비밀번호 *</LoginStyled.InputTitle>
            <LoginStyled.InputText 
                name="password"
                type="password"
                placeholder="**********"
                onChange={onChangePwd}/>
                <LoginStyled.OutputText className={checkPwd ? 'success' : 'error'}>{pwdMsg}</LoginStyled.OutputText>
                
                <LoginStyled.FootBtnBox>
                    <LoginStyled.FootButton onClick={onSubmit} type="submit" disabled={!isAllValid}>로그인</LoginStyled.FootButton>

                    <a href="./register"><LoginStyled.FootButton>회원가입
                    </LoginStyled.FootButton></a>
                </LoginStyled.FootBtnBox>

                <div style={{fontSize: "13px", marginTop: "10px" }}>카카오톡으로 로그인하기</div>
                <LoginStyled.LogoBox>
                  {/* <NaverLogin />  */}
                  <KaKaoButton />
                </LoginStyled.LogoBox>
            </LoginStyled.LoginInputBox>
        </LoginStyled.FormBox>
    );
}

export default LoginForm;
