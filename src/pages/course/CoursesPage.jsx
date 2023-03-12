import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import CourseList from "../../components/courseList/CourseList";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom'

import './coursesPage.scss';

const CoursesPage = ({setIsAuth}) => {
    return (
        <div className="course">
            <Sidebar />
            <div className="courseContainer">
                <Navbar setIsAuth={setIsAuth}/>
                <div className="courses">
                    <div className="operation">
                        <Stack direction="row" spacing={2}>
                            <Button>
                                <Link to="/addCourse"><span className="add">Добавить курс</span></Link>
                            </Button>
                            <Button color="secondary"><span>Отсортировать по рейтингу</span></Button>
                            <Button color="secondary"><span>Отсортировать по дате создания</span></Button>
                        </Stack>
                    </div>
                    <CourseList />
                    <div className="load">
                        <Button color="secondary"><span>Загрузить</span></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoursesPage;