import Navbar from "./components/navbar/Navbar";
import Reg from "./components/reg/Reg";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "./actions/user";
import React, {useEffect} from 'react';
function App() {
    const isAuth = useSelector(state=>state.user.isAuth)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(auth(),
            [dispatch])
    })

    return (
        <BrowserRouter>
            <Navbar/>
            {!isAuth &&
            <Switch>
              <Route path="/reg" render={()=>(<Reg isReg={true}/>)}/>
              <Route path="/login" render={()=>(<Reg isReg={false}/>)}/>
            </Switch>}
        </BrowserRouter>
    )}

export default App;

