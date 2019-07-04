import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from './components/Menu'
import routes from './routes'

class App extends React.Component {
    render(){
        return (
            <Router>
                <div className="App">
                    {/* Menu */}
                    <Menu />
                    {/* Nội dung */}
                    <Switch>
                        {this.showContentMenus(routes)}
                    </Switch>
                </div>
            </Router>
        )
    }
    showContentMenus = routes => {
        let result = null
        result = routes.map(route => {
            return (
                <Route key={route} path={route.path} exact={route.exact} component={route.main} />
            )
        })
        return result
    }
}

export default App;
