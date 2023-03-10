import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';

import './courseSinglePage.scss';

const CourseSinglePage = () => {

    const data = {
        title: "Python-Start 1-ый год",
        description: "Этот курс для маленьких ребят, которые хотят программировать",
        dateCreate: '12.12.2005',
        dateUpdate: '12.12.2007',
        modules:[
            {
              idModule: 123,
              titleModule: "Введение",
              order: 1,
              lessons:[
                {
                    lessonId: 123,
                    order: 1,
                    lessonTitle: "Оператор Print"
                },
                {
                    lessonId: 124,
                    order: 2,
                    lessonTitle: "Оператор Input"
                }
              ]
            },
            {
                idModule: 124,
                titleModule: "Циклы",
                order: 2,
                lessons:[
                  {
                      lessonId: 123,
                      order: 1,
                      lessonTitle: "Цикл while"
                  },
                  {
                      lessonId: 124,
                      order: 2,
                      lessonTitle: "Цикл for"
                  }
                ]
              },
          ]
    }

    const RenderItems = (data) => {
        return data.modules.map(module => {
            return (
                <>
                    <ListItemButton>
                        <Link to={`/module/${module.idModule}`}><span>{module.order}. {module.titleModule}</span></Link>
                    </ListItemButton>
                    <List component="div">
                        <div className="lessons">
                            {
                                module.lessons.map(lesson => {
                                    return (
                                        <>
                                            <ListItemButton sx={{ pl: 10 }}>
                                                <span>{lesson.order}. {lesson.lessonTitle}</span>
                                            </ListItemButton>
                                        </>
                                    )
                                })
                            }
                            <Button>
                                <Link to="/addLesson"><span className="addLesson">Добавить урок</span></Link>
                            </Button>
                        </div>
                    </List>
                </>
            )
        });
    }

    const {title, description, dateCreate, dateUpdate} = data;
    const items = RenderItems(data)

    return (
        <div className="course">
            <Sidebar />
            <div className="courseContainer">
                <Navbar />
                <div className="singleCourse">
                    <h2>{title}</h2>
                    <h3>Описание:</h3>
                    <span>{description}</span>
                    <div className="dateCourse">
                        <div className="createDate">
                            <h3>Дата создания:</h3>
                            <span>{dateCreate}</span>
                        </div>
                        <div className="updateDate">
                            <h3>Дата обновления:</h3>
                            <span>{dateUpdate}</span>
                        </div>
                    </div>

                    <div className="structureCourse">
                        <h3>Структура курса:</h3>
                        <Button>
                            <Link to="/addModule"><span className="addModule">Добавить модуль</span></Link>
                        </Button>
                        <List
                            sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper' }}
                            component="nav"
                            aria-labelledby="nested-list-subheader">       
                            {items}
                        </List>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseSinglePage