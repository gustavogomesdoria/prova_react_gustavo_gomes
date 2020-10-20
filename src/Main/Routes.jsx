import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';
import Blocks from '../Pages/Blocks/index';
import Home from '../Pages/Home/index';
import Cards from '../Pages/Cards/index';
import Forms from '../Pages/Forms/index';
import Princing from '../Pages/Pricing/index';



export default props => (
    <Router history={hashHistory}>
        <Route path='/blocks' component={Blocks} />
        <Route path='/home' component={Home} />
        <Route path='/cards' component={Cards} />
        <Route path='/forms' component={Forms} />
        <Route path='/pricing' component={Princing} />
    </Router>
)

