import React, {useState} from 'react';
import Input from "../../utils/input/Input";
import "./reg.sass"

const Reg = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className="reg">
            <div className="top-text">
                <h1>Регистрация</h1>
            </div>
            <div className="inputs">
                <Input type="text" inputValue={email} setValue={setEmail}/>
                <Input type="password" inputValue={password} setValue={setPassword}/>
            </div>
            <div className="btn" onClick={null}>Отправить</div>
        </div>
    );
};

export default Reg;