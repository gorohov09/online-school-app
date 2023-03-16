import Header from "../../components/header/Header";
import StructureCourse from "../../components/structureCourse/StructureCourse";
import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import CourseService from "../../services/CourseService";
import Spinner from "../../components/spinner/Spinner";
import Button from '@mui/material/Button';

import "./courseForStudentPage.scss";

const CourseForStudentPage = ({setIsAuth}) => {
    const {courseId} = useParams();
    const [selectLessonId, setLessonId] = useState(null)
    const [dataLesson, setDataLesson] = useState(null);
    const [loading, setLoading] = useState(true);
    const isInitialMount = useRef(true);

    const courseService = new CourseService();

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            courseService.getLessonById(selectLessonId)
            .then(data => setDataLesson(data))
            .then(setLoading(false));
        }
        
    }, [selectLessonId]);

    useEffect(() => {
        courseService.getFirstLessonByCourse(courseId)
            .then(data => setDataLesson(data))
            .then(setLoading(false));
    }, []);

    let idLesson, name, embedHtmlVideo;
    if (dataLesson != null){
        idLesson = dataLesson.id;
        name = dataLesson.name;
        embedHtmlVideo = dataLesson.embedHtmlVideo;
    }

    return (
        <>
            <Header/>
            <div className="wrapper_course">
                <StructureCourse courseId={courseId} setLessonId={setLessonId}/>
                <div className="main_course">
                    {
                        !loading ?
                        <>
                            <h2>{name}</h2>
                            <h3>Теоретическое видео:</h3>
                            <div className="video" dangerouslySetInnerHTML={{ __html: embedHtmlVideo }} />
                            <div className="tasksButton">
                                <Button>
                                    <Link to={`/solveTask/${idLesson}`}><span className="solveTask">Решать задания</span></Link>
                                </Button>
                            </div>
                        </>
                        :
                        <>
                            <Spinner />
                        </>
                    }
                </div>
            </div>
        </>
    )
}

export default CourseForStudentPage;