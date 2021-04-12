import React, { useContext } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import MyEditor from './components/pages/MyEditor';
import AuthContext from "./context/AuthContext";


function Router() {
    const { loggedIn } = useContext(AuthContext);
    return <BrowserRouter>
        <div>
            {/* <Navbar /> */}
        </div>
        <Switch>
            <Route exact path = "/">
                <div>Home</div>
            </Route>
            {loggedIn === false && (
            <>
            <Route path="/register"component = {Register}></Route>
            <Route path="/login" component = {Login}></Route>
          </>
        )}
        {loggedIn === true && (
            <>
             <Route path="/editor"component = {MyEditor}></Route>
             <Route path="/home"component = {Home}></Route>
            </>
        )}

            {/* <Route path = "/register" component = {Register}></Route>
            <Route path = "/login" component = {Login}></Route> */}
            {/* <Route path = "/customer">
                <div>Customer</div>
            </Route> */}
        </Switch>
    </BrowserRouter>
}

export default Router;
