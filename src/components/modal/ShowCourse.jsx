import React, {useState, useEffect} from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import useCourseService from '../../services/CourseService';

const ShowCourse = ({show, onHide, courseId}) => {
    const {getCourseById} = useCourseService();
    const [data, setData] = useState(null);

    useEffect(()=>{
        getCourseById(courseId)
            .then(data => setData(data));
    },[]);

    const renderCourseInfo = () => {
        return(
            <Container className='d-flex flex-column align-items-center'>
                <h3>{data.name}</h3>
                <h4>Дата создания: {data.create}</h4>
                <h4>Дата обновления: {data.update}</h4>
                <p>Описание: {data.description}</p>
                {data.modules.map((module, index) => {
                    return(
                        <Container key={index} className='d-flex flex-column align-items-center'>
                            <h4>{module.name}</h4>
                            {module.lessons.map((lesson, index) => {
                                <Container key={index} className='d-flex flex-column align-items-center'>
                                    <h4>{lesson.name}</h4>
                                </Container>
                            })}
                        </Container>
                    )
                })}
            </Container>
        )
    }

    if(data !== null){

    }

    return (
        <Container>
            <Modal
                show={show}
                onHide={onHide}
                size="lg"
                centered
            >
                <Modal.Header closeButton
                    style={{background: '#ccc2f8' }}>
                    <Modal.Title id="contained-modal-title-vcenter" style={{color: '#6439ff'}}>
                    Добавить преподавателя
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body 
                    className='d-flex flex-column align-items-center'
                    style={{background: '#ccc2f8' }}>
                    <Form.Control
                        className='mt-3 w-75'
                        placeholder='Имя'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <Form.Control
                        className='mt-3 w-75'
                        placeholder='Фамилия'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <Form.Control
                        className='mt-3 w-75'
                        placeholder='Почта'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className='mt-3 w-75'
                        placeholder='Пароль'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errorMessage}
                    {requestOkMessage}
                </Modal.Body>
                <Modal.Footer
                    style={{background: '#ccc2f8' }}>                    
                    <Button 
                    variant={'outline-light'} 
                    onClick={(e) => handleRegister(e)}
                    disabled={isRequest}
                    style={{color:'#6439ff', borderColor:'#6439ff'}}
                    >
                        Добавить
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default ShowCourse;