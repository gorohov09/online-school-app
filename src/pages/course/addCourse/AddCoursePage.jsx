import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './addCoursePage.scss';

const AddCoursePage = () => {
    return (
        <div className="course">
            <Sidebar />
            <div className="courseContainer">
                <Navbar />
                <div className="addCourse">
                    <h2>Добавление курса</h2>
                    <Box
                        sx={{
                        width: 500,
                        maxWidth: '100%',
                        marginBottom: 4,
                        marginTop: 2
                    }}>
                        <span>Введите название курса</span>
                        <TextField fullWidth label="Название курса" id="fullWidth" />
                    </Box>
                    
                    <Box
                        sx={{
                        width: 500,
                        maxWidth: '100%',
                        marginBottom: 4,
                        marginTop: 2
                    }}>
                        <span>Введите описание курса</span>
                        <TextField fullWidth label="Описание курса" id="fullWidth" />
                    </Box>

                    <Button className="save">
                        <span >Сохранить курс</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default AddCoursePage;