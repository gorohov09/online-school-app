import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import LoginForm from '../loginForm/LoginForm';
import SigninForm from '../signinForm/SigninForm';

import './authForm.scss';

import { createTheme, ThemeProvider  } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#ffffff',
        contrastText: "#6439ff",
        darker: '#053e85',
      },
    },
});

const AuthForm = () => {


    return (
        <div className="auth_form__container">
            <div className="auth_form__form">
                <div className="change_form">
                    <ThemeProvider theme={theme}>
                        <ButtonGroup variant="contained" size="large" aria-label="outlined button group">
                            <Button>Log-in</Button>
                            <Button>Sign-in</Button>
                        </ButtonGroup>
                    </ThemeProvider>
                </div>
                
                {/* <LoginForm/> */}
                <SigninForm/>
                
            </div>
        </div>
    )
} 

export default AuthForm;