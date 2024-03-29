import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Button from '@mui/material/Button';
import {useParams, Link} from 'react-router-dom';
import { useState, useEffect } from "react";
import useCourseService from "../../../services/CourseService";
import {Spinner} from "react-bootstrap";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

import { ThemeProvider  } from '@mui/material/styles';
import theme from '../../../components/muiTheme.jsx';

import './courseSinglePage.scss';

const CourseSinglePage = ({setIsAuth}) => {

    const {courseId} = useParams();
    const navigate = useNavigate();

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const {getCourseById} = useCourseService();

    useEffect(() => {
        getCourseById(courseId)
            .then(data => setData(data))
            .then(setLoading(false));
    }, []);

    const RenderItems = (data) => {
        return data.modules.map(module => {
            return (
                <Fragment key={module.moduleId}>
                    <ListItemButton>
                        {/* <Link to={`/module/${module.moduleId}`}><span style={{color:'#6439ff'}}>{module.order}. {module.name}</span></Link> */}
                        <span style={{color:'#6439ff'}}>{module.order}. {module.name}</span>
                    </ListItemButton>
                    <List component="div">
                        <div className="lessons">
                            {
                                module.lessons.map(lesson => {
                                    return (
                                        <Fragment key={lesson.lessonId}>
                                            <ListItemButton sx={{ pl: 10}}>
                                                <Link to={`/lessons/${lesson.lessonId}`}><span style={{color:'#6439ff'}}>{lesson.order}. {lesson.name}</span></Link>
                                            </ListItemButton>
                                        </Fragment>
                                    )
                                })
                            }
                            <Button>
                                <Link to={`/addLesson/${module.moduleId}`}><span className="addLesson">Добавить урок</span></Link>
                            </Button>
                        </div>
                    </List>
                </Fragment>
            )
        });
    }

    let name, description, create, update;
    let items;
    if (data != null){
        name = data.name;
        description = data.description;
        create = data.create.substring(0, data.create.indexOf('T')) + ' ' + data.create.substring(data.create.indexOf('T') + 1, data.create.length - 8);
        update = data.update.substring(0, data.update.indexOf('T')) + ' ' + data.update.substring(data.update.indexOf('T') + 1, data.update.length - 8);
        items = RenderItems(data);
    }
        

    return (
        <>
        <Navbar setIsAuth={setIsAuth}/>
        <div className="course">
            <div className="left_side">
                <Sidebar />
            </div>
            <div className="right_side">
            <div className="courseContainer">
                <div className="singleCourse">
                    {
                        !loading ?
                        <>
                            <h2>{name}</h2>
                            <h3>Описание:</h3>
                            <span>{description}</span>
                            <div className="dateCourse">
                                <div className="createDate">
                                    <h3>Дата создания:</h3>
                                    <span>{create}</span>
                                </div>
                                <div className="updateDate">
                                    <h3>Дата обновления:</h3>
                                    <span>{update}</span>
                                </div>
                            </div>
                            <h3>Структура курса:</h3>
                            <div className="structureCourse">
                                
                                
                                <div className="addModule__button">
                                        <ThemeProvider theme={theme}>
                                            <Button variant="contained" size="medium" onClick={() => navigate(`/addModule/${courseId}`)}>
                                               Добавить модуль
                                            </Button>
                                        </ThemeProvider>
                                        {/* <<Link to={`/addModule/${courseId}`/>}>Добавить модуль</Link> */}
                                </div> 
                                <List
                                    sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper' }}
                                    component="nav"
                                    aria-labelledby="nested-list-subheader">       
                                    {items}
                                </List>
                            </div>
                        </>
                        :
                        <>
                            <Spinner style={{'color':'#6439ff'}}/>
                        </>
                    }
                </div>
            </div>
            </div>
            
        </div>
        </>
    )
}

export default CourseSinglePage;