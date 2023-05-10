import {useState} from "react";
import { useNavigate } from "react-router-dom";

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import LoginForm from '../loginForm/LoginForm';
import SigninForm from '../signinForm/SigninForm';


import { ThemeProvider  } from '@mui/material/styles';
import theme from '../muiTheme.jsx';
import './authForm.scss';



const AuthForm = ({setToken, setIsAuth}) => {

    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="auth_form__container">
            <div className="auth_form__form">
                <div className="change_form">
                    <ThemeProvider theme={theme}>
                        <ButtonGroup variant="contained" size="large" aria-label="outlined button group">
                            <Button onClick={() => setIsLogin(true)}>Log-in</Button>
                            <Button onClick={() => setIsLogin(false)}>Sign-in</Button>
                        </ButtonGroup>
                    </ThemeProvider>
                </div>
                
                {isLogin ? <LoginForm setToken={setToken} setIsAuth={setIsAuth}/> : <SigninForm setToken={setToken} setIsAuth={setIsAuth}/>}
                
            </div>
        </div>
    )
} 

export default AuthForm;