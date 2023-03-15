import Button from '@mui/material/Button';
import "./courseItem.scss";

const CourseItem = ({name, description, countStudents, countTasks}) => {
    return (
        <div className="course_item">
            <div className="title_course_block">
                <span className="title_course">{name}</span>
            </div>
            <div className="title_description_block">
                <span className="title_description">{description}</span>
            </div>
            <div className="course_statistic">
                <div className="left_statistic">
                    <span className="count_students_course">Кол-во учеников: {countStudents}</span>
                </div>
                <div className="right_statistic">
                    <span className="count_tasks_course">Кол-во заданий: {countTasks}</span>
                </div>
            </div>
            <Button className="enroll">
                <span className="enroll_course">Записаться</span>
            </Button>
            
        </div>
    )
}

export default CourseItem;