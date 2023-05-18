import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import * as React from 'react';

import Button from '@mui/material/Button';


import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";

import { ThemeProvider  } from '@mui/material/styles';
import theme from '../../../components/muiTheme.jsx';

import useCourseService from "../../../services/CourseService";
import OneAnswer from "./oneAnswer/OneAnswer";
import {Spinner} from "react-bootstrap";
import './addTaskPage.scss';

const AddTaskPage = ({setIsAuth}) => {

    const navigate = useNavigate();
    const {lessonId} = useParams();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState();
    const [type, setType] = useState('freeResponse');
    const [description, setDescription] = useState('');
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [answers, setAnswers] = useState(null);
    const [wrongAnswers, setWrongAnswers] = useState('');

    const {saveTask} = useCourseService();

    const onHandleSubmit = (e) => {
        // let data = {};
        // if (typeTask == "freeResponse") {
        //     data = {
        //         name: name.value,
        //         type: typeTask,
        //         description: description.value,
        //         question: question.value,
        //         answer: answerType1.value,
        //         answers: null,
        //         wrongAnswers: typeTask === "oneAnswer" ? wrongAnswers?.value : null
        //     }
    }

    return(
        <>
        <Navbar setIsAuth={setIsAuth}/>
        <div className="task">
            <div className="left_side"><Sidebar/></div>
            <div className="right_side">
                <div className="task__container">
                    <div className="addTask">
                        <div className="addTask__form">
                            <form onSubmit={onHandleSubmit} className="task__form"> 
                                <h2>Добавление задания</h2>
                                <div className="task_name input">
                                    <label>
                                        <p>Название задания</p>
                                        <input type="text" onChange={e => setName(e.target.value)}/>
                                    </label>
                                </div>
                                <div className="lesson_description input">
                                    <label>
                                        <p>Описание задания</p>
                                        <input type="text" onChange={e => setDescription(e.target.value)}/>
                                    </label>
                                </div>
                                <div className="lesson_question input">
                                    <label>
                                        <p>Вопрос задания</p>
                                        <input type="text" onChange={e => setQuestion(e.target.value)}/>
                                    </label>
                                </div>

                                <OneAnswer setAnswer={setAnswer} setWrongAnswers={setWrongAnswers}/>
 
                                <div className="button input">
                                    <ThemeProvider theme={theme}>
                                        <Button variant="contained" size="medium" type="submit">Добавить</Button>
                                    </ThemeProvider>
                                </div>     
                            </form>
                    </div>
                        </div>
                    
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default AddTaskPage;