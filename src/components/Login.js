import React from 'react';
import { Redirect } from 'react-router-dom'
class Login extends React.Component {
    state = {
        txtUsername: '',
        txtPassword: '',
    }
    onChange = e => {
        let target = e.target;
        let name =  target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name] : value
        })
    }
    onLogin = (e) => {
        e.preventDefault()
        const { txtPassword, txtUsername} = this.state
        if(txtUsername === 'admin' && txtPassword === 'admin'){
            localStorage.setItem('user', JSON.stringify({
                username: txtUsername,
                password: txtPassword
            }))
        }
    }
    render(){
        const { txtPassword, txtUsername} = this.state
        let loggedInUser = localStorage.getItem('user')
        if(loggedInUser !== null){
            var { location } = this.props
            return <Redirect to={{
                pathname: "/products",
                state: {
                    from: location
                }
            }} />
        }
        return (
            <div className="container">
            <div className="row">
                <form onSubmit={this.onLogin}>
                    <legend>Đăng nhập</legend>
                
                    <div className="form-group">
                        <label >Username :</label>
                        <input type="text" className="form-control"
                        value={txtUsername}
                        onChange={this.onChange}
                        name="txtUsername" />
                    </div>
                    <div className="form-group">
                        <label >Password :</label>
                        <input type="password" className="form-control"
                        value={txtPassword}
                        onChange={this.onChange}
                        name="txtPassword" />
                    </div>
                    <button type="submit" className="btn btn-primary">Đăng nhập</button>
                </form>
                
            </div>
            </div>
            
        )
    }
}

export default Login;
