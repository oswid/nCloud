import Navbar from "./components/navbar/Navbar";
import Reg from "./components/reg/Reg";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {useSelector} from "react-redux";

function App() {
    const isAuth = useSelector(state=>state.user.isAuth)

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

