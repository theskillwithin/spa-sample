import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from '../../components/Home';
import About from '../../components/About';
import Counter from '../../components/Counter';

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/counter">Counter from 0</Link></li>
                        <li><Link to="/counter/100">Counter from 100</Link></li>
                    </ul>

                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route exact path="/counter" component={Counter} />
                    <Route path="/counter/:count" component={Counter} />
                </nav>
            </BrowserRouter>
        );
    }
}
