import './loginForm.scss'

const LoginForm = () => {
    return(
        <div className="form login_form">
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
    )
}

export default LoginForm;