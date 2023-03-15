import CourseItem from "../courseItem/CourseItem";

import "./coursesForStudentList.scss";

const CoursesForStudentList = () => {

    const data = {
        courses: [
            {
                name: "Python-Start 1-ый год",
                description: "Этот кур предназначен для получения первичных навыков решения заданий на любом языке программирования",
                countStudents: 15,
                countTasks: 13
            },
            {
                name: "Python-Start 2-ый год",
                description: "Этот кур предназначен для получения первичных навыков решения заданий на любом языке программирования",
                countStudents: 15,
                countTasks: 13
            }
        ]
    };

    const renderCourses = () => {
        return data.courses.map(course => {
            return <CourseItem name={course.name} description={course.description} countStudents={course.countStudents} countTasks={course.countTasks} />
        })
    }

    const items = renderCourses();

    return (
        <>
            {items}
        </>
    )
}

export default CoursesForStudentList;