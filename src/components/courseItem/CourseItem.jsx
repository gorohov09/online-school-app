import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import CourseService from '../../services/CourseService';
import "./courseItem.scss";
import { Spinner } from 'react-bootstrap';

const CourseItem = ({courseId, name, description, countStudents, countTasks, isEnroll}) => {

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const courseService = new CourseService();

    const onHandleToCourse = () => {
        navigate(`/courseForStudent/${courseId}`)
    }

    const onHandleEnroll = async () => {
        const res = await courseService.enrollCourse(courseId)
            .then(setLoading(loading => true));

        if (res.isSuccess)
            navigate(`/courseForStudent/${courseId}`)
    }

    const classLabel = isEnroll ? 'enrollLabel' : 'noEnrollLabel';
    const textLabel = isEnroll ? 'Вы записаны' : 'Вы не записаны';

    return (
        !loading ? 
        <>
            <div className="course_item">
                <div className="title_course_block">
                    <div className="name">
                        <span className="title_course">{name}</span>
                    </div>
                    <div className="label">
                        <span className={classLabel}>{textLabel}</span>
                    </div>
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
                {
                    isEnroll ?
                    <>
                        <Button onClick={onHandleToCourse} className="toCourse">
                            <span className="toCourse_student">Перейти к заданиям</span>
                        </Button>
                    </>
                    :
                    <>
                        <Button onClick={onHandleEnroll} className="enroll">
                            <span className="enroll_course">Записаться</span>
                        </Button>
                    </>
                }
            </div>
        </>
        :
        <>
            <Spinner />
        </>
    )
}

export default CourseItem;