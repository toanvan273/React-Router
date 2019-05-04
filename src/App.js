import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

function App() {
    return (
        <Router>
        <div className="App">
            {/* Menu */}
            <nav className="navbar navbar-inverse">
                <ul className="nav navbar-nav">
                    <li >
                        <NavLink
                         activeClassName="active" exact to="/">Trang chủ</NavLink>
                    </li>
                    <li>
                        <NavLink
                         activeClassName="active" to="/about">Giới thiệu</NavLink>
                    </li>
                    <li>
                        <NavLink
                         activeClassName="active" to="/contact">Liên hệ</NavLink>
                    </li>
                </ul>
            </nav>
            {/* Nội dung */}
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
        </div>
        </Router>
    );
}

export default App;
