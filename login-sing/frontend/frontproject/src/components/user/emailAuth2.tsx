import styles from "../../assets/css/emailAuth.module.css";

// 이메일 인증
function emailAuth2() {


  return (
  <>
    <div className={styles.divCenter}>
      <div className={styles.codeCheck}>
        <input type="text" required className={styles.input}></input>
        <label>인증코드</label>
        <span></span>
      </div>
      <button type="button" className={styles.checkBtn}>이메일 인증 확인</button>
    </div>
  </>
  );
}

export default emailAuth2;