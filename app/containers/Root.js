/**
 * Created by Ilia on 03.03.2017.
 */
import React, { Component } from 'react'

import HomePage from './HomePage'
//
// import { Router, Route, browserHistory } from 'react-router';


export default class Root extends Component {
    render() {
        return(

//                     <Router history={browserHistory}>
//                         <Route path="/" component = {HomePage} />
//                     </Router>
            <HomePage />
        )

    }
}

