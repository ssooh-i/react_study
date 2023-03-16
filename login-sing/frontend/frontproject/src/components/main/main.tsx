import { Link } from "react-router-dom";
import styles from "../../assets/css/main.module.css";
import background from "../../assets/labtop.gif";
import TheHeader from "./TheHeader";
import UserLogin from "./UserLogin";

export default function Main() {
	return (
		<div className="App">
			<TheHeader></TheHeader>
			<UserLogin></UserLogin>
			<div
				style={{
					paddingTop: "80px",
					height: "100vh",
					// 아래 코드를 삽입하면 배경이 가득찬 상태에서 반응형으로 줄여짐
					backgroundImage: `url(${background})`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<Link to="/storyCreatePage">
					<button className={styles.btn1}>TRY</button>
				</Link>
				
			</div>
		</div>
	);
}
