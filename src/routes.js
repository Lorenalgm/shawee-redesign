import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Hackathon from './pages/Hackathon';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/home" component={Home} />
                <Route path="/detail" component={Detail} />
                <Route path="/hackathon" component={Hackathon} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;