import {useState, useEffect} from 'react';

import './oneAnswer.scss';


const OneAnswer = ({setAnswer, setWrongAnswers}) => {

    const [wa, setWA] = useState('');
    const [waBefore, setWABefore] = useState('');

    const onChangeWA = (e) => {
        setWA(e.target.value);
        if(wa.indexOf(',,')!== -1 || wa.match(/,/g).length > 2) {
            setWA(wa.slice(0, wa.length -1));
            
        }
    }

    useEffect(()=>{
        setWABefore(wa);
    }, [wa])

    return(
        <div className="form login_form">
            <form> 
                <div className="answer input">
                    <label>
                        <p>Ответ на вопрос</p>
                        <input type="text" onChange={e => setAnswer(e.target.value)}/>
                    </label>
                </div>
                <div className="wrongAnswers input">
                    <label>
                        <p>Введите 3 неправильных ответа через запятую ","</p>
                        <input type="text" value={wa} onChange={onChangeWA}/>
                    </label>
                </div>
            </form>
        </div>
    )
}

export default OneAnswer;