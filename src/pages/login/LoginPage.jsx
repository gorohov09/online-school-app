import {useState} from "react";
import "./loginPage.scss";

async function loginUser(credentials) {
	return fetch('http://localhost:5259/api/auth/login', {
	  method: 'POST',
	  headers: {
		'Content-Type': 'application/json'
	  },
	  body: JSON.stringify(credentials)
	}).then(data => data.json())
}

const LoginPage = ({setToken, setIsAuth}) => {

	const [email, setEmail] = useState();
  	const [password, setPassword] = useState();

	const handleSubmit = async e => {
		e.preventDefault();
		const data = await loginUser({
			email: email,
		  	password: password
		});

		console.log(data);

		if (data?.status === 500){
			console.log('Очистка формы')
			e.target.reset(); 
		}
		else{
			setToken(data.token);
			setIsAuth(true);
		}
		
	}

    return (
		<div className="login-section">
			<div className="login-wrapper">
				<h1>Пожалуйста, авторизуйтесь</h1>
				<form onSubmit={handleSubmit}>
      				<div className="form">
					  	<div className="email">
					  		<label>
        						<p>Почта</p>
        						<input type="text" onChange={e => setEmail(e.target.value)}/>
      						</label>
						</div>
      					<div className="password">
							<label>
        						<p>Пароль</p>
        						<input type="password" onChange={e => setPassword(e.target.value)}/>
      						</label>
						</div>
      					<div className="button">
        					<button type="submit">Авторизоваться</button>
      					</div>
					</div>
    			</form>
			</div>
		</div>
        
    )
}

export default LoginPage;