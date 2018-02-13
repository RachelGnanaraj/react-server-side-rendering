import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './Home'
import Contact from  './Contact'
import Carousel from "./ReactCarousel"

export default function App() {

    return (
        <div>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/carousel" exact component={Carousel}/>
                <Route path="/contact" exact component={Contact}/>
            </Switch>
        </div>
    )
};
