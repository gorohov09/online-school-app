import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import CoursesPage from "./pages/course/CoursesPage";
import AddCoursePage from "./pages/course/addCourse/AddCoursePage";
import CourseSinglePage from "./pages/course/courseSinglePage/CourseSinglePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useToken from "./hooks/useToken";

function App() {
	const { token, setToken } = useToken();

	if(!token) {
		console.log('Токена нет')
		return <LoginPage setToken={setToken}/>
	}

  	return (
    <div className="App">
		<BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage setIsAuth={setIsAuth}/>} />
				<Route path="/courses" element={<CoursesPage setIsAuth={setIsAuth}/>} />
				<Route path="/courses/:courseId" element={<CourseSinglePage setIsAuth={setIsAuth}/>} />
				<Route path="/addCourse" element={<AddCoursePage setIsAuth={setIsAuth}/>} />
            	<Route path="/login" element={<LoginPage setToken={setToken} setIsAuth={setIsAuth}/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;