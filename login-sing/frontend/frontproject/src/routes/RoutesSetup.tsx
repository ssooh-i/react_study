import { Routes, Route } from "react-router-dom";
import Main from "../components/main/main";
import Register from "../pages/Register";
import UserSignIn from "../pages/UserSignIn";
import UserSignUp from "../pages/UserSignUp";
import StoryCreatePage from "../pages/storyCreatePage";
import StoryResultPage from "../pages/storyResultPage";
import StoryDetailPage from "../pages/storyDetailPage";
import LibraryPage from "../pages/LibraryPage";
import Loading from "../components/storyCreate/loading";

export default function RoutesSetup() {
	return (
		<Routes>
			<Route path="/" element={<Main />}></Route>
			<Route path="/signIn" element={<UserSignIn />}></Route>
			<Route path="/signUp" element={<UserSignUp />}></Route>
			<Route path="/Register" element={<Register />}></Route>
			<Route path="/storyCreatePage" element={<StoryCreatePage />}></Route>
			<Route path="/storyResult" element={<StoryResultPage />}></Route>
			<Route path="/library" element={<LibraryPage />}></Route>
			<Route path="/storyDetail/:id" element={<StoryDetailPage />}></Route>
			<Route path="/Loading" element={<Loading />}></Route>
		</Routes>
	);
}
