import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import CoursesPage from "./pages/course/CoursesPage";
import AddCoursePage from "./pages/course/addCourse/AddCoursePage";
import CourseSinglePage from "./pages/course/courseSinglePage/CourseSinglePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
		<BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
				<Route path="/courses" element={<CoursesPage />} />
				<Route path="/courses/:courseId" element={<CourseSinglePage />} />
				<Route path="/addCourse" element={<AddCoursePage />} />
            	<Route path="/login" element={<LoginPage />}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;