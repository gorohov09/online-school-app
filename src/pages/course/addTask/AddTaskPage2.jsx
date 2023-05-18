import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";

import useCourseService from "../../../services/CourseService";
import {Spinner} from "react-bootstrap";

const AddTaskPage = ({setIsAuth}) => {

    const navigate = useNavigate();
    const {lessonId} = useParams();
    const [loading, setLoading] = useState(false);

    const {saveTask} = useCourseService();

    return(
        <>
        <Navbar setIsAuth={setIsAuth}/>
        <div className="Task">

        </div>
        </>
    )
}