import { Routes, Route } from "react-router-dom";
import Main from "../components/main/main";
// import UserSignIn from "../components/user/UserSignIn";
import UserSignUp from "../components/user/UserSignUp";
import StoryCreatePage from "../pages/storyCreatePage";
import StoryResultPage from "../pages/storyResultPage";
import StoryDetailPage from "../pages/storyDetailPage";
import LibraryPage from "../pages/LibraryPage";
import Loading from "../components/storyCreate/loading";
import UserPage from "../pages/userPage";
import Login from "../components/user/Login";

export default function RoutesSetup() {
	return (
		<Routes>
			<Route path="/" element={<Main />}></Route>
			<Route path="/user" element={<UserPage />}></Route>
			<Route path="/login" element={<Login />}></Route>
			<Route path="/signUp" element={<UserSignUp />}></Route>
			<Route path="/storyCreatePage" element={<StoryCreatePage />}></Route>
			<Route path="/storyResult" element={<StoryResultPage />}></Route>
			<Route path="/library" element={<LibraryPage />}></Route>
			<Route path="/storyDetail/:id" element={<StoryDetailPage />}></Route>
			<Route path="/Loading" element={<Loading />}></Route>
		</Routes>
	);
}
