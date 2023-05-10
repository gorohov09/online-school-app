import Button from '@mui/material/Button';

import * as React from 'react';


import {useState} from "react";
import { useNavigate } from "react-router-dom";

import './signinForm.scss';

import { ThemeProvider  } from '@mui/material/styles';
import theme from '../muiTheme.jsx';

import BasicModal from '../modal/Modal';

async function registerUser(credentials) {
	return fetch('http://localhost:5259/api/auth/register', {
	  method: 'POST',
	  headers: {
		'Content-Type': 'application/json'
	  },
	  body: JSON.stringify(credentials)
	}).then(data => data.json())
}

const SigninForm = ({setToken}) => {

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [itsOk, setItsOk] = useState(false);
    const [isRequest, setIsRequest] = useState(false);

    const handleSubmit = async e => {
		e.preventDefault();
        setIsRequest(true);
		const data = await registerUser({
            firstName,
            lastName,
			email,
		  	password,
            isStudent: true
		});

		if (data?.status === 500){
			console.log('Очистка формы')
			e.target.reset(); 
		}
		else{
			setToken(data.token);
            setItsOk(true);
		}
        setIsRequest(false);
		
	}

    return(
        <div className="form signin_form">
            <form onSubmit={handleSubmit}>
                <div className="name input">
                    <label>
                        <p>Имя</p>
                        <input type="text" onChange={e => setFirstName(e.target.value)}/>
                    </label>
                </div>
                <div className="email input">
                    <label>
                        <p>Фамилия</p>
                        <input type="text" onChange={e => setLastName(e.target.value)}/>
                    </label>
                </div>
                <div className="email input">
                    <label>
                        <p>Почта</p>
                        <input type="text" onChange={e => setEmail(e.target.value)}/>
                    </label>
                </div>
                <div className="password input">
                    <label>
                        <p>Пароль</p>
                        <input type="password" onChange={e => setPassword(e.target.value)}/>
                    </label>
                </div>
                <div className="button input"
                disabled={isRequest}>
                    <ThemeProvider theme={theme}>
                        <Button variant="contained" size="medium" type="submit">Регистрация</Button>
                    </ThemeProvider>
                    
                </div>
                <BasicModal isOpen={itsOk} 
                header={'Регистрация прошла успешно.'} 
                text={'Авторизуйтесь для начала обучения, пожалуйста.'}/>
                
            </form>
        </div>
    )
}

export default SigninForm;