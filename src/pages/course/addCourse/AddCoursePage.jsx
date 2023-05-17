import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useCourseService from "../../../services/CourseService";
import {Spinner} from "react-bootstrap";

import { ThemeProvider  } from '@mui/material/styles';
import theme from '../../../components/muiTheme.jsx';

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import './addCoursePage.scss';

const AddCoursePage = ({setIsAuth}) => {

    const [loading, setLoading] = useState(false);
    const [name, setName] = useState();
    const [desc, setDesc] = useState();
    const navigate = useNavigate();

    const {saveCourse} = useCourseService();

    const saveCourseL = async () => {
        const title = name;
        const description = desc;

        if (title.value == null || title.value === '' || description.value == null || description.value === ''){
            return;
        }
        const data = {
            name: title.value,
            description: description.value
        }

        const res = await saveCourse(data)
            .then(setLoading(loading => true))
        
        if (res)
            navigate("/courses")
    }

    console.log('Рендер компонента');
    return (
        <>
       
        
        <Navbar setIsAuth={setIsAuth}/>
        <div className="course">
            <div className="left_side">
                <Sidebar />
            </div>
            <div className="right_side">
                <div className="courseContainer">
                    <div className="addCourse">
                        {
                            !loading ?
                            <div className="addCourse__form">
                                <h2>Добавление курса</h2>
                                <form onSubmit={saveCourseL}> 
                                    <div className="course_name input">
                                        <label>
                                            <p>Название</p>
                                            <input type="text" onChange={e => setName(e.target.value)}/>
                                        </label>
                                    </div>
                                    <div className="course_desc input">
                                        <label>
                                            <p>Описание</p>
                                            <input type="text" onChange={e => setDesc(e.target.value)}/>
                                        </label>
                                    </div>
                                    <div className="button input">
                                        <ThemeProvider theme={theme}>
                                            <Button variant="contained" size="medium" type="submit">Добавить</Button>
                                        </ThemeProvider>
                                    </div>     
                                </form>
                               
                            </div>
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

export default AddCoursePage;