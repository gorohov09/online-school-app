import TaskItem from '../taskItem/TaskItem';
import './tasksList.scss';

import { useState, useEffect } from 'react';
import CourseService from '../../services/CourseService';
import Spinner from '../spinner/Spinner';

const TasksList = ({lessonId, setTaskId, render, taskId}) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const courseService = new CourseService();

    useEffect(() => {
        courseService.getTasksByLesson(lessonId)
            .then(data => setData(data))
            .then(setLoading(false));
    }, []);

    useEffect(() => {
        courseService.getTasksByLesson(lessonId)
            .then(data => setData(data))
            .then(setLoading(false));
    }, [render]);

    const renderItems = () => {
        return data.tasks.map(task => {
            let isSelect = false;
            if (task.id === taskId)
                isSelect = true;

            return <TaskItem setTaskId={setTaskId} key={task.id} id={task.id} isSolve={task.isSolve} isFirstAttempt={task.isFirstAttempt} order={task.order} isSelect={isSelect}/>
        })
    }

    let items;
    if (data != null){
        items = renderItems(data);
    }

    return (
        <div className='tasks_list'>
            {
                !loading ?
                <>
                    {items}
                </>
                :
                <>
                    <Spinner />
                </>
            }
        </div>
    );
}

export default TasksList;