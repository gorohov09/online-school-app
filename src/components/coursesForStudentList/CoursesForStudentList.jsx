import CourseItem from "../courseItem/CourseItem";
import CourseService from "../../services/CourseService";
import Spinner from "../spinner/Spinner";

import { useState, useEffect } from "react";

import "./coursesForStudentList.scss";

const CoursesForStudentList = () => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const courseService = new CourseService();

    useEffect(() => {
        courseService.getPopularCourses()
            .then(data => setData(data))
            .then(setLoading(false));
    }, []);

    const renderCourses = () => {
        return data.popularCourses.map(course => {
            return <CourseItem courseId={course.courseId} name={course.name} description={course.description} countStudents={course.countStudents} countTasks={course.countTasks} isEnroll={course.isEnroll}/>
        })
    }

    let items;
    if (data != null){
        items = renderCourses();
    }

    return (
        <>
            {
                !loading ?
                <>
                    {items}
                </>
                :
                <>
                    <Spinner />
                </>
        }
        </>
        
    )
}

export default CoursesForStudentList;