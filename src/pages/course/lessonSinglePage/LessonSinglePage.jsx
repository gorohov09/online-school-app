import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Button from '@mui/material/Button';
import {useParams, Link} from 'react-router-dom';
import { useState, useEffect } from "react";
import CourseService from "../../../services/CourseService";
import Spinner from "../../../components/spinner/Spinner";
import { Fragment } from "react";
import TaskDetails from "../../../components/taskDetails/TaskDetails";

import './lessonSinglePage.scss';

const LessonSinglePage = () => {

    // const {courseId} = useParams();

    // const [data, setData] = useState(null);
    // const [loading, setLoading] = useState(true);

    // const courseService = new CourseService();

    // useEffect(() => {
    //     courseService.getCourseById(courseId)
    //         .then(data => setData(data))
    //         .then(setLoading(false));
    // }, []);

    const data = {
        id: '123',
        name: "Механическое движение",
        embedHtmlVideo: '<iframe width="480" height="270" src="//www.youtube.com/embed/eZy2wp5XINY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        tasks: [
            {
                id: '125',
                order: 1,
                type: 'freeResponse',
                name: 'Что ты знаешь о природе?',
                description: 'В мире жвут 100 мил. человек',
                question: 'Сколько человек живут в мире?',
                rightAnswer: '100 мил.'
            },
            {
                id: '126',
                order: 2,
                type: 'freeResponse',
                name: 'Что ты знаешь о природе?',
                description: 'В мире жвут 100 мил. человек',
                question: 'Сколько человек живут в мире?',
                rightAnswer: '200 мил.'
            }
        ]
    }

    const renderTasks = (data) => {
        return data.tasks.map(task => {
            return (
                <TaskDetails task={task}/>
            )
        });
    }
    
    let idLesson, name, embedHtmlVideo, tasks;
    if (data != null){
        idLesson = data.idLesson;
        name = data.name;
        embedHtmlVideo = data.embedHtmlVideo;
        tasks = renderTasks(data);
    }
        

    return (
        <div className="lesson">
            <Sidebar />
            <div className="lessonContainer">
                <Navbar />
                <div className="singleLesson">
                    {
                        !false ?
                        <>
                            <h2>{name}</h2>
                            <h3>Теоретическое видео:</h3>
                            <div className="video" dangerouslySetInnerHTML={{ __html: embedHtmlVideo }} />
                            <h3>Задачи на урок:</h3>
                            <div className="tasks">
                                {tasks}
                            </div>
                        </>
                        :
                        <>
                            <Spinner />
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default LessonSinglePage