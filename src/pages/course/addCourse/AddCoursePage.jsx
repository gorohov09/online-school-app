import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CourseService from "../../../services/CourseService";
import Spinner from "../../../components/spinner/Spinner";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import './addCoursePage.scss';

const AddCoursePage = () => {

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const courseService = new CourseService();

    const saveCourse = async () => {
        const title = document.querySelector('#title');
        const description = document.querySelector('#description')

        if (title.value == null || title.value === '' || description.value == null || description.value === ''){
            return;
        }
        const data = {
            name: title.value,
            description: description.value
        }

        const res = await courseService.saveCourse(data)
            .then(setLoading(loading => true))
        
        if (res)
            navigate("/courses")
    }

    console.log('Рендер компонента');
    return (
        <div className="course">
            <Sidebar />
            <div className="courseContainer">
                <Navbar />
                <div className="addCourse">
                    {
                        !loading ?
                        <>
                            <h2>Добавление курса</h2>
                            <Box
                                sx={{
                                width: 500,
                                maxWidth: '100%',
                                marginBottom: 4,
                                marginTop: 2
                            }}>
                                <span>Введите название курса</span>
                                <TextField fullWidth label="Название курса" id="title" />
                            </Box>
                    
                            <Box
                                sx={{
                                width: 500,
                                maxWidth: '100%',
                                marginBottom: 4,
                                marginTop: 2
                            }}>
                                <span>Введите описание курса</span>
                                <TextField fullWidth label="Описание курса" id="description" />
                            </Box>

                            <Button onClick={saveCourse} className="save">
                                <span>Сохранить курс</span>
                            </Button>
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

export default AddCoursePage;