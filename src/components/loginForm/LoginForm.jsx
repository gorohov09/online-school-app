import Button from '@mui/material/Button';

import {useState} from "react";
import { useNavigate } from "react-router-dom";

import { ThemeProvider  } from '@mui/material/styles';
import theme from '../muiTheme.jsx';

import './loginForm.scss'

async function loginUser(credentials) {
	return fetch('http://localhost:5259/api/auth/login', {
	  method: 'POST',
	  headers: {
		'Content-Type': 'application/json'
	  },
	  body: JSON.stringify(credentials)
	}).then(data => data.json())
}

const LoginForm = ({setToken, setIsAuth}) => {

    const navigate = useNavigate();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
		e.preventDefault();
		const data = await loginUser({
			email: email,
		  	password: password
		});

		if (data?.status === 500){
			console.log('Очистка формы')
			e.target.reset(); 
		}
		else{
			setToken(data.token);
			setIsAuth(true);
			if (data.typeUser === 'teacher')
				navigate("/");
			else
				navigate("/student")
		}
		
	}

    return(
        <div className="form login_form">
            <form onSubmit={handleSubmit}> 
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
                <div className="button input">
                    <ThemeProvider theme={theme}>
                        <Button variant="contained" size="medium" type="submit">Авторизация</Button>
                    </ThemeProvider>
                </div>
                
                
            </form>
        </div>
    )
}

export default LoginForm;