import Button from '@mui/material/Button';

import { ThemeProvider  } from '@mui/material/styles';
import theme from '../muiTheme.jsx';

import './loginForm.scss'

const LoginForm = () => {
    return(
        <div className="form login_form">
            <form>
            <div className="email input">
                    <label>
                        <p>Почта</p>
                        <input type="text"/>
                    </label>
                </div>
                <div className="password input">
                    <label>
                        <p>Пароль</p>
                        <input type="password"/>
                    </label>
                </div>
                <div className="button input">
                    <ThemeProvider theme={theme}>
                        <Button variant="contained" size="medium">Авторизация</Button>
                    </ThemeProvider>
                </div>
                
                
            </form>
        </div>
    )
}

export default LoginForm;