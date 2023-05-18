import { useState, useEffect, useRef } from 'react';
import useCourseService from '../../services/CourseService';
import { TextField, Button } from '@mui/material';
import {Spinner} from 'react-bootstrap';

import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


import './game.scss';

const Game = ({taskInform, answers, render, setRender}) => {
    const [answer, setAnswer] = useState(taskInform?.lastAnswerAttempt);
    const [attempt, setAttempt] = useState(null);
    // const [shuffledAnswers, setShuffledAnswers] = useState([]);
    const isFirstRun = useRef(true);
    
    useEffect(() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;
            return;
        }
        setAttempt(null);
        setAnswer(taskInform?.lastAnswerAttempt == null ? '' : taskInform?.lastAnswerAttempt);
        
    }, [taskInform])

    // useEffect(()=>{
    //     if(taskInform.type === 'Один ответ'){
    //         setShuffledAnswers(shuffleAnswers(taskInform.answer, taskInform.wrongAnswers));
    //     }
    //     console.log(shuffledAnswers);
    // }, [taskInform.type]);
    const {makeAttempt} = useCourseService();

    const onMakeAttempt = async () => {
        const data = {
            answer: answer,
        }
        const res = await makeAttempt(data, taskInform.taskId)
        
        if (res.isRight)
            setAttempt(true)
        else
            setAttempt(false);

        setRender(!render);
    }

    

    let task;
    if (taskInform.type === 'Свободный ответ'){
        task = (
            <>
                <div className="inform">
                    {
                        taskInform.lastAttempt != null ?
                        <>
                            <p className='attempt'>Последняя попытка: {taskInform.lastAttempt.substring(0, taskInform.lastAttempt.indexOf('T')) + ' ' + taskInform.lastAttempt.substring(taskInform.lastAttempt.indexOf('T') + 1, taskInform.lastAttempt.length - 8)}</p>
                            <p className='isSolveAttempt'>В последний раз задача решена <span className={taskInform.lastResultAttempt ? 'correct' : 'error'}>{taskInform.lastResultAttempt ? 'правильно' : 'неправильно'}</span></p>
                        </>
                        :
                        <>
                            <p className='noattempt'>Данную задачу вы не решали</p>
                        </>
                    }
                    
                </div>
                <h1>{taskInform.name}</h1>
                <h2>{taskInform.question}</h2>
                <div className="text_field_block">
                    <TextField
                        id="outlined-controlled"
                        label="Введи ответ"
                        value={answer}
                        onChange={(event) => {
                            setAnswer(event.target.value);
                        }}
                    />
                </div>
                <div className="button_block">
                    <Button onClick={onMakeAttempt} className="toAnswer">
                        <span className="toAnswer_student">Ответить</span>
                    </Button>
                </div>
            </>
        )
    }
    else if (taskInform.type === 'Один ответ') {
        // console.log(shuffledAnswers);
        task = (
            <>
                <div className="inform">
                    {
                        taskInform.lastAttempt != null ?
                        <>
                            <p className='attempt'>Последняя попытка: {taskInform.lastAttempt.substring(0, taskInform.lastAttempt.indexOf('T')) + ' ' + taskInform.lastAttempt.substring(taskInform.lastAttempt.indexOf('T') + 1, taskInform.lastAttempt.length - 8)}</p>
                            <p className='isSolveAttempt'>В последний раз задача решена <span className={taskInform.lastResultAttempt ? 'correct' : 'error'}>{taskInform.lastResultAttempt ? 'правильно' : 'неправильно'}</span></p>
                        </>
                        :
                        <>
                            <p className='noattempt'>Данную задачу вы не решали</p>
                        </>
                    }
                    
                </div>
                <h1>{taskInform.name}</h1>
                <h2>{taskInform.question}</h2>
                <div className="text_field_block">
                    <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">Выберите ответ:</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group">
                        <FormControlLabel value={answers[0].value} onClick={(event) => {setAnswer(event.target.value);}} control={<Radio />} label={answers[0].value} />
                        <FormControlLabel value={answers[1].value} onClick={(event) => {setAnswer(event.target.value);}} control={<Radio />} label={answers[1].value}/>
                        <FormControlLabel value={answers[2].value} onClick={(event) => {setAnswer(event.target.value);}} control={<Radio />} label={answers[2].value} />
                        <FormControlLabel value={answers[3].value} onClick={(event) => {setAnswer(event.target.value);}} control={<Radio />} label={answers[3].value} />
                    </RadioGroup>
                    </FormControl>
                </div>
                <div className="button_block">
                    <Button onClick={onMakeAttempt} className="toAnswer">
                        <span className="toAnswer_student">Ответить</span>
                    </Button>
                </div>
            </>
        )
    }

    return (
        <div className='game'>
            {task}
        </div>
    );
}

export default Game;