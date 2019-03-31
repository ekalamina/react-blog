import React from 'react';
import ReactDOM from 'react-dom';

const element = <h1> Hello World! </h1>

class Index extends React.Component{
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h1 id="title">Sign In</h1>
                <div className="block"><label className="field">
                    Login<input type="text" className="input-field" name="login" value={this.state.login}
                                onChange={this.onLoginChange} required/>
                </label></div>
                <div className="block"><label className="field">
                    Password<input type="password" className="input-field" name="pass" value={this.state.password}
                                   onChange={this.onPasswordChange} required/>
                </label></div>
                <div id="enter">
                    <button type="submit">Sign In
                    </button>
                </div>
            </form>
        )
    }
    constructor(props) {
        super(props);
        this.state = {login: '', password: ''};

        this.onLoginChange = this.onLoginChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event){
        alert(`${this.state.login}, добро пожаловать!`);
        event.preventDefault();
    }

    onPasswordChange(event){
        this.setState({password: event.target.value});
    }

    onLoginChange(event) {
        this.setState({login: event.target.value});
    }
}



    ReactDOM.render(
        <Index/>
    , document.getElementById('root'));
