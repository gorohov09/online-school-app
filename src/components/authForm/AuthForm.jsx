import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import './authForm.scss';

import { createTheme, ThemeProvider  } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
      darker: '#502dcd',
    },
  },
});

const AuthForm = () => {


    return (
        <div className="auth_form__container">
            <div className="auth_form__form">
                <ThemeProvider theme={theme}>
                    <ButtonGroup variant="outlined" size="large" aria-label="outlined button group">
                        <Button>Log-in</Button>
                        <Button>Sign-n</Button>
                    </ButtonGroup>
                </ThemeProvider>
                
                <div class="form login_form">
                    <form>
                    <div className="email">
					  		<label>
        						<p>Почта</p>
        						<input type="text"/>
      						</label>
						</div>
      					<div className="password">
							<label>
        						<p>Пароль</p>
        						<input type="password"/>
      						</label>
						</div>
      					<div className="button">
        					<button type="submit">Авторизоваться</button>
      					</div>
                    </form>
                </div>
                
            </div>
        </div>
    )
} 

export default AuthForm;