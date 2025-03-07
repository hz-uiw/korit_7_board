import { Global } from "@emotion/react"
import { global } from "./styles/global"
import MainLayout from "./components/common/MainLayout/MainLayout"
import { Route, Routes } from "react-router-dom"
import AuthRoute from "./routes/AuthRoute/AuthRoute"
import MainRoute from "./routes/MainRoute/MainRoute"
import { useUserMeQuery } from "./queries/userQuery"

function App() {
	useUserMeQuery();
	// 한 번만 실행 => 캐싱 요청 한 번 처리

	return (
		<>
			<Global styles={global} />
			<MainLayout>
				<Routes>
					<Route path="/auth/*" element={<AuthRoute />} />
					<Route path="/*" element={<MainRoute />} />
				</Routes>
			</MainLayout>
		</>
	)
}

export default App
