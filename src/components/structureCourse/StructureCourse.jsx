import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Button from '@mui/material/Button';
import { Fragment } from "react";
import { Link } from 'react-router-dom';

import './structureCourse.scss';

const StructureCourse = ({setCourseId}) => {

    const data = {
        courseId: 123,
        name_course: "Python-Start",
        modules:[
            {
                moduleId: 123,
                order: 1,
                name: "Введение",
                lessons:[
                    {
                        lessonId: 123,
                        order: 1,
                        name: "Оператор Print"
                    },
                    {
                        lessonId: 124,
                        order: 2,
                        name: "Оператор Input"
                    }
                ]
            },
            {
                moduleId: 123,
                order: 2,
                name: "Введение",
                lessons:[
                    {
                        lessonId: 123,
                        order: 1,
                        name: "Оператор Print"
                    },
                    {
                        lessonId: 124,
                        order: 2,
                        name: "Оператор Input"
                    }
                ]
            },
        ]
    };

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
                                                <span onClick={() => setCourseId(lesson.lessonId)} className='lessonButton'>{lesson.order}. {lesson.name}</span>
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
    }

    const items = renderItems(data)

    return (
        <div className="structue_course_sidebar">
            <h3>{data.name_course}</h3>
            <List
                sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader">       
                    {items}
            </List>
        </div>
    )
}

export default StructureCourse;