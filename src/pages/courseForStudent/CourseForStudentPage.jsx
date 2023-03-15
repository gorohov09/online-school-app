import Header from "../../components/header/Header";
import StructureCourse from "../../components/structureCourse/StructureCourse";
import { useState } from "react";

import "./courseForStudentPage.scss";

const CourseForStudentPage = ({setIsAuth}) => {
    const [selectCourseId, setCourseId] = useState(null)

    return (
        <>
            <Header/>
            <div className="wrapper_course">
                <StructureCourse setCourseId={setCourseId}/>
                <div className="main_course">
                    <p>Основная информация</p>
                </div>
            </div>
        </>
    )
}

export default CourseForStudentPage;