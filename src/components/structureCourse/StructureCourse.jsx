import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Button from '@mui/material/Button';
import { Fragment } from "react";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CourseService from '../../services/CourseService';

import './structureCourse.scss';
import { Spinner } from 'react-bootstrap';

const StructureCourse = ({courseId, setLessonId}) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const courseService = new CourseService();

    useEffect(() => {
        console.log('Получение структуры курса')
        courseService.getCourseById(courseId)
            .then(data => setData(data))
            .then(setLoading(false));
    }, []);

    // const data = {
    //     courseId: 123,
    //     name_course: "Python-Start",
    //     modules:[
    //         {
    //             moduleId: 123,
    //             order: 1,
    //             name: "Введение",
    //             lessons:[
    //                 {
    //                     lessonId: 123,
    //                     order: 1,
    //                     name: "Оператор Print"
    //                 },
    //                 {
    //                     lessonId: 124,
    //                     order: 2,
    //                     name: "Оператор Input"
    //                 }
    //             ]
    //         },
    //         {
    //             moduleId: 123,
    //             order: 2,
    //             name: "Введение",
    //             lessons:[
    //                 {
    //                     lessonId: 123,
    //                     order: 1,
    //                     name: "Оператор Print"
    //                 },
    //                 {
    //                     lessonId: 124,
    //                     order: 2,
    //                     name: "Оператор Input"
    //                 }
    //             ]
    //         },
    //     ]
    // };

    const renderItems = (data) => {
        return data.modules.map(module => {
            return (
                <Fragment key={module.moduleId}>
                    <ListItemButton>
                        <span className='moduleButton'>{module.order}. {module.name}</span>
                    </ListItemButton>
                    <List component="div">
                        <div className="lessons">
                            {
                                module.lessons.map(lesson => {
                                    return (
                                        <Fragment key={lesson.lessonId}>
                                            <ListItemButton sx={{ pl: 5 }}>
                                                <span onClick={() => setLessonId(lesson.lessonId)} className='lessonButton'>{lesson.order}. {lesson.name}</span>
                                            </ListItemButton>
                                        </Fragment>
                                    )
                                })
                            }
                        </div>
                    </List>
                </Fragment>
            )
        });
    };

    let items;
    if (data != null){
        items = renderItems(data);
    }

    return (
        <div className="structue_course_sidebar">
            {
                data != null ?
                <>
                    <h3>{data.name}</h3>
                    <List
                        sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper' }}
                        component="nav"
                        aria-labelledby="nested-list-subheader">       
                        {items}
                    </List>
                </>
                :
                <>
                    <Spinner />
                </>
            }
        </div>
    )
}

export default StructureCourse;