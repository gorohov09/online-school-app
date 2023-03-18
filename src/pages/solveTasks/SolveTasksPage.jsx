import Game from '../../components/game/Game';
import TasksList from '../../components/tasksList/TasksList';
import { useParams} from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import CourseService from '../../services/CourseService';
import Spinner from '../../components/spinner/Spinner';

import './solveTaskPage.scss';

const SolveTasksPage = () => {

    const {lessonId} = useParams();

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [taskId, setTaskId] = useState(null);
    const [render, setRender] = useState(false);
    const isFirstRun = useRef(true);

    const courseService = new CourseService();

    useEffect(() => {
        courseService.getFirstTaskByLesson(lessonId)
            .then(data => {
                setData(data);
                setTaskId(data.taskId)
            })
            .then(setLoading(false));
    }, []);

    useEffect(() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;
            return;
        }

        courseService.getTaskById(taskId)
            .then(data => setData(data))
            .then(setLoading(false));
    }, [taskId, render]);

    return (
        <div className="solveTasks_wrapper">
            <TasksList lessonId={lessonId} setTaskId={setTaskId} render={render} taskId={taskId}/>
            {
                data != null ?
                <>
                    <Game taskInform={data} render={render} setRender={setRender}/>
                </>
                :
                <>
                    <Spinner />
                </>
            }
        </div>
    )
}

export default SolveTasksPage;