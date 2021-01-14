import React, {useState} from 'react';
import Input from "../../utils/input/Input";
import "./reg.sass"
import {registration} from "../../actions/registration";

const Reg = (props) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className="reg">
            <div className="top-text">
                {props.isReg && <h1>Регистрация</h1>}
                {!props.isReg && <h1>Войти</h1>}
            </div>
            <div className="inputs">
                <Input type="text" inputValue={email} setValue={setEmail}/>
                <Input type="password" inputValue={password} setValue={setPassword}/>
            </div>
            {props.isReg && <div className="btn" onClick={()=>{registration(email, password)}}>Отправить</div>}
            {!props.isReg && <div className="btn" onClick={()=>{registration(email, password)}}>Отправить</div>}
        </div>
    );
};

export default Reg;