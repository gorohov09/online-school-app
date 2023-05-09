import './signinForm.scss';

const SigninForm = () => {
    return(
        <div className="form signin_form">
            <form>
                <div className="name input">
                    <label>
                        <p>Имя</p>
                        <input type="text"/>
                    </label>
                </div>
                <div className="email input">
                    <label>
                        <p>Фамилия</p>
                        <input type="text"/>
                    </label>
                </div>
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
                    <button type="submit">Регистрация</button>
                </div>
            </form>
        </div>
    )
}

export default SigninForm;