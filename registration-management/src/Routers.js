import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cleint from './pages/client/Client';
import Home from './pages/home/Home';
import Product from './pages/product/Product';


export default function Routers(){

    return(
        <BrowserRouter>
            <Switch>
                <Route path= {[ '/home', '/' ]} exact component={Home}/>
                <Route path='/produto' exact component={Product}/>
                <Route path='/client' exact component={Cleint}/>
            </Switch>
        </BrowserRouter>
        
    )
}