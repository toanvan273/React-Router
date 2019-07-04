import React from 'react';
import { Prompt } from 'react-router-dom'
class Contact extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isChecked: false
        }
    }
    onClick = isChecked => {
        this.setState({
            isChecked: isChecked
        })
    }
    render(){
        const { isChecked } = this.state
        return (
            <div>
                <h4>LIÊN HỆ</h4>
                <button type="button" className="btn btn-info" onClick={ () => this.onClick(false) }>Cho phép</button> <br/>
                <button type="button" className="btn btn-danger" onClick={ () => this.onClick(true) }>Không</button>
                <Prompt 
                when={isChecked}
                message={ location => (` Bạn chắc chắn đến ${location.pathname} `) }
                />
            </div>
        )
    }
}

export default Contact;
