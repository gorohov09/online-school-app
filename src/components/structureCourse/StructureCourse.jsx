import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import { Fragment } from "react";
import { useState, useEffect } from 'react';
import CourseService from '../../services/CourseService';
import './structureCourse.scss';
import { Spinner } from 'react-bootstrap';

const StructureCourse = ({courseId, setLessonId}) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const courseService = new CourseService();

    useEffect(() => {
        courseService.getCourseById(courseId)
            .then(data => setData(data))
            .then(setLoading(false));
    }, []);

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
                    <h4>Пройден на {data.persentPassing}%</h4>
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