import Navbar from "./components/navbar/Navbar";
import Reg from "./components/reg/Reg";
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Switch>
              <Route path="/reg" render={()=>(<Reg isReg={true}/>)}/>
              <Route path="/login" render={()=>(<Reg isReg={false}/>)}/>
            </Switch>
        </BrowserRouter>
    )}

export default App;

