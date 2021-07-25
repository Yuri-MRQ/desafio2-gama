import { BrowseRouter, Switch, Route } from 'react-router-dom';
import React from 'react';

export default function Routers(){

    return(
        <Switch>
            <Route path= {[ '/home', '/' ]} exact component={}/>
            <Route path='/about' exact component={}/>
            <Route path='/contact' exact component={}/>
        </Switch>
    )
}