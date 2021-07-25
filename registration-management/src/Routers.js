import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';


export default function Routers(){

    return(
        <BrowserRouter>
            <Switch>
                <Route path= {[ '/home', '/' ]} exact component={Home}/>
                {/* <Route path='/about' exact component={}/>
                <Route path='/contact' exact component={}/> */}
            </Switch>
        </BrowserRouter>
        
    )
}